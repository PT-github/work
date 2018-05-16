<template>
    <div class="s-news">
        <div class="news-title">新闻中心</div>
        <div class="news-box">
            <div class="news-box-top">
                <div class="news-box-top-title">首届湖南“健康管理师之星”评选结果公示</div>
                <div class="news-box-top-content">
                    <div class="fl"><img src="../../../assets/news/pic.png" alt="新闻"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'sNews'
    }
</script>
<style type="stylesheet/scss" lang="scss" scoped>
    .s-news {
        border: 1px solid #cac9cb;
        width: 100%;
        height: 100%;
        background-color: #FFF;
        position: relative;
        .news-box {
            padding: 0 13px;
            margin-top: 36px;
            .news-box-top {
                margin-top: 12px;
                margin-bottom: 11px;
                color: #d91023;
                font-size: 12px;
            }
        }
        .news-title {
            position: absolute;
            top: 7px;
            left: -7px;
            width: 277px;
            height: 29px;
            background-image: url(../../../assets/news/news-title.png);
            background-repeat: no-repeat;
            background-position: left center;
            font-size: 12px;
            color: #FFF;
            padding: 6px 0 0 14px;
        }
    }
</style>