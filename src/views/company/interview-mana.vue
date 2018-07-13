<template>
    <div class="interview-mana">
        <div class="title">面试管理</div>
        <ul class="tab clearfix">
            <li :class="{on: active === 0}" @click="getData(0)">面试邀请</li>
            <li :class="{on: active === 1}" @click="getData(1)">简历收藏记录</li>
        </ul>
        <div class="table" v-show="active === 0">
            <div class="theader">
                <div class="tr">
                    <div class="th">姓名</div>
                    <div class="th">职位</div>
                    <div class="th">状态</div>
                    <div class="th">面试日期</div>
                    <div class="th">操作</div>
                </div>
            </div>
            <div class="tbody">
                <div class="tr" v-for="(item, index) in interviewList" :key="'interviewList-' + index">
                    <div class="td">{{ item.name }}</div>
                    <div class="td">{{ item.job }}</div>
                    <div class="td">{{ item.status }}</div>
                    <div class="td">{{ item.interviewTime }}</div>
                    <div class="td"><span>删除</span></div>
                </div>
            </div>
        </div>
        <div class="table" v-show="active === 1">
            <div class="theader">
                <div class="tr">
                    <div class="th">姓名</div>
                    <div class="th">简历名称</div>
                    <div class="th">操作</div>
                </div>
            </div>
            <div class="tbody">
                <div class="tr" v-for="(item, index) in collectList" :key="'collectList-' + index">
                    <div class="td">{{ item.name }}</div>
                    <div class="td">{{ item.resumeName }}</div>
                    <div class="td"><span>删除</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'sInterviewMana',
        data() {
            return {
                active: 0,
                interviewList: [
                    { id: 1, name: 'XXXXXXX', job: '育婴师', status: '已经面试', interviewTime: '2010-10-10 13:10:10' },
                    { id: 2, name: 'XXXXXXX', job: '健康管理师', status: '面试成功', interviewTime: '2010-10-10 13:10:10' },
                    { id: 3, name: 'XXXXXXX', job: '催乳师', status: '面试失败', interviewTime: '2010-10-10 13:10:10' },
                    { id: 4, name: 'XXXXXXX', job: '继续教育', status: '已删除', interviewTime: '2010-10-10 13:10:10' },
                    { id: 5, name: 'XXXXXXX', job: '育婴师', status: '已经面试', interviewTime: '2010-10-10 13:10:10' }
                ],
                collectList: [
                    { id: 1, name: '张三', resumeName: '简历名称'},
                    { id: 2, name: '李四', resumeName: '简历名称'},
                    { id: 3, name: '张三', resumeName: '简历名称'},
                    { id: 4, name: '李四', resumeName: '简历名称'},
                    { id: 5, name: '张三', resumeName: '简历名称'},
                ]
            }
        },
        methods: {
            getData(i) {
                this.active = i
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .interview-mana {
        margin: 20px 0;
        .tab {
            margin-top: 10px;
            font-size: 14px;
            padding-left: 10px;
            li {
                margin-right: 10px;
                padding: 0 10px;
                float: left;
                text-align: center;
                border: 1px solid #CCC;
                height: 25px;
                line-height: 25px;
                cursor: pointer;
            }
            .on {
                color: #FFF;
                background-color: #CCC;
            }
        }
        .title {
            height: 35px;
            line-height: 35px;
            text-indent: 20px;
            border: 1px solid #CCC;
            margin: 10px 10px 0;
            font-size: 14px;
            border-radius: 5px;
            position: relative;
            .right-btn {
                position: absolute;
                width: 95px;
                height: 35px;
                line-height: 35px;
                font-size: 13px;
                text-align: center;
                text-decoration: underline;
                color: #666;
                right: 0;
                top: 0;
                text-indent: 0;
                cursor: pointer;
            }
        }
        .tab {
            margin-top: 10px;
            font-size: 14px;
            padding-left: 10px;
            li {
                margin-right: 10px;
                padding: 0 10px;
                float: left;
                text-align: center;
                border: 1px solid #CCC;
                height: 25px;
                line-height: 25px;
                cursor: pointer;
            }
            .on {
                color: #FFF;
                background-color: #CCC;
            }
        }
        .table {
            padding: 10px;
            .theader {
                .tr {
                    border: 1px solid #dedede;
                    background-color: #cccccc61;
                }
            }
            .tbody {
                .tr {
                    border-bottom:1px solid #dedede;
                    border-left: 1px solid #dedede;
                    border-right: 1px solid #dedede;
                    .td:last-child {
                        span {
                            padding: 0 5px;
                            cursor: pointer;
                            &:hover {
                                text-decoration: underline;
                            }
                        }
                    }
                }
            }
            .tr {
                height: 36px;
                line-height: 36px;
                display: flex;
                .th {
                    color: #666666;
                }
                .td {
                    color:#333;
                }
                .th,.td {
                    font-size: 12px;
                    flex: 1;
                    text-align: center;
                }
            }
        }

    }
</style>