<template>
    <div class="s-income">
        <div class="title">我的积分</div>
        <div class="incomeBox">
            <p>当前积分：{{ incomeObj.totalIncome }} <span class="exchange" @click="exchange">兑换(选择商品)</span></p>
        </div>
        <ul class="tab clearfix">
            <li class="on">积分明细</li>
        </ul>
        <div class="table">
            <div class="theader">
                <div class="tr">
                    <div class="th">时间</div>
                    <div class="th">积分描述</div>
                    <div class="th">获取积分</div>
                </div>
            </div>
            <div class="tbody">
                <div class="tr" v-for="(item, index) in totalIncomeList" :key="'totalIncomeList-' + index">
                    <div class="td">{{ item.time }}</div>
                    <div class="td">{{ item.des }}</div>
                    <div class="td">{{ item.score }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'sScore',
        data() {
            return {
                active: 0,
                incomeObj: {
                    totalIncome: '10000元',
                    currentIncome: '0元',
                    level: '兼职/主管'
                },
                totalIncomeList: [
                    { id: 1, score: '100', des: '因为什么获取积分的描述', time: '2017-1-1 10:10:10' },
                    { id: 2, score: '20', des: '因为什么获取积分的描述', time: '2017-1-1 10:10:10' },
                    { id: 3, score: '30', des: '因为什么获取积分的描述', time: '2017-1-1 10:10:10' },
                    { id: 4, score: '40', des: '因为什么获取积分的描述', time: '2017-1-1 10:10:10' },
                    { id: 5, score: '500', des: '因为什么获取积分的描述', time: '2017-1-1 10:10:10' }
                ]
            }
        },
        methods: {
            exchange() {
                alert('选择商品')
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .s-income {
        .tab {
            font-size: 14px;
            padding-left: 10px;
            li {
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
        .title {
            height: 35px;
            line-height: 35px;
            text-indent: 20px;
            border: 1px solid #CCC;
            margin: 10px 10px 0;
            font-size: 14px;
            border-radius: 5px;
        }
    }
</style>