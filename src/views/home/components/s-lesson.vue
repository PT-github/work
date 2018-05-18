<template>
    <div class="s-lesson">
        <div class="fl">
            <div class="title">课程培训</div>
        </div>
        <div class="fr">
            <div class="tabs">
                <div class="tabs-nav flex">
                    <div class="tabs-nav-span" :class="{ 'active': activeTab === '1' }" @click="exchangeTabs('1')">
                        <span>健康管理师</span>
                    </div>
                    <div class="tabs-nav-span" :class="{ 'active': activeTab === '2' }" @click="exchangeTabs('2')">
                        <span>心理咨询师</span>
                    </div>
                    <div class="tabs-nav-span" :class="{ 'active': activeTab === '3' }" @click="exchangeTabs('3')">
                        <span>育婴师</span>
                    </div>
                    <div class="tabs-nav-span" :class="{ 'active': activeTab === '4' }" @click="exchangeTabs('4')">
                        <span>催乳师</span>
                    </div>
                    <div class="tabs-nav-span" :class="{ 'active': activeTab === '5' }" @click="exchangeTabs('5')">
                        <span>继续教育</span>
                    </div>
                </div>
                <div class="tabs-content">
                    <div class="tabs-content-01" :class="{ 'active': activeTab === '1' }">
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
                                <div class="tr">
                                    <div class="td blue" style="width: 115px;">一级健康管理师</div>
                                    <div class="td flex-auto">03月10日-09月12日</div>
                                    <div class="td sky-blue" style="width: 85px;">116课时</div>
                                    <div class="td" style="width: 80px;">3000元</div>
                                    <div class="td" style="width: 115px;">440元</div>
                                    <div class="td orange" style="width: 85px;">3440元</div>
                                </div>
                                <div class="tr">
                                    <div class="td blue" style="width: 115px;">一级健康管理师</div>
                                    <div class="td flex-auto">03月10日-09月12日</div>
                                    <div class="td sky-blue" style="width: 85px;">116课时</div>
                                    <div class="td" style="width: 80px;">3000元</div>
                                    <div class="td" style="width: 115px;">440元</div>
                                    <div class="td orange" style="width: 85px;">3440元</div>
                                </div>
                                <div class="tr">
                                    <div class="td blue" style="width: 115px;">一级健康管理师</div>
                                    <div class="td flex-auto">03月10日-09月12日</div>
                                    <div class="td sky-blue" style="width: 85px;">116课时</div>
                                    <div class="td" style="width: 80px;">3000元</div>
                                    <div class="td" style="width: 115px;">440元</div>
                                    <div class="td orange" style="width: 85px;">3440元</div>
                                </div>
                                <div class="tr">
                                    <div class="td blue" style="width: 115px;">一级健康管理师</div>
                                    <div class="td flex-auto">03月10日-09月12日</div>
                                    <div class="td sky-blue" style="width: 85px;">116课时</div>
                                    <div class="td" style="width: 80px;">3000元</div>
                                    <div class="td" style="width: 115px;">440元</div>
                                    <div class="td orange" style="width: 85px;">3440元</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tabs-content-02" :class="{ 'active': activeTab === '2' }">
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
                                <div class="tr">
                                    <div class="td blue" style="width: 115px;">一级心理咨询师</div>
                                    <div class="td flex-auto">03月10日-09月12日</div>
                                    <div class="td sky-blue" style="width: 85px;">116课时</div>
                                    <div class="td" style="width: 80px;">3000元</div>
                                    <div class="td" style="width: 115px;">440元</div>
                                    <div class="td orange" style="width: 85px;">3440元</div>
                                </div>
                                <div class="tr">
                                    <div class="td blue" style="width: 115px;">一级心理咨询师</div>
                                    <div class="td flex-auto">03月10日-09月12日</div>
                                    <div class="td sky-blue" style="width: 85px;">116课时</div>
                                    <div class="td" style="width: 80px;">3000元</div>
                                    <div class="td" style="width: 115px;">440元</div>
                                    <div class="td orange" style="width: 85px;">3440元</div>
                                </div>
                                <div class="tr">
                                    <div class="td blue" style="width: 115px;">一级心理咨询师</div>
                                    <div class="td flex-auto">03月10日-09月12日</div>
                                    <div class="td sky-blue" style="width: 85px;">116课时</div>
                                    <div class="td" style="width: 80px;">3000元</div>
                                    <div class="td" style="width: 115px;">440元</div>
                                    <div class="td orange" style="width: 85px;">3440元</div>
                                </div>
                                <div class="tr">
                                    <div class="td blue" style="width: 115px;">一级心理咨询师</div>
                                    <div class="td flex-auto">03月10日-09月12日</div>
                                    <div class="td sky-blue" style="width: 85px;">116课时</div>
                                    <div class="td" style="width: 80px;">3000元</div>
                                    <div class="td" style="width: 115px;">440元</div>
                                    <div class="td orange" style="width: 85px;">3440元</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tabs-content-03" :class="{ 'active': activeTab === '3' }">
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
                                <div class="tr">
                                    <div class="td blue" style="width: 115px;">一级育婴师</div>
                                    <div class="td flex-auto">03月10日-09月12日</div>
                                    <div class="td sky-blue" style="width: 85px;">116课时</div>
                                    <div class="td" style="width: 80px;">3000元</div>
                                    <div class="td" style="width: 115px;">440元</div>
                                    <div class="td orange" style="width: 85px;">3440元</div>
                                </div>
                                <div class="tr">
                                    <div class="td blue" style="width: 115px;">一级育婴师</div>
                                    <div class="td flex-auto">03月10日-09月12日</div>
                                    <div class="td sky-blue" style="width: 85px;">116课时</div>
                                    <div class="td" style="width: 80px;">3000元</div>
                                    <div class="td" style="width: 115px;">440元</div>
                                    <div class="td orange" style="width: 85px;">3440元</div>
                                </div>
                                <div class="tr">
                                    <div class="td blue" style="width: 115px;">一级育婴师</div>
                                    <div class="td flex-auto">03月10日-09月12日</div>
                                    <div class="td sky-blue" style="width: 85px;">116课时</div>
                                    <div class="td" style="width: 80px;">3000元</div>
                                    <div class="td" style="width: 115px;">440元</div>
                                    <div class="td orange" style="width: 85px;">3440元</div>
                                </div>
                                <div class="tr">
                                    <div class="td blue" style="width: 115px;">一级育婴师</div>
                                    <div class="td flex-auto">03月10日-09月12日</div>
                                    <div class="td sky-blue" style="width: 85px;">116课时</div>
                                    <div class="td" style="width: 80px;">3000元</div>
                                    <div class="td" style="width: 115px;">440元</div>
                                    <div class="td orange" style="width: 85px;">3440元</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tabs-content-04" :class="{ 'active': activeTab === '4' }">
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
                                <div class="tr">
                                    <div class="td blue" style="width: 115px;">一级催乳师</div>
                                    <div class="td flex-auto">03月10日-09月12日</div>
                                    <div class="td sky-blue" style="width: 85px;">116课时</div>
                                    <div class="td" style="width: 80px;">3000元</div>
                                    <div class="td" style="width: 115px;">440元</div>
                                    <div class="td orange" style="width: 85px;">3440元</div>
                                </div>
                                <div class="tr">
                                    <div class="td blue" style="width: 115px;">一级催乳师</div>
                                    <div class="td flex-auto">03月10日-09月12日</div>
                                    <div class="td sky-blue" style="width: 85px;">116课时</div>
                                    <div class="td" style="width: 80px;">3000元</div>
                                    <div class="td" style="width: 115px;">440元</div>
                                    <div class="td orange" style="width: 85px;">3440元</div>
                                </div>
                                <div class="tr">
                                    <div class="td blue" style="width: 115px;">一级催乳师</div>
                                    <div class="td flex-auto">03月10日-09月12日</div>
                                    <div class="td sky-blue" style="width: 85px;">116课时</div>
                                    <div class="td" style="width: 80px;">3000元</div>
                                    <div class="td" style="width: 115px;">440元</div>
                                    <div class="td orange" style="width: 85px;">3440元</div>
                                </div>
                                <div class="tr">
                                    <div class="td blue" style="width: 115px;">一级催乳师</div>
                                    <div class="td flex-auto">03月10日-09月12日</div>
                                    <div class="td sky-blue" style="width: 85px;">116课时</div>
                                    <div class="td" style="width: 80px;">3000元</div>
                                    <div class="td" style="width: 115px;">440元</div>
                                    <div class="td orange" style="width: 85px;">3440元</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tabs-content-05" :class="{ 'active': activeTab === '5' }">
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
                                <div class="tr">
                                    <div class="td blue" style="width: 115px;">一级继续教育</div>
                                    <div class="td flex-auto">03月10日-09月12日</div>
                                    <div class="td sky-blue" style="width: 85px;">116课时</div>
                                    <div class="td" style="width: 80px;">3000元</div>
                                    <div class="td" style="width: 115px;">440元</div>
                                    <div class="td orange" style="width: 85px;">3440元</div>
                                </div>
                                <div class="tr">
                                    <div class="td blue" style="width: 115px;">一级继续教育</div>
                                    <div class="td flex-auto">03月10日-09月12日</div>
                                    <div class="td sky-blue" style="width: 85px;">116课时</div>
                                    <div class="td" style="width: 80px;">3000元</div>
                                    <div class="td" style="width: 115px;">440元</div>
                                    <div class="td orange" style="width: 85px;">3440元</div>
                                </div>
                                <div class="tr">
                                    <div class="td blue" style="width: 115px;">一级继续教育</div>
                                    <div class="td flex-auto">03月10日-09月12日</div>
                                    <div class="td sky-blue" style="width: 85px;">116课时</div>
                                    <div class="td" style="width: 80px;">3000元</div>
                                    <div class="td" style="width: 115px;">440元</div>
                                    <div class="td orange" style="width: 85px;">3440元</div>
                                </div>
                                <div class="tr">
                                    <div class="td blue" style="width: 115px;">一级继续教育</div>
                                    <div class="td flex-auto">03月10日-09月12日</div>
                                    <div class="td sky-blue" style="width: 85px;">116课时</div>
                                    <div class="td" style="width: 80px;">3000元</div>
                                    <div class="td" style="width: 115px;">440元</div>
                                    <div class="td orange" style="width: 85px;">3440元</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'sLesson',
        data() {
            return {
                activeTab: '1'
            }
        },
        methods: {
            exchangeTabs(t) {
                this.activeTab = t
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .s-lesson {
        width: 710px;
        height: 300px;
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
                            padding-bottom: 11px;
                            display: block;
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