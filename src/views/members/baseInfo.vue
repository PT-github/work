<template>
    <div class="s-baseInfo">
        <div class="title">我的账户</div>
        <div class="pic">
            <img :src="userInfo.imgUrl" alt="">
            <span class="modifyBtn">
                头像修改
                <input @change="fileUpload($event)" class="file" type="file" name="file"
                       accept="image/jpeg,image/png,image/gif">
            </span>
        </div>
        <div class="form clearfix">
            <div class="form-control">
                <div class="label">登录名：</div>
                <div class="value">{{ userInfo.account }}</div>
            </div>
            <div class="form-control">
                <div class="label">昵称：</div>
                <div class="value">{{ userInfo.nickname }}</div>
            </div>
            <div class="form-control">
                <div class="label">真实姓名：</div>
                <div class="value">{{ userInfo.truename }}</div>
            </div>
            <div class="form-control">
                <div class="label">生日：</div>
                <div class="value">{{ userInfo.birth }}</div>
            </div>
            <div class="form-control">
                <div class="label">手机：</div>
                <div class="value">{{ userInfo.tel }}</div>
            </div>
            <div class="form-control">
                <div class="label">手机是否验证：</div>
                <div class="value">{{ userInfo.telIsValidate == 1 ? '是' : '否' }}</div>
            </div>
            <div class="form-control">
                <div class="label">邮箱：</div>
                <div class="value">{{ userInfo.mail }}</div>
            </div>
            <div class="form-control">
                <div class="label">邮箱是否验证：</div>
                <div class="value">{{ userInfo.mailIsValidate == 1 ? '是' : '否' }}</div>
            </div>
            <div class="form-control" v-if="userInfo.bindMxChat == 1">
                <div class="label">微信号：</div>
                <div class="value">{{ userInfo.mxChat }}</div>
            </div>
            <div class="form-control">
                <div class="label">是否绑定微信：</div>
                <div class="value">{{ userInfo.bindMxChat == 1 ? '是' : '否' }}</div>
            </div>
            <div class="form-control">
                <div class="label">我的邀请码：</div>
                <div class="value">{{ userInfo.invitedCode }}</div>
            </div>
        </div>
        <div class="createResume"><span @click="showPopup">账户修改</span></div>
        <el-dialog title="账户修改" :visible.sync="dialogFormVisible">
            <el-form size="small" :model="form" label-width="100px">
                <el-form-item label="昵称">
                    <el-input v-model="form.nickname" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="真实姓名">
                    <el-input v-model="form.truename" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="生日">
                    <el-date-picker v-model="form.birth" value-format="yyyy-MM-dd" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
                <el-form-item label="手机">
                    <el-input v-model="form.tel" auto-complete="off">
                        <el-button slot="append" type="primary">验证</el-button>
                    </el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="form.mail" auto-complete="off">
                        <el-button slot="append" type="primary" @click="emailValidateVisible = true">验证</el-button>
                    </el-input>
                </el-form-item>
                <el-form-item label="微信号">
                    <el-input v-model="form.mxChat" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="邀请码">
                    <el-input :readonly="true" v-model="form.invitedCode" auto-complete="off">
                        <el-button slot="append" type="primary">一键生成</el-button>
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="modifyUserInfoFun">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="账户修改" :visible.sync="emailValidateVisible">
            <el-form size="small" :model="validateForm" label-width="100px">
                <el-form-item label="验证码">
                    <el-input v-model="validateForm.emailCode" placeholder="请输入邮箱收到的验证码"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="emailValidateVisible = false">取 消</el-button>
                <el-button type="primary" @click="validateEmailCodeFun">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import {queryMyBaseInfo, upload, validateEmailCode, modifyUserInfo} from '@/api/service'
    import {Form, FormItem, Input, DatePicker} from 'element-ui'
    import axios from 'axios'

    export default {
        name: 'sBaseInfo',
        data() {
            return {
                userInfo: {},
                file: '',
                src: '',
                formData: new FormData(),
                dialogFormVisible: false,
                form: {
                    nickname: '',
                    truename: '',
                    birth: '',
                    tel: '',
                    telIsValidate: 0,
                    mail: '',
                    mailIsValidate: 0,
                    invitedCode: '',
                    bindMxChat: 0
                },
                validateForm: {
                    emailCode: ''
                },
                emailValidateVisible: false
            }
        },
        mounted() {
            this.getData()
        },
        methods: {
            modifyUserInfoFun() {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                modifyUserInfo(this.form).then(res => {
                    loading.close()
                    this.$message({
                        message: '用户信息修改成功',
                        type: 'success'
                    })
                    this.dialogFormVisible = false
                    this.$nextTick(() => {
                        this.getData()
                    })
                }).catch((error) => {
                    loading.close()
                    console.log(error, '用户信息修改失败')
                })
            },
            validateEmailCodeFun() {
                if (!this.validateForm.emailCode) {
                    this.$message({
                        message: '请输入邮箱的验证码',
                        type: 'error'
                    })
                    return
                } else {
                    const loading = this.$loading({
                        lock: true,
                        spinner: 'el-icon-loading',
                        background: 'rgba(0, 0, 0, 0.1)',
                        fullscreen: true
                    })
                    validateEmailCode({
                        email: this.form.mail,
                        code: this.validateForm.emailCode
                    }).then(res => {
                        loading.close()
                        this.$message({
                            message: '邮箱校验成功',
                            type: 'success'
                        })
                        this.emailValidateVisible = true
                    }).catch(() => {
                        loading.close()
                    })
                }
            },
            showPopup() {
                this.dialogFormVisible = true
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
                    //做处理
                    this.$set(this.userInfo, 'imgUrl', this.src)
                    this.$message({
                        message: '头像修改成功',
                        type: 'success'
                    })
                })
            },
            getData() {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                queryMyBaseInfo({id: this.$store.state.user.id}).then(res => {
                    loading.close()
                    for (let prop in res.data) {
                        this.$set(this.userInfo, prop, res.data[prop])
                        this.$set(this.form, prop, res.data[prop])
                    }
                }).catch(() => {
                    loading.close()
                })
            },
        },
        components: {
            [Input.name]: Input,
            [FormItem.name]: FormItem,
            [DatePicker.name]: DatePicker,
            [Form.name]: Form
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .s-baseInfo {
        width: 100%;
        padding: 10px 0;
        background-color: #FFF;
        position: relative;
        min-height: 300px;
        .createResume {
            font-size: 14px;
            border: 1px solid #CCC;
            height: 30px;
            line-height: 30px;
            text-align: center;
            margin: 10px;
            border-radius: 5px;
            cursor: pointer;
        }
        .pic {
            position: absolute;
            width: 85px;
            height: 104px;
            right: 35px;
            top: 65px;
            img {
                width: 100%;
                height: 100%;
            }
            .modifyBtn {
                font-size: 12px;
                position: absolute;
                bottom: -22px;
                width: 100%;
                text-align: center;
                color: #999;
                border: 1px solid #999;
                border-radius: 5px;
                height: 20px;
                line-height: 20px;
                overflow: hidden;
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
        .form {
            margin: 10px 0 10px 40px;
            .form-control {
                width: 100%;
                float: left;
                display: flex;
                height: 35px;
                line-height: 35px;
                font-size: 12px;
                margin-bottom: 10px;
                .label {
                    width: 100px;
                    text-align: left;
                    color: #666;
                }
                .value {
                    flex: 1;
                }
            }
        }
        .title {
            height: 35px;
            line-height: 35px;
            text-indent: 20px;
            border: 1px solid #CCC;
            margin: 10px 10px 0;
            font-size: 14px;
            border-radius: 5px;
        }
    }
</style>

<style rel="stylesheet/scss" lang="scss">
</style>

