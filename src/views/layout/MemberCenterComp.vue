<template>
    <div class="member-center-comp">
        <div class="item-left">
            <ul class="nav" v-if="$store.state.user.type === 1">
                <li class="nav-li" :class="{active: $route.path.indexOf('baseInfo') !== -1}">
                    <router-link tag="a" :to="{ path: '/members/baseInfo' }">基本信息</router-link>
                </li>
                <li class="nav-li" :class="{active: $route.path.indexOf('income') !== -1}">
                    <router-link tag="a" :to="{ path: '/members/income' }">我的收益</router-link>
                </li>
                <li class="nav-li" :class="{active: $route.path.indexOf('resume') !== -1}">
                    <router-link tag="a" :to="{ path: '/members/resume' }">我的简历</router-link>
                </li>
                <li class="nav-li" :class="{active: $route.path.indexOf('score') !== -1}">
                    <router-link tag="a" :to="{ path: '/members/score' }">会员积分</router-link>
                </li>
                <li class="nav-li" :class="{active: $route.path.indexOf('myjob') !== -1}">
                    <router-link tag="a" :to="{ path: '/members/myjob' }">我的工作</router-link>
                </li>
                <li class="nav-li" :class="{active: $route.path.indexOf('myvideo') !== -1}">
                    <router-link tag="a" :to="{ path: '/members/myvideo' }">我的视频</router-link>
                </li>
                <li class="nav-li" :class="{active: $route.path.indexOf('myorder') !== -1}">
                    <router-link tag="a" :to="{ path: '/members/myorder' }">我的订单</router-link>
                </li>
                <li class="nav-li" @click="logout">安全退出</li>
            </ul>
            <ul class="nav" v-if="$store.state.user.type === 2">
                <li class="nav-li" :class="{active: $route.path.indexOf('company-baseInfo') !== -1}">
                    <router-link tag="a" :to="{ path: '/company/company-baseInfo' }">基本信息</router-link>
                </li>
                <li class="nav-li" :class="{active: $route.path.indexOf('job-control') !== -1}">
                    <router-link tag="a" :to="{ path: '/company/job-control' }">职位管理</router-link>
                </li>
                <li class="nav-li" :class="{active: $route.path.indexOf('interview-mana') !== -1}">
                    <router-link tag="a" :to="{ path: '/company/interview-mana' }">面试管理</router-link>
                </li>
                <li class="nav-li" :class="{active: $route.path.indexOf('talent-pool') !== -1}">
                    <router-link tag="a" :to="{ path: '/company/talent-pool' }">企业人才库</router-link>
                </li>
                <li class="nav-li" @click="logout">安全退出</li>
            </ul>
        </div>
        <div class="item-right">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'MemberCenterComp',
        methods: {
            logout() {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                this.$store.dispatch('LogOut', {username: this.$store.state.user.username, password: this.$store.state.user.sessionId}).then(() => {
                    loading.close()
                    this.dialogVisible = false
                    this.$router.push({path: '/'})
                })
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .member-center-comp {
        width: 1000px;
        margin: 0 auto;
        background-color: #FFF;
        display: flex;
        align-items: stretch;
        .item-left {
            width: 150px;
            min-height: 150px;
            padding: 10px 0;
            margin-right: 10px;
            border-right: 1px solid #CCC;
            .nav {
                .nav-li {
                    width: 100%;
                    cursor: pointer;
                    height: 30px;
                    line-height: 30px;
                    border-bottom: 1px dotted #CCC;
                    font-size: 13px;
                    text-align: center;
                    a {
                        display: block;
                    }
                    &:first-child {
                        borer-top: 1px;
                    }
                }
                .nav-li:hover, .active {
                    color: #FFF;
                    background-image: url("../../assets/header/nav-bg2.png");
                    border-bottom: 0;
                }
            }
        }
        .item-right {
            flex: 1;
        }
    }
</style>