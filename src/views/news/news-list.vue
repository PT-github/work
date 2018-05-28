<template>
    <div class="news-list">
        <div class="part01 clearfix">
            <div class="fl">
                <div class="news-title">工作动态 <router-link tag="a" class="more" :to="{ path: '/news-cate-list', query: { category: 1, title: '工作动态' } }">更多>></router-link></div>
                <ul class="news-l" id="workDynamics">
                    <template v-for="(item, index) in list">
                        <li><router-link tag='a' :to="{ name: 'newsDetail', query: { id: item.id } }">{{ item.name }}</router-link></li>
                    </template>
                </ul>
            </div>
            <div class="fl no-border" style="width: 400px;" id="latestNews">
                <el-carousel :autoplay="false" class="sliderBox" trigger="click" height="310px">
                    <el-carousel-item v-for="item in list6" :key="item.id">
                        <router-link tag='a' :to="{ name: 'newsDetail', query: { id: item.id } }">
                            <img :src="item.imgUrl" alt="">
                        </router-link>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="fl">
                <div class="news-title">通知公告 <router-link tag="a" class="more" :to="{ path: '/news-cate-list', query: { category: 2, title: '通知公告' } }">更多>></router-link></div>
                <ul class="news-l" id="noticeBox">
                    <template v-for="(item, index) in list2">
                        <li><router-link tag='a' :to="{ name: 'newsDetail', query: { id: item.id } }">{{ item.name }}</router-link></li>
                    </template>
                </ul>
            </div>
        </div>
        <div class="part02">
            <div class="fl">
                <div class="title title_03">
                    <router-link tag='a' :to="{ path: '/news-cate-list', query: { category: 3, title: '行业资讯' } }" class="more">更多>></router-link>
                </div>
                <ul class="list"  id="industryInfo">
                    <li v-for="item in list3"><router-link tag='a' :to="{ name: 'newsDetail', query: { id: item.id } }"><span>{{ item.name }}</span></router-link></li>
                </ul>
                <div class="paging clearfix">
                    <span class="next button fr" @click="getIndustryInfos(pageNo3 + 1)"></span>
                    <span class="page fr">{{pageNo3}}/{{totalPage3}}</span>
                    <span class="prev button fr" @click="getIndustryInfos(pageNo3 - 1)"></span>
                </div>
            </div>
            <div class="fl" style="width: 400px;">
                <div class="title title_06" id="politicalAndRegulations">
                    <router-link tag='a' :to="{ path: '/news-cate-list', query: { category: 4, title: '政策法规' } }" class="more">更多>></router-link>
                </div>
                <ul class="list">
                    <li v-for="item in list4"><router-link tag='a' :to="{ name: 'newsDetail', query: { id: item.id } }"><span>{{ item.name }}</span></router-link></li>
                </ul>
                <div class="paging clearfix">
                    <span class="next button fr" @click="getPoliticalAndRegulations(pageNo4 + 1)"></span>
                    <span class="page fr">{{pageNo4}}/{{totalPage4}}</span>
                    <span class="prev button fr" @click="getPoliticalAndRegulations(pageNo4 - 1)"></span>
                </div>
            </div>
            <div class="fl">
                <div class="title title_08">
                    <router-link tag='a' :to="{ path: '/news-cate-list', query: { category: 5, title: '培训风采' } }" class="more">更多>></router-link>
                </div>
                <ul class="list" id="trainingAndDemeanor">
                    <li v-for="item in list5"><router-link tag='a' :to="{ name: 'newsDetail', query: { id: item.id } }"><span>{{ item.name }}</span></router-link></li>
                </ul>
                <div class="paging clearfix">
                    <span class="next button fr" @click="getTrainingAndDemeanor(pageNo5 + 1)"></span>
                    <span class="page fr">{{pageNo5}}/{{totalPage5}}</span>
                    <span class="prev button fr" @click="getTrainingAndDemeanor(pageNo5 - 1)"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { queryWorkDynamics, queryNoticeList, queryIndustryInfos, queryPoliticalAndRegulations, queryTrainingAndDemeanor, queryLatestNews } from '@/api/service'
    export default {
        name: 'newsList',
        data() {
            return {
                list: [],
                list2: [],
                list3: [],
                pageNo3: 1,
                pageSize3: 10,
                totalPage3: 1,
                list4: [],
                pageNo4: 1,
                pageSize4: 10,
                totalPage4: 1,
                list5: [],
                pageNo5: 1,
                pageSize5: 10,
                totalPage5: 1,
                list6: []
            }
        },
        mounted() {
            this.getWorkDynamics()
            this.getNoticeList()
            this.getIndustryInfos()
            this.getPoliticalAndRegulations()
            this.getTrainingAndDemeanor()
            this.getLatestNews()
        },
        methods: {
            getLatestNews() {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: false,
                    target: this.$el.querySelector('#latestNews')
                })
                queryLatestNews().then((res) => {
                    loading.close()
                    this.list6 = res.list
                }).catch(() => {
                    loading.close()
                })
            },
            getTrainingAndDemeanor(p) {
                if (p === 0 || p > this.totalPage5) {
                    return
                } else if (!!p) {
                    this.pageNo5 = p
                }
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: false,
                    target: this.$el.querySelector('#trainingAndDemeanor')
                })
                queryTrainingAndDemeanor({
                    pageNo: this.pageNo5,
                    pageSize: this.pageSize5
                }).then((res) => {
                    loading.close()
                    this.list5 = res.list
                    this.totalPage5 = res.totalPage ? res.totalPage : 1
                }).catch(() => {
                    loading.close()
                })
            },
            getPoliticalAndRegulations(p) {
                if (p === 0 || p > this.totalPage4) {
                    return
                } else if (!!p) {
                    this.pageNo4 = p
                }
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: false,
                    target: this.$el.querySelector('#politicalAndRegulations')
                })
                queryPoliticalAndRegulations({
                    pageNo: this.pageNo4,
                    pageSize: this.pageSize4
                }).then((res) => {
                    loading.close()
                    this.list4 = res.list
                    this.totalPage4 = res.totalPage ? res.totalPage : 1
                }).catch(() => {
                    loading.close()
                })
            },
            getIndustryInfos(p) {
                if (p === 0 || p > this.totalPage3) {
                    return
                } else if (!!p) {
                    this.pageNo3 = p
                }
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: false,
                    target: this.$el.querySelector('#industryInfo')
                })
                queryIndustryInfos({
                    pageNo: this.pageNo3,
                    pageSize: this.pageSize3
                }).then((res) => {
                    loading.close()
                    this.totalPage3 = res.totalPage ? res.totalPage : 1
                    this.list3 = res.list
                }).catch(() => {
                    loading.close()
                })
            },
            getWorkDynamics() {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: false,
                    target: this.$el.querySelector('#workDynamics')
                })
                queryWorkDynamics().then((res) => {
                    loading.close()
                    this.list = res.list
                }).catch(() => {
                    loading.close()
                })
            },
            getNoticeList() {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: false,
                    target: this.$el.querySelector('#noticeBox')
                })
                queryNoticeList().then((res) => {
                    loading.close()
                    this.list2 = res.list
                }).catch(() => {
                    loading.close()
                })
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
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
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
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
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