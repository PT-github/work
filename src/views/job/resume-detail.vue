<template>
    <div class="resume-detail_content">
        <div class="resume-detail_box">
            <div class="title-logo clearfix">
                <div class="pic fl">
                    <img src="/static/imgs/logo.png" alt="湖南省健康人才网">
                </div>
                <div class="title fl">
                    湖南省健康人才网
                </div>
            </div>
            <div class="resume-detail_flex">
                <div class="job-detail job-colum_2 flex-auto">
                    <div class="job-control">
                        <div class="label">姓名：</div>
                        <div class="value">{{ activeResume.name }}</div>
                    </div>
                    <div class="job-control">
                        <div class="label">性别：</div>
                        <div class="value">{{ activeResume.sex }}</div>
                    </div>
                    <div class="borderBottom"></div>
                    <div class="job-control">
                        <div class="label">出生日期：</div>
                        <div class="value">{{ activeResume.birth }}</div>
                    </div>
                    <div class="job-control">
                        <div class="label">婚姻状况：</div>
                        <div class="value">{{ activeResume.maritalStatus }}</div>
                    </div>
                    <div class="borderBottom"></div>
                    <div class="job-control">
                        <div class="label">户籍：</div>
                        <div class="value">{{ activeResume.householdRegister }}</div>
                    </div>
                    <div class="job-control">
                        <div class="label">民族：</div>
                        <div class="value">{{ activeResume.nameFamily }}</div>
                    </div>
                    <div class="borderBottom"></div>
                    <div class="job-control">
                        <div class="label">身高：</div>
                        <div class="value">{{ activeResume.height }}</div>
                    </div>
                    <div class="job-control">
                        <div class="label">体重：</div>
                        <div class="value">{{ activeResume.weight }}</div>
                    </div>
                    <div class="borderBottom"></div>
                    <div class="job-control">
                        <div class="label">政治面貌：</div>
                        <div class="value">{{ activeResume.politicalOutlook }}</div>
                    </div>
                    <div class="job-control">
                        <div class="label">学历：</div>
                        <div class="value">{{ activeResume.education }}</div>
                    </div>
                    <div class="borderBottom"></div>
                    <div class="job-control">
                        <div class="label">现有职称：</div>
                        <div class="value">{{ activeResume.technicalTitle }}</div>
                    </div>
                    <div class="job-control">
                        <div class="label">第二专业：</div>
                        <div class="value">{{ activeResume.secondMajor }}</div>
                    </div>
                    <div class="borderBottom"></div>
                    <div class="job-control">
                        <div class="label">现居住地：</div>
                        <div class="value">{{ activeResume.placeResidence }}</div>
                    </div>
                    <div class="borderBottom"></div>
                </div>
                <div class="img-righ">
                    <img :src="activeResume.imgUrl" alt="">
                </div>
            </div>
            <div class="resume-title">职业概况</div>
            <div class="resume-detail_flex">
                <div class="job-detail job-colum_2 flex-auto">
                    <div class="job-control">
                        <div class="label">现从事行业：</div>
                        <div class="value">{{ activeResume.nowIndustry }}</div>
                    </div>
                    <div class="job-control">
                        <div class="label">现从事职业：</div>
                        <div class="value">{{ activeResume.nowJob }}</div>
                    </div>
                    <div class="borderBottom"></div>
                    <div class="job-control">
                        <div class="label">现职位级别：</div>
                        <div class="value">{{ activeResume.nowLevel }}</div>
                    </div>
                    <div class="job-control">
                        <div class="label">工作年限：</div>
                        <div class="value">{{ activeResume.workingLife }}</div>
                    </div>
                    <div class="borderBottom"></div>
                    <div class="job-control">
                        <div class="label">目前薪水：</div>
                        <div class="value">{{ activeResume.salary }}</div>
                    </div>
                    <div class="job-control">
                        <div class="label">海外工作经历：</div>
                        <div class="value">{{ activeResume.overseasExperience }}</div>
                    </div>
                    <div class="borderBottom"></div>
                </div>
            </div>
            <div class="resume-title">求职意向</div>
            <div class="resume-detail_flex">
                <div class="job-detail job-colum_2 flex-auto">
                    <div class="job-control">
                        <div class="label">期望工作性质：</div>
                        <div class="value">{{ activeResume.workNature }}</div>
                    </div>
                    <div class="job-control">
                        <div class="label">期望工作地区：</div>
                        <div class="value">{{ activeResume.expectedArea }}</div>
                    </div>
                    <div class="borderBottom"></div>
                    <div class="job-control">
                        <div class="label">期望从事行业：</div>
                        <div class="value">{{ activeResume.expectIndustry }}</div>
                    </div>
                    <div class="job-control">
                        <div class="label">期望从事职业：</div>
                        <div class="value">{{ activeResume.jobIntention }}</div>
                    </div>
                    <div class="borderBottom"></div>
                    <div class="job-control">
                        <div class="label">期望薪水：</div>
                        <div class="value">{{ activeResume.expectSalary }}</div>
                    </div>
                    <div class="job-control">
                        <div class="label">期望岗位名称：</div>
                        <div class="value">{{ activeResume.expectPostName }}</div>
                    </div>
                    <div class="borderBottom"></div>
                    <div class="job-control">
                        <div class="label">到岗时间：</div>
                        <div class="value">{{ activeResume.postTime }}</div>
                    </div>
                    <div class="job-control">
                        <div class="label">其他要求：</div>
                        <div class="value">{{ activeResume.otherRequire }}</div>
                    </div>
                    <div class="borderBottom"></div>
                </div>
            </div>
            <div class="resume-title">自我评价/职业目标</div>
            <div class="resume-detail_flex resume-detail_block">
                <div class="job-detail">
                    <div class="job-control flex-auto">
                        <div class="label">自我评价：</div>
                        <div class="value">{{ activeResume.selfEvalution }}</div>
                    </div>
                </div>
                <div class="borderBottom"></div>
            </div>
            <div class="resume-title">教育背景</div>
            <div class="table" v-if="activeResume.educationExperience && activeResume.educationExperience.length > 0" v-for="(item, index) in activeResume.educationExperience" :key="'educationExperience_' + index">
                <div class="theader">
                    <div class="tr">
                        <div class="th table-label">学校名称：</div>
                        <div class="th">{{ item.school + '(' + item.enrolmentTime + '-' + item.graduationTime + ')' }}</div>
                    </div>
                </div>
                <div class="tbody">
                    <div class="tr">
                        <div class="td table-label">专业名称：</div>
                        <div class="td">{{item.major}}</div>
                        <div class="td table-label">学历：</div>
                        <div class="td">{{item.education}}</div>

                    </div>
                    <div class="tr">
                        <div class="td table-label">所得证书</div>
                        <div class="td">{{item.certificate}}</div>
                        <div class="td table-label">学校性质：</div>
                        <div class="td">{{item.natureOfSchool}}</div>
                    </div>
                </div>
            </div>
            <div class="resume-title">工作经验</div>
            <div class="table" v-if="activeResume.handsOnWorkExperience && activeResume.handsOnWorkExperience.length > 0" v-for="(item, index) in activeResume.handsOnWorkExperience" :key="'handsOnWorkExperience_' + index">
                <div class="theader">
                    <div class="tr">
                        <div class="th table-label">公司名称：</div>
                        <div class="th">{{ item.company + '(' + item.entryTime + '-' + item.departureTime + ')' }}</div>
                    </div>
                </div>
                <div class="tbody">
                    <div class="tr">
                        <div class="td table-label">所属行业：</div>
                        <div class="td">{{item.industry}}</div>
                        <div class="td table-label">公司性质：</div>
                        <div class="td">{{item.nature}}</div>

                    </div>
                    <div class="tr">
                        <div class="td table-label">职位名称</div>
                        <div class="td">{{item.job}}</div>
                    </div>
                </div>
            </div>
            <div class="resume-title">语言能力</div>
            <div class="table" v-if="activeResume.languages && activeResume.languages.length > 0">
                <div class="theader">
                    <div class="tr">
                        <div class="th">语种名称</div>
                        <div class="th table-label">掌握程度</div>
                    </div>
                </div>
                <div class="tbody">
                    <div class="tr" v-for="(item, index) in activeResume.languages" :key="'languages_' + index">
                        <div class="td">{{item.language}}</div>
                        <div class="td table-label">{{item.degree}}</div>
                    </div>
                </div>
            </div>
            <div class="resume-title">联系方式</div>
            <div class="err-message" v-if="!$store.state.user.isLogin">企业会员注册并登录后才能查看联系方式，点击[<a href="/">回到首页</a>]进行登录或注册</div>
            <div class="resume-detail_flex" v-else>
                <div class="job-detail job-colum_2 flex-auto">
                    <div class="job-control">
                        <div class="label">电话：</div>
                        <div class="value">{{ activeResume.phoneNumber }}</div>
                    </div>
                    <div class="job-control">
                        <div class="label">固话：</div>
                        <div class="value">{{ activeResume.faxedLine }}</div>
                    </div>
                    <div class="borderBottom"></div>
                    <div class="job-control">
                        <div class="label">QQ：</div>
                        <div class="value">{{ activeResume.qq }}</div>
                    </div>
                    <div class="job-control">
                        <div class="label">email：</div>
                        <div class="value">{{ activeResume.email }}</div>
                    </div>
                    <div class="borderBottom"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { queryResumeDetail } from '@/api/service'
    export default {
        name: 'resumeDetail',
        data() {
            return {
                activeResume: {}
            }
        },
        mounted() {
            if (this.$route.query.id) {
                this.getResumeDetail(this.$route.query.id)
            }
        },
        methods: {
            getResumeDetail(id) {
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
                    for (let prop in data) {
                        this.$set(this.activeResume, prop, data[prop])
                    }
                }).catch(() => {
                    loading.close()
                })
            },
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .err-message{
        font-size: 12px;
        height: 35px;
        line-height: 35px;
        border-bottom: 1px solid grey;
    }
    .table {
        border: 1px solid #EAEAEA;
        margin: 2px 0;
        .tr {
            display: flex;
            .td, .th {
                flex: 1;
                font-size: 12px;
                border-right: 1px solid #EAEAEA;
                border-bottom: 1px solid #EAEAEA;
                height: 27px;
                line-height: 27px;
                padding-left: 5px;
                padding-right: 5px;
                overflow: hidden;
                &:last-child {
                    border-right: 0;
                }
            }
            .th {
                background-color: #f5f5f5;
            }
            .table-label {
                width: 94px;
                flex: initial;
            }
        }
        .tbody {
            .tr {
                &:last-child {
                    .td {
                        border-bottom: 0;
                    }
                }
            }
        }
    }
    .flex-auto {
        flex: 1;
    }
    .resume-detail_flex {
        display: flex;
        .job-detail {
            margin: 5px 15px 0 0;
            .job-control {
                margin-bottom: 0;
            }
        }
        .img-righ {
            width: 100px;
            padding-top: 20px;
            img {
                border: 1px solid #dddddd;
                display: block;
                width: 100%;
                height: 120px;
            }
        }
    }
    .resume-detail_block {
        display: block;
    }
    .borderBottom {
        border-bottom: 8px solid #eaeaea;
        height: 8px;
        width: 100%;
    }
    .resume-detail_content {
        background: #226995;
        width: 100%;
        height: 100%;
        padding: 10px 0;
    }
    .resume-detail_box {
        width: 700px;
        margin: 0 auto;
        padding: 10px;
        background: #ffffff;
        .resume-title {
            padding-left: 15px;
            border-bottom: 2px solid #226995;
            background-image: url(../../assets/icon/Icon2.gif);
            background-position: -4px center;
            background-repeat: no-repeat;
            font-size: 12px;
            color: #333;
            height: 28px;
            line-height: 28px;
        }
    }
    .title-logo {
        width: 100%;
        margin: 10px auto 0px;
        padding-left: 5px;
        padding-bottom: 10px;
        border-bottom: 2px solid #226995;
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
        margin: 20px auto;
        display: flex;
        flex-wrap: wrap;
        .job-control {
            width: 33.33%;
            margin-bottom: 5px;
            display: flex;
            font-size: 12px;
            .label {
                width: 100px;
                text-align: left;
                padding-right: 10px;
                line-height: 27px;
            }
            .value {
                flex: 1;
                line-height: 27px;
            }
        }
        .job-control_auto {
            width: 100%;
        }
    }
    .job-colum_2 {
        .job-control {
            width: 50%;
        }
    }
</style>