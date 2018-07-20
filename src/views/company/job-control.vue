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
        <el-dialog title="职位新增" :visible.sync="dialogVisible" width="1000px" :close-on-click-modal="false"
                   :close-on-press-escape="false">
            <el-form ref="form" size="small" :model="form" :rules="rules" label-width="100px" class="myForm">
                <el-form-item label="职位名称：" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="招聘人数：" prop="num">
                    <el-input @keyup.native="changeNums" v-model="form.num" style="width: 100px"></el-input> 人
                </el-form-item>
                <el-form-item label="工作地点：">
                    <el-button @click="cityDialogVisible = true" size="mini" v-for="(item, index) in form.cities" :key="'job-control_selCity_' + index">{{ cities[item] }}</el-button>
                    <template v-if="form.cities.length < 5">
                        <el-button size="mini" type="primary" @click="cityDialogVisible = true">请选择</el-button>
                    </template>
                </el-form-item>
                <el-form-item label="月薪范围：">
                    <el-radio-group v-model="form.expectedSalary" size="small">
                        <el-radio :label="item.id" border v-for="(item, index) in filterOptions.expectedSalary" :key="'expectedSalary' + index">{{ item.name }}</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="学历要求：">
                    <el-radio-group v-model="form.education" size="small">
                        <el-radio :label="item.id" border v-for="(item, index) in filterOptions.education" :key="'education' + index">{{ item.name }}</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="工作年限：">
                    <el-radio-group v-model="form.wrokLife" size="small">
                        <el-radio :label="item.id" border v-for="(item, index) in filterOptions.wrokLife" :key="'wrokLife' + index">{{ item.name }}</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="职位描述：" prop="desc">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>

        <el-dialog class="areaDialog" :visible.sync="cityDialogVisible" width="960px" :close-on-click-modal="false"
                   :close-on-press-escape="false">
            <div slot="title" class="areaTitle">选择地区 <span>（最多只能选择5项）</span></div>
            <div class="selectedArea clearfix" v-if="form.cities.length > 0">
                <div class="areaBtn" v-for="(item, index) in form.cities" :key="'selCity-' + index">{{ cities[item] }}<i @click="deleteCity(item)"></i></div>
            </div>
            <areaComp :list="filterOptions.placeBelong" :cities="cities" :choosed="form.cities"></areaComp>
            <div slot="footer" class="dialog-footer">
                <div class="button" @click="cityDialogVisible = false">确 定</div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import { queryPubJobs, refreshCompanyJob, publishCompanyJob, revokeCompanyJob, deleteCompanyJob, queryFilterOptions, addCompanyJob } from '@/api/service'
    import { Form, FormItem, Button, Input, RadioGroup, Radio  } from 'element-ui'
    import areaComp from '@/views/job/components/areaComp'
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
                    name: '',
                    num: '',
                    expectedSalary: '',
                    education: '',
                    wrokLife: '',
                    desc: '',
                    cities: []
                },
                rules: {
                    name: [
                        { required: true, message: '请输入职位名称', trigger: 'blur' }
                    ],
                    num: [
                        { required: true, message: '请输入招聘人数', trigger: 'blur' }
                    ],
                    desc: [
                        {  required: true, message: '请输入职位描述信息', trigger: 'blur' }
                    ]
                },
                filterOptions: {
                    expectedSalary: [],
                    wrokLife: [],
                    education: [],
                    placeBelong: []
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
        computed: {
            cities() {
                let obj = {},list = this.filterOptions.placeBelong
                for (let i = 0; i < list.length; i++) {
                    if (list[i].citys && list[i].citys.length > 0) {
                        for (let j = 0; j < list[i].citys.length; j++) {
                            obj[list[i].citys[j].id] = list[i].citys[j].name
                        }
                    }
                }
                return obj
            }
        },
        mounted() {
            this.getData()
        },
        methods: {
            deleteCity(id) {
                let idx = this.form.cities.indexOf(id)
                this.form.cities.splice(idx, 1)
            },
            changeNums() {
                this.form.num=this.form.num.replace(/[^\.\d]/g,'');
                this.form.num=this.form.num.replace('.','');
            },
            onSubmit() {
                this.$refs['form'].validate((valid) => {
                    if (valid) {
                        const loading = this.$loading({
                            lock: true,
                            spinner: 'el-icon-loading',
                            background: 'rgba(0, 0, 0, 0.1)',
                            fullscreen: true
                        })
                        addCompanyJob(Object.assign(this.form, {
                            id: this.$store.state.user.id
                        })).then(res => {
                            loading.close()
                            if (res.success) {
                                this.$message({
                                    message: '职位新增成功',
                                    type: 'success'
                                })
                                this.dialogVisible = false
                                this.jobList.splice(0, this.jobList.length)
                                this.getData()
                            } else {
                                this.$message({
                                    message: '职位新增失败',
                                    type: 'error'
                                })
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                })
            },
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
                    id: this.$store.state.user.id
                }).then(res => {
                    this.jobList.splice(0, this.jobList.length)
                    if (res.list && res.list.length > 0) {
                        this.jobList.push(...res.list)
                    }
                })
            }
        },
        components: {
            areaComp,
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
    .areaTitle {
        font-weight: bold;
        font-size: 18px;
        span {
            font-size: 12px;
        }
    }
    .myForm {
        .el-radio.is-bordered {
            margin-bottom: 10px;
            margin-right: 10px;
        }
        .el-radio.is-bordered+.el-radio.is-bordered {
            margin-left: 0;

        }
    }
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
<style rel="stylesheet/scss" lang="scss">
    .areaDialog {
        .selectedArea {
            padding: 15px 10px 5px;
            background-color: #fff;
            border-bottom: 1px solid #e8e8e8;
            .areaBtn {
                position: relative;
                float: left;
                height: 26px;
                line-height: 26px;
                font-size: 12px;
                color: #333;
                white-space: nowrap;
                margin: 0 8px 5px 0;
                padding: 0 20px 0 6px;
                background-color: #fff;
                border: 1px solid #ff9f20;
                cursor: pointer;
                i {
                    position: absolute;
                    width: 20px;
                    top: -1px;
                    right: 0;
                    height: 26px;
                    background: url(../../assets/img/close2.png) center no-repeat;
                }
            }
        }
        .el-dialog__header {
            border-bottom: 1px solid #e5e5e5;
        }
        .areaTitle {
            font-weight: bold;
            font-size: 18px;
            span {
                font-size: 12px;
            }
        }
        .el-dialog__body {
            padding: 0 0 10px 0;
        }
        .dialog-footer {
            text-align: center;
            .button {
                display: inline-block;
                height: 28px;
                line-height: 27px;
                font-size: 14px;
                color: #fff;
                text-align: center;
                cursor: pointer;
                margin: 0 10px;
                padding: 0 30px;
                background-color: #ff6000;
                border: 1px solid #ff6000;
                border-radius: 2px;
            }
            .cancel {
                color: #999;
                background-color: #fff;
                border-color: #b0b0b0;
            }
        }
    }
</style>