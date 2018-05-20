<template>
    <div class="s-hunter clearfix">
        <div class="fl">
            <div class="title">
                <router-link tag='a' :to="'/'" class="more">
                    <img src="../../../assets/teacher/more.png" alt="更多">
                </router-link>
            </div>
            <ul class="company-box clearfix">
                <li>
                    <div class="company-content">
                        <div class="hunt-for">健康管理师、育婴师...</div>
                        <div class="company-name">湖南省健康管理公司</div>
                        <div class="money">1.5-2.5万/月</div>
                        <div class="area">上海</div>
                    </div>
                </li>
                <li>
                    <div class="company-content">
                        <div class="hunt-for">健康管理师、育婴师...</div>
                        <div class="company-name">湖南省健康管理公司</div>
                        <div class="money">1.5-2.5万/月</div>
                        <div class="area">上海</div>
                    </div>
                </li>
                <li>
                    <div class="company-content">
                        <div class="hunt-for">健康管理师、育婴师...</div>
                        <div class="company-name">湖南省健康管理公司</div>
                        <div class="money">1.5-2.5万/月</div>
                        <div class="area">上海</div>
                    </div>
                </li>
                <li>
                    <div class="company-content">
                        <div class="hunt-for">健康管理师、育婴师...</div>
                        <div class="company-name">湖南省健康管理公司</div>
                        <div class="money">1.5-2.5万/月</div>
                        <div class="area">上海</div>
                    </div>
                </li>
                <li>
                    <div class="company-content">
                        <div class="hunt-for">健康管理师、育婴师...</div>
                        <div class="company-name">湖南省健康管理公司</div>
                        <div class="money">1.5-2.5万/月</div>
                        <div class="area">上海</div>
                    </div>
                </li>
                <li>
                    <div class="company-content">
                        <div class="hunt-for">健康管理师、育婴师...</div>
                        <div class="company-name">湖南省健康管理公司</div>
                        <div class="money">1万/月</div>
                        <div class="area">上海</div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="fr">
            <div class="title">
                热门职位
                <router-link tag='a' :to="'/'" class="more">
                    <img src="../../../assets/teacher/more.png" alt="更多">
                </router-link>
            </div>
            <ul class="job-box">
                <li>
                    <router-link tag="a" :to="'/'">健康管理师XXXX</router-link>
                </li>
                <li>
                    <router-link tag="a" :to="'/'">健康管理师XXXX</router-link>
                </li>
                <li>
                    <router-link tag="a" :to="'/'">健康管理师XXXX</router-link>
                </li>
                <li>
                    <router-link tag="a" :to="'/'">健康管理师XXXX</router-link>
                </li>
                <li>
                    <router-link tag="a" :to="'/'">健康管理师XXXX</router-link>
                </li>
                <li>
                    <router-link tag="a" :to="'/'">健康管理师XXXX</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'sHunter'
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .s-hunter {
        width: 100%;
        border: 1px solid #cac9cb;
        margin-top: 20px;
        background-color: #FFF;
        > .fl {
            width: 748px;
            .title {
                height: 40px;
                background-image: url("../../../assets/hunter/title_03.png");
                background-position: 17px 10px;
                background-repeat: no-repeat;
                box-shadow: 1px 1px 1px rgba(204, 204, 204, .5);
                position: relative;
                .more {
                    position: absolute;
                    top: 10px;
                    right: 15px;
                }
            }
            .company-box {
                margin-top: 20px;
                li {
                    float: left;
                    margin-left: 35px;
                    border: 1px solid #E8E8E8;
                    width: 200px;
                    font-size: 12px;
                    margin-bottom: 20px;
                    .company-content {
                        position: relative;
                        width: 200px;
                        height: 60px;
                        cursor: pointer;
                        .hunt-for {
                            position: absolute;
                            width: 120px;
                            top: 10px;
                            left: 6px;
                            color: #333;
                            font-size: 14px;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                        .company-name {
                            position: absolute;
                            width: 120px;
                            bottom: 10px;
                            left: 6px;
                            font-size: 12px;
                            color: #666;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                        .money {
                            position: absolute;
                            width: 66px;
                            top: 13px;
                            right: 6px;
                            color: #ff6000;
                            font-size: 12px;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            font-weight: bold;
                            text-align: right;
                        }
                        .area {
                            position: absolute;
                            width: 66px;
                            text-align: right;
                            bottom: 10px;
                            right: 6px;
                            font-size: 12px;
                            color: #999;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                    }
                }
            }
        }
        > .fr {
            width: 250px;
            position: relative;
            padding-top: 40px;
            padding-bottom: 10px;
            box-shadow: 2px 0px 2px rgba(204, 204, 204, .5) inset;
            .title {
                background-image: url(../../../assets/news/news-title.png);
                background-repeat: no-repeat;
                background-position: left center;
                font-size: 12px;
                color: #FFF;
                padding: 6px 0 0 14px;
                width: 240px;
                height: 29px;
                position: absolute;
                top: 7px;
                left: -7px;
                .more {
                    position: absolute;
                    top: 4px;
                    right: 0;
                }
            }
            .job-box {
                li {
                    background-image: url("../../../assets/video/icon.png");
                    background-position: 20px center;
                    background-repeat: no-repeat;
                    height: 30px;
                    display: block;
                    font-size: 12px;
                    line-height: 30px;
                    padding-left: 38px;
                    a {
                        color: #333333;
                        &:hover {
                            text-decoration: underline;
                            color: #ce160e;
                        }
                    }
                }
            }
        }
    }
</style>