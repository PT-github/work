<template>
    <div class="resume-detail_box">
        <div class="job-title">{{activeResume.name}}</div>
        <div class="job-detail">
            <div class="job-control">
                <div class="label">公司规模：</div>
                <div class="value">{{activeResume.scale}}</div>
            </div>
            <div class="job-control">
                <div class="label">公司性质：</div>
                <div class="value">{{activeResume.nature}}</div>
            </div>
            <div class="job-control">
                <div class="label">公司行业：</div>
                <div class="value">{{activeResume.industry}}</div>
            </div>
        </div>
        <div class="table">
            <div class="tr">
                <div class="td">职位性质：</div>
                <div class="td">{{activeResume.jobNature}}</div>
                <div class="td">招聘部门</div>
                <div class="td">{{activeResume.jobNature}}</div>
            </div>
            <div class="tr">
                <div class="td">招聘人数：</div>
                <div class="td">{{activeResume.numberRecruits}}</div>
                <div class="td">职位月薪：</div>
                <div class="td">{{activeResume.salary}}</div>
            </div>
            <div class="tr">
                <div class="td">发布日期：</div>
                <div class="td">{{activeResume.pubTime}}</div>
                <div class="td">截止日期：</div>
                <div class="td">{{activeResume.endTime}}</div>
            </div>
            <div class="tr">
                <div class="td">学历要求：</div>
                <div class="td">{{activeResume.education}}</div>
                <div class="td">工作经验：</div>
                <div class="td">{{activeResume.workingLife}}</div>
            </div>
            <div class="tr">
                <div class="td">年龄要求：</div>
                <div class="td">{{activeResume.ageRange}}</div>
                <div class="td">性别要求：</div>
                <div class="td">{{activeResume.sexRange}}</div>
            </div>
            <div class="tr">
                <div class="td">语言能力：</div>
                <div class="td">{{activeResume.languageRange}}</div>
                <div class="td">简历语言：</div>
                <div class="td">{{activeResume.resumeLanguageRange}}</div>
            </div>
            <div class="tr">
                <div class="td">工作地区：</div>
                <div class="td">{{activeResume.workPlace}}</div>
            </div>
        </div>
        <div class="job-part">
            <div class="title">职位描述：</div>
            <div class="des">
                <span v-html="activeResume.jobDescription"></span>
            </div>
        </div>
        <div class="job-part">
            <div class="title">任职资格：</div>
            <div class="des">
                <span v-html="activeResume.jobQua"></span>
            </div>
        </div>
        <div class="job-part">
            <div class="title">联系方式：</div>
            <div class="des">
                <span v-if="isLogin">
                    {{activeResume.contact}}
                </span>
                <span v-else>
                    注册并登录后才能查看联系方式，点击<a href="/">[回到首页]</a>进行登录或注册
                </span>
            </div>
        </div>
    </div>
</template>
<script>
    import { queryJobDetail } from '@/api/service'
    export default {
        name: 'jobDetail',
        data() {
            return {
                activeResume: {
                    id: '',
                    name: '',
                    salary: '',
                    numberRecruits: '',
                    education: '',
                    workingLife: '',
                    workPlace: '',
                    jobDescription: '',
                    companyInfo: '',
                    scale: '',
                    nature: '',
                    industry: '',
                    jobNature: '',
                    jobHuntDepart: '',
                    pubTime: '',
                    endTime: '',
                    ageRange: '',
                    sexRange: '',
                    languageRange: '',
                    resumeLanguageRange: '',
                    contact: '',
                    jobQua: ''
                }
            }
        },
        computed: {
            isLogin () {
                return !!localStorage.getItem('userInfo')
            }
        },
        mounted() {
            if (this.$route.query.id) {
                this.getResumeDetail(this.$route.query.id)
            }
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
                queryJobDetail({id: id}).then((res) => {
                    console.log(res)
                    loading.close()
                    let data = res.data
                    for(let prop in res.data) {
                        this.$set(this.activeResume, prop, res.data[prop])
                    }
                    this.$nextTick(() => {
                        this.jobDetailDialogVisible = true
                    })
                }).catch(() => {
                    loading.close()
                })
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .resume-detail_box {
        width: 100%;
        font-size: 12px;
        width: 1000px;
        margin: 10px auto;
        padding: 0 10px;
        border: 1px solid #cac9cb;
        .job-part {
            .title {
                font-weight: bold;
                font-size: 13px;
                line-height: 25px;
            }
            .des {
                line-height: 20px;
            }
        }
        .table {
            margin: 10px 0;
            .tr {
                display: flex;
                line-height: 30px;
                &:first-child {
                    border-top: 2px solid grey;
                }
            }
            .td {
                flex: 1;
                padding-left: 5px;
                border-bottom: 1px solid rgb(221, 221, 221);
                &:nth-child(2n+1) {
                    flex: none;
                    width: 80px;
                    background-color: #eaeaea;
                }
            }
        }
        .job-title {
            font-size: 14px;
            color: rgb(255, 102, 0);
            font-weight: bold;
            height: 35px;
            line-height: 35px;
        }
        .job-detail {
            width: 100%;
            line-height: 20px;
            .job-control {
                display: flex;
                .label {
                    width: 85px;
                    text-align: left;
                }
                .value {
                    flex: 1;
                }
            }
        }
    }
</style>
