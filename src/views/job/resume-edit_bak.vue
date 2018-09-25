<template>
    <div class="resume-detail_box">
        <div class="title-logo clearfix">
            <div class="pic fl">
                <img src="/static/imgs/logo.png" alt="湖南健康服务业协会">
            </div>
            <div class="title fl">湖南健康服务业协会</div>
        </div>
        <div class="job-detail">
            <div class="job-control">
                <div class="label">姓名：</div>
                <div class="value"><input type="text" v-model="activeResume.name"></div>
            </div>
            <div class="job-control">
                <div class="label">出生日期：</div>
                <div class="value"><input type="text" v-model="activeResume.birth"></div>
            </div>
            <div class="job-control">
                <div class="label">手机：</div>
                <div class="value"><input type="text" v-model="activeResume.phoneNumber"></div>
            </div>
            <div class="job-control">
                <div class="label">性别：</div>
                <div class="value"><input type="text" v-model="activeResume.sex"></div>
            </div>
            <div class="job-control">
                <div class="label">名族：</div>
                <div class="value"><input type="text" v-model="activeResume.nameFamily"></div>
            </div>
            <div class="job-control">
                <div class="label">邮箱：</div>
                <div class="value"><input type="text" v-model="activeResume.email"></div>
            </div>
            <div class="job-control">
                <div class="label">户籍：</div>
                <div class="value"><input type="text" v-model="activeResume.householdRegister"></div>
            </div>
            <div class="job-control">
                <div class="label">身高：</div>
                <div class="value"><input type="text" v-model="activeResume.height"></div>
            </div>
            <div class="job-control">
                <div class="label">QQ：</div>
                <div class="value"><input type="text" v-model="activeResume.qq"></div>
            </div>
            <div class="job-control">
                <div class="label">体重：</div>
                <div class="value"><input type="text" v-model="activeResume.weight"></div>
            </div>
            <div class="job-control">
                <div class="label">政治面貌：</div>
                <div class="value"><input type="text" v-model="activeResume.politicalOutlook"></div>
            </div>
            <div class="job-control">
                <div class="label">学历：</div>
                <div class="value"><input type="text" v-model="activeResume.education"></div>
            </div>
            <div class="job-control">
                <div class="label">固话：</div>
                <div class="value"><input type="text" v-model="activeResume.faxedLine"></div>
            </div>
            <div class="job-control">
                <div class="label">毕业时间：</div>
                <div class="value"><input type="text" v-model="activeResume.graduationTime"></div>
            </div>
            <div class="job-control">
                <div class="label">毕业院校：</div>
                <div class="value"><input type="text" v-model="activeResume.universityGraduatedFrom"></div>
            </div>
            <div class="job-control">
                <div class="label">身份证：</div>
                <div class="value"><input type="text" v-model="activeResume.certificate"></div>
            </div>
            <div class="job-control">
                <div class="label">专业：</div>
                <div class="value"><input type="text" v-model="activeResume.major"></div>
            </div>
            <div class="job-control">
                <div class="label">现有职称：</div>
                <div class="value"><input type="text" v-model="activeResume.technicalTitle"></div>
            </div>
            <div class="job-control">
                <div class="label">第二专业：</div>
                <div class="value"><input type="text" v-model="activeResume.secondMajor"></div>
            </div>
            <div class="job-control">
                <div class="label">现居住地：</div>
                <div class="value"><input type="text" v-model="activeResume.placeResidence"></div>
            </div>
            <div class="job-control">
                <div class="label">求职意向：</div>
                <div class="value"><input type="text" v-model="activeResume.jobIntention"></div>
            </div>
            <div class="job-control">
                <div class="label">期望薪资：</div>
                <div class="value"><input type="text" v-model="activeResume.expectSalary"></div>
            </div>
            <div class="job-control">
                <div class="label">职位：</div>
                <div class="value"><input type="text" v-model="activeResume.job"></div>
            </div>

            <div class="job-control">
                <div class="label">希望工作地区：</div>
                <div class="value"><input type="text" v-model="activeResume.expectedArea"></div>
            </div>

            <div class="job-control">
                <div class="label">到岗时间：</div>
                <div class="value"><input type="text" v-model="activeResume.postTime"></div>
            </div>
            <div class="job-control job-control_auto">
                <div class="label">工作经验：</div>
                <div class="value">
                    <div class="table">
                        <div class="theader">
                            <div class="tr">
                                <div class="th">入职时间</div>
                                <div class="th">离职时间</div>
                                <div class="th">公司</div>
                                <div class="th">职位</div>
                                <div class="th">工作描述</div>
                                <div class="th">离职原因</div>
                            </div>
                        </div>
                        <div class="tbody">
                            <div class="tr" v-if="activeResume.handsOnWorkExperience && activeResume.handsOnWorkExperience.length > 0" :key="'job-' + index" v-for="(item, index) in activeResume.handsOnWorkExperience">
                                <div class="td"><input type="text" v-model="item.entryTime"></div>
                                <div class="td"><input type="text" v-model="item.departureTime"></div>
                                <div class="td"><input type="text" v-model="item.company"></div>
                                <div class="td"><input type="text" v-model="item.job"></div>
                                <div class="td"><input type="text" v-model="item.jobDes"></div>
                                <div class="td"><input type="text" v-model="item.reseanForLeaving"></div>
                                <span class="delete" @click="deleteWordExperience(index)">x</span>
                            </div>
                        </div>
                    </div>
                    <div class="addMore" @click="addWordExperience">新增一条</div>
                </div>
            </div>
            <div class="job-control job-control_auto">
                <div class="label">教育/培训经历：</div>
                <div class="value">
                    <div class="table">
                        <div class="theader">
                            <div class="tr">
                                <div class="th">入学时间</div>
                                <div class="th">毕业时间</div>
                                <div class="th">学校</div>
                                <div class="th">学历</div>
                                <div class="th">专业</div>
                                <div class="th">专业描述</div>
                            </div>
                        </div>
                        <div class="tbody">
                            <div class="tr" v-if="activeResume.educationExperience && activeResume.educationExperience.length > 0" :key="'education-pop-' + index" v-for="(item, index) in activeResume.educationExperience">
                                <div class="td"><input type="text" v-model="item.enrolmentTime"></div>
                                <div class="td"><input type="text" v-model="item.graduationTime"></div>
                                <div class="td"><input type="text" v-model="item.school"></div>
                                <div class="td"><input type="text" v-model="item.education"></div>
                                <div class="td"><input type="text" v-model="item.major"></div>
                                <div class="td"><input type="text" v-model="item.professionalDes"></div>
                                <span class="delete" @click="deleteEducationExperience(index)">x</span>
                            </div>
                        </div>
                    </div>
                    <div class="addMore" @click="addEducationExperience">新增一条</div>
                </div>
            </div>
            <div class="job-control job-control_auto">
                <div class="label">工作技能：</div>
                <div class="value">
                    <div class="value"><input type="text" v-model="activeResume.workingSkills"></div>
                </div>
            </div>
            <div class="job-control job-control_auto">
                <div class="label">自我评价：</div>
                <div class="value"><textarea v-model="activeResume.selfEvalution"></textarea></div>
            </div>
        </div>
        <div class="submit-area">
            <el-button size="small" type="primary" @click="resumeEditSubmit">提&nbsp;&nbsp;&nbsp;&nbsp;交</el-button>
            <!--<el-button size="small" icon="el-icon-view" @click="">预览</el-button>-->
        </div>
    </div>
