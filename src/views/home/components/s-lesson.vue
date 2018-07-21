<template>
    <div class="s-lesson">
        <div class="fl">
            <div class="title">课程培训</div>
        </div>
        <div class="fr">
            <div class="tabs" v-if="list && list.length > 0">
                <div class="tabs-nav flex">
                    <template v-for="(item, index) in list">
                        <div class="tabs-nav-span" :class="{ 'active': activeTab === index }" @click="exchangeTabs(index)">
                            <span>{{ item.title }}</span>
                        </div>
                    </template>
                </div>
                <div class="tabs-content">
                    <template v-for="(item, index) in list">
                        <div class="tabs-content-01" :class="{ 'active': activeTab === index }">
                            <div class="table">
                                <div class="theader">
                                    <div class="tr">
                                        <div class="th" style="width: 115px;">课程名称</div>
                                        <div class="th flex-auto">开班时间</div>
                                        <div class="th" style="width: 85px;">课时</div>
                                        <div class="th" style="width: 80px;">培训费</div>
                                        <div class="th" style="width: 115px;">考试及资料费</div>
                                        <div class="th" style="width: 85px;">合计</div>
                                    </div>
                                </div>
                                <div class="tbody">
                                    <template v-if="item.data && item.data.length > 0">
                                        <template v-for="v in item.data">
                                            <div class="tr">
                                                <div class="td blue" style="width: 115px;"><router-link tag="a" :to="{ path: '/lesson-detail', query: { id: v.id } }">{{ v.name }}</router-link></div>
                                                <div class="td flex-auto">{{ v.openDate }}</div>
                                                <div class="td sky-blue" style="width: 85px;">{{v.classHour}}</div>
                                                <div class="td" style="width: 80px;">{{v.tranningFee}}</div>
                                                <div class="td" style="width: 115px;">{{v.examinationFee}}</div>
                                                <div class="td orange" style="width: 85px;">{{v.totalFee}}</div>
                                            </div>
                                        </template>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { queryLessons } from '@/api/service'
    export default {
        name: 'sLesson',
        mounted() {
            this.getLessons()
        },
        data() {
            return {
                activeTab: 0,
                list: []
            }
        },
        methods: {
            exchangeTabs(t) {
                this.activeTab = t
            },
            getLessons() {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: false,
                    target: this.$el
                })
                queryLessons().then((res) => {
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
    .s-lesson {
        width: 710px;
        min-height: 300px;
        height: 100%;
        border: 1px solid #cac9cb;
        background-color: #FFF;
        .fr {
            margin-right: 18px;
            .tabs {
                .flex {
                    display: flex;
                }
                .flex-auto {
                    flex: 1;
                }
                width: 650px;
                .tabs-content {
                    padding: 14px 14px 5px;
                    border: 1px solid #dedede;
                    > div {
                        display: none;
                    }
                    > .active {
                        display: block;
                    }
                    .table {
                        .theader {
                            .tr {
                                display: flex;
                                height: 26px;
                                width: 100%;
                                border: 1px solid #dedede;
                                background-image: url(../../../assets/lesson/table-bg.png);
                                background-repeat: repeat-x;
                                background-position: center center;
                                .th {
                                    text-align: center;
                                    font-size: 12px;
                                    color: #666666;
                                    line-height: 26px;
                                }
                            }
                        }
                        .tbody {
                            .tr {
                                display: flex;
                                height: 44px;
                                line-height: 44px;
                                border-bottom: 1px dashed #dedede;
                                cursor: pointer;
                                &:hover {
                                    background-color: #ededed;
                                    .td {
                                        color: #ce160e;
                                    }
                                }
                                &:last-child {
                                    border-bottom: none;
                                }
                                .td {
                                    text-align: center;
                                    font-size: 12px;
                                    color: #666666;
                                }
                                .orange {
                                    color: #e18000;
                                }
                                .blue {
                                    color: #1257a3;
                                }
                                .sky-blue {
                                    color: #3492c2;
                                }
                            }
                        }
                    }
                }
                .tabs-nav {
                    .tabs-nav-span {
                        cursor: pointer;
                        flex: 1;
                        text-align: center;
                        height: 65px;
                        font-size: 12px;
                        color: #999999;
                        position: relative;
                        &.active,&:hover {
                            color: #ce160e;
                            span {
                                border-color: #ce163e;
                            }
                            &:before {
                                border-color: #ce160e;
                            }
                        }
                        &.active  {
                            &:after {
                                content: '';
                                position: absolute;
                                background: #FFF;
                                left: 0;
                                bottom: -1px;
                                right: 0;
                                border-left: 1px solid #dedede;
                                border-right: 1px solid #dedede;
                                height: 26px;
                                z-index: 1;
                            }
                        }
                        &:before {
                            z-index: 2;
                            content: '';
                            width: 18px;
                            height: 9px;
                            border-color: #666;
                            border-style: solid;
                            border-width: 0 1px 1px 1px;
                            position: absolute;
                            top: 39px;
                            left: 50%;
                            border-radius: 0 0 9px 9px;
                            background: #FFF;
                            margin-left: -9px;
                        }
                        span {
                            padding-top: 15px;
                            /*padding-bottom: 10px;*/
                            display: block;
                            height: 40px;
                            border-bottom: 1px solid #666666;
                        }
                    }
                }
            }
        }
        .fl {
            .title {
                width: 25px;
                height: 90px;
                font-size: 12px;
                color: #FFF;
                font-weight: bold;
                background-image: url("../../../assets/lesson/lesson_-title.png");
                background-repeat: no-repeat;
                background-postion: center center;
                writing-mode: vertical-lr;
                padding-top:10px;
                padding-left: 5px;
                margin-left: 7px;
            }
        }
    }

</style>