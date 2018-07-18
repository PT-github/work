<template>
    <div class="certificate-query">
        <div class="flex">
            <div class="flex-item">
                <div class="title">基本信息</div>
                <div class="table">
                    <div class="tbody">
                        <div class="tr">
                            <div class="td">
                                <div class="label">姓名：</div>
                                <div class="value">{{ renderData.username }}</div>
                            </div>
                            <div class="td">
                                <div class="label">性别：</div>
                                <div class="value">{{ renderData.sex }}</div>
                            </div>
                        </div>
                        <div class="tr">
                            <div class="td">
                                <div class="label">身份证号：</div>
                                <div class="value">{{ renderData.certId }}</div>
                            </div>
                            <div class="td">
                                <div class="label">出生日期：</div>
                                <div class="value">{{ renderData.birth }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-item-pic">
                <div class="pic">
                    <img :src="renderData.imgUrl" alt="">
                </div>
            </div>
        </div>
        <div class="title">获证信息</div>
        <div class="table" v-if="renderData.certifications && renderData.certifications.length > 0" v-for="item in renderData.certifications">
            <div class="tbody">
                <div class="tr">
                    <div class="td">
                        <div class="label">证书类型：</div>
                        <div class="value">{{ item.cerType }}</div>
                    </div>
                    <div class="td">
                        <div class="label">岗位名称：</div>
                        <div class="value">{{ item.cerName }}</div>
                    </div>
                </div>
                <div class="tr">
                    <div class="td">
                        <div class="label">证书编号：</div>
                        <div class="value">{{ item.cerNo }}</div>
                    </div>
                    <div class="td">
                        <div class="label">级别：</div>
                        <div class="value">{{ item.cerLevel }}</div>
                    </div>
                </div>
                <div class="tr">
                    <div class="td">
                        <div class="label">成绩：</div>
                        <div class="value">{{ item.cerReport }}</div>
                    </div>
                    <div class="td">
                        <div class="label">文化程度：</div>
                        <div class="value">{{ item.education }}</div>
                    </div>
                </div>
                <div class="tr">
                    <div class="td">
                        <div class="label">获证时间：</div>
                        <div class="value">{{ item.getCerTime }}</div>
                    </div>
                </div>
                <div class="tr">
                    <div class="td">
                        <div class="label">发证机构：</div>
                        <div class="value">{{ item.issuingAgency }}</div>
                    </div>
                </div>
                <div class="tr">
                    <div class="td">
                        <div class="label">备注说明：</div>
                        <div class="value">{{ item.remark }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { queryCerti } from '@/api/service'
    export default {
        data() {
            return  {
                renderData: {
                    username: '',
                    sex: '',
                    certId: '',
                    birth: '',
                    imgUrl: '',
                    certifications: []
                }
            }
        },
        mounted() {
            this.queryCertificate()
        },
        methods: {
            // 通过名称name
            queryCertificate() {
                const name = this.$route.query.name, // 用户名称
                    type = this.$route.query.type,  // 查询类型
                    typeValue = this.$route.query.typeValue,    // 查询类型对应中文
                    value = this.$route.query.value // 查询类型对应值
                queryCerti({ name, type, typeValue, value }).then(res => {
                    console.log(res)
                    this.renderData.username = res.data.username
                    this.renderData.sex = res.data.sex
                    this.renderData.certId = res.data.certId
                    this.renderData.birth = res.data.birth
                    this.renderData.imgUrl = res.data.imgUrl
                    this.renderData.certifications.splice(0, this.renderData.certifications.length)
                    this.renderData.certifications.push(...res.data.certifications)
                })
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .certificate-query {
        width: 1000px;
        margin: 10px auto;
        border: 1px solid #dadada;
        border-radius: 5px;
        background-color: #FFF;
        font-size: 13px;
        padding: 10px;
        .title {
            width: 100%;
            height: 35px;
            line-height: 35px;
            text-indent: 20px;
            background-color: #f1ecec;
        }
        .table {
            border-top: 1px solid #f1ecec;
            margin-top: 10px;
            .tr {
                display: flex;
                .td {
                    flex: 1;
                    display: flex;
                    min-height: 30px;
                    line-height: 30px;
                    &:first-child {
                        border-left: 1px solid #f1ecec;
                    }
                    .label {
                        width: 100px;
                        text-align: right;
                        padding-right: 10px;
                        border-right: 1px solid #f1ecec;
                        border-bottom: 1px solid #f1ecec;
                    }
                    .value {
                        flex: 1;
                        border-right: 1px solid #f1ecec;
                        border-bottom: 1px solid #f1ecec;
                        padding-left: 10px;
                        overflow: hidden;
                        word-wrap: break-word;
                        word-break: break-all;
                    }
                }
            }
        }
        .flex {
            display: flex;
            margin-bottom: 10px;
            .flex-item {
                flex: 1;
                margin-right: 10px;
            }
            .flex-item-pic {
                width: 80px;
                height: 105px;
                .pic {
                    width: 100%;
                    height: 100%;
                }
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }

    }
</style>