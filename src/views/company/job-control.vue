<template>
    <div class="s-myjob">
        <div class="title">职位管理<span class="right-btn">新增职位+</span></div>
        <div class="table">
            <div class="theader">
                <div class="tr">
                    <div class="th">职位名称</div>
                    <div class="th">浏览</div>
                    <div class="th">应聘</div>
                    <div class="th">状态</div>
                    <div class="th">发布日期</div>
                    <div class="th">操作</div>
                </div>
            </div>
            <div class="tbody">
                <div class="tr" v-for="(item, index) in jobList" :key="'jobList-' + index">
                    <div class="td">{{ item.job }}</div>
                    <div class="td">{{ item.lookNums }}</div>
                    <div class="td">{{ item.applyNums }}</div>
                    <div class="td">{{ item.status }}</div>
                    <div class="td">{{ item.pubTime }}</div>
                    <div class="td"><span>刷新</span><span>发布</span><span>撤回</span><span>删除</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'sMyjob',
        data() {
            return {
                active: 0,
                jobList: [
                    { id: 1, job: '职位名称0', lookNums: '1000', applyNums: '300', status: '已发布', pubTime: '2010-10-10 13:10:10' },
                    { id: 2, job: '职位名称1', lookNums: '1000', applyNums: '500', status: '已撤回', pubTime: '2010-10-10 13:10:10' },
                    { id: 3, job: '职位名称2', lookNums: '1000', applyNums: '10', status: '已发布', pubTime: '2010-10-10 13:10:10' },
                    { id: 4, job: '职位名称3', lookNums: '1000', applyNums: '20', status: '已发布', pubTime: '2010-10-10 13:10:10' },
                    { id: 5, job: '职位名称4', lookNums: '1000', applyNums: '30', status: '已发布', pubTime: '2010-10-10 13:10:10' }
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
    .s-myjob {
        margin: 20px 0;
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
        .incomeBox {
            border: 1px solid #CCC;
            margin: 20px auto;
            width: 300px;
            border-radius: 5px;
            text-align: center;
            font-size: 13px;
            padding: 10px 0;
            p {
                height: 30px;
                line-height: 30px;
            }
        }
    }
</style>