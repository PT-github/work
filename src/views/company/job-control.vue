<template>
    <div class="s-myjob">
        <div class="title">职位管理<span class="right-btn" @click="showPubJobDialog">新增职位+</span></div>
        <div class="table">
            <div class="theader">
                <div class="tr">
                    <div class="th">职位名称</div>
                    <div class="th">浏览</div>
                    <div class="th">应聘</div>
                    <div class="th">状态</div>
                    <div class="th">发布日期</div>
                    <div class="th">操作</div>
                </div>
            </div>
            <div class="tbody">
                <div class="tr" v-for="(item, index) in jobList" :key="'jobList-' + index">
                    <div class="td"><a :href="'/#/job-detail?id=' + item.id" target="_blank">{{ item.job }}</a></div>
                    <div class="td">{{ item.lookNums }}</div>
                    <div class="td">{{ item.applyNums }}</div>
                    <div class="td">{{ item.status }}</div>
                    <div class="td">{{ item.pubTime }}</div>
                    <div class="td">
                        <template v-if="item.statusCode === 1">
                            <span @click="refreshJob(item.id)">刷新</span>
                        </template>
                        <template v-if="item.statusCode === 0 || item.statusCode === 2">
                            <span @click="publishJob(item.id)">发布</span>
                        </template>
                        <template v-if="item.statusCode === 1">
                            <span @click="revokeJob(item.id)">撤回</span>
                        </template>
                        <span @click="deleteJob(item.id)">删除</span>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog title="职位新增" :visible.sync="dialogVisible" width="1000px">
            <el-form ref="form" size="small" :model="form" label-width="80px">
                <el-form-item label="职位名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="招聘人数">
                    <el-input v-model="form.num"></el-input>
                </el-form-item>
                <el-form-item label="工作地点">

                </el-form-item>
                <el-form-item label="月薪范围">
                    <el-radio-group v-model="form.resource">
                        <el-radio :label="item.id" v-for="(item, index) in filterOptions.expectedSalary" :key="'expectedSalary' + index">{{ item.name }}</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="学历要求">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="线上品牌商赞助"></el-radio>
                        <el-radio label="线下场地免费"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="工作年限">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="线上品牌商赞助"></el-radio>
                        <el-radio label="线下场地免费"></el-radio>
                    </el-radio-group>
                </el-form-item>


                <el-form-item label="职位描述">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item label="公司信息">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>

        <!--<el-dialog :before-close="queryByCity" class="areaDialog" :visible.sync="cityDialogVisible" width="960px" :close-on-click-modal="false"
                   :close-on-press-escape="false">
            <div slot="title" class="areaTitle">选择地区 <span>（最多只能选择5项）</span></div>
            <div class="selectedArea clearfix" v-if="addJob.cities.length > 0">
                <div class="areaBtn" v-for="(item, index) in addJob.cities" :key="'selCity-' + index">{{ cities[item] }}<i @click="deleteCity(item)"></i></div>
            </div>
            <areaComp :list="filterOptions.placeBelong" :cities="cities" :choosed="queryOptions.cities"></areaComp>
            <div slot="footer" class="dialog-footer">
                <div class="button" @click="queryByCity">确 定</div>
            </div>
        </el-dialog>-->
    </div>
