<template>
    <div class="s-header">
        <div class="s-header-container">
            <div class="part1 clearfix">
                <div class="fl clearfix">
                    <div class="fl logo"><img src="/static/imgs/logo.png" alt="健康人才网"></div>
                    <div class="fl bt">
                        <p class="title">湖南省健康人才网</p>
                        <p class="title-des">HUNAN HEALHT TALENT SERVICE WEBSITE</p>
                    </div>
                </div>
                <div class="fr">
                    <div class="fr-top clearfix">
                        <template v-if="!isLogin">
                            <span class="fr-top1" @click="showLoginDialog">登录</span>
                            <span class="fr-top2" @click="registVisible = true">个人/企业注册</span>
                        </template>
                        <template v-else>
                            <span class="fr-top3" v-if="userType === 2" @mouseover="showTab = true" @mouseout="showTab = false">
                                企业用户-{{ nickName }}
                                <ul class="userSelOptions" v-show="showTab">
                                    <li><router-link tag="a" :to="'/company/company-baseInfo'">基本信息</router-link></li>

                                    <li><router-link tag="a" :to="'/company/job-control'">职位管理</router-link></li>
                                    <li><router-link tag="a" :to="'/company/interview-mana'">面试管理</router-link></li>
                                    <li><router-link tag="a" :to="'/company/talent-pool'">企业人才库</router-link></li>
                                    <li @click="logout">安全退出</li>
                                </ul>
                            </span>
                            <span class="fr-top3" v-if="userType === 1" @mouseover="showTab = true" @mouseout="showTab = false">
                                你好，<span style="color: #d91023">{{ nickName }}</span>
                                <ul class="userSelOptions" v-show="showTab">
                                    <li><router-link tag="a" :to="{ path: '/members/baseInfo' }">基本信息</router-link></li>
                                    <li><router-link tag="a" :to="{ path: '/members/income' }">我的收益</router-link></li>
                                    <li><router-link tag="a" :to="{ path: '/members/resume' }">我的简历</router-link></li>
                                    <li><router-link tag="a" :to="{ path: '/members/score' }">会员积分</router-link></li>
                                    <li><router-link tag="a" :to="{ path: '/members/myjob' }">我的工作</router-link></li>
                                    <li><router-link tag="a" :to="{ path: '/members/myvideo' }">我的视频</router-link></li>
                                    <li><router-link tag="a" :to="{ path: '/members/myorder' }">我的订单</router-link></li>
                                    <li @click="logout">安全退出</li>
                                </ul>
                            </span>
                            <span class="fr-top4" @click="goMail">站内信<i v-if="count > 0">{{ count }}</i></span>
                        </template>


                        <span @click="openDialog">在线留言</span>
                        <transition>
                            <div class="registBox" v-show="registVisible" id="RegistSeqBox">
                                <div class="login-form">
                                    <div class="title">{{registerType === 0 ? '个人注册' : '企业注册'}}</div>
                                    <div class="login-form_control" v-if="registerType === 1">
                                        <input type="text" v-model="regCompanyName" placeholder="企业名称">
                                    </div>
                                    <div class="login-form_control">
                                        <input type="text" v-model="regUserName" placeholder="用户名">
                                    </div>
                                    <div class="login-form_control">
                                        <input type="password" v-model="regPwd" placeholder="密码">
                                    </div>
                                    <div class="login-form_control">
                                        <input type="text" v-model="regTel" placeholder="联系电话">
                                    </div>
                                    <div class="login-form_control">
                                        <input type="text" v-model="regMail" placeholder="邮箱">
                                    </div>
                                    <div class="login-form_control">
                                      <input type="inviteCode" v-model="inviteCode" placeholder="邀请码(选填)">
                                    </div>
                                    <div class="login-form_control">
                                        <span @click="registerType = 0" class="sel" :class="{ active: registerType === 0 }">个人用户</span>
                                        <span @click="registerType = 1" class="sel" :class="{ active: registerType === 1 }">企业用户</span>
                                    </div>
                                    <div class="login-form_control form_control-submit">
                                        <div @click="reg" class="submit">注&nbsp;&nbsp;&nbsp;&nbsp;册</div>
                                    </div>
                                </div>
                            </div>
                        </transition>
                        <div class="loginBox" v-show="dialogVisible" id="LoginSeqBox">
                            <transition>
                                <div class="login-form" v-if="loginType === 1">
                                    <div class="title">
                                        账号登录
                                        <span @click="exchangeLoginType(2)">扫码登录</span>
                                    </div>
                                    <div class="login-form_control">
                                        <input type="text" v-model="username" placeholder="用户名">
                                    </div>
                                    <div class="login-form_control">
                                        <input type="password" v-model="password" placeholder="密码">
                                    </div>
                                    <div class="login-form_control">
                                        <span @click="changeLoginType(1)" :class="{ active: type === 1 }" class="sel">个人用户</span><span @click="changeLoginType(2)" :class="{ active: type === 2 }" class="sel">企业用户</span>
                                    </div>
                                    <div class="login-form_control form_control-submit">
                                        <div class="submit" @click="Login">登&nbsp;&nbsp;&nbsp;&nbsp;录</div>
                                    </div>
                                </div>
                                <div class="login-ewm" v-else>
                                    <div class="title">
                                        扫码登录
                                        <span @click="exchangeLoginType(1)">账号登录</span>
                                    </div>
                                    <div class="pic"><img src="/static/imgs/ewm.png" alt=""></div>
                                    <div class="des">微信登录</div>
                                </div>
                            </transition>
                        </div>
                    </div>
                    <div class="fr-search">
                        <div class="flex">
                            <div class="input">
                                <input type="text" v-model="keywords" @keyup.enter="searchByKeywords">
                            </div>
                            <div class="btn">
                                <div class="search-btn" @click="searchByKeywords">
                                    <i class="el-icon-search"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="part2">
                <ul class="flex">
                    <li class="home" :class="{ 'on': $route.path.indexOf('home') !== -1}">
                        <router-link tag="a" :to="'/home'">首页</router-link>
                    </li>
                    <li :class="{ 'on': $route.path.indexOf('news') !== -1}">
                        <router-link tag="a" :to="'/news'">新闻中心</router-link>
                    </li>
                    <li :class="{ 'on': $route.path.indexOf('education-training') !== -1}">
                        <router-link tag="a" :to="'/education-training'">教育培训</router-link>
                    </li>
                    <li :class="{ 'on': $route.path.indexOf('personnel-list') !== -1 && $route.path.indexOf('senior-personnel-list') === -1}">
                        <router-link tag="a" :to="{ path: '/personnel-list'}">招揽人才</router-link>
                    </li>
                    <li :class="{ 'on': $route.path.indexOf('job-hunting') !== -1}">
                        <router-link tag="a" :to="{ path: '/job-hunting'}">找工作</router-link>
                    </li>
                    <li :class="{ 'on': $route.path.indexOf('senior-personnel-list') !== -1}">
                        <router-link tag="a" :to="{ path: '/senior-personnel-list'}">中高级人才</router-link>
                    </li>
                    <li  :class="{ 'on': $route.path.indexOf('about-us') !== -1}">
                        <router-link tag="a" :to="{ path: '/about-us'}">关于我们</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <el-dialog :visible.sync="centerDialogVisible" width="430px" center :close-on-click-modal="false" :close-on-press-escape="false">
            <span slot="title" class="leaveMsgTitle">在线留言</span>
            <div class="leaveMsgContent">
                <div class="form-control">
                    <div class="label">联&nbsp;&nbsp;系&nbsp;&nbsp人：</div>
                    <div class="input-control"><input type="text" v-model="contactor"></div>
                </div>
                <div class="form-control">
                    <div class="label">联系方式：</div>
                    <div class="input-control"><input type="text" v-model="phoneNumber"></div>
                </div>
                <div class="form-control form-control_textarea">
                    <div class="label">留言内容：</div>
                    <div class="input-control"><textarea v-model="desc"></textarea></div>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button size="mini" @click="centerDialogVisible = false">取 消</el-button>
                <el-button size="mini" type="primary" @click="onSubmit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    import { regAction } from '@/api/login'
    import { leaveMessgage, queryCounts } from '@/api/service'
    import { Message } from 'element-ui'
    export default {
        name: 'sHeader',
        data() {
            return {
                timer: null,
                count: 0,
                keywords: '',
                registerType: 0,
                active: 'home',
                centerDialogVisible: false,
                dialogVisible: false,
                loginType: 1,
                registVisible: false,
                username: '',
                password: '',
                type: 1,
                showTab: false,
                regUserName: '',
                regPwd: '',
                regTel: '',
                regMail: '',
                inviteCode: '',
                regCompanyName: '',
                desc: '',
                contactor: '',
                phoneNumber: ''
            }
        },
        computed: {
            isLogin: function() {
                return this.$store.state.user.isLogin
            },
            userType: function() {
                return this.$store.state.user.type
            },
            nickName: function() {
                return this.$store.state.user.nickname
            },
        },
        mounted() {
            window.addEventListener('scroll',()=>{
                this.dialogVisible = false
                this.registVisible = false
            })
            if (!!this.$store.state.user.id) {
                this.getCounts()
            }
            document.body.addEventListener('click', (e) => {
                var target = e.target,loginSeqBox = document.getElementById('LoginSeqBox'),registSeqBox = document.getElementById('RegistSeqBox')
                if (target.className.indexOf('fr-top1') !== -1 || loginSeqBox === target || this.isChildOf(target, loginSeqBox)) {
                    this.registVisible = false
                    return
                } else if(target.className.indexOf('fr-top2') !== -1 || registSeqBox === target || this.isChildOf(target, registSeqBox)){
                    this.dialogVisible = false
                    return
                } else {
                    this.dialogVisible = false
                    this.registVisible = false
                }
            })
        },
        watch: {
            '$store.state.user.id': function(v) {
                if (!!v) {
                    this.getCounts()
                }
            }
        },
        methods: {
            goMail() {
                if (this.$route.path.indexOf('mail') !== -1 && this.$route.query.count == this.count) {
                    window.location.reload()
                } else {
                    this.$router.push({ path: '/mail', query: {count: this.count} })
                    this.$nextTick(() => {
                        this.count = 0
                    })
                }
            },
            getCounts() {
                this.timer = setInterval(() => {
                    if (this.$store.state.user.id) {
                        queryCounts(this.$store.state.user.id).then(res => {
                            console.log(res)
                            this.count = res.data.count
                            if (res.data.count > 0) {
                                this.$store.dispatch('setCount', true)
                            }
                        })
                    } else {
                        clearInterval(this.timer)
                    }

                }, 5000)
            },
            searchByKeywords() {
                this.$router.push({ path: '/search-result', query: { keywords: this.keywords } })
            },
            onSubmit() {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                leaveMessgage({
                    contactor: this.contactor,
                    phoneNumber: this.phoneNumber,
                    desc: this.desc,
                    id: this.$store.state.user.id
                }).then(res => {
                    loading.close()
                    if (res.success) {
                        this.$message({
                            message: '感谢您的宝贵意见',
                            type: 'success'
                        })
                        this.centerDialogVisible = false
                    } else {
                        this.$message({
                            message: '出错啦',
                            type: 'error'
                        })
                    }
                })

            },
            reg() {
//                const loading = this.$loading({
//                    lock: true,
//                    spinner: 'el-icon-loading',
//                    background: 'rgba(0, 0, 0, 0.1)',
//                    fullscreen: true
//                })
                regAction({
                    userName: this.regUserName,
                    password: this.regPwd,
                    tel: this.regTel,
                    email: this.regMail,
                    type: this.registerType,
                    inviteCode: this.inviteCode,
                    companyName: this.regCompanyName
                }).then(response => {
//                    loading.close()
                    if (response.success) {
                        this.$store.dispatch('SetLoginData', response.data)
                        Message({
                            message: '注册成功',
                            type: 'success'
                        })
                        this.registVisible = false
                    } else {
                        Message({
                            message: '注册失败',
                            type: 'error' + response.message
                        })
                    }
                })
            },
            changeLoginType(type) {
                this.type = type
            },
            Login(){
//                const loading = this.$loading({
//                    lock: true,
//                    spinner: 'el-icon-loading',
//                    background: 'rgba(0, 0, 0, 0.1)',
//                    fullscreen: true
//                })
                this.$store.dispatch('Login', {username: this.username, password: this.password, type: this.type}).then(() => {
//                    loading.close()
                    this.dialogVisible = false
                })
            },
            logout() {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                this.$store.dispatch('LogOut').then(() => {
                    loading.close()
                    this.dialogVisible = false
                })
            },
            isChildOf(child, parent) {
                var parentNode;
                if (child && parent) {
                    parentNode = child.parentNode;
                    while (parentNode) {
                        if (parent === parentNode) {
                            return true;
                        }
                        parentNode = parentNode.parentNode;
                    }
                }
                return false;
            },
            go(e) {
                var path = e.target.getAttribute('path')
                this.active = path
                this.$router.push({ path: '/' + path })
            },
            showLoginDialog() {
                this.dialogVisible = true
            },
            openDialog() {
                this.centerDialogVisible = true
            },
            exchangeLoginType(v) {
                this.loginType = v
            },
            leaveMsg() {

            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .s-header {
        height: 166px;
        background-image: url("../../../assets/header/top-bg.png");
        background-repeat: repeat-x;
        width: 100%;
        min-width: 1000px;
        .loginBox, .registBox {
            position: absolute;
            background-color: #FFF;
            border-radius: 5px;
            width: 200px;
            top: 23px;
            left: 40px;
            z-index: 1;
            box-shadow: 1px 1px 1px 1px #ccc;
            &:after {
                content: '';
                width: 10px;
                height: 10px;
                border-width: 5px;
                border-style: solid;
                border-color: transparent transparent #e6e3e3 transparent;
                position: absolute;
                top: -10px;
                left: 47px;
            }
            .login-ewm {
                padding: 10px;
                .des {
                    font-size: 12px;
                    text-align: center;
                    height: 22px;
                    line-height: 22px;
                }
                .pic {
                    img {
                        display: block;
                        margin: 0 auto;
                        width: 120px;
                    }
                }
                .title {
                    font-size: 14px;
                    height: 35px;
                    line-height: 35px;
                    color: #333;
                    position: relative;
                    span {
                        font-size: 12px;
                        color: #999;
                        position: absolute;
                        top: 0;
                        right: 0;
                        cursor: pointer;
                    }
                }
            }
            .login-form {
                padding: 10px;
                .form_control-submit {
                    .submit {
                        width: 100%;
                        height: 25px;
                        line-height: 25px;
                        background-color: #bc1217;
                        font-size: 12px;
                        text-align: center;
                        color: #FFF;
                        cursor: pointer;
                        border-radius: 5px;
                    }
                }
                .login-form_control {
                    display: flex;
                    margin-bottom: 15px;
                    span.sel {
                        flex: 1;
                        border: 1px solid #dedede;
                        text-align: center;
                        font-size: 12px;
                        color: #666;
                        height: 22px;
                        line-height: 22px;
                        cursor: pointer;
                    }
                    span.active {
                        color: #FFF;
                        background-color: #bc1217;
                        border: none;
                    }
                    input {
                        width: 100%;
                        height: 25px;
                        border: 1px solid #dedede;
                        border-radius: 4px;
                        padding: 0 3px;
                        font-size: 12px;
                        font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
                        color: #666;
                    }
                }
                .title {
                    font-size: 14px;
                    height: 35px;
                    line-height: 35px;
                    color: #333;
                    position: relative;
                    span {
                        font-size: 12px;
                        color: #999;
                        position: absolute;
                        top: 0;
                        right: 0;
                        cursor: pointer;
                    }
                }
            }
        }
        .registBox {
            left: 10px;
            width: 230px;
            &:after {
                left: 140px;
            }
        }
        .dialog-footer {
            display: block;
            margin: 0 auto;
        }
        .leaveMsgTitle {
            color: #666;
        }
        .form-control {
            display: flex;
            width: 100%;
            height: 35px;
            margin-bottom: 10px;
            .label {
                width:70px;
                height: 35px;
                line-height: 35px;
                text-align: right;
                font-size: 12px;
                padding-right: 5px;
            }
            .input-control {
                flex: 1;
                input {
                    height: 35px;
                    width: 100%;
                    border: 1px solid #dedede;
                    background:none;
                    border-radius: 5px;
                    outline: none;
                    padding: 0 5px;
                }
                textarea {
                    height: 60px;
                    width: 100%;
                    resize: none;
                    border: 1px solid #dedede;
                    border-radius: 5px;
                    outline: none;
                    padding: 0 5px;
                }
            }
        }
        .s-header-container {
            width: 1000px;
            height: 100%;
            background-image: url("/static/imgs/bg_02.png");
            background-position: top center;
            margin: 0 auto;
            background-repeat: no-repeat;
            .part2 {
                ul {
                    height: 43px;
                    border: 1px solid #dadada;
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                    overflow: hidden;
                    border-bottom: 0;
                    li {
                        flex: 1;
                        text-align: center;
                        height: 43px;
                        line-height: 43px;
                        cursor: pointer;
                        color: #666666;
                        font-size: 15px;
                        background-repeat: repeat-x;
                        background-image: url("../../../assets/header/nav-bg.png");
                        a {
                            display: block;
                        }
                    }
                    li:hover {
                        color: #FFF;
                        background-image: url("../../../assets/header/nav-bg3.png");
                    }
                    li.on:hover, li.on {
                        color: #FFF;
                        background-image: url("../../../assets/header/nav-bg2.png");
                    }
                }
            }
            .part1 {
                height: 122px;
                .fl {
                    .logo {
                        margin-top: 20px;
                        margin-left: 3px;
                    }
                    .bt {
                        margin-top: 35px;
                        margin-left: 5px;
                        color: #0081d5;
                        .title {
                            font-size: 30px;
                        }
                        .title-des {
                            font-size: 12px;
                        }
                    }
                }
                .fr {
                    .fr-search {
                        height: 30px;
                        margin-right: 3px;
                        .btn {
                            width: 58px;
                            height: 29px;
                            .search-btn {
                                width: 58px;
                                height: 29px;
                                line-height: 29px;
                                border: 1px solid #d12129;
                                background-image: url("../../../assets/header/bt-bg.png");
                                background-repeat: repeat-x;
                                background-position: center;
                                text-align: center;
                                font-size: 20px;
                                color: #FFF;
                                border-top-right-radius: 3px;
                                border-bottom-right-radius: 3px;
                            }
                        }
                        .input {
                            flex: 1;
                            input {
                                background-image: url("../../../assets/header/input-bg.png");
                                background-repeat: repeat-x;
                                border: 1px solid #e7e7e7;
                                width: 100%;
                                height: 29px;
                                background-color: #FFF;
                                background-position: center;
                                border-right: 0;
                                border-top-left-radius: 3px;
                                border-bottom-left-radius: 3px;
                                padding: 0 3px;
                                font-size: 12px;
                                font-family: "Microsoft YaHei";
                                outline: none;
                            }
                        }
                    }
                    .fr-top {
                        width: 250px;
                        margin-top: 30px;
                        margin-bottom: 28px;
                        position: relative;
                        height: 20px;
                        line-height: 20px;
                        > span {
                            position: absolute;
                            font-size: 12px;
                            color: #666666;
                            top: 0;
                            right: 5px;
                            cursor: pointer;
                            &:hover {
                                color: #000;
                                text-decoration: underline;
                            }
                        }
                        .fr-top1 {
                            right: 143px;
                        }
                        .fr-top2 {
                            right: 60px;
                        }
                        .fr-top3 {
                            right: 120px;
                            .userSelOptions {
                                position: absolute;
                                background-color: #FFF;
                                border-radius: 5px;
                                width: 100px;
                                top: 23px;
                                left: 50%;
                                margin-left: -50px;
                                z-index: 10000;
                                box-shadow: 1px 1px 2px 0px #ccc;
                                border: 1px solid #d1d1d1;
                                &:before {
                                    content: '';
                                    width: 100%;
                                    height: 10px;
                                    position: absolute;
                                    left: 0;
                                    top: -8px;
                                    background: transparent;
                                }
                                &:after {
                                    content: '';
                                    width: 10px;
                                    height: 10px;
                                    border-width: 5px;
                                    border-style: solid;
                                    border-color: transparent transparent #e6e3e3 transparent;
                                    position: absolute;
                                    top: -10px;
                                    left: 45px;
                                }
                                li {
                                    display: block;
                                    padding: 0 9px;
                                    line-height: 26px;
                                    text-align: left;
                                    font-size: 12px;
                                    color: #333;
                                }
                            }
                        }
                        .fr-top4 {
                            right: 60px;
                            i {
                                font-style: normal;
                                font-size: 12px;
                                background-color: red;
                                padding: 0 2px;
                                border-radius: 20px;
                                color:#FFF;
                                margin-left: 4px;
                            }
                        }
                        /*.icon {
                            background-repeat: no-repeat;
                            background-position: left center;
                        }
                        > .fr-top1 {
                            background-image: url("../../../assets/header/bg_06.png");
                        }
                        > .fr-top2 {
                            background-image: url("../../../assets/header/bg_08.png");
                        }
                        > .fr-top3 {
                            margin-right: 0;
                            background-image: url("../../../assets/header/bg_10.png");
                        }*/
                    }
                }
            }
        }
    }

    .flex {
        display: flex;
    }
</style>

<style rel="stylesheet/scss" lang="scss">
</style>

