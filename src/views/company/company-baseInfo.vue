<template>
    <div class="company-baseInfo">
        <ul class="tab clearfix">
            <li :class="{on: active === 0}" @click="getData(0)">基本信息</li>
            <li :class="{on: active === 1}" @click="getData(1)">公司图片</li>
            <li :class="{on: active === 2}" @click="getData(2)">营业执照</li>
            <li :class="{on: active === 3}" @click="getData(3)">账户信息</li>
            <li :class="{on: active === 4}" @click="getData(4)">密码修改</li>
        </ul>
        <ul class="baseinfo clearfix" v-show="active === 0">
            <li>
                <div class="label">公司名称：</div>
                <div class="value">XXXX公司</div>
            </li>
            <li>
                <div class="label">公司规模：</div>
                <div class="value">10000人</div>
            </li>
            <li>
                <div class="label">公司性质：</div>
                <div class="value">上市公司</div>
            </li>
            <li>
                <div class="label">法人：</div>
                <div class="value">XXXXX</div>
            </li>
            <li>
                <div class="label">公司注册地：</div>
                <div class="value">湖南长沙</div>
            </li>
            <li>
                <div class="label">联系方式：</div>
                <div class="value">180XXXXXXXX</div>
            </li>
            <li>
                <div class="label">联系人：</div>
                <div class="value">XXXXXX</div>
            </li>
        </ul>
        <div class="pic-list" v-show="active === 1">
            <template v-for="item in 5">
                <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=287515486,199635557&fm=173&app=25&f=JPEG?w=510&h=346&s=EC32109D0E9452D24723D0DD0300E0B8" alt="">
            </template>
        </div>
        <div class="pic-list" v-show="active === 2">
            <template v-for="item in 5">
                <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=287515486,199635557&fm=173&app=25&f=JPEG?w=510&h=346&s=EC32109D0E9452D24723D0DD0300E0B8" alt="">
            </template>
        </div>
        <ul class="baseinfo clearfix" v-show="active === 3">
            <li>
                <div class="label">账户名称：</div>
                <div class="value">XXXXXXXXXXXXXX@163.com</div>
            </li>
            <li>
                <div class="label">账户状态：</div>
                <div class="value">有效</div>
            </li>
            <li>
                <div class="label">账户等级：</div>
                <div class="value">高级认证</div>
            </li>
        </ul>
        <div class="modifyPwd" v-show="active === 4">
            <div class="form">
                <ul class="enter-box clearfix">
                    <li>
                        <div class="label">原始密码：</div>
                        <div class="value"><input type="text" placeholder="请输入原始密码"></div>
                    </li>
                    <li>
                        <div class="label">修改密码：</div>
                        <div class="value"><input type="password" placeholder="请输入需要修改的密码"></div>
                    </li>
                    <li>
                        <div class="label">确认密码：</div>
                        <div class="value"><input type="password" placeholder="请确认修改的密码"></div>
                    </li>
                </ul>
                <div class="submit-box">
                    <div class="submit-btn">确认修改</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'sJobControl',
        data() {
            return {
                active: 0,
            }
        },
        methods: {
            getData(i) {
                this.active = i
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