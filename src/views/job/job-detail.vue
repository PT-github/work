<template>
    <div class="resume-detail_box">
        <div class="title-logo clearfix">
            <div class="pic fl">
                <img src="/static/imgs/logo.png" alt="湖南省健康人才网">
            </div>
            <div class="title fl">湖南省健康人才网</div>
        </div>
        <div class="job-detail">
            <div class="job-control">
                <div class="label">职位名称：</div>
                <div class="value">{{activeResume.name}}</div>
            </div>
            <div class="job-control">
                <div class="label">职位月薪：</div>
                <div class="value">{{activeResume.salary}}</div>
            </div>
            <div class="job-control">
                <div class="label">招聘人数：</div>
                <div class="value">{{activeResume.numberRecruits}}</div>
            </div>
            <div class="job-control">
                <div class="label">学历要求：</div>
                <div class="value">{{activeResume.education}}</div>
            </div>
            <div class="job-control">
                <div class="label">工作年限：</div>
                <div class="value">{{activeResume.workingLife}}</div>
            </div>
            <div class="job-control">
                <div class="label">上班地点：</div>
                <div class="value">{{activeResume.workPlace}}</div>
            </div>
            <div class="job-control">
                <div class="label">职位描述：</div>
                <div class="value">{{activeResume.jobDescription}}</div>
            </div>
            <div class="job-control">
                <div class="label">公司信息：</div>
                <div class="value">{{activeResume.companyInfo}}</div>
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
                    companyInfo: ''
                }
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
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .resume-detail_box {
        width: 1000px;
        margin: 10px auto;
        border: 2px solid #007ed3;
        padding: 10px;
        border-radius: 5px;
    }
    .title-logo {
        width: 100%;
        margin: 10px auto 0px;
        padding-left: 20px;
        padding-bottom: 10px;
        border-bottom: 2px solid #007ed3;
        .pic {
            img {
                width: 35px;
            }
        }
        .title {
            margin-left: 10px;
            margin-top: 8px;
        }
    }
    .job-detail {
        width: 100%;
        margin: 20px 0;
        .job-control {
            display: flex;
            font-size: 12px;
            .label {
                width: 85px;
                text-align: right;
                padding-right: 10px;
                line-height: 35px;
            }
            .value {
                flex: 1;
                line-height: 35px;
            }
        }
    }
</style>
