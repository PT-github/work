<template>
    <div class="s-myjob">
        <div class="title">企业人才库</div>
        <ul class="tab clearfix">
            <li :class="{on: active === 0}" @click="setActive(0)">应聘记录</li>
            <li :class="{on: active === 1}" @click="setActive(1)">自有人才库</li>
            <li :class="{on: active === 2}" @click="setActive(2)">网站人才库</li>
        </ul>
        <div class="table" v-show="active === 0">
            <div class="theader">
                <div class="tr">
                    <div class="th">应聘时间</div>
                    <div class="th">名称</div>
                    <div class="th">应聘职位</div>
                    <div class="th">状态</div>
                    <div class="th">操作</div>
                </div>
            </div>
            <div class="tbody">
                <div class="tr" v-for="(item, index) in applyRecordList" :key="'applyRecordList-' + index">
                    <div class="td">{{ item.date }}</div>
                    <div class="td">{{ item.name }}</div>
                    <div class="td">{{ item.job }}</div>
                    <div class="td">{{ item.status }}</div>
                    <div class="td"><span @click="deleteApply(item.id)">删除</span></div>
                </div>
            </div>
        </div>
        <div class="table" v-show="active === 1">
            <div class="theader">
                <div class="tr">
                    <div class="th">名称</div>
                    <div class="th">学历</div>
                    <div class="th">经验</div>
                    <div class="th">状态</div>
                    <div class="th">操作</div>
                </div>
            </div>
            <div class="tbody">
                <div class="tr" v-for="(item, index) in ownTalentList" :key="'ownTalentList-' + index">
                    <div class="td">{{ item.name }}</div>
                    <div class="td">{{ item.education }}</div>
                    <div class="td">{{ item.workExperience }}</div>
                    <div class="td">{{ item.status }}</div>
                    <div class="td"><span @click="deleteOwnTalant(item.id)">删除</span></div>
                </div>
            </div>
            <div class="createResume"><router-link tag="a" :to="'/resume-edit'" target="_blank">新增+</router-link></div>
        </div>
        <div class="table" v-show="active === 2">
            <div class="theader">
                <div class="tr">
                    <div class="th">名称</div>
                    <div class="th">学历</div>
                    <div class="th">经验</div>
                    <div class="th">状态</div>
                    <div class="th">操作</div>
                </div>
            </div>
            <div class="tbody">
                <div class="tr" v-for="(item, index) in netWorkTalentList" :key="'netWorkTalentList-' + index">
                    <div class="td">{{ item.name }}</div>
                    <div class="td">{{ item.education }}</div>
                    <div class="td">{{ item.workExperience }}</div>
                    <div class="td">{{ item.status }}</div>
                    <div class="td"><span @click="deleteNetWorkTalent(item.id)">删除</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import { queryApplyRecordList, deleteApplyRecordList, queryOwnTalentList, deleteOwnTalentList, queryNetWorkTalentList, deleteNetWorkTalentList} from '@/api/service'
    export default {
        name: 'sMyjob',
        data() {
            return {
                active: 0,
                applyRecordList: [],
                ownTalentList: [],
                netWorkTalentList: []
            }
        },
        mounted() {
            this.getApplyRecordList()
        },
        methods: {
            deleteApply(id) {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                deleteApplyRecordList(id).then(res => {
                    loading.close()
                    if (res.success) {
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        })
                        this.getApplyRecordList()
                    } else {
                        this.$message({
                            message: '删除失败',
                            type: 'success'
                        })
                    }
                })
            },
            deleteOwnTalant(id) {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                deleteOwnTalentList(id).then(res => {
                    loading.close()
                    if (res.success) {
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        })
                        this.getOwnTalentList()
                    } else {
                        this.$message({
                            message: '删除失败',
                            type: 'success'
                        })
                    }
                })
            },
            deleteNetWorkTalent(id) {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                deleteNetWorkTalentList(id).then(res => {
                    loading.close()
                    if (res.success) {
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        })
                        this.getNetWorkTalentList()
                    } else {
                        this.$message({
                            message: '删除失败',
                            type: 'success'
                        })
                    }
                })
            },
            setActive(i) {
                this.active = i
                if (i === 0 && this.applyRecordList.length === 0) {
                    this.getApplyRecordList()
                } else if (i === 1 && this.ownTalentList.length === 0) {
                    this.getOwnTalentList()
                } else if (i === 2 && this.netWorkTalentList.length === 0) {
                    this.getNetWorkTalentList()
                }
            },
            getApplyRecordList() {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                queryApplyRecordList({id: this.$store.state.user.id}).then(res => {
                    loading.close()
                    this.applyRecordList.splice(0, this.applyRecordList.length)
                    this.applyRecordList.push(...res.list)
                })
            },
            getOwnTalentList() {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                queryOwnTalentList({id: this.$store.state.user.id}).then(res => {
                    loading.close()
                    this.ownTalentList.splice(0, this.ownTalentList.length)
                    this.ownTalentList.push(...res.list)
                })
            },
            getNetWorkTalentList() {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                queryNetWorkTalentList({id: this.$store.state.user.id}).then(res => {
                    loading.close()
                    this.netWorkTalentList.splice(0, this.netWorkTalentList.length)
                    this.netWorkTalentList.push(...res.list)
                })
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .s-myjob {
        margin: 20px 0;
        .createResume {
            font-size: 14px;
            border: 1px solid #CCC;
            height: 30px;
            line-height: 30px;
            text-align: center;
            margin: 10px 0;
            border-radius: 5px;
            cursor: pointer;
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