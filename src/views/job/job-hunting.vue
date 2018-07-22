<template>
    <div class="job-hunting">
        <div class="form-box">
            <div class="form-control">
                <div class="label">
                    关键字：
                </div>
                <div class="input-control">
                    <input type="text" v-model="queryOptions.keywords" @keyup.enter="query">
                </div>
            </div>
            <div class="form-control">
                <div class="label">
                    地点：
                </div>
                <div class="input-control">
                    <span @click="dialogVisible = true">请选择</span>
                    <span @click="dialogVisible = true" class="active" v-for="(item, index) in queryOptions.cities" :key="'queryCity-' + index">{{ cities[item] }}</span>
                </div>
            </div>
            <div class="form-control" :class="{'no-bottom': !showMore}">
                <div class="label">
                    发布日期：
                </div>
                <div class="input-control">
                    <span :class="{active: !queryOptions.releaseDate}" @click="releaseDate()">所有</span>
                    <span :class="{active: queryOptions.releaseDate === item.id}" v-for="item in filterOptions.releaseDate" :key="'releaseDate-' + item.id" @click="releaseDate(item.id)">{{ item.name }}</span>
                </div>
            </div>
            <div class="more" @click="toggleShowMore">{{showMoreTitle}}</div>
            <transition name="fade">
                <div v-show="showMore">
                    <div class="form-control">
                        <div class="label">
                            月薪范围：
                        </div>
                        <div class="input-control">
                            <span :class="{active: !queryOptions.expectedSalary}" @click="expectedSalary()">所有</span>
                            <span :class="{active: queryOptions.expectedSalary === item.id}" v-for="item in filterOptions.expectedSalary" :key="'expectedSalary-' + item.id" @click="expectedSalary(item.id)">{{ item.name }}</span>
                        </div>
                    </div>
                    <div class="form-control">
                        <div class="label">
                            公司性质：
                        </div>
                        <div class="input-control">
                            <span :class="{active: !queryOptions.natureOfCompany}" @click="natureOfCompany()">所有</span>
                            <span :class="{active: queryOptions.natureOfCompany === item.id}" v-for="item in filterOptions.natureOfCompany" :key="'natureOfCompany-' + item.id" @click="natureOfCompany(item.id)">{{ item.name }}</span>
                        </div>
                    </div>
                    <div class="form-control">
                        <div class="label">
                            工作年限：
                        </div>
                        <div class="input-control">
                            <span :class="{active: !queryOptions.wrokLife}" @click="wrokLife()">所有</span>
                            <span :class="{active: queryOptions.wrokLife === item.id}" v-for="item in filterOptions.wrokLife" :key="'wrokLife-' + item.id" @click="wrokLife(item.id)">{{ item.name }}</span>
                        </div>
                    </div>
                    <div class="form-control">
                        <div class="label">
                            学历要求：
                        </div>
                        <div class="input-control">
                            <span :class="{active: !queryOptions.education}" @click="education()">所有</span>
                            <span :class="{active: queryOptions.education === item.id}" v-for="item in filterOptions.education" :key="'education-' + item.id" @click="education(item.id)">{{ item.name }}</span>
                        </div>
                    </div>
                    <div class="form-control no-bottom">
                        <div class="label">
                            公司规模：
                        </div>
                        <div class="input-control">
                            <span :class="{active: !queryOptions.companySize}" @click="companySize()">所有</span>
                            <span :class="{active: queryOptions.companySize === item.id}" v-for="item in filterOptions.companySize" :key="'companySize-' + item.id" @click="companySize(item.id)">{{ item.name }}</span>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <div class="job-list">
            <div class="job-box-header">
                <div class="selectAll" @click="selectAll">
                    <span :class="{active: resumes.length !== 0 && selectResumeArray.length === resumes.length}">全选</span>
                </div>
                <div class="flex-auto clearfix">
                    <div class="applyBtn button" @click="apply"><i></i>申请职位</div>
                    <div class="collectBtn button" @click="collect"><i></i>收藏职位</div>
                </div>
                <div class="rt">
                    <span id="rtPrev" :class="{ active: queryOptions.pageNum > 1 }" class="dicon pre" @click="go('pre')"></span>
                    <span class="dw_c_orange">{{queryOptions.pageNum}}</span> / {{totalPage}}
                    <span id="rtNext" :class="{ active: queryOptions.pageNum < totalPage }" class="dicon next" @click="go('next')"></span>
                </div>
                <div class="rt">共{{total}}条职位</div>
            </div>
            <div class="table">
                <div class="theader">
                    <div class="tr">
                        <div class="th flex-auto">职位名</div>
                        <div class="th" style="width: 275px;">公司名</div>
                        <div class="th" style="width: 120px;">工作地点</div>
                        <div class="th" style="width: 150px;">薪资</div>
                        <div class="th" style="width: 110px;">发布时间</div>
                    </div>
                </div>
                <div class="tbody">
                    <div class="tr" v-for="item in resumes" :key="'job-' + item.id">
                        <div class="td" style="width: 43px">
                            <span :class="{checked: selectResumeArray.indexOf(item.id) !== -1}" @click="selectResume(item.id)"></span>
                        </div>
                        <div class="td flex-auto cursor"><!-- @click="getResumeDetail(item.id)"-->
                            <a :href="'/#/job-detail?id=' + item.id" target="_blank">{{ item.name }}</a>
                        </div>
                        <div class="td" style="width: 275px;">{{ item.companyName }}</div>
                        <div class="td center" style="width: 120px;">{{ item.placeBelong }}</div>
                        <div class="td center" style="width: 150px;">{{ item.salary }}</div>
                        <div class="td center" style="width: 110px;">{{ item.updateTime }}</div>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog :before-close="queryByCity" class="areaDialog" :visible.sync="dialogVisible" width="960px" :close-on-click-modal="false"
                   :close-on-press-escape="false">
            <div slot="title" class="areaTitle">选择地区 <span>（最多只能选择5项）</span></div>
            <div class="selectedArea clearfix" v-if="queryOptions.cities.length > 0">
                <div class="areaBtn" v-for="(item, index) in queryOptions.cities" :key="'selCity-' + index">{{ cities[item] }}<i @click="deleteCity(item)"></i></div>
            </div>
            <areaComp :list="filterOptions.placeBelong" :cities="cities" :choosed="queryOptions.cities"></areaComp>
            <div slot="footer" class="dialog-footer">
                <div class="button" @click="queryByCity">确 定</div>
            </div>
        </el-dialog>
        <el-dialog :visible.sync="jobDetailDialogVisible" width="600px" :close-on-click-modal="false" :close-on-press-escape="false">
            <span slot="title">{{activeResume.name}}</span>

        </el-dialog>
    </div>
</template>
<script>
    import areaComp from './components/areaComp'
    import { queryFilterOptions, queryJobsByPage, applyJob, collectJobs, queryJobDetail } from '@/api/service'
    export default {
        name: 'jobHunting',
        components: {
            areaComp
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
        data() {
            return {
                filterOptions: {
                    placeBelong: [],
                    releaseDate: [],
                    expectedSalary: [],
                    natureOfCompany: [],
                    companySize: [],
                    education: [],
                    wrokLife: []
                },
                queryOptions:{
                    pageNum: 1,
                    pageSize: 20,
                    keywords: '',
                    cities: [],
                    releaseDate: '',
                    expectedSalary: '',
                    natureOfCompany: '',
                    companySize: '',
                    education: '',
                    wrokLife: ''
                },
                totalPage: 0,
                total: 0,
                selectResumeArray: [],
                resumes: [],
                dialogVisible: false,
                showMore: false,
                showMoreTitle: '展开更多选项▼',
                jobDetailDialogVisible: false,
                activeResume: {
                    id: '',
                    name: '',
                    salary: '',
                    numberRecruits: '',
                    education: '',
                    workingLife: '',
                    workPlace: '',
                    jobDescription: '',
                    companyInfo: ''
                },
            }
        },
        mounted() {
            this.getFilterOptions()
            this.getJobs()
        },
        methods: {
            deleteCity(id) {
                let idx = this.queryOptions.cities.indexOf(id)
                this.queryOptions.cities.splice(idx, 1)
            },
            collect() {
                if (this.selectResumeArray.length <= 0) {
                    this.$message({
                        message: '请至少选择一个职位',
                        type: 'warning'
                    })
                } else {
                    if (!this.$store.state.user.isLogin) {
                        this.$message({
                            message: '请先登录',
                            type: 'warning'
                        })
                        return;
                    }
                    const loading = this.$loading({
                        lock: true,
                        spinner: 'el-icon-loading',
                        background: 'rgba(0, 0, 0, 0.1)',
                        fullscreen: true
                    })
                    collectJobs({ids: this.selectResumeArray.join(',')}).then((res) => {
                        loading.close()
                        this.$message({
                            message: '职位收藏成功',
                            type: 'success'
                        })
                    }).catch(() => {
                        loading.close()
                    })
                }
            },
            apply() {
                if (this.selectResumeArray.length <= 0) {
                    this.$message({
                        message: '请至少选择一个职位',
                        type: 'warning'
                    })
                } else {
                    console.log(this.$store.state.user.isLogin)
                    if (!this.$store.state.user.isLogin) {
                        this.$message({
                            message: '请先登录',
                            type: 'warning'
                        })
                        return;
                    }
                    const loading = this.$loading({
                        lock: true,
                        spinner: 'el-icon-loading',
                        background: 'rgba(0, 0, 0, 0.1)',
                        fullscreen: true
                    })
                    applyJob({ids: this.selectResumeArray.join(',')}).then((res) => {
                        loading.close()
                        this.$message({
                            message: '已申请所选职位',
                            type: 'success'
                        })
                    }).catch(() => {
                        loading.close()
                    })
                }
            },
            getResumeDetail(id) {
                if (id === this.activeResume.id) {
                    this.jobDetailDialogVisible = true
                    return
                }
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                queryJobDetail({id: id}).then((res) => {
                    console.log(res)
                    loading.close()
                    let data = res.data
                    this.activeResume.id = data.id
                    this.activeResume.name = data.name
                    this.activeResume.salary = data.salary
                    this.activeResume.numberRecruits = data.numberRecruits
                    this.activeResume.education = data.education
                    this.activeResume.workingLife = data.workingLife
                    this.activeResume.workPlace = data.workPlace
                    this.activeResume.jobDescription = data.jobDescription
                    this.activeResume.companyInfo = data.companyInfo
                    this.$nextTick(() => {
                        this.jobDetailDialogVisible = true
                    })
                }).catch(() => {
                    loading.close()
                })
            },
            selectResume(id) {
                let idx = this.selectResumeArray.indexOf(id)
                if (idx !== -1) {
                    this.selectResumeArray.splice(idx, 1)
                } else {
                    this.selectResumeArray.push(id)
                }
            },
            selectAll() {
                if (this.resumes.length !== 0 && this.selectResumeArray.length === this.resumes.length) {
                    this.selectResumeArray.splice(0, this.selectResumeArray.length)
                } else {
                    for (let i = 0; i < this.resumes.length; i++) {
                        let idx = this.selectResumeArray.indexOf(this.resumes[i].id)
                        if (idx === -1) {
                            this.selectResumeArray.push(this.resumes[i].id)
                        }
                    }
                }

            },
            getJobs() {
                this.selectResumeArray.splice(0, this.selectResumeArray.length)
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: false,
                    target: this.$el.querySelector('.job-list')
                })
                queryJobsByPage(this.queryOptions).then((res) => {
                    loading.close()
                    this.resumes = res.list
                    this.total = res.total
                    this.totalPage = res.totalPage
                }).catch(() => {
                    loading.close()
                })
            },
            query() {
                this.queryOptions.pageNum = 1
                this.$nextTick(() => {
                    this.getPersons()
                })
            },
            companySize(id) {
                this.queryOptions.companySize = id ||''
                this.queryOptions.pageNum = 1
                this.$nextTick(() => {
                    this.getJobs()
                })
            },
            natureOfCompany(id) {
                this.queryOptions.natureOfCompany = id ||''
                this.queryOptions.pageNum = 1
                this.$nextTick(() => {
                    this.getJobs()
                })
            },
            education(id) {
                this.queryOptions.education = id ||''
                this.queryOptions.pageNum = 1
                this.$nextTick(() => {
                    this.getJobs()
                })
            },
            wrokLife(id) {
                this.queryOptions.wrokLife = id ||''
                this.queryOptions.pageNum = 1
                this.$nextTick(() => {
                    this.getJobs()
                })
            },
            expectedSalary(id) {
                this.queryOptions.expectedSalary = id ||''
                this.queryOptions.pageNum = 1
                this.$nextTick(() => {
                    this.getJobs()
                })
            },
            releaseDate(id) {
                this.queryOptions.releaseDate = id ||''
                this.queryOptions.pageNum = 1
                this.$nextTick(() => {
                    this.getJobs()
                })
            },
            go(key) {
                if (key === 'pre') {
                    if (this.queryOptions.pageNum <= 1) {
                        return
                    }
                    this.queryOptions.pageNum--
                    this.$nextTick(() => {
                        this.getJobs()
                    })
                } else if (key === 'next') {
                    if (this.queryOptions.pageNum >= this.totalPage) {
                        return
                    }
                    this.queryOptions.pageNum++
                    this.$nextTick(() => {
                        this.getJobs()
                    })
                }
            },
            queryByCity() {
                this.dialogVisible = false
                this.queryOptions.pageNum = 1
                this.$nextTick(() => {
                    this.getJobs()
                })
            },
            getFilterOptions() {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                queryFilterOptions().then((res) => {
                    loading.close()
                    this.filterOptions = res.data
                }).catch(() => {
                    loading.close()
                })
            },
            handleClose() {
                console.log('取消地区选择')
            },
            toggleShowMore() {
                this.showMore = !this.showMore
                if (this.showMore) {
                    this.showMoreTitle = '收起更多选项▲'
                } else {
                    this.showMoreTitle = '展开更多选项▼'
                }
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .job-hunting {
        width: 1000px;
        margin: 0 auto;
        .cursor {
            cursor: pointer;
        }
        .job-detail {
            .job-control {
                display: flex;
                font-size: 12px;
                .label {
                    width: 85px;
                    text-align: right;
                    padding-right: 10px;
                }
                .value {
                    flex: 1;
                    line-height: 25px;
                }
            }
        }
        .job-list {
            margin-bottom: 10px;
            border: 1px solid #cac9cb;
            .table {
                .tr {
                    display: flex;
                    border-bottom: 1px solid #e8e8e8;
                    .flex-auto {
                        flex: 1;
                    }
                    .center {
                        text-align: center;
                    }
                    .cursor {
                        &:hover {
                            text-decoration: underline;
                            color: #000;
                        }
                    }
                }
                .tbody {
                    .tr {
                        font-size: 14px;
                        color: #333;
                        height: 40px;
                        line-height: 40px;
                        &:last-child {
                            border-bottom: 0;
                        }
                        .td {
                            span {
                                display: inline-block;
                                width: 15px;
                                height: 15px;
                                margin-top: 12px;
                                margin-left: 15px;
                                float: left;
                                background-image: url(../../assets/img/check.png);
                                background-position:left center;
                                background-repeat: no-repeat;
                            }
                            .checked {
                                background-image: url(../../assets/img/checked.png);
                            }
                        }
                    }
                }
                .theader {
                    height: 30px;
                    line-height: 30px;
                    text-align: center;

                    font-size: 12px;
                    color: #999;
                }
            }
            .job-box-header {
                display: flex;
                border-bottom: 1px solid #cac9cb;
                .flex-auto {
                    flex: 1;
                    .button {
                        width: 123px;
                        height: 26px;
                        line-height: 26px;
                        font-size: 12px;
                        cursor: pointer;
                        margin: 7px 0 0 15px;
                        border-radius: 2px;
                        float: left;
                        i {
                            float: left;
                            display: block;
                            width: 20px;
                            height: 20px;
                            margin: 2px 6px 0 16px;
                            background-image: url("../../assets/img/list_icon_dw_20171226.png");
                        }
                    }
                    .applyBtn {
                        color: #FFF;
                        background-color: #FF6000;
                        border: 1px solid #FF6000;
                        i {
                            background-position: -70px 0;
                        }
                    }
                    .collectBtn {
                        color: #FF6000;
                        background-color: #FFF2E3;
                        border: 1px solid #FFB865;
                        i {
                            background-position: -70px -20px;
                        }
                    }
                }
                .selectAll {
                    width: 80px;
                    font-size: 12px;
                    color: #999;
                    height: 42px;
                    border-right: 1px solid #cac9cb;
                    span {
                        display: block;
                        width: 50px;
                        height: 18px;
                        margin-top: 12px;
                        margin-left: 15px;
                        text-align: right;
                        line-height: 18px;
                        background-image: url(../../assets/img/check.png);
                        background-position:left center;
                        background-repeat: no-repeat;
                    }
                    span.active {
                        background-image: url(../../assets/img/checked.png);
                    }
                }
                .rt {
                    border-left: 1px solid #cac9cb;
                    width: 118px;
                    height: 42px;
                    line-height: 42px;
                    text-align: center;
                    font-size: 12px;
                    color: #999;
                    position: relative;
                    .dicon {
                        position: absolute;
                        width: 8px;
                        height: 14px;
                        top: 14px;
                        left: 15px;
                        cursor: pointer;
                        background-image: url("../../assets/img/list_icon_dw_20171226.png");
                    }
                    .pre {
                        background-position: -150px 0;
                    }
                    .pre.active {
                        background-position: -150px -20px;
                    }
                    .next {
                        left: auto;
                        right: 15px;
                        background-position: -170px 0;
                    }
                    .next.active {
                        background-position: -170px -20px;
                    }
                    .dw_c_orange {
                        color: #FF6000 !important;
                    }
                }
            }
        }
        .form-box {
            position: relative;
            margin: 10px 0 33px;
            border: 1px solid #cac9cb;
            .more {
                cursor: pointer;
                position: absolute;
                bottom: -24px;
                font-size: 12px;
                border: 1px solid #cac9cb;
                border-top: 0;
                width: 150px;
                text-align: center;
                height: 24px;
                line-height: 26px;
                left: 50%;
                margin-left: -75px;
                background-color: #F5F5F5;
            }
            .form-control {
                padding: 0 15px;
                border-bottom: 1px dotted #cac9cb;
                display: flex;
                .label {
                    width: 85px;
                    height: 35px;
                    line-height: 35px;
                    font-size: 12px;
                    color: #999;
                    padding-right: 15px;
                    text-align: right;
                }
                .input-control {
                    flex: 1;
                    line-height: 32px;
                    input {
                        outline: none;
                        border-width: 0 0 1px 0;
                        width: 400px;
                        background: none;
                        border-bottom: 1px solid #cac9cb;
                        height: 28px;
                        margin-top: 3px;
                        font-size: 12px;
                        color: #666;
                        font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
                    }
                    span {
                        /*display: inline-block;
                        height: 35px;
                        line-height: 35px;*/
                        padding: 0 5px;
                        font-size: 12px;
                        color: #333;
                        cursor: pointer;
                        margin-right: 5px;
                    }
                    span.active {
                        color: #FFF;
                        background-color: orange;
                    }
                }
            }
            .no-bottom {
                border-bottom: 0;
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