</template>
<script>
    import { queryPubJobs, refreshCompanyJob, publishCompanyJob, revokeCompanyJob, deleteCompanyJob, queryFilterOptions } from '@/api/service'
    import { Form, FormItem, Button, Input, RadioGroup, Radio  } from 'element-ui'
    export default {
        name: 'sMyjob',
        data() {
            return {
                active: 0,
                jobList: [],
                dialogVisible: false,
                cityDialogVisible: false,
                loadFilterOptins: false,
                form: {

                },
                filterOptions: {
                    expectedSalary: [],
                    wrokLife: [],
                    education: [],

                },
                addJob: {
                    name: '',
                    cities: [],
                    expectedSalary: '',
                    wrokLife: '',
                    education: '',
                    jobDesc: '',
                    companyInfo: ''
                }
            }
        },
        mounted() {
            this.getData()
        },
        methods: {
            companySize(id) {
                this.addJob.companySize = id || ''
            },
            natureOfCompany(id) {
                this.addJob.natureOfCompany = id || ''
            },
            education(id) {
                this.addJob.education = id || ''
            },
            wrokLife(id) {
                this.addJob.wrokLife = id || ''
            },
            expectedSalary(id) {
                this.addJob.expectedSalary = id || ''
            },
            getFilterOptions() {
                if (this.loadFilterOptins) {
                    this.dialogVisible = true
                    return
                }
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                queryFilterOptions().then((res) => {
                    this.dialogVisible = true
                    loading.close()
                    this.filterOptions = res.data
                }).catch(() => {
                    loading.close()
                })
            },
            showPubJobDialog() {
                this.getFilterOptions()
            },
            publishJob(id) {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                publishCompanyJob({id}).then(res => {
                    loading.close()
                    if (res.success) {
                        this.$message({
                            message: '职位发布成功',
                            type: 'success'
                        })
                        this.getData()
                    } else {
                        this.$message({
                            message: '职位发布失败',
                            type: 'warning'
                        })
                    }
                })
            },
            revokeJob(id) {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                revokeCompanyJob({id}).then(res => {
                    loading.close()
                    if (res.success) {
                        this.$message({
                            message: '职位撤回成功',
                            type: 'success'
                        })
                        this.getData()
                    } else {
                        this.$message({
                            message: '职位撤回失败',
                            type: 'warning'
                        })
                    }
                })
            },
            deleteJob(id) {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                deleteCompanyJob({id}).then(res => {
                    loading.close()
                    if (res.success) {
                        this.$message({
                            message: '职位删除成功',
                            type: 'success'
                        })
                        this.getData()
                    } else {
                        this.$message({
                            message: '职位删除失败',
                            type: 'warning'
                        })
                    }
                })
            },
            refreshJob(id) {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                refreshCompanyJob({id}).then(res => {
                    loading.close()
                    if (res.success) {
                        this.$message({
                            message: '职位刷新成功',
                            type: 'success'
                        })
                        this.getData()
                    } else {
                        this.$message({
                            message: '职位刷新失败',
                            type: 'warning'
                        })
                    }
                })
            },
            getData() {
                queryPubJobs({
                    id: this.$store.state.user.userId
                }).then(res => {
                    this.jobList.splice(0, this.jobList.length)
                    if (res.list && res.list.length > 0) {
                        this.jobList.push(...res.list)
                    }
                })
            }
        },
        components: {
            [Form.name]: Form,
            [FormItem.name]: FormItem,
            [Button.name]: Button,
            [Input.name]: Input,
            [RadioGroup.name]: RadioGroup,
            [Radio.name]: Radio
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .s-myjob {
        margin: 20px 0;
        .title {
            height: 35px;
            line-height: 35px;
            text-indent: 20px;
            border: 1px solid #CCC;
            margin: 10px 10px 0;
            font-size: 14px;
            border-radius: 5px;
            position: relative;
            .right-btn {
                position: absolute;
                width: 95px;
                height: 35px;
                line-height: 35px;
                font-size: 13px;
                text-align: center;
                text-decoration: underline;
                color: #666;
                right: 0;
                top: 0;
                text-indent: 0;
                cursor: pointer;
            }
        }
        .tab {
            margin-top: 10px;
            font-size: 14px;
            padding-left: 10px;
            li {
                margin-right: 10px;
                padding: 0 10px;
                float: left;
                text-align: center;
                border: 1px solid #CCC;
                height: 25px;
                line-height: 25px;
                cursor: pointer;
            }
            .on {
                color: #FFF;
                background-color: #CCC;
            }
        }
        .table {
            padding: 10px;
            .theader {
                .tr {
                    border: 1px solid #dedede;
                    background-color: #cccccc61;
                }
            }
            .tbody {
                .tr {
                    border-bottom:1px solid #dedede;
                    border-left: 1px solid #dedede;
                    border-right: 1px solid #dedede;
                    .td:last-child {
                        span {
                            padding: 0 5px;
                            cursor: pointer;
                            &:hover {
                                text-decoration: underline;
                            }
                        }
                    }
                }
            }
            .tr {
                height: 36px;
                line-height: 36px;
                display: flex;
                .th {
                    color: #666666;
                }
                .td {
                    color:#333;
                    a {
                        text-decoration: underline;
                    }
                }
                .th,.td {
                    font-size: 12px;
                    flex: 1;
                    text-align: center;
                }
            }
        }
        .incomeBox {
            border: 1px solid #CCC;
            margin: 20px auto;
            width: 300px;
            border-radius: 5px;
            text-align: center;
            font-size: 13px;
            padding: 10px 0;
            p {
                height: 30px;
                line-height: 30px;
            }
        }
    }
</style>