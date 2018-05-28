<template>
    <div class="news-cate-list">
        <div class="news-title">{{title}}</div>
        <ul class="list">
            <li v-for="item in list" class="list-li">
                <div class="search_job_list">
                    <div class="part01 clearfix">
                        <div class="search_user_list_neme fl">
                            <router-link tag="a" :to="{ name: 'newsDetail', query: { id: item.id } }" class=" disc_per">{{item.title}}</router-link>
                            <span class="disc_user_mes">{{item.category}}</span>
                        </div>
                        <div class="disc_time fr">发布时间：{{item.publishTime}}</div>
                    </div>
                    <div class="company_det">
                        <span class="search_job_list_box_s">
                            发布人：
                            <span class="com_search_job_em">{{item.publishMan}}</span>
                        </span>
                        <span class="search_job_list_box_line">|</span>
                        <span class="search_job_list_box_s">
                            点击率：
                            <span class="com_search_job_em com_search_job_em_pay">{{item.clickRate}}</span>
                        </span>
                    </div>
                </div>
            </li>
        </ul>
        <div class="pageBox">
            <span class="cursor" @click="go(pageNo - 1)">上一页</span>
            <span>{{pageNo}}</span>
            <span class="cursor" @click="go(pageNo + 1)">下一页</span>
        </div>
    </div>
</template>
<script>
    import { queryNewsListByCategory } from '@/api/service'
    export default {
        name: 'newsCateList',
        data() {
            return {
                title: this.$route.query.title,
                category: this.$route.query.category,
                list: [],
                pageNo: 1,
                pageSize: 30,
                totalPage: 1
            }
        },
        mounted() {
            this.getNewsListByCategory()
        },
        methods: {
            go(p) {
                if (p === 0 || p > this.totalPage) {
                    return;
                } else {
                    this.pageNo = p
                    this.getNewsListByCategory()
                }
            },
            getNewsListByCategory() {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: false,
                    target: this.$el
                })
                var scrollTop = document.documentElement.scrollTop
                queryNewsListByCategory({
                    category: this.category,
                    pageNo: this.pageNo,
                    pageSize: this.pageSize
                }).then((res) => {
                    console.log(document.documentElement.scrollTop)
                    loading.close()
                    this.totalPage = res.totalPage
                    this.list = res.list
                    /*if (this.pageNo === 1) {
                        this.list = res.list
                    } else {
                        this.list.push(...res.list)
                    }*/
                    this.$nextTick(() => {
                        document.documentElement.scrollTop = 166
                    })
                }).catch(() => {
                    loading.close()
                })
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .news-cate-list {
        width: 1000px;
        margin: 10px auto;
        background-color: #FFF;
        position: relative;
        min-height: 100px;
        .pageBox {
            height: 58px;
            line-height: 58px;
            text-align: center;
            .cursor {
                cursor: pointer;
            }
            span {
                padding: 0 10px;
                font-size: 13px;
            }
        }
        .list {
            min-height: 58px;
            padding-top: 30px;
            .list-li {
                /*&:last-child {
                    .search_job_list {
                        border-bottom: 0;
                    }
                }*/
                .search_job_list {
                    margin-left: 10px;
                    margin-right: 10px;
                    border-bottom: 1px solid #e4e4e4;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    color: #676767;
                    position: relative;
                    font-size: 13px;
                    .company_det {
                        font-size: 12px;
                        .com_search_job_em_pay {
                            color: #e8620e;
                        }
                    }
                    .part01 {
                        margin-bottom: 10px;
                        .search_user_list_neme {
                            color: #1369c0;
                            .disc_user_mes {
                                font-size: 12px;
                                padding-left: 10px;
                                color: #a4a4a4;
                            }
                        }
                        .disc_time {
                            color: #9d9999;
                            font-size: 12px;
                            padding-top: 1px;
                        }
                    }
                }
            }
        }
        .news-title {
            position: absolute;
            top: 7px;
            left: -7px;
            width: 1000px;
            height: 29px;
            background-image: url(../../assets/news/title-2.png);
            background-repeat: no-repeat;
            background-position: left center;
            font-size: 12px;
            color: #FFF;
            padding: 6px 0 0 14px;
        }
    }
</style>