<template>
    <div class="s-regist">
        <div class="title no-bg no-border-top">
            <p>证书查询</p>
        </div>
        <div class="queryForm">
            <div class="form-control">
                <div class="input-control">
                    <input type="text" placeholder="请输入姓名">
                </div>
            </div>
            <div class="form-control">
                <div class="form-select select-area" :class="{ 'form-select_active': selectUlShow }">
                    <span class="select-area">{{ form.typeValue }}</span>
                    <input type="hidden" v-model="form.type">
                    <ul v-show="selectUlShow" class="select-ul select-area" @click="exchangeType">
                        <li class="select-ul-li select-area" type="0">身份证</li>
                        <li class="select-ul-li select-area" type="1">证书编号</li>
                    </ul>
                </div>
                <div class="input-control">
                    <input class="no-left" type="text" placeholder="请输入身份证或证书编号">
                </div>
            </div>
            <div class="form-control" style="margin-bottom: 15px;">
                <div class="form-control_submit">查&nbsp;&nbsp;&nbsp;&nbsp;询</div>
            </div>
        </div>
        <div class="title">
            <p>电话热线</p>
        </div>
        <div class="button button1">
            <p class="p1">网上在线报名</p>
            <p class="p2">Online registration</p>
        </div>
        <!--<div class="button button2">
            <p class="p1 orange">在线预约试听</p>
            <p class="p2 orange">Online booking</p>
        </div>
        <p class="p3">两大报名方式，课前试听</p>
        <p class="p4"><span class="orange">网上报名</span>快捷方便，更<span class="orange">优惠</span></p>
        <p class="p4">学前<span class="orange">试听</span>，互相了解，让学有所值</p>-->
    </div>
</template>
<script>
    export default {
        name: 'sRegist',
        data() {
            return {
                selectUlShow: false,
                form: {
                    name: '',
                    type: '0',
                    typeValue: '身份证',
                    value: ''
                },
                options: {
                    '0': '身份证',
                    '1': '证书编号'
                }
            }
        },
        methods: {
            exchangeType(e) {
                var type = e.target.getAttribute('type')
                if (this.form.type !== type) {
                    this.form.type = type
                    this.form.typeValue = this.options[type]
                }
            }
        },
        created() {
            let body = document.querySelector('body')
            body.addEventListener('click',(e)=>{
                if(e.target.className.indexOf('select-area') !== -1){
                    this.selectUlShow = !this.selectUlShow
                }else {
                    this.selectUlShow = false
                }
            }, false)
            window.addEventListener('scroll',()=>{
                this.selectUlShow = false
            }, false)
        }
    }
</script>
<style res="stylesheet/scss" lang="scss" scoped>
    .s-regist {
        width: 278px;
        height: 300px;
        border: 1px solid #cac9cb;
        background-color: #fefefe;
        .queryForm {
            width: 230px;
            margin: 15px auto 0;
            .form-control {
                display: flex;
                margin-bottom: 10px;
                height: 29px;
                .form-control_submit {
                    width: 230px;
                    height: 30px;
                    font-size: 12px;
                    border: 1px solid #e7e7e7;
                    text-align: center;
                    line-height: 30px;
                    border-radius: 3px;
                    margin: 0 auto;
                    display: block;
                    background-image: url("../../../assets/regist/sub.png");
                    background-repeat: repeat-x;
                    color: #008dd6;
                }
                .form-select {
                    font-size: 12px;
                    height: 29px;
                    line-height: 29px;
                    cursor: pointer;
                    width: 70px;
                    text-align: center;
                    background-image: url("../../../assets/header/input-bg.png");
                    background-repeat: repeat-x;
                    border-left: 1px solid #e7e7e7;
                    border-top: 1px solid #e7e7e7;
                    border-bottom: 1px solid #e7e7e7;
                    border-top-left-radius: 3px;
                    border-bottom-left-radius: 3px;
                    color: #666;
                    position: relative;
                    .select-ul {
                        background: #FFF;
                        .select-ul-li {
                            font-size: 12px;
                            height: 30px;
                            line-height: 30px;
                            border-bottom: 1px solid #e7e7e7;
                        }
                    }
                    &:after {
                        content: '▼';
                        position: absolute;
                        right: 0;
                        top: 50%;
                        width: 10px;
                        height: 10px;
                        margin-top: -5px;
                        line-height: 10px;
                        font-size: 10px;

                    }
                }
                .form-select_active {
                    &:after {
                        content: '▲';
                    }
                }
                .input-control {
                    flex: 1;
                    input {
                        background-image: url("../../../assets/header/input-bg.png");
                        background-repeat: repeat-x;
                        border: 1px solid #e7e7e7;
                        font-family: "微软雅黑";
                        font-size: 12px;
                        height: 29px;
                        width: 100%;
                        line-height: 29px;
                        padding: 0 10px;
                        border-radius: 3px;
                        color: #666;
                        outline: none;
                        box-sizing: border-box;
                    }
                    input.no-left {
                        border-left: 0;
                        border-top-left-radius: 0;
                        border-bottom-left-radius: 0;
                    }
                }
            }
        }
        .p4 {
            margin-bottom: 8px;
            padding-left: 36px;
            font-size: 12px;
        }
        .p3 {
            font-size: 12px;
            font-weight: bold;
            color: #434343;
            background-image: url("../../../assets/regist/icon.png");
            background-repeat: no-repeat;
            background-position: 36px center;
            padding-left: 60px;
            margin-top: 24px;
            margin-bottom: 14px;
        }
        .button {
            width: 230px;
            height: 60px;
            background-repeat: no-repeat;
            background-position: center center;
            background-image: url("../../../assets/regist/btn1.png");
            margin: 0 auto;
            cursor: pointer;
            .p1 {
                font-size: 16px;
                color: #008dd6;
                padding-top: 15px;
                padding-left: 84px;
            }
            .p2 {
                font-size: 12px;
                color: #008dd6;
                padding-top: 3px;
                padding-left: 84px;
            }
        }
        .button1 {
            margin-top:14px;
        }
        .button2 {
            margin-top:16px;
            background-image: url("../../../assets/regist/btn2.png");
        }
        .orange {
            color: #ff7200 !important;
        }
        .title {
            height: 38px;
            margin: 1px 1px 0;
            border-bottom: 1px solid #d3d3d3;
            border-top: 1px solid #d3d3d3;
            background-image: url("../../../assets/regist/tell.png");
            background-repeat: no-repeat;
            background-position: 126px center;
            p {
                width: 118px;
                height: 36px;
                background-color: #9b9b9b;
                color: #FFF;
                font-size: 22px;
                text-align: center;
                line-height: 36px;
            }
        }
        .no-bg {
            background: none;
        }
        .no-border-top {
            border-top: 0;
        }
    }
</style>

<style rel="stylesheet/scss" lang="scss">
    .queryForm {
        .el-form-item {
            .el-input__inner {

            }
            .el-input-group__prepend {
                div.el-select {
                    .el-input__inner {
                        border-top: 1px solid #e7e7e7;
                    }
                }
            }
            .submit-btn {
                display: block;
                margin: 5px auto;
                padding-left: 20px;
                padding-right: 20px;
            }
        }
    }
    .el-scrollbar {
        .el-select-dropdown__item {
            font-size: 12px;
            padding: 0 10px;
            height: 20px;
            line-height: 20px;
            span {
                line-height: 20px !important;
            }
        }
    }
</style>