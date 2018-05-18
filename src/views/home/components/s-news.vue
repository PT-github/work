<template>
    <div class="s-news">
        <div class="news-title">新闻中心</div>
        <div class="news-box">
            <div class="news-box-top">
                <div class="news-box-top-title">首届湖南“健康管理师之星”评选结果公示</div>
                <div class="news-box-top-content clearfix">
                    <div class="fl"><img src="../../../assets/news/pic.png" alt="新闻"></div>
                    <div class="fr">
                        <p>首届湖南“健康管理师之星通过宣传发动、提名推荐、网络投票、微信投票……</p>
                    </div>
                </div>
            </div>
            <ul class="news-list">
                <li>首届湖南“健康管理师之星”评选结果公示</li>
                <li>首届湖南“健康管理师之星”评选结果公示</li>
                <li>首届湖南“健康管理师之星”评选结果公示</li>
                <li>首届湖南“健康管理师之星”评选结果公示</li>
                <li>首届湖南“健康管理师之星”评选结果公示</li>
                <li>首届湖南“健康管理师之星”评选结果公示</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'sNews'
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .s-news {
        border: 1px solid #cac9cb;
        width: 100%;
        height: 100%;
        background-color: #FFF;
        position: relative;
        .news-box {
            padding: 36px 15px 0;
            width: 100%;
            height: 100%;
            .news-list {
                font-size: 13px;
                color: #888888;
                li {
                    cursor: pointer;
                    line-height: 26px;
                    background-image: url("../../../assets/news/icon.png");
                    background-repeat: no-repeat;
                    background-position: left center;
                    padding-left: 12px;
                }
                li:hover {
                    text-decoration: underline;
                    color: #da0a0a;
                    background-image: url("../../../assets/news/icon2.png");
                }
            }
            .news-box-top {
                height: 110px;
                color: #d91023;
                font-size: 13px;
                cursor: pointer;
                .news-box-top-content {
                    .fr {
                        font-size: 12px;
                        color: #888888;
                        width: 145px;
                        line-height: 18px;
                        height: 66px;
                        padding: 2px 0;
                        &:hover {
                            text-decoration: underline;
                        }
                    }
                    .fl {
                        width: 93px;
                        height: 66px;
                        line-height: 0;
                        background-color: #f3f3f3;
                        border: 1px solid #dedede;
                        text-align: center;
                        img {
                            width: 83px;
                            height: 56px;
                            margin-top: 4px;
                        }
                    }
                }
                .news-box-top-title {
                    height: 34px;
                    line-height: 34px;
                    font-weight: bold;
                    &:hover {
                        text-decoration: underline;
                    }
                }
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