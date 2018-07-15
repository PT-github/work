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
                    性别：
                </div>
                <div class="input-control">
                    <span :class="{active: !queryOptions.sex}" @click="selSex()">所有</span>
                    <span v-for="item in filterOptions.sex" :class="{active: queryOptions.sex === item.id}" :key="'sex-' + item.id" @click="selSex(item.id)">{{ item.name }}</span>
                </div>
            </div>
            <div class="form-control">
                <div class="label">
                    归属地：
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
                            期望月薪：
                        </div>
                        <div class="input-control">
                            <span :class="{active: !queryOptions.expectedSalary}" @click="expectedSalary()">所有</span>
                            <span :class="{active: queryOptions.expectedSalary === item.id}" v-for="item in filterOptions.expectedSalary" :key="'expectedSalary-' + item.id" @click="expectedSalary(item.id)">{{ item.name }}</span>
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
                    <div class="form-control no-bottom">
                        <div class="label">
                            学历：
                        </div>
                        <div class="input-control">
                            <span :class="{active: !queryOptions.education}" @click="education()">所有</span>
                            <span :class="{active: queryOptions.education === item.id}" v-for="item in filterOptions.education" :key="'education-' + item.id" @click="education(item.id)">{{ item.name }}</span>
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
                    <div class="applyBtn button" @click="invateInterView"><i></i>邀约面试</div>
                    <div class="collectBtn button" @click="collectResumes"><i></i>收藏简历</div>
                </div>
                <div class="rt">
                    <span id="rtPrev" :class="{ active: queryOptions.pageNum > 1 }" class="dicon pre" @click="go('pre')"></span>
                    <span class="dw_c_orange">{{queryOptions.pageNum}}</span> / {{totalPage}}
                    <span id="rtNext" :class="{ active: queryOptions.pageNum < totalPage }" class="dicon next" @click="go('next')"></span>
                </div>
                <div class="rt">共{{total}}个人才</div>
            </div>
            <ul class="list personel-box">
                <li class="list-li" v-for="item in resumes" :key="'resumes' + item.id">
                    <div class="flex">
                        <div class="checkbox">
                            <span :class="{checked: selectResumeArray.indexOf(item.id) !== -1}" @click="selectResume(item.id)"></span>
                        </div>
                        <div class="search_job_list">
                            <div class="part01 clearfix">
                                <div class="search_user_list_neme fl">
                                    <!--<span class=" disc_per" @click="getResumeDetail(item.id)">{{ item.name }}</span>-->
                                    <a :href="'/#/resume-detail?id=' + item.id" class="disc_per" target="_blank">{{item.name}}</a>
                                    <span class="disc_user_mes">{{item.sex}},{{item.age}}岁,</span>
                                </div>
                                <div class="disc_time fr">更新时间：{{ item.updateTime }}</div>
                            </div>
                            <div class="company_det">
                                <span class="search_job_list_box_s">
                                    意向：
                                    <span class="com_search_job_em">{{item.itention}}</span>
                                </span>
                                <span class="search_job_list_box_line">|</span>
                                <span class="search_job_list_box_s">
                                    薪资：
                                    <span class="com_search_job_em com_search_job_em_pay">{{item.salary}}</span>
                                </span>
                                <span class="search_job_list_box_line">|</span>
                                <span class="search_job_list_box_s">
                                    经验：
                                    <span class="com_search_job_em">{{item.experience}}</span>
                                </span>
                                <span class="search_job_list_box_line">|</span>
                                <span class="search_job_list_box_s">
                                    学历：
                                    <span class="com_search_job_em">{{item.education}}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </li>
                <!--<li class="list-li">
                    <div class="flex">
                        <div class="checkbox">
                            <span class="checked"></span>
                        </div>
                        <div class="search_job_list">
                            <div class="part01 clearfix">
                                <div class="search_user_list_neme fl">
                                    <span class=" disc_per" @click="jobDetailDialogVisible = true">张三</span>
                                    <span class="disc_user_mes">男,28岁,</span>
                                </div>
                                <div class="disc_time fr">更新时间：3天前</div>
                            </div>
                            <div class="company_det">
                        <span class="search_job_list_box_s">
                            意向：
                            <span class="com_search_job_em">咨询师</span>
                        </span>
                                <span class="search_job_list_box_line">|</span>
                                <span class="search_job_list_box_s">
                            薪资：
                            <span class="com_search_job_em com_search_job_em_pay">2万/月</span>
                        </span>
                                <span class="search_job_list_box_line">|</span>
                                <span class="search_job_list_box_s">
                            经验：
                            <span class="com_search_job_em">2年以上</span>
                        </span>
                                <span class="search_job_list_box_line">|</span>
                                <span class="search_job_list_box_s">
                            学历：
                            <span class="com_search_job_em">博士</span>
                        </span>
                            </div>
                        </div>
                    </div>
                </li>-->
            </ul>
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
        <el-dialog :top="'2vh'" :visible.sync="jobDetailDialogVisible" width="1000px" :close-on-click-modal="false"
                   :close-on-press-escape="false">
            <span slot="title">简历详情</span>
            <resumeDetail :activeResume="activeResume"></resumeDetail>
        </el-dialog>
    </div>
</template>
<script>
    import areaComp from './components/areaComp'
    import resumeDetail from './components/resume-detail'
    import { queryFilterOptions, queryResume, invateInterViewByIds, collectResumesByIds, queryResumeDetail } from '@/api/service'
    export default {
        name: 'seniorPersonnelList',
        components: {
            areaComp,
            resumeDetail
        },
        data() {
            return {
                activeResume: {
                    id: '',
                    name: '',
                    birth: '',
                    phoneNumber: '',
                    sex: '',
                    nameFamily: '',
                    email: '',
                    householdRegister: '',
                    height: '',
                    qq: '',
                    weight: '',
                    politicalOutlook: '',
                    education: '',
                    faxedLine: '',
                    graduationTime: '',
                    universityGraduatedFrom: '',
                    certificate: '',
                    major: '',
                    technicalTitle: '',
                    secondMajor: '',
                    placeResidence: '',
                    jobIntention: '',
                    salaryType: '',
                    expectSalary: '',
                    job: '',
                    expectedArea: '',
                    postTime: '',
                    handsOnWorkExperience: [],
                    educationExperience: [],
                    workingSkills: '',
                    selfEvalution: ''
                },
                selectResumeArray: [],
                resumes: [],
                dialogVisible: false,
                showMore: false,
                showMoreTitle: '展开更多选项▼',
                jobDetailDialogVisible: false,
                filterOptions: {
                    sex: [],
                    placeBelong: [],
                    releaseDate: [],
                    expectedSalary: [],
                    education: [],
                    wrokLife: []
                },
                total: 0,
                totalPage: 0,
                queryOptions: {
                    pageNum: 1,
                    pageSize: 20,
                    keywords: '',
                    sex: '',
                    cities: [],
                    releaseDate: '',
                    expectedSalary: '',
                    education: '',
                    wrokLife: ''
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
            },
            mode() {
                // senior-personnel-list 中高级人才
                return this.$route.path.indexOf('senior-personnel-list') !== -1 ? 1 : 0
            }
        },
        mounted() {
            this.getFilterOptions()
            this.getPersons()
        },
        methods: {
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
                queryResumeDetail({id: id}).then((res) => {
                    console.log(res)
                    loading.close()
                    let data = res.data
                    this.activeResume.id = data.id
                    this.activeResume.name = data.name || ''
                    this.activeResume.birth = data.birth || ''
                    this.activeResume.phoneNumber = data.phoneNumber || ''
                    this.activeResume.sex = data.sex || ''
                    this.activeResume.nameFamily = data.nameFamily || ''
                    this.activeResume.email = data.email || ''
                    this.activeResume.householdRegister = data.householdRegister || ''
                    this.activeResume.height = data.height || ''
                    this.activeResume.weight = data.weight || ''
                    this.activeResume.qq = data.qq || ''
                    this.activeResume.politicalOutlook = data.politicalOutlook || ''
                    this.activeResume.education = data.education || ''
                    this.activeResume.faxedLine = data.faxedLine || ''
                    this.activeResume.graduationTime = data.graduationTime || ''
                    this.activeResume.universityGraduatedFrom = data.universityGraduatedFrom || ''
                    this.activeResume.certificate = data.certificate || ''
                    this.activeResume.major = data.major || ''
                    this.activeResume.technicalTitle = data.technicalTitle || ''
                    this.activeResume.secondMajor = data.secondMajor || ''
                    this.activeResume.placeResidence = data.placeResidence || ''
                    this.activeResume.jobIntention = data.jobIntention || []
                    this.activeResume.salaryType = data.salaryType || ''
                    this.activeResume.expectSalary = data.expectSalary || ''
                    this.activeResume.job = data.job || ''
                    this.activeResume.expectedArea = data.expectedArea || ''
                    this.activeResume.postTime = data.postTime || ''
                    this.activeResume.handsOnWorkExperience = data.handsOnWorkExperience || []
                    this.activeResume.educationExperience = data.educationExperience || []
                    this.activeResume.workingSkills = data.workingSkills || ''
                    this.activeResume.selfEvalution = data.selfEvalution || ''
                    this.$nextTick(() => {
                        this.jobDetailDialogVisible = true
                    })
                }).catch(() => {
                    loading.close()
                })
            },
            collectResumes() {
                if (this.selectResumeArray.length <= 0) {
                    this.$message({
                        message: '请至少选择一项简历',
                        type: 'warning'
                    })
                } else {
                    if (this.$store.getters.isLogin !== '1') {
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
                    collectResumesByIds({ids: this.selectResumeArray.join(',')}).then((res) => {
                        loading.close()
                        this.$message({
                            message: '简历收藏成功',
                            type: 'success'
                        })
                    }).catch(() => {
                        loading.close()
                    })
                }
            },
            invateInterView() {
                if (this.selectResumeArray.length <= 0) {
                    this.$message({
                        message: '请至少选择一项简历',
                        type: 'warning'
                    })
                } else {
                    if (this.$store.getters.isLogin !== '1') {
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
                    invateInterViewByIds({ids: this.selectResumeArray.join(',')}).then((res) => {
                        loading.close()
                        this.$message({
                            message: '邀约面试成功',
                            type: 'success'
                        })
                    }).catch(() => {
                        loading.close()
                    })
                }
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
            go(key) {
                if (key === 'pre') {
                    if (this.queryOptions.pageNum <= 1) {
                        return
                    }
                    this.queryOptions.pageNum--
                    this.$nextTick(() => {
                        this.getPersons()
                    })
                } else if (key === 'next') {
                    if (this.queryOptions.pageNum >= this.totalPage) {
                        return
                    }
                    this.queryOptions.pageNum++
                    this.$nextTick(() => {
                        this.getPersons()
                    })
                }
            },
            getPersons() {
                this.selectResumeArray.splice(0, this.selectResumeArray.length)
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: false,
                    target: this.$el.querySelector('.personel-box')
                })
                // mode 0 非高级人才 1 高级人才

                console.log(Object.assign(this.queryOptions, {mode: this.mode}))
                queryResume(Object.assign(this.queryOptions, {mode: this.mode})).then((res) => {
                    loading.close()
                    this.resumes = res.list
                    this.total = res.total
                    this.totalPage = res.totalPage
                }).catch(() => {
                    loading.close()
                })
            },
            queryByCity() {
                this.dialogVisible = false
                this.queryOptions.pageNum = 1
                this.$nextTick(() => {
                    this.getPersons()
                })
            },
            query() {
                this.queryOptions.pageNum = 1
                this.$nextTick(() => {
                    this.getPersons()
                })
            },
            wrokLife(id) {
                this.queryOptions.wrokLife = id ||''
                this.queryOptions.pageNum = 1
                this.$nextTick(() => {
                    this.getPersons()
                })
            },
            education(id) {
                this.queryOptions.education = id ||''
                this.queryOptions.pageNum = 1
                this.$nextTick(() => {
                    this.getPersons()
                })
            },
            expectedSalary(id) {
                this.queryOptions.expectedSalary = id ||''
                this.queryOptions.pageNum = 1
                this.$nextTick(() => {
                    this.getPersons()
                })
            },
            releaseDate(id) {
                this.queryOptions.releaseDate = id ||''
                this.queryOptions.pageNum = 1
                this.$nextTick(() => {
                    this.getPersons()
                })
            },
            deleteCity(id) {
                let idx = this.queryOptions.cities.indexOf(id)
                this.queryOptions.cities.splice(idx, 1)
            },
            selSex(id) {
                this.queryOptions.sex = id || ''
                this.queryOptions.pageNum = 1
                this.$nextTick(() => {
                    this.getPersons()
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
        .job-list {
            margin-bottom: 10px;
            border: 1px solid #cac9cb;
            .flex {
                display: flex;
                border-bottom: 1px solid #e4e4e4;
                .checkbox {
                    width: 43px;
                    span {
                        display: inline-block;
                        width: 15px;
                        height: 15px;
                        margin-top: 21px;
                        margin-left: 15px;
                        float: left;
                        background-image: url(../../assets/img/check.png);
                        background-position: left center;
                        background-repeat: no-repeat;
                    }
                    .checked {
                        background-image: url(../../assets/img/checked.png);
                    }
                }
            }
            .list-li {
                &:last-child {
                    > .flex {
                        border-bottom: 0;
                    }
                }
            }
            .search_job_list {
                flex: 1;
                margin-left: 10px;
                margin-right: 10px;
                padding-top: 10px;
                padding-bottom: 10px;
                color: #676767;
                position: relative;
                font-size: 13px;
                .company_det {
                    font-size: 12px;
                    .com_search_job_em_pay {
                        color: #e8620e;
                    }
                }
                .part01 {
                    margin-bottom: 10px;
                    .search_user_list_neme {
                        color: #1369c0;
                        .disc_per {
                            cursor: pointer;
                        }
                        .disc_user_mes {
                            font-size: 12px;
                            padding-left: 10px;
                            color: #a4a4a4;
                        }
                    }
                    .disc_time {
                        color: #9d9999;
                        font-size: 12px;
                        padding-top: 1px;
                    }
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
                        background-position: left center;
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
                        /*display: inline-block;*/
                        /*height: 35px;*/
                        /*line-height: 35px;*/
                        padding: 3px 5px;
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
