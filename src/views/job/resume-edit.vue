<template>
    <div class="resume-detail_content resume-edit_content">
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
                        <div class="value"><el-input v-model="activeResume.name"></el-input></div>
                    </div>
                    <div class="job-control">
                        <div class="label">性别：</div>
                        <div class="value">
                            <el-select v-model="activeResume.sex" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="borderBottom"></div>
                    <div class="job-control">
                        <div class="label">出生日期：</div>
                        <div class="value">
                            <el-date-picker
                                v-model="activeResume.birth"
                                value-format="yyyy-MM-dd"
                                type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                        </div>
                    </div>
                    <div class="job-control">
                        <div class="label">婚姻状况：</div>
                        <div class="value">
                            <el-select v-model="activeResume.maritalStatus" placeholder="请选择">
                                <el-option
                                v-for="item in options2"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="borderBottom"></div>
                    <div class="job-control">
                        <div class="label">户籍：</div>
                        <div class="value"><el-input v-model="activeResume.householdRegister"></el-input></div>
                    </div>
                    <div class="job-control">
                        <div class="label">民族：</div>
                        <div class="value"><el-input v-model="activeResume.nameFamily"></el-input></div>
                    </div>
                    <div class="borderBottom"></div>
                    <div class="job-control">
                        <div class="label">身高：</div>
                        <div class="value"><el-input v-model="activeResume.height"></el-input></div>
                    </div>
                    <div class="job-control">
                        <div class="label">体重：</div>
                        <div class="value"><el-input v-model="activeResume.weight"></el-input></div>
                    </div>
                    <div class="borderBottom"></div>
                    <div class="job-control">
                        <div class="label">政治面貌：</div>
                        <div class="value">
                            <el-select v-model="activeResume.politicalOutlook" placeholder="请选择">
                                <el-option
                                v-for="item in options3"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="job-control">
                        <div class="label">学历：</div>
                        <div class="value">
                            <el-select v-model="activeResume.education" placeholder="请选择">
                                <el-option
                                v-for="item in options4"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="borderBottom"></div>
                    <div class="job-control">
                        <div class="label">现有职称：</div>
                        <div class="value"><el-input v-model="activeResume.technicalTitle"></el-input></div>
                    </div>
                    <div class="job-control">
                        <div class="label">第二专业：</div>
                        <div class="value"><el-input v-model="activeResume.secondMajor"></el-input></div>
                    </div>
                    <div class="borderBottom"></div>
                    <div class="job-control">
                        <div class="label">现居住地：</div>
                        <div class="value"><el-input v-model="activeResume.placeResidence"></el-input></div>
                    </div>
                    <div class="borderBottom"></div>
                </div>
                <div class="img-righ">
                    <img :src="activeResume.imgUrl" alt="">
                    <span class="modifyBtn">
                        上传头像
                        <input @change="fileUpload($event)" class="file" type="file" name="file"
                            accept="image/jpeg,image/png,image/gif">
                    </span>
                </div>
            </div>
            <div class="resume-title">职业概况</div>
            <div class="resume-detail_flex">
                <div class="job-detail job-colum_2 flex-auto">
                    <div class="job-control">
                        <div class="label">现从事行业：</div>
                        <div class="value"><el-input v-model="activeResume.nowIndustry"></el-input></div>
                    </div>
                    <div class="job-control">
                        <div class="label">现从事职业：</div>
                        <div class="value"><el-input v-model="activeResume.nowJob"></el-input></div>
                    </div>
                    <div class="borderBottom"></div>
                    <div class="job-control">
                        <div class="label">现职位级别：</div>
                        <div class="value"><el-input v-model="activeResume.nowLevel"></el-input></div>
                    </div>
                    <div class="job-control">
                        <div class="label">工作年限：</div>
                        <div class="value"><el-input v-model="activeResume.workingLife"></el-input></div>
                    </div>
                    <div class="borderBottom"></div>
                    <div class="job-control">
                        <div class="label">目前薪水：</div>
                        <div class="value"><el-input v-model="activeResume.salary"></el-input></div>
                    </div>
                    <div class="job-control">
                        <div class="label">海外工作经历：</div>
                        <div class="value"><el-input v-model="activeResume.overseasExperience"></el-input></div>
                    </div>
                    <div class="borderBottom"></div>
                </div>
            </div>
            <div class="resume-title">求职意向</div>
            <div class="resume-detail_flex">
                <div class="job-detail job-colum_2 flex-auto">
                    <div class="job-control">
                        <div class="label">期望工作性质：</div>
                        <div class="value"><el-input v-model="activeResume.workNature"></el-input></div>
                    </div>
                    <div class="job-control">
                        <div class="label">期望工作地区：</div>
                        <div class="value">
                            <el-cascader
                                :options="options7"
                                change-on-select
                                v-model="activeResume.expectedArea"
                                @change="handleChange">
                            </el-cascader>
                            <!-- <el-input v-model="activeResume.expectedArea"></el-input> -->
                        </div>
                    </div>
                    <div class="borderBottom"></div>
                    <div class="job-control">
                        <div class="label">期望从事行业：</div>
                        <div class="value"><el-input v-model="activeResume.expectIndustry"></el-input></div>
                    </div>
                    <div class="job-control">
                        <div class="label">期望从事职业：</div>
                        <div class="value"><el-input v-model="activeResume.jobIntention"></el-input></div>
                    </div>
                    <div class="borderBottom"></div>
                    <div class="job-control">
                        <div class="label">期望薪水：</div>
                        <div class="value"><el-input v-model="activeResume.expectSalary"></el-input></div>
                    </div>
                    <div class="job-control">
                        <div class="label">期望岗位名称：</div>
                        <div class="value"><el-input v-model="activeResume.expectPostName"></el-input></div>
                    </div>
                    <div class="borderBottom"></div>
                    <div class="job-control">
                        <div class="label">到岗时间：</div>
                        <div class="value">
                            <el-select v-model="activeResume.postTime" placeholder="请选择">
                                <el-option
                                v-for="item in options5"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="job-control">
                        <div class="label">其他要求：</div>
                        <div class="value"><el-input v-model="activeResume.otherRequire"></el-input></div>
                    </div>
                    <div class="borderBottom"></div>
                </div>
            </div>
            <div class="resume-title">自我评价/职业目标</div>
            <div class="resume-detail_flex resume-detail_block">
                <div class="job-detail">
                    <div class="job-control flex-auto">
                        <div class="label">自我评价：</div>
                        <div class="value"><el-input type="textarea" :rows="2" v-model="activeResume.selfEvalution"></el-input></div>
                    </div>
                </div>
                <div class="borderBottom"></div>
            </div>
            <div class="resume-title">教育背景<span class="addBtn" @click="addEducation">新增+</span></div>
            <div class="table" v-if="activeResume.educationExperience && activeResume.educationExperience.length > 0" v-for="(item, index) in activeResume.educationExperience" :key="'educationExperience_' + index">
                <div class="theader">
                    <div class="tr">
                        <div class="th table-label">学校名称：</div>
                        <div class="th"><el-input v-model="item.school"></el-input></div>
                        <div class="th table-label">时间：</div>
                        <div class="th">
                            <el-date-picker
                                v-model="item.graduationDate"
                                type="daterange"
                                value-format="yyyy-MM-dd"
                                range-separator=""
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                            </el-date-picker>
                        </div>
                    </div>
                </div>
                <div class="tbody">
                    <div class="tr">
                        <div class="td table-label">专业名称：</div>
                        <div class="td"><el-input v-model="item.major"></el-input></div>
                        <div class="td table-label">学历：</div>
                        <div class="td">
                            <el-select v-model="item.education" placeholder="请选择">
                                <el-option
                                v-for="item in options4"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="tr">
                        <div class="td table-label">所得证书</div>
                        <div class="td"><el-input v-model="item.certificate"></el-input></div>
                        <div class="td table-label">学校性质：</div>
                        <div class="td"><el-input v-model="item.natureOfSchool"></el-input></div>
                    </div>
                </div>
                <div class="tfooter">
                    <div class="delete-btn" @click="deleteEducation(index)">删除此条</div>
                </div>
            </div>
            <div class="resume-title">工作经验<span class="addBtn" @click="addExperience">新增+</span></div>
            <div class="table" v-if="activeResume.handsOnWorkExperience && activeResume.handsOnWorkExperience.length > 0" v-for="(item, index) in activeResume.handsOnWorkExperience" :key="'handsOnWorkExperience_' + index">
                <div class="theader">
                    <div class="tr">
                        <div class="th table-label">公司名称：</div>
                        <div class="th"><el-input v-model="item.company"></el-input></div>
                        <div class="th table-label">时间：</div>
                        <div class="th">
                            <el-date-picker
                                v-model="item.workDate"
                                type="daterange"
                                value-format="yyyy-MM-dd"
                                range-separator=""
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                            </el-date-picker>
                        </div>
                    </div>
                </div>
                <div class="tbody">
                    <div class="tr">
                        <div class="td table-label">所属行业：</div>
                        <div class="td"><el-input v-model="item.industry"></el-input></div>
                        <div class="td table-label">公司性质：</div>
                        <div class="td"><el-input v-model="item.nature"></el-input></div>

                    </div>
                    <div class="tr">
                        <div class="td table-label">职位名称</div>
                        <div class="td"><el-input v-model="item.job"></el-input></div>
                    </div>
                </div>
                <div class="tfooter">
                    <div class="delete-btn" @click="deleteExperience(index)">删除此条</div>
                </div>
            </div>
            <div class="resume-title">语言能力<span class="addBtn" @click="addLanguage">新增+</span></div>
            <div class="table" v-if="activeResume.languages && activeResume.languages.length > 0">
                <div class="theader">
                    <div class="tr">
                        <div class="th">语种名称</div>
                        <div class="th table-label">掌握程度</div>
                    </div>
                </div>
                <div class="tbody">
                    <div class="tr" v-for="(item, index) in activeResume.languages" :key="'languages_' + index">
                        <div class="td"><el-input v-model="item.language"></el-input></div>
                        <div class="td table-label">
                            <el-select v-model="item.degree" placeholder="">
                                <el-option
                                v-for="item in options6"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                </div>
                <div class="tfooter">
                    <div class="delete-btn" @click="deleteLanguage(index)">删除此条</div>
                </div>
            </div>
            <div class="resume-title">联系方式</div>
            <div class="resume-detail_flex">
                <div class="job-detail job-colum_2 flex-auto">
                    <div class="job-control">
                        <div class="label">电话：</div>
                        <div class="value"><el-input v-model="activeResume.phoneNumber"></el-input></div>
                    </div>
                    <div class="job-control">
                        <div class="label">固话：</div>
                        <div class="value"><el-input v-model="activeResume.faxedLine"></el-input></div>
                    </div>
                    <div class="borderBottom"></div>
                    <div class="job-control">
                        <div class="label">QQ：</div>
                        <div class="value"><el-input v-model="activeResume.qq"></el-input></div>
                    </div>
                    <div class="job-control">
                        <div class="label">email：</div>
                        <div class="value"><el-input v-model="activeResume.email"></el-input></div>
                    </div>
                    <div class="borderBottom"></div>
                </div>
            </div>
            <div class="submit">
                <el-button v-if="!activeResume.id" type="primary" size="mini" @click="resumeEditSubmit">创建简历</el-button>
                <el-button v-else type="primary" size="mini" @click="resumeEditSubmit">修改简历</el-button>
            </div>
        </div>
    </div>
</template>
<script>
    import { queryResumeDetail, upload, editResumeSubmit } from '@/api/service'
    import { Input,Select,Option,DatePicker,Cascader } from 'element-ui'
    import area from '@/utils/area'
    export default {
        name: 'resumeEdit',
        components: { [Cascader.name]: Cascader, [DatePicker.name]: DatePicker,[Input.name]: Input, [Select.name]: Select, [Option.name]: Option },
        data() {
            return {
                activeResume: {
                    educationExperience: [],
                    handsOnWorkExperience: [],
                    languages: [],
                    imgUrl: '',
                    expectedArea: []
                },
                options: [{label: '男',value: 0},{label: '女',value: 1}],
                options2: [{label: '未婚',value: 0},{label: '已婚',value: 1}],
                options3: [{label: '党员',value: 0},{label: '共青团员',value: 1},{label: '其他',value: 2}],
                options4: [{label: '博士',value: 0},{label: '研究生',value: 1},{label: '本科',value: 2},{label: '大专',value: 3},{label: '中专',value: 4},{label: '初中',value: 5},{label: '小学',value: 6}],
                options5: [{label: '7天内',value: 0},{label: '1个月内',value: 1},{label: '3个月内',value: 2}],
                options6: [{label: '精通',value: 0},{label: '熟练',value: 1},{label: '一般',value: 2}],
                options7: [],
                src: ''
            }
        },
        mounted() {
            if (this.$route.query.id) {
                this.getResumeDetail(this.$route.query.id)
            }
            let options = [], level1 = {}
            for (let prop in area['province_list']) {
                level1[prop] = {
                    value: prop,
                    label: area['province_list'][prop],
                    children: []
                }
            }
            for (let prop in area['city_list']) {
                let provinceCode = prop.substring(0, 2)
                if (level1[provinceCode + '0000']) {
                    level1[provinceCode + '0000'].children.push({
                        value: prop,
                        label: area['city_list'][prop],
                    })
                }
            }
            for (let prop in level1) {
                options.push(level1[prop])
            }
            this.options7.push(...options)
        },
        computed: {
            isLogin () {
                return !!localStorage.getItem('userInfo')
            }
        },
        methods: {
            handleChange(value) {
                console.log('11111111', value)
            },
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
            fileUpload(event) {
                this.file = event.target.files[0];//获取文件
                var windowURL = window.URL || window.webkitURL;
                this.file = event.target.files[0];
                //创建图片文件的url
                this.src = windowURL.createObjectURL(event.target.files[0]);
                let formdata = new FormData();
                formdata.append('file', this.file);
                upload(formdata).then((res) => {
                    this.activeResume.imgUrl = this.src
                })
            },
            deleteLanguage(index) {
                this.activeResume.languages.splice(index, 1)
            },
            addLanguage() {
                this.activeResume.languages.push({
                    language: '',
                    degree:''
                })
            },
            deleteExperience(index) {
                this.activeResume.handsOnWorkExperience.splice(index, 1)
            },
            addExperience() {
                this.activeResume.handsOnWorkExperience.push({
                    company: '',
                    workDate: [],
                    industry:'',
                    nature: '',
                    job: ''
                })
            },
            deleteEducation(index) {
                this.activeResume.educationExperience.splice(index, 1)
            },
            addEducation() {
                this.activeResume.educationExperience.push({
                    school: '',
                    graduationDate: [],
                    major:'',
                    education: '',
                    certificate: '',
                    natureOfSchool: ''
                })
            },
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
<style lang="scss">
.resume-edit_content {
    .el-cascader {

        width:100%;
        line-height: 28px;
        .el-icon-arrow-down {
            line-height: 28px;
        }
    }
    .el-date-editor.el-input {
        width: 100%;
        .el-input__icon {
            line-height: 28px;
        }
    }
    .el-input__inner {
        height: 28px;
        line-height: 28px;
        border-color: #eaeaea;
    }
    .el-select .el-input .el-select__caret {
        line-height: 28px;
    }
    .el-date-editor--daterange.el-input__inner {
        width: 100%;
    }
    .el-date-editor .el-range__icon,.el-date-editor .el-range__close-icon {
        line-height: 20px;
    }
    .el-select {
        width:100%;
    }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
    .submit {
        text-align: center;
    }
    .err-message{
        font-size: 12px;
        height: 35px;
        line-height: 35px;
        border-bottom: 1px solid grey;
    }
    .table {
        border: 1px solid #EAEAEA;
        margin: 2px 0 10px;
        .tr {
            display: flex;
            .td, .th {
                flex: 1;
                font-size: 12px;
                border-right: 1px solid #EAEAEA;
                border-bottom: 1px solid #EAEAEA;
                height: 30px;
                line-height: 30px;
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
        .tfooter {
            height: 30px;
            border-width: 0 1px 1px 1px;
            line-height: 30px;
            background-color: #f5f5f5;
            text-align: center;
            font-size: 12px;
            .delete-btn {
                display: inline-block;
                cursor: pointer;
            }
        }
    }
    .flex-auto {
        flex: 1;
    }
    .resume-detail_flex {
        display: flex;
        .job-detail {
            margin: 10px 15px 0 0;
            .job-control {
                margin-bottom: 0;
            }
        }
        .img-righ {
            width: 100px;
            padding-top: 10px;
            position: relative;
            img {
                border: 1px solid #dddddd;
                display: block;
                width: 100%;
                height: 120px;
            }
            .modifyBtn {
                font-size: 12px;
                position: absolute;
                top: 134px;
                width: 100%;
                text-align: center;
                color: #999;
                border: 1px solid #999;
                border-radius: 5px;
                height: 20px;
                line-height: 20px;
                overflow: hidden;
            }
            .file {
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                opacity: 0;
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
        margin: 10px 0;
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
            .addBtn {
                float: right;
                cursor: pointer;
            }
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
                width: 95px;
                text-align: right;
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