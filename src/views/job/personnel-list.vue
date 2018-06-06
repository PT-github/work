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
                    性别：
                </div>
                <div class="input-control">
                    <span>所有</span><span>男</span><span>女</span>
                </div>
            </div>
            <div class="form-control">
                <div class="label">
                    归属地：
                </div>
                <div class="input-control">
                    <span @click="dialogVisible = true">请选择</span>
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
                            期望月薪：
                        </div>
                        <div class="input-control">
                            <span>所有</span><span>2千以下</span><span>2-3千</span><span>3-4.5千</span><span>6-8千</span><span>0.8-1万</span><span>1-1.5万</span><span>1.5-2万</span><span>2-3万</span><span>3万以上</span>
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
                    <div class="form-control no-bottom">
                        <div class="label">
                            学历：
                        </div>
                        <div class="input-control">
                            <span>所有</span><span>初中及以下</span><span>高中/中专</span><span>大专</span><span>本科</span><span>硕士</span><span>博士</span>
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
                    <div class="applyBtn button"><i></i>邀约面试</div>
                    <div class="collectBtn button"><i></i>收藏简历</div>
                </div>
                <div class="rt">
                    <span id="rtPrev" class="dicon pre"></span>
                    <span class="dw_c_orange">123</span> / 133
                    <span id="rtNext" class="dicon next"></span>
                </div>
                <div class="rt">共17个人才</div>
            </div>
            <ul class="list">
                <li class="list-li">
                    <div class="flex">
                        <div class="checkbox">
                            <span></span>
                        </div>
                        <div class="search_job_list">
                            <div class="part01 clearfix">
                                <div class="search_user_list_neme fl">
                                    <router-link tag="a" :to="'/'" class=" disc_per">张三</router-link>
                                    <span class="disc_user_mes">男,28岁,</span>
                                </div>
                                <div class="disc_time fr">更新时间：3天前</div>
                            </div>
                            <div class="company_det">
                        <span class="search_job_list_box_s">
                            意向：
                            <span class="com_search_job_em">咨询师</span>
                        </span>
                                <span class="search_job_list_box_line">|</span>
                                <span class="search_job_list_box_s">
                            薪资：
                            <span class="com_search_job_em com_search_job_em_pay">2万/月</span>
                        </span>
                                <span class="search_job_list_box_line">|</span>
                                <span class="search_job_list_box_s">
                            经验：
                            <span class="com_search_job_em">2年以上</span>
                        </span>
                                <span class="search_job_list_box_line">|</span>
                                <span class="search_job_list_box_s">
                            学历：
                            <span class="com_search_job_em">博士</span>
                        </span>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="list-li">
                    <div class="flex">
                        <div class="checkbox">
                            <span class="checked"></span>
                        </div>
                        <div class="search_job_list">
                            <div class="part01 clearfix">
                                <div class="search_user_list_neme fl">
                                    <router-link tag="a" :to="'/'" class=" disc_per">张三</router-link>
                                    <span class="disc_user_mes">男,28岁,</span>
                                </div>
                                <div class="disc_time fr">更新时间：3天前</div>
                            </div>
                            <div class="company_det">
                        <span class="search_job_list_box_s">
                            意向：
                            <span class="com_search_job_em">咨询师</span>
                        </span>
                                <span class="search_job_list_box_line">|</span>
                                <span class="search_job_list_box_s">
                            薪资：
                            <span class="com_search_job_em com_search_job_em_pay">2万/月</span>
                        </span>
                                <span class="search_job_list_box_line">|</span>
                                <span class="search_job_list_box_s">
                            经验：
                            <span class="com_search_job_em">2年以上</span>
                        </span>
                                <span class="search_job_list_box_line">|</span>
                                <span class="search_job_list_box_s">
                            学历：
                            <span class="com_search_job_em">博士</span>
                        </span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <el-dialog class="areaDialog" :visible.sync="dialogVisible" width="960px" :close-on-click-modal="false" :close-on-press-escape="false">
            <div slot="title" class="areaTitle">选择地区 <span>（最多只能选择5项）</span></div>
            <div class="selectedArea clearfix">
                <div class="areaBtn">长沙<i></i></div>
                <div class="areaBtn">上海<i></i></div>
            </div>
            <areaComp></areaComp>
            <div slot="footer" class="dialog-footer">
                <div class="button" @click="dialogVisible = false">确 定</div>
                <div class="button cancel" @click="dialogVisible = false">取 消</div>
            </div>
        </el-dialog>

    </div>
</template>
<script>
    import areaComp from './components/areaComp'
    export default {
        name: 'jobHunting',
        components: {
            areaComp
        },
        data() {
            return {
                dialogVisible: false,
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
            .flex {
                display: flex;
                border-bottom: 1px solid #e4e4e4;
                .checkbox {
                    width: 43px;
                    span {
                        display: inline-block;
                        width: 15px;
                        height: 15px;
                        margin-top: 21px;
                        margin-left: 15px;
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
            .list-li {
                &:last-child {
                    > .flex {
                        border-bottom: 0;
                    }
                }
            }
            .search_job_list {
                flex: 1;
                margin-left: 10px;
                margin-right: 10px;
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
<style rel="stylesheet/scss" lang="scss">
    .areaDialog {
        .selectedArea {
            padding: 15px 10px 5px;
            background-color: #fff;
            border-bottom: 1px solid #e8e8e8;
            .areaBtn {
                position: relative;
                float: left;
                height: 26px;
                line-height: 26px;
                font-size: 12px;
                color: #333;
                white-space: nowrap;
                margin: 0 8px 5px 0;
                padding: 0 20px 0 6px;
                background-color: #fff;
                border: 1px solid #ff9f20;
                cursor: pointer;
                i {
                    position: absolute;
                    width: 20px;
                    top: -1px;
                    right: 0;
                    height: 26px;
                    background: url(../../assets/img/close2.png) center no-repeat;
                }
            }
        }
        .el-dialog__header {
            border-bottom: 1px solid #e5e5e5;
        }
        .areaTitle {
            font-weight: bold;
            font-size: 18px;
            span {
                font-size: 12px;
            }
        }
        .el-dialog__body {
            padding: 0 0 10px 0;
        }
        .dialog-footer {
            text-align: center;
            .button {
                display: inline-block;
                height: 28px;
                line-height: 27px;
                font-size: 14px;
                color: #fff;
                text-align: center;
                cursor: pointer;
                margin: 0 10px;
                padding: 0 30px;
                background-color: #ff6000;
                border: 1px solid #ff6000;
                border-radius: 2px;
            }
            .cancel {
                color: #999;
                background-color: #fff;
                border-color: #b0b0b0;
            }
        }
    }
</style>
