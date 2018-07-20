<template>
    <div class="s-baseInfo">
        <div class="title">我的账户</div>
        <div class="pic"><img :src="userInfo.imgUrl" alt=""></div>
        <div class="form">
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
                <div class="value">{{ userInfo.telIsValidate === 1 ? '是' : '否' }}</div>
            </div>
            <div class="form-control">
                <div class="label">邮箱：</div>
                <div class="value">{{ userInfo.mail }}</div>
            </div>
            <div class="form-control">
                <div class="label">邮箱是否验证：</div>
                <div class="value">{{ userInfo.mailIsValidate === 1 ? '是' : '否' }}</div>
            </div>
            <div class="form-control">
                <div class="label">是否绑定微信：</div>
                <div class="value">{{ userInfo.bindMxChat === 1 ? '是' : '否' }}</div>
            </div>
            <div class="form-control">
                <div class="label">我的邀请码：</div>
                <div class="value">{{ userInfo.invitedCode }}</div>
            </div>
        </div>
    </div>
</template>
<script>
    import { queryMyBaseInfo} from '@/api/service'
    export default {
        name: 'sBaseInfo',
        data() {
            return {
                userInfo: {}
            }
        },
        computed: {
        },
        mounted() {
            this.getData()
        },
        methods: {
            getData() {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                queryMyBaseInfo({id: this.$store.state.user.id}).then(res => {
                    loading.close()
                    this.userInfo = res.data
                })
            },
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

