<template>
    <div class="job-hunting">
        <div class="form-box">
            <div class="form-control">
                <div class="label">
                    关键字：
                </div>
                <div class="input-control">
                    <input type="text">
                </div>
            </div>
            <div class="form-control">
                <div class="label">
                    地点：
                </div>
                <div class="input-control">
                    <span>北京</span>
                    <span>上海</span>
                    <span>长沙</span>
                    <span>广州</span>
                </div>
            </div>
            <div class="form-control" :class="{'no-bottom': !showMore}">
                <div class="label">
                    发布日期：
                </div>
                <div class="input-control">
                    <span>所有</span><span>24小时内</span><span>近三天</span><span>近一周</span><span>近一月</span><span>其他</span>
                </div>
            </div>
            <div class="more" @click="toggleShowMore">{{showMoreTitle}}</div>
            <transition name="fade">
                <div v-show="showMore">
                    <div class="form-control">
                        <div class="label">
                            月薪范围：
                        </div>
                        <div class="input-control">
                            <span>所有</span><span>2千以下</span><span>2-3千</span><span>3-4.5千</span><span>6-8千</span><span>0.8-1万</span><span>1-1.5万</span><span>1.5-2万</span><span>2-3万</span><span>3万以上</span>
                        </div>
                    </div>
                    <div class="form-control">
                        <div class="label">
                            公司性质：
                        </div>
                        <div class="input-control">
                            <span>所有</span><span>外资</span><span>合资</span><span>国企</span><span>民营公司</span><span>创业公司</span><span>政府机关</span><span>事业单位</span><span>非营利组织</span><span>上市公司</span>
                        </div>
                    </div>
                    <div class="form-control">
                        <div class="label">
                            工作年限：
                        </div>
                        <div class="input-control">
                            <span>所有</span><span>无经验</span><span>1-3年</span><span>3-5年</span><span>5-10年</span><span>10年以上</span>
                        </div>
                    </div>
                    <div class="form-control">
                        <div class="label">
                            学历要求：
                        </div>
                        <div class="input-control">
                            <span>所有</span><span>初中及以下</span><span>高中/中专</span><span>大专</span><span>本科</span><span>硕士</span><span>博士</span>
                        </div>
                    </div>
                    <div class="form-control no-bottom">
                        <div class="label">
                            公司规模：
                        </div>
                        <div class="input-control">
                            <span>所有</span><span>少于50人</span><span>50-150人</span><span>150-500人</span><span>500-1000人</span><span>1000-5000人</span><span>5000-10000人</span><span>10000人以上</span>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <div class="job-list">
            <div class="job-box-header">
                <div class="selectAll">
                    <span>全选</span>
                </div>
                <div class="flex-auto clearfix">
                    <div class="applyBtn button"><i></i>申请职位</div>
                    <div class="collectBtn button"><i></i>收藏职位</div>
                </div>
                <div class="rt">
                    <span id="rtPrev" class="dicon pre"></span>
                    <span class="dw_c_orange">123</span> / 133
                    <span id="rtNext" class="dicon next"></span>
                </div>
                <div class="rt">共17条职位</div>
            </div>
            <div class="table">
                <div class="theader">
                    <div class="tr">
                        <div class="th flex-auto">职位名</div>
                        <div class="th" style="width: 275px;">公司名</div>
                        <div class="th" style="width: 120px;">工作地点</div>
                        <div class="th" style="width: 150px;">薪资</div>
                        <div class="th" style="width: 110px;">发布时间</div>
                    </div>
                </div>
                <div class="tbody">
                    <div class="tr">
                        <div class="td" style="width: 30px;"><span class="checkbox"></span></div>
                        <div class="td flex-auto">职位名称职位名称</div>
                        <div class="td" style="width: 275px;">公司名称公司名称</div>
                        <div class="td center" style="width: 120px;">上海</div>
                        <div class="td center" style="width: 150px;">50-10万/年</div>
                        <div class="td center" style="width: 110px;">06-04</div>
                    </div>
                    <div class="tr">
                        <div class="td" style="width: 30px;"><span class="checkbox checked"></span></div>
                        <div class="td flex-auto">职位名称职位名称</div>
                        <div class="td" style="width: 275px;">公司名称公司名称</div>
                        <div class="td center" style="width: 120px;">上海</div>
                        <div class="td center" style="width: 150px;">50-10万/年</div>
                        <div class="td center" style="width: 110px;">06-04</div>
                    </div>
                    <div class="tr">
                        <div class="td" style="width: 30px;"><span class="checkbox checked"></span></div>
                        <div class="td flex-auto">职位名称职位名称</div>
                        <div class="td" style="width: 275px;">公司名称公司名称</div>
                        <div class="td center" style="width: 120px;">上海</div>
                        <div class="td center" style="width: 150px;">50-10万/年</div>
                        <div class="td center" style="width: 110px;">06-04</div>
                    </div>
                    <div class="tr">
                        <div class="td" style="width: 30px;"><span class="checkbox checked"></span></div>
                        <div class="td flex-auto">职位名称职位名称</div>
                        <div class="td" style="width: 275px;">公司名称公司名称</div>
                        <div class="td center" style="width: 120px;">上海</div>
                        <div class="td center" style="width: 150px;">50-10万/年</div>
                        <div class="td center" style="width: 110px;">06-04</div>
                    </div>
                    <div class="tr">
                        <div class="td" style="width: 30px;"><span class="checkbox checked"></span></div>
                        <div class="td flex-auto">职位名称职位名称</div>
                        <div class="td" style="width: 275px;">公司名称公司名称</div>
                        <div class="td center" style="width: 120px;">上海</div>
                        <div class="td center" style="width: 150px;">50-10万/年</div>
                        <div class="td center" style="width: 110px;">06-04</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'jobHunting',
        data() {
            return {
                showMore: false,
                showMoreTitle: '展开更多选项▼',
            }
        },
        methods: {
            toggleShowMore() {
                this.showMore = !this.showMore
                if (this.showMore) {
                    this.showMoreTitle = '收起更多选项▲'
                } else {
                    this.showMoreTitle = '展开更多选项▼'
                }
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .job-hunting {
        width: 1000px;
        margin: 0 auto;
        .job-list {
            margin-bottom: 10px;
            border: 1px solid #cac9cb;
            .table {
                .tr {
                    display: flex;
                    border-bottom: 1px solid #e8e8e8;
                    .flex-auto {
                        flex: 1;
                    }
                    .center {
                        text-align: center;
                    }
                }
                .tbody {
                    .tr {
                        font-size: 14px;
                        color: #333;
                        height: 40px;
                        line-height: 40px;
                        &:last-child {
                            border-bottom: 0;
                        }
                        .td {
                            span {
                                display: inline-block;
                                width: 15px;
                                height: 15px;
                                margin-top: 12px;
                                margin-left: 8px;
                                float: left;
                                background-image: url(../../assets/img/check.png);
                                background-position:left center;
                                background-repeat: no-repeat;
                            }
                            .checked {
                                background-image: url(../../assets/img/checked.png);
                            }
                        }
                    }
                }
                .theader {
                    height: 30px;
                    line-height: 30px;
                    text-align: center;

                    font-size: 12px;
                    color: #999;
                }
            }
            .job-box-header {
                display: flex;
                border-bottom: 1px solid #cac9cb;
                .flex-auto {
                    flex: 1;
                    .button {
                        width: 123px;
                        height: 26px;
                        line-height: 26px;
                        font-size: 12px;
                        cursor: pointer;
                        margin: 7px 0 0 15px;
                        border-radius: 2px;
                        float: left;
                        i {
                            float: left;
                            display: block;
                            width: 20px;
                            height: 20px;
                            margin: 2px 6px 0 16px;
                            background-image: url("../../assets/img/list_icon_dw_20171226.png");
                        }
                    }
                    .applyBtn {
                        color: #FFF;
                        background-color: #FF6000;
                        border: 1px solid #FF6000;
                        i {
                            background-position: -70px 0;
                        }
                    }
                    .collectBtn {
                        color: #FF6000;
                        background-color: #FFF2E3;
                        border: 1px solid #FFB865;
                        i {
                            background-position: -70px -20px;
                        }
                    }
                }
                .selectAll {
                    width: 80px;
                    font-size: 12px;
                    color: #999;
                    height: 42px;
                    border-right: 1px solid #cac9cb;
                    span {
                        display: block;
                        width: 50px;
                        height: 18px;
                        margin-top: 12px;
                        margin-left: 15px;
                        text-align: right;
                        line-height: 18px;
                        background-image: url(../../assets/img/check.png);
                        background-position:left center;
                        background-repeat: no-repeat;
                    }
                }
                .rt {
                    border-left: 1px solid #cac9cb;
                    width: 118px;
                    height: 42px;
                    line-height: 42px;
                    text-align: center;
                    font-size: 12px;
                    color: #999;
                    position: relative;
                    .dicon {
                        position: absolute;
                        width: 8px;
                        height: 14px;
                        top: 14px;
                        left: 15px;
                        cursor: pointer;
                        background-image: url("../../assets/img/list_icon_dw_20171226.png");
                    }
                    .pre {
                        background-position: -150px 0;
                    }
                    .next {
                        left: auto;
                        right: 15px;
                        background-position: -170px -20px;
                    }
                    .dw_c_orange {
                        color: #FF6000 !important;
                    }
                }
            }
        }
        .form-box {
            position: relative;
            margin: 10px 0 33px;
            border: 1px solid #cac9cb;
            .more {
                cursor: pointer;
                position: absolute;
                bottom: -24px;
                font-size: 12px;
                border: 1px solid #cac9cb;
                border-top: 0;
                width: 150px;
                text-align: center;
                height: 24px;
                line-height: 26px;
                left: 50%;
                margin-left: -75px;
                background-color: #F5F5F5;
            }
            .form-control {
                padding: 0 15px;
                border-bottom: 1px dotted #cac9cb;
                display: flex;
                .label {
                    width: 85px;
                    height: 35px;
                    line-height: 35px;
                    font-size: 12px;
                    color: #999;
                    padding-right: 15px;
                    text-align: right;
                }
                .input-control {
                    flex: 1;
                    input {
                        outline: none;
                        border-width: 0 0 1px 0;
                        width: 400px;
                        background: none;
                        border-bottom: 1px solid #cac9cb;
                        height: 28px;
                        margin-top: 3px;
                        font-size: 12px;
                        font-color: #666;
                        font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
                    }
                    span {
                        display: inline-block;
                        height: 35px;
                        line-height: 35px;
                        padding: 0 5px;
                        font-size: 12px;
                        color: #333;
                        cursor: pointer;
                    }
                }
            }
            .no-bottom {
                border-bottom: 0;
            }
        }
    }
</style>
