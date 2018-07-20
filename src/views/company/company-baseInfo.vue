<template>
    <div class="company-baseInfo">
        <ul class="tab clearfix">
            <li :class="{on: active === 0}" @click="setActive(0)">基本信息</li>
            <li :class="{on: active === 1}" @click="setActive(1)">公司图片</li>
            <li :class="{on: active === 2}" @click="setActive(2)">营业执照</li>
            <li :class="{on: active === 3}" @click="setActive(3)">账户信息</li>
            <li :class="{on: active === 4}" @click="setActive(4)">密码修改</li>
        </ul>
        <ul class="baseinfo clearfix" v-show="active === 0">
            <li>
                <div class="label">公司名称：</div>
                <div class="value">{{ companyData.companyName }}</div>
            </li>
            <li>
                <div class="label">公司规模：</div>
                <div class="value">{{ companyData.companySize }}</div>
            </li>
            <li>
                <div class="label">公司性质：</div>
                <div class="value">{{ companyData.natureOfCompany }}</div>
            </li>
            <li>
                <div class="label">法人：</div>
                <div class="value">{{ companyData.legalPerson }}</div>
            </li>
            <li>
                <div class="label">公司注册地：</div>
                <div class="value">{{ companyData.regSite }}</div>
            </li>
            <li>
                <div class="label">联系方式：</div>
                <div class="value">{{ companyData.contact }}</div>
            </li>
            <li>
                <div class="label">联系人：</div>
                <div class="value">{{ companyData.contacts }}</div>
            </li>
        </ul>
        <div class="pic-list" v-show="active === 1">
            <template v-if="companyData.imgUrls && companyData.imgUrls.length > 0" v-for="item in companyData.imgUrls">
                <img :src="item" alt="">
            </template>
        </div>
        <div class="pic-list" v-show="active === 2">
            <template v-if="companyData.businessLicense && companyData.businessLicense.length > 0" v-for="item in companyData.businessLicense">
                <img :src="item" alt="">
            </template>
        </div>
        <ul class="baseinfo clearfix" v-show="active === 3">
            <li>
                <div class="label">账户名称：</div>
                <div class="value">{{ companyData.account }}</div>
            </li>
            <li>
                <div class="label">账户状态：</div>
                <div class="value">{{ companyData.accountState }}</div>
            </li>
            <li>
                <div class="label">账户等级：</div>
                <div class="value">{{ companyData.accountLevel }}</div>
            </li>
        </ul>
        <div class="modifyPwd" v-show="active === 4">
            <div class="form">
                <ul class="enter-box clearfix">
                    <li>
                        <div class="label">原始密码：</div>
                        <div class="value"><input type="password" v-model="password" placeholder="请输入原始密码"></div>
                    </li>
                    <li>
                        <div class="label">修改密码：</div>
                        <div class="value"><input type="password" v-model="modifyPwd" placeholder="请输入需要修改的密码"></div>
                    </li>
                    <li>
                        <div class="label">确认密码：</div>
                        <div class="value"><input type="password" v-model="confirmPwd" placeholder="请确认修改的密码"></div>
                    </li>
                </ul>
                <div class="submit-box">
                    <div class="submit-btn" @click="mocifyPwdFun">确认修改</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { queryCompanyMessage, modifyCompanyPassword } from '@/api/service'
    export default {
        name: 'sJobControl',
        data() {
            return {
                active: 0,
                companyData: {},
                password: '',
                modifyPwd: '',
                confirmPwd: ''
            }
        },
        mounted() {
            this.getData()
        },
        methods: {
            mocifyPwdFun() {
                if (!this.password) {
                    this.$message({
                        message: '请输入原始密码',
                        type: 'error'
                    })
                    return
                }
                if (!this.modifyPwd) {
                    this.$message({
                        message: '请输入修改密码',
                        type: 'error'
                    })
                    return
                }
                if (!this.confirmPwd) {
                    this.$message({
                        message: '请输入确认密码',
                        type: 'error'
                    })
                    return
                }
                if (this.confirmPwd !== this.modifyPwd) {
                    this.$message({
                        message: '两次密码不一致',
                        type: 'error'
                    })
                    return
                }
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                modifyCompanyPassword({
                    password: this.password,
                    newPassword: this.modifyPwd,
                    id: this.companyData.id
                }).then(res => {
                    loading.close()
                    if (res.success) {
                        this.$message({
                            message: '密码修改成功',
                            type: 'success'
                        })
                    } else {
                        this.$message({
                            message: '密码修改失败',
                            type: 'error'
                        })
                    }
                }).catch(() => {
                    this.$message({
                        message: '密码修改失败',
                        type: 'error'
                    })
                })
            },
            setActive(i) {
                this.active = i
            },
            getData() {
                /*获取企业基本信息*/
                queryCompanyMessage(this.$store.state.user.id).then(res => {
                    console.log(res)
                    this.companyData = res.data
                })
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .company-baseInfo {
        margin: 20px 0;
        .modifyPwd {
            .form {
                width: 540px;
                margin: 50px auto;
                .submit-box {
                    margin: 20px 0;
                    .submit-btn {
                        width: 100px;
                        height: 30px;
                        line-height: 30px;
                        font-size: 14px;
                        margin: 0 auto;
                        border: 1px solid #CCC;
                        text-align: center;
                        border-radius: 5px;
                        box-shadow: -1px 0px 6px 1px inset #dcdaf5;
                        cursor: pointer;
                    }
                }
                .enter-box {
                    li {
                        display: flex;
                        font-size: 14px;
                        line-height: 35px;
                        .label {
                            width: 100px;
                            color: #666;
                            text-indent: 10px;
                        }
                        .value {
                            flex: 1;
                            input {
                                width: 100%;
                                border-style: solid;
                                border-width: 0 0 1px;
                                border-color: #CCC;
                                background: none;
                                height: 100%;
                                font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
                                color: #333;
                                outline: none;
                            }
                        }
                    }
                }
            }
        }
        .pic-list {
            img {
                width: 80%;
                display: block;
                margin: 20px auto 0;
                &:last-child {
                    margin-bottom: 10px;
                }
            }
        }
        .baseinfo {
            padding: 20px;
            li {
                width: 48%;
                overflow: hidden;
                float: left;
                display: flex;
                height: 30px;
                line-height: 30px;
                color: #666;
                font-size: 13px;
                &:nth-child(2n+1) {
                    margin-right: 4%;
                }
                .label {
                    width: 80px;
                }
                .value {
                    flex: 1;
                    color: #333;
                }
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
    }
</style>