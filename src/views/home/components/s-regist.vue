<template>
    <div class="s-regist">
        <div class="title">
            <p>电话热线</p>
        </div>
        <div class="button button1">
            <p class="p1">网上在线报名</p>
            <p class="p2">Online registration</p>
        </div>
        <div class="button button2">
            <p class="p1 orange">在线预约试听</p>
            <p class="p2 orange">Online booking</p>
        </div>
        <p class="p3">两大报名方式，课前试听</p>
        <p class="p4"><span class="orange">网上报名</span>快捷方便，更<span class="orange">优惠</span></p>
        <p class="p4">学前<span class="orange">试听</span>，互相了解，让学有所值</p>
    </div>
</template>

<style type="stylesheet/scss" lang="scss" scoped>
    .s-regist {
        width: 278px;
        height: 300px;
        border: 1px solid #cac9cb;
        background-color: #fefefe;
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
            margin-top:22px;
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
    }
</style>