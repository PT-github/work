<template>
    <div class="s-baseInfo">
        <div class="title">我的账户</div>
        <div class="pic"><img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png" alt=""></div>
        <div class="form">
            <div class="form-control">
                <div class="label">登录名：</div>
                <div class="value">彭涛</div>
            </div>
            <div class="form-control">
                <div class="label">昵称：</div>
                <div class="value">彭涛AAA</div>
            </div>
            <div class="form-control">
                <div class="label">真是姓名：</div>
                <div class="value">彭涛</div>
            </div>
            <div class="form-control">
                <div class="label">生日：</div>
                <div class="value">2018-01</div>
            </div>
            <div class="form-control">
                <div class="label">手机：</div>
                <div class="value">180XXXXXXXXXXXXXXXX</div>
            </div>
            <div class="form-control">
                <div class="label">手机是否验证：</div>
                <div class="value">是</div>
            </div>
            <div class="form-control">
                <div class="label">邮箱：</div>
                <div class="value">pengtao_it@jjj.com</div>
            </div>
            <div class="form-control">
                <div class="label">邮箱是否验证：</div>
                <div class="value">是</div>
            </div>
            <div class="form-control">
                <div class="label">是否绑定微信：</div>
                <div class="value">是</div>
            </div>
            <div class="form-control">
                <div class="label">我的邀请码：</div>
                <div class="value">XXXX-XXXX-XXXX-XXXX</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'sBaseInfo',
        data() {
            return {
            }
        },
        computed: {
        },
        mounted() {
        },
        methods: {
            changeLoginType(type) {
                this.type = type
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