</template>
<script>
    import { queryResumeDetail, editResumeSubmit } from '@/api/service'
    export default {
        name: 'resumeEdit',
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
                    expectSalary: '',
                    job: '',
                    expectedArea: '',
                    postTime: '',
                    handsOnWorkExperience: [],
                    educationExperience: [],
                    workingSkills: '',
                    selfEvalution: ''
                }
            }
        },
        mounted() {
            if (this.$route.query.id) {
                this.getResumeDetail(this.$route.query.id)
            }
        },
        methods: {
            resumeEditSubmit() {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                let ms = '新增'
                if (this.activeResume.id) {
                    ms = '修改'
                }
                editResumeSubmit(Object.assign(this.activeResume, {userId: this.$store.state.user.id})).then(res => {
                    loading.close()
                    if (res.success) {
                        this.$message({
                            message: '简历' + ms + '成功，页面即将返回',
                            type: 'success'
                        })
                        setTimeout(() => {
                            history.back()
                        }, 1000)
                    } else {
                        this.$message({
                            message: '简历' + ms + '失败:' + res.message,
                            type: 'error'
                        })
                    }
                })
            },
            addWordExperience() {
                this.activeResume.handsOnWorkExperience.push({
                    entryTime: '',
                    departureTime: '',
                    company: '',
                    job: '',
                    jobDes: '',
                    reseanForLeaving: ''
                })
            },
            deleteWordExperience(index) {
                this.activeResume.handsOnWorkExperience.splice(index, 1)
            },
            addEducationExperience() {
                this.activeResume.educationExperience.push({
                    enrolmentTime: '',
                    graduationTime: '',
                    school: '',
                    education: '',
                    major: '',
                    professionalDes: ''
                })
            },
            deleteEducationExperience(index) {
                this.activeResume.educationExperience.splice(index, 1)
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
                    this.activeResume.expectSalary = data.expectSalary || ''
                    this.activeResume.job = data.job || ''
                    this.activeResume.expectedArea = data.expectedArea || ''
                    this.activeResume.postTime = data.postTime || ''
                    if (data.handsOnWorkExperience && data.handsOnWorkExperience.length > 0) {
                        this.activeResume.handsOnWorkExperience.push(...data.handsOnWorkExperience)
                    }
                    if (data.educationExperience && data.educationExperience.length > 0) {
                        this.activeResume.educationExperience.push(...data.educationExperience)
                    }
                    this.activeResume.workingSkills = data.workingSkills || ''
                    this.activeResume.selfEvalution = data.selfEvalution || ''
                    this.$nextTick(() => {
                        this.jobDetailDialogVisible = true
                    })
                }).catch(() => {
                    loading.close()
                })
            },
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .submit-area {
        text-align: center;
        width: 100%;
    }
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
                text-align: right;
                padding-right: 10px;
                line-height: 25px;
            }
            .value {
                flex: 1;
                line-height: 25px;
                input {
                    height: 25px;
                    width: 100%;
                    border-radius: 3px;
                    border: 1px solid #ccc;
                    background: none;
                    padding: 0 10px;
                }
                textarea {
                    height: 50px;
                    width: 100%;
                    border-radius: 3px;
                    border: 1px solid #ccc;
                    background: none;
                    padding: 0 10px;
                }
                .table {
                    border: 1px solid #cac9cb;
                    .tr {
                        display: flex;
                        position: relative;
                        .td, .th {
                            flex: 1;
                            font-size: 12px;
                            border-right: 1px solid #cac9cb;
                            border-bottom: 1px solid #cac9cb;
                            &:last-child {
                                border-right: 0;
                            }
                        }
                        .td {
                            padding-left: 5px;
                            padding-right: 5px;
                            input {
                                margin: 2px;
                            }
                        }
                        .th {
                            background-color: rgba(204, 204, 204, .3);
                            text-align: center;
                        }
                    }
                    .tbody {
                        .tr {
                            .delete {
                                cursor: pointer;
                                position: absolute;
                                top: 0;
                                right: -5px;
                                color: red;
                                font-size: 10px;
                                height: 8px;
                                line-height: 8px;
                                width: 8px;
                                text-align: center;
                                border-radius: 10px;
                                display: none;
                            }
                            &:last-child {
                                .td {
                                    border-bottom: 0;
                                }
                            }
                        }
                        .tr:hover {
                            .delete {
                                display: block;
                            }
                        }
                    }
                }
                .addMore {
                    width: 100px;
                    margin: 10px auto;
                    text-align: center;
                    border: 1px solid #CCC;
                    height: 30px;
                    line-height: 30px;
                    border-radius: 2px;
                    cursor: pointer;
                }
            }
        }
        .job-control_auto {
            width: 100%;
        }
    }
</style>