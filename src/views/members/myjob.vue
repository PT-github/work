<template>
    <div class="s-myjob">
        <div class="title">我的工作</div>
        <ul class="tab clearfix">
            <li :class="{on: active === 0}" @click="getData(0)">职位收藏夹</li>
            <li :class="{on: active === 1}" @click="getData(1)">职位申请记录</li>
            <li :class="{on: active === 2}" @click="getData(2)">我的面试机会</li>
            <li :class="{on: active === 3}" @click="getData(3)">简历被查看记录</li>
        </ul>
        <div class="table" v-show="active === 0">
            <div class="theader">
                <div class="tr">
                    <div class="th">职位名</div>
                    <div class="th">公司名</div>
                    <div class="th">工作地点</div>
                    <div class="th">薪资</div>
                    <div class="th">操作</div>
                </div>
            </div>
            <div class="tbody">
                <div class="tr" v-for="(item, index) in collecList" :key="'collecList-' + index">
                    <div class="td">{{ item.job }}</div>
                    <div class="td">{{ item.company }}</div>
                    <div class="td">{{ item.place }}</div>
                    <div class="td">{{ item.salary }}</div>
                    <div class="td"><span>编辑</span><span>申请</span><span>删除</span></div>
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
                collecList: [
                    { id: 1, job: '职位名称0', company: '公司名称', place: '长沙-雨花区', salary: '100元/小时' },
                    { id: 2, job: '职位名称1', company: '公司名称', place: '长沙-雨花区', salary: '100元/小时' },
                    { id: 3, job: '职位名称2', company: '公司名称', place: '长沙-雨花区', salary: '100元/小时' },
                    { id: 4, job: '职位名称3', company: '公司名称', place: '长沙-雨花区', salary: '100元/小时' },
                    { id: 5, job: '职位名称4', company: '公司名称', place: '长沙-雨花区', salary: '100元/小时' }
                ],
                currentIncomeList: [
                    { id: 1, money: '100元', des: '收益的描述', time: '2017-1-1 10:10:10' },
                    { id: 2, money: '100元', des: '收益的描述', time: '2017-1-1 10:10:10' },
                    { id: 3, money: '100元', des: '收益的描述', time: '2017-1-1 10:10:10' },
                    { id: 4, money: '100元', des: '收益的描述', time: '2017-1-1 10:10:10' },
                    { id: 5, money: '100元', des: '收益的描述', time: '2017-1-1 10:10:10' }
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