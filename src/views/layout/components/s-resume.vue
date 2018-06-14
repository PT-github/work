<template>
    <div class="s-baseInfo">
        <div class="title">我的简历</div>
        <div class="table">
            <div class="theader">
                <div class="tr">
                    <div class="th">简历名称</div>
                    <div class="th">公开程度</div>
                    <div class="th">操作</div>
                </div>
            </div>
            <div class="tbody">
                <div class="tr">
                    <div class="td">我的简历</div>
                    <div class="td">完全公开</div>
                    <div class="td"><span>编辑</span><span>刷新</span><span>删除</span></div>
                </div>
                <div class="tr">
                    <div class="td">我的简历</div>
                    <div class="td">完全公开</div>
                    <div class="td"><span>编辑</span><span>刷新</span><span>删除</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'sBaseInfo',
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
        width: 1000px;
        margin: 10px auto;
        background-color: #FFF;
        position: relative;
        min-height: 300px;
        .table {
            padding: 50px 10px 10px;
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
            position: absolute;
            top: 7px;
            left: -7px;
            width: 1000px;
            height: 29px;
            background-image: url(../../../assets/news/title-2.png);
            background-repeat: no-repeat;
            background-position: left center;
            font-size: 12px;
            color: #FFF;
            padding: 6px 0 0 14px;
        }
    }
</style>

<style rel="stylesheet/scss" lang="scss">
</style>

