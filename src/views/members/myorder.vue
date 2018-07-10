<template>
    <div class="s-baseInfo">
        <div class="title">我的订单</div>
        <div class="table">
            <div class="theader">
                <div class="tr">
                    <div class="th">时间</div>
                    <div class="th">订单内容</div>
                    <div class="th">价格</div>
                    <div class="th">操作</div>
                </div>
            </div>
            <div class="tbody">
                <div class="tr">
                    <div class="td">2017-10-10-10 03:04:50</div>
                    <div class="td">课程名称</div>
                    <div class="td">1000元</div>
                    <div class="td"><span>删除</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'sMyorder',
        data() {
            return {
            }
        },
        computed: {
        },
        mounted() {
        },
        methods: {

        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .s-baseInfo {
        width: 100%;
        margin: 10px auto;
        background-color: #FFF;
        position: relative;
        min-height: 300px;
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

<style rel="stylesheet/scss" lang="scss">
</style>

