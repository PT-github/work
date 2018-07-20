<template>
    <div class="s-income">
        <div class="title">我的积分</div>
        <div class="incomeBox">
            <p>当前积分：{{ totalIncome }} <span class="exchange" @click="exchange">兑换(选择商品)</span></p>
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
                <div class="tr" v-for="(item, index) in scoreList" :key="'scoreList-' + index">
                    <div class="td">{{ item.time }}</div>
                    <div class="td">{{ item.des }}</div>
                    <div class="td">{{ item.score }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { queryScore } from '@/api/service'
    export default {
        name: 'sScore',
        data() {
            return {
                active: 0,
                totalIncome: '10000分',
                scoreList: []
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                queryScore({id: this.$store.state.user.id}).then(res => {
                    loading.close()
                    let data = res.data
                    this.totalIncome = data.totalIncome
                    this.scoreList.push(...data.scoreList)
                })
            },
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