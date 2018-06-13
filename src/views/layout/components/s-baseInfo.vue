<template>
    <div class="s-baseInfo">
        <div class="title">基本信息</div>
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
        width: 1000px;
        margin: 10px auto;
        background-color: #FFF;
        position: relative;
        min-height: 300px;
        .form {
            padding: 50px 10px 10px;
            .form-control {
                width: 50%;
                float: left;
                display: flex;
                height: 35px;
                line-height: 35px;
                font-size: 12px;
                margin-bottom: 10px;
                .label {
                    width: 100px;
                    text-align: right;
                    color: #666;
                }
                .value {
                    flex: 1;
                }
            }
        }
        .title {
            position: absolute;
            top: 7px;
            left: -7px;
            width: 1000px;
            height: 29px;
            background-image: url(../../../assets/news/title-2.png);
            background-repeat: no-repeat;
            background-position: left center;
            font-size: 12px;
            color: #FFF;
            padding: 6px 0 0 14px;
        }
    }
</style>

<style rel="stylesheet/scss" lang="scss">
</style>

