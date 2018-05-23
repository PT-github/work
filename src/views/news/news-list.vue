<template>
    <div class="news-list">
        <div class="part01 clearfix">
            <div class="fl">
                <div class="news-title">工作动态 <router-link tag="a" class="more" :to="'/'">更多>></router-link></div>
                <ul class="news-l">
                    <template v-for="(item, index) in list">
                        <template v-if="index > 0">
                            <li>{{ item.name }}</li>
                        </template>
                    </template>
                </ul>
            </div>
            <div class="fl no-border" style="width: 400px;">
                <el-carousel :autoplay="false" class="sliderBox" trigger="click" height="310px">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <img src="http://www.hnjkfwy.com/upload/day_180520/201805201139129214.jpg" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="fl">
                <div class="news-title">通知公告 <router-link tag="a" class="more" :to="'/'">更多>></router-link></div>
                <ul class="news-l">
                    <template v-for="(item, index) in list">
                        <template v-if="index > 0">
                            <li>{{ item.name }}</li>
                        </template>
                    </template>
                </ul>
            </div>
        </div>
        <div class="part02">
            <div class="fl">
                <div class="title title_03">
                    <router-link tag='a' :to="'/'" class="more">更多>></router-link>
                </div>
                <ul class="list">
                    <li><span>1111111111111111111111111</span></li>
                    <li><span>1111111111111111111111111</span></li>
                    <li><span>1111111111111111111111111</span></li>
                    <li><span>1111111111111111111111111</span></li>
                    <li><span>1111111111111111111111111</span></li>
                    <li><span>1111111111111111111111111</span></li>
                    <li><span>1111111111111111111111111</span></li>
                    <li><span>1111111111111111111111111</span></li>
                    <li><span>1111111111111111111111111</span></li>
                    <li><span>1111111111111111111111111</span></li>
                </ul>
                <div class="paging clearfix">
                    <span class="next button fr"></span>
                    <span class="page fr">1/3</span>
                    <span class="prev button fr"></span>
                </div>
            </div>
            <div class="fl" style="width: 400px;">
                <div class="title title_06">
                    <router-link tag='a' :to="'/'" class="more">更多>></router-link>
                </div>
                <ul class="list">
                    <li><span>1111111111111111111111111</span></li>
                    <li><span>1111111111111111111111111</span></li>
                    <li><span>1111111111111111111111111</span></li>
                    <li><span>1111111111111111111111111</span></li>
                    <li><span>1111111111111111111111111</span></li>
                    <li><span>1111111111111111111111111</span></li>
                    <li><span>1111111111111111111111111</span></li>
                    <li><span>1111111111111111111111111</span></li>
                    <li><span>1111111111111111111111111</span></li>
                    <li><span>1111111111111111111111111</span></li>
                </ul>
                <div class="paging clearfix">
                    <span class="next button fr"></span>
                    <span class="page fr">1/3</span>
                    <span class="prev button fr"></span>
                </div>
            </div>
            <div class="fl">
                <div class="title title_08">
                    <router-link tag='a' :to="'/'" class="more">更多>></router-link>
                </div>
                <ul class="list">
                    <li><span>1111111111111111111111111</span></li>
                    <li><span>1111111111111111111111111</span></li>
                    <li><span>1111111111111111111111111</span></li>
                    <li><span>1111111111111111111111111</span></li>
                    <li><span>1111111111111111111111111</span></li>
                    <li><span>1111111111111111111111111</span></li>
                    <li><span>1111111111111111111111111</span></li>
                    <li><span>1111111111111111111111111</span></li>
                    <li><span>1111111111111111111111111</span></li>
                    <li><span>1111111111111111111111111</span></li>
                </ul>
                <div class="paging clearfix">
                    <span class="next button fr"></span>
                    <span class="page fr">1/3</span>
                    <span class="prev button fr"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'newsList',
        data() {
            return {
                list: [
                    {name: '11111111111111111111111'},
                    {name: '11111111111111111111111'},
                    {name: '11111111111111111111111'},
                    {name: '11111111111111111111111'},
                    {name: '11111111111111111111111'},
                    {name: '11111111111111111111111'},
                    {name: '11111111111111111111111'},
                    {name: '11111111111111111111111'},
                    {name: '11111111111111111111111'},
                    {name: '11111111111111111111111'},
                    {name: '11111111111111111111111'},
                ]
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .news-list {
        width: 1000px;
        margin:20px auto 0;
        .part02 {
            margin-top: 20px;
            margin-bottom: 20px;
            width: 100%;
            height: 348px;
            > .fl {
                width: 280px;
                background-color: #FFF;
                height: 348px;
                position: relative;
                border: 1px solid #cac9cb;
                margin-left: 20px;
                &:first-child {
                    margin-left: 0;
                }
                .paging {
                    height: 26px;
                    border-top: 1px solid #cac9cb;
                    padding: 4px 10px 0 0;
                    background: rgba(202, 201, 203, .3);;
                    .page {
                        height: 17px;
                        font-size: 12px;
                        color: #666;
                        line-height: 17px;
                        padding: 0 5px;
                    }
                    .button {
                        width: 16px;
                        height: 17px;
                        cursor: pointer;
                    }
                    .prev {
                        background: url("../../assets/icon/dt_lh.jpg");
                    }
                    .next {
                        background: url("../../assets/icon/dt_rh.jpg");
                    }
                }
                .list {
                    cursor: pointer;
                    padding: 10px 12px;
                    li {
                        span {
                            font-size: 13px;
                            color: #888888;
                            line-height: 26px;
                            &:hover {
                                text-decoration: underline;
                                color: #da0a0a;
                            }
                        }
                        &:before {
                            content: '·';
                            color: #b80202 !important;
                            text-decoration: none !important;
                            font-weight: bold;
                            padding: 0 5px;
                        }

                    }
                }
                .title {
                    height: 40px;
                    background-position: 17px 10px;
                    background-repeat: no-repeat;
                    box-shadow: 1px 1px 1px rgba(204, 204, 204, .5);
                    position: relative;
                    .more {
                        position: absolute;
                        top: 15px;
                        right: 10px;
                        color: #666;
                        font-size: 12px;
                    }
                }
                .title_03 {
                    background-image: url("/static/imgs/title_03.png");
                }
                .title_06 {
                    background-image: url("/static/imgs/title_06.png");
                }
                .title_08 {
                    background-image: url("/static/imgs/title_08.png");
                }
            }
        }
        .part01 {
            > .fl {
                background-color: #FFF;
                width: 280px;
                height: 310px;
                position: relative;
                border: 1px solid #cac9cb;
                margin-left: 20px;
                &:first-child {
                    margin-left: 0;
                }
                .sliderBox {
                    img {
                        width: 100%;
                        height: 100%;
                        display: block;
                    }
                }
                .news-l {
                    font-size: 13px;
                    color: #888888;
                    width: 100%;
                    height: 308px;
                    padding: 40px 15px 0;
                    li {
                        cursor: pointer;
                        line-height: 26px;
                        background-image: url("../../assets/news/icon.png");
                        background-repeat: no-repeat;
                        background-position: left center;
                        padding-left: 12px;
                    }
                    li:hover {
                        text-decoration: underline;
                        color: #da0a0a;
                        background-image: url("../../assets/news/icon2.png");
                    }
                }
                .news-title {
                    position: absolute;
                    top: 7px;
                    left: -7px;
                    width: 277px;
                    height: 29px;
                    background-image: url(../../assets/news/news-title.png);
                    background-repeat: no-repeat;
                    background-position: left center;
                    font-size: 12px;
                    color: #FFF;
                    padding: 6px 0 0 14px;
                    .more {
                        color: #666;
                        position: absolute;
                        top: 6px;
                        right: 2px;
                    }
                }
            }

        }
        .no-border {
            border: none !important;
        }
    }
</style>