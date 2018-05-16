<template>
    <div class="s-footer">
        <div class="s-footer-container clearfix">
            <div class="fl fl-left">
                <p>湖南省健康服务业协会</p>
                <p class="s">HUNAN HEALHT SERVICE INDUSTRY ASSOCLATION</p>
            </div>
            <div class="fl fl-right">
                <p class="s">
                    <span>地址：XXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
                    <span>邮编：000000</span>
                    <span>座机：000-12345678</span>
                </p>
                <p class="s">
                    <span>联系方式：12345678901</span>
                    <span>12345678901</span>
                </p>
                <p class="s">
                    <span>版权所有：© 2018-2050    xxxxxxxxxxxxxxxxx公司    川ICP备000000号</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .s-footer {
        height: 126px;
        background-color: #e6e6e6;
        border-top: 1px solid #dddddd;
        .s-footer-container {
            width: 1000px;
            margin: 18px auto 14px;
            height: 94px;
            color: #727272;
            .fl-left {
                padding-top: 20px;
                width: 40%;
                background-image: url("../../../assets/footer/line.png");
                background-repeat: no-repeat;
                background-position: right center;
            }
            .fl-right {
                width: 60%;
                padding: 15px 10px 0 80px;
            }
            .fl {

                p {
                    font-size: 30px;
                    margin-bottom: 5px;
                }
                .s {
                    font-size: 12px;
                }
            }
        }
    }
</style>