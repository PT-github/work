<template>
    <div class="s-news">
        <div class="news-title">新闻中心</div>
        <div class="news-box">
            <template v-if="list.length > 0">
                <div class="news-box-top">
                    <div class="news-box-top-title">{{ list[0].name }}</div>
                    <div class="news-box-top-content clearfix">
                        <div class="fl"><img :src="list[0].imgUrl" :alt="list[0].name"></div>
                        <div class="fr">
                            <p>
                                <template v-if="list[0].desc && list[0].desc.length > 36">
                                    {{ list[0].desc.substr(0, 34) + '......' }}
                                </template>
                            </p>
                        </div>
                    </div>
                </div>
                <ul class="news-list">
                    <template v-for="(item, index) in list">
                        <template v-if="index > 0">
                            <li>{{ item.name }}</li>
                        </template>
                    </template>
                </ul>
            </template>
        </div>
    </div>
</template>
<script>
    import { queryNews } from '@/api/service'
    export default {
        name: 'sNews',
        mounted() {
            this.getData()
        },
        data() {
            return {
                list: []
            }
        },
        methods: {
            getData() {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: false,
                    target: this.$el
                })
                queryNews().then((res) => {
                    loading.close()
                    this.list = res.list
                }).catch(() => {
                    loading.close()
                })
            }
        }
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
                        height: 66px;
                        padding: 2px 0;
                        line-height: 22px;
                        overflow: hidden;
                        &:hover {
                            text-decoration: underline;
                        }
                        p {
                            overflow: hidden;
                            width: 100%;
                            height: 100%;
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