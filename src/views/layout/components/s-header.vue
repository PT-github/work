<template>
    <div class="s-header">
        <div class="s-header-container">
            <div class="part1 clearfix">
                <div class="fl clearfix">
                    <div class="fl logo"><img src="/static/imgs/logo.png" alt="健康人才网"></div>
                    <div class="fl bt">
                        <p class="title">湖南省健康服务业协会</p>
                        <p class="title-des">HUNAN HEALHT SERVICE INDUSTRY ASSOCLATION</p>
                    </div>
                </div>
                <div class="fr">
                    <div class="fr-top clearfix">
                        <span class="fr-top1">个人/企业注册</span>
                        <span class="fr-top2" @click="showLoginDialog">登录</span>
                        <span @click="openDialog">在线留言</span>
                        <div class="loginBox" v-show="dialogVisible" id="LoginSeqBox">
                            <transition>
                                <div class="login-form" v-if="loginType === 1">
                                    <div class="title">
                                        账号登录
                                        <span @click="exchangeLoginType(2)">扫码登录</span>
                                    </div>
                                    <div class="login-form_control">
                                        <input type="text" placeholder="用户名">
                                    </div>
                                    <div class="login-form_control">
                                        <input type="password" placeholder="密码">
                                    </div>
                                    <div class="login-form_control">
                                        <span class="sel active">个人用户</span><span class="sel">企业用户</span>
                                    </div>
                                    <div class="login-form_control form_control-submit">
                                        <div class="submit">登录</div>
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
                                <input type="text">
                            </div>
                            <div class="btn">
                                <div class="search-btn">
                                    <i class="el-icon-search"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="part2">
                <ul class="flex">
                    <li @click="go" path="home" class="home" :class="{ 'on': active === 'home'}">首页</li>
                    <li @click="go" path="news" class="" :class="{ 'on': active === 'news'}">新闻中心</li>
                    <li @click="go" path="education-training" class="" :class="{ 'on': active === 'education-training'}">教育培训</li>
                    <li @click="go" path="personnel-list" class="" :class="{ 'on': active === 'personnel-list'}">招揽人才</li>
                    <li @click="go" path="job-hunting" class="" :class="{ 'on': active === 'job-hunting'}">找工作</li>
                    <li @click="go" path="senior-personnel-list" class="" :class="{ 'on': active === 'senior-personnel-list'}">中高级人才</li>
                    <li @click="go" path="about-us" class="" :class="{ 'on': active === 'about-us'}">关于我们</li>
                </ul>
            </div>
        </div>
        <el-dialog :visible.sync="centerDialogVisible" width="430px" center :close-on-click-modal="false" :close-on-press-escape="false">
            <span slot="title" class="leaveMsgTitle">在线留言</span>
            <div class="leaveMsgContent">
                <div class="form-control">
                    <div class="label">主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;题：</div>
                    <div class="input-control"><input type="text"></div>
                </div>
                <div class="form-control">
                    <div class="label">联系方式：</div>
                    <div class="input-control"><input type="text"></div>
                </div>
                <div class="form-control form-control_textarea">
                    <div class="label">留言内容：</div>
                    <div class="input-control"><textarea></textarea></div>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button size="mini" @click="centerDialogVisible = false">取 消</el-button>
                <el-button size="mini" type="primary" @click="centerDialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        name: 'sHeader',
        data() {
            return {
                active: 'home',
                centerDialogVisible: false,
                dialogVisible: false,
                loginType: 1
            }
        },
        mounted() {
            window.addEventListener('scroll',()=>{
                this.dialogVisible = false
            })
            document.body.addEventListener('click', (e) => {
                var target = e.target,loginSeqBox = document.getElementById('LoginSeqBox')
                if (target.className.indexOf('fr-top2') !== -1 || loginSeqBox === target || this.isChildOf(target, loginSeqBox)) {
                    return
                } else {
                    this.dialogVisible = false
                }
            })
        },
        methods: {
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
        .loginBox {
            position: absolute;
            background-color: #FFF;
            border-radius: 5px;
            width: 180px;
            top: 23px;
            left: 40px;
            z-index: 10000;
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
                    margin-bottom: 5px;
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
                            right: 60px;
                        }
                        .fr-top2 {
                            right: 143px;
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

