<template>
    <div class="s-header">
        <div class="s-header-container">
            <div class="part1 clearfix">
                <div class="fl clearfix">
                    <div class="fl logo"><img src="../../../assets/header/logo.png" alt="健康人才网"></div>
                    <div class="fl bt">
                        <p class="title">湖南省健康服务业协会</p>
                        <p class="title-des">HUNAN HEALHT SERVICE INDUSTRY ASSOCLATION</p>
                    </div>
                </div>
                <div class="fr">
                    <div class="fr-top clearfix">
                        <router-link tag='a' :to="'/'" class="fl fr-top1 icon">会员中心</router-link>
                        <router-link tag='a' :to="'/'" class="fl fr-top2 icon">个人会员</router-link>
                        <router-link tag='a' :to="'/'" class="fl fr-top3 icon">企业会员</router-link>
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
                    <li @click="go" path="news-center" class="" :class="{ 'on': active === 'news-center'}">新闻中心</li>
                    <li @click="go" path="education-training" class="" :class="{ 'on': active === 'education-training'}">教育培训</li>
                    <li @click="go" path="certificate" class="" :class="{ 'on': active === 'certificate'}">证书查询</li>
                    <li @click="go" path="shiftinfo" class="" :class="{ 'on': active === 'shiftinfo'}">开班信息</li>
                    <li @click="go" path="video" class="" :class="{ 'on': active === 'video'}">视频教学</li>
                    <li @click="go" path="job-hunting" class="" :class="{ 'on': active === 'job-hunting'}">招聘求职</li>
                    <li @click="go" path="teacher" class="" :class="{ 'on': active === 'teacher'}">优秀导师</li>
                    <li @click="go" path="about-us" class="" :class="{ 'on': active === 'about-us'}">关于我们</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'sHeader',
        data() {
            return {
                active: 'home'
            }
        },
        methods: {
            go(e) {
                var path = e.target.getAttribute('path')
                this.active = path
                this.$router.push({ path: '/' + path })
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
        .s-header-container {
            width: 1000px;
            height: 100%;
            background-image: url("../../../assets/header/bg_02.png");
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
                        > a {
                            margin-right: 25px;
                            height: 20px;
                            line-height: 20px;
                            width: 65px;
                            font-size: 12px;
                            text-align: right;
                            color: #666666;
                        }
                        .icon {
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
                        }
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

