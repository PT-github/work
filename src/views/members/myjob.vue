<template>
    <div class="s-myjob">
        <div class="title">我的工作</div>
        <ul class="tab clearfix">
            <li :class="{on: active === 0}" @click="setActive(0)">职位收藏夹</li>
            <li :class="{on: active === 1}" @click="setActive(1)">职位申请记录</li>
            <li :class="{on: active === 2}" @click="setActive(2)">我的面试机会</li>
            <li :class="{on: active === 3}" @click="setActive(3)">简历被查看记录</li>
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
                <div class="tr" v-for="(item, index) in collectList" :key="'collectList-' + index">
                    <div class="td">{{ item.job }}</div>
                    <div class="td">{{ item.company }}</div>
                    <div class="td">{{ item.place }}</div>
                    <div class="td">{{ item.salary }}</div>
                    <div class="td"><span @click="applyJob(item.id)">申请</span><span @click="deleteRecords(item.id)">删除</span></div>
                </div>
            </div>
        </div>
        <div class="table" v-show="active === 1">
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
                <div class="tr" v-for="(item, index) in jobApplyRecods" :key="'jobApplyRecods-' + index">
                    <div class="td">{{ item.job }}</div>
                    <div class="td">{{ item.company }}</div>
                    <div class="td">{{ item.place }}</div>
                    <div class="td">{{ item.salary }}</div>
                    <div class="td"><span @click="applyJob(item.id)">申请</span><span @click="deleteRecords(item.id)">删除</span></div>
                </div>
            </div>
        </div>
        <div class="table" v-show="active === 2">
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
                <div class="tr" v-for="(item, index) in invitedChance" :key="'invitedChance-' + index">
                    <div class="td">{{ item.job }}</div>
                    <div class="td">{{ item.company }}</div>
                    <div class="td">{{ item.place }}</div>
                    <div class="td">{{ item.salary }}</div>
                    <div class="td"><span @click="applyJob(item.id)">申请</span><span @click="deleteRecords(item.id)">删除</span></div>
                </div>
            </div>
        </div>
        <div class="table" v-show="active === 3">
            <div class="theader">
                <div class="tr">
                    <!--<div class="th">职位名</div>-->
                    <!--<div class="th">公司名</div>-->
                    <!--<div class="th">被查看次数</div>-->
                    <!--<div class="th">工作地点</div>-->
                    <!--<div class="th">薪资</div>-->
                  <div class="th">简历名称</div>
                  <div class="th">公司名</div>
                  <div class="th">被查看次数</div>
                  <div class="th">查看时间</div>
                    <div class="th">操作</div>
                </div>
            </div>
            <div class="tbody">
                <div class="tr" v-for="(item, index) in lookedRecords" :key="'lookedRecords-' + index">
                    <!--<div class="td">{{ item.job }}</div>-->
                    <!--<div class="td">{{ item.company }}</div>-->
                    <!--<div class="td">{{ item.num }}</div>-->
                    <!--<div class="td">{{ item.place }}</div>-->
                    <!--<div class="td">{{ item.salary }}</div>-->
                  <div class="td">{{ item.vitaeName }}</div>
                  <div class="td">{{ item.companyName }}</div>
                  <div class="td">{{ item.lookNum }}</div>
                  <div class="td">{{ item.updateTime }}</div>
                    <div class="td"><span @click="deleteRecords(item.id)">删除</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { applyJob, queryCollectJobs, queryJobApplyRecods, queryInvitedChance, queryLookedRecords, deleteCollectJobs, deleteJobApplyRecods, deleteInvitedChance, deleteLookedRecords, } from '@/api/service'
    export default {
        name: 'sMyjob',
        data() {
            return {
                active: 0,
                collectList: [],
                jobApplyRecods: [],
                invitedChance: [],
                lookedRecords: []
            }
        },
        mounted() {
            this.getCollectJobs()
        },
        methods: {
            applyJob(id) {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                applyJob({jobId: id, userId: this.$store.state.user.id}).then(res => {
                    loading.close()
                    if (res.success) {
                        this.$message({
                            message: '职位申请成功',
                            type: 'success'
                        })
                    } else {
                        this.$message({
                            message: '职位申请失败',
                            type: 'success'
                        })
                    }
                })
            },
            deleteRecords(id) {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                let request, callback
                if (this.active === 0) {
                    request = deleteCollectJobs
                    callback = this.getCollectJobs
                } else if (this.active === 1) {
                    request = deleteJobApplyRecods
                    callback = this.getJobApplyRecods
                } else if (this.active === 2) {
                    request = deleteInvitedChance
                    callback = this.getInvitedChance
                } else if (this.active === 3) {
                    request = deleteLookedRecords
                    callback = this.getLookedRecords
                }
                request({id: id}).then(res => {
                    loading.close()
                    if (res.success) {
                        this.$message({
                            message: '记录删除成功',
                            type: 'success'
                        })
                        callback()
                    } else {
                        this.$message({
                            message: '记录删除失败',
                            type: 'success'
                        })
                    }
                })
            },
            setActive(i) {
                this.active = i
                if (i === 0 && this.collectList.length <= 0) {
                    this.getCollectJobs()
                } else if (i === 1 && this.jobApplyRecods.length <= 0) {
                    this.getJobApplyRecods()
                } else if (i === 2 && this.invitedChance.length <= 0) {
                    this.getInvitedChance()
                } else if (i === 3 && this.lookedRecords.length <= 0) {
                    this.getLookedRecords()
                }
            },
            // 职位收藏夹
            getCollectJobs() {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                queryCollectJobs({id: this.$store.state.user.id}).then(res => {
                    loading.close()
                    if (res.list && res.list.length > 0) {
                        this.collectList.push(...res.list)
                    }
                })
            },
            // 职位申请记录
            getJobApplyRecods() {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                queryJobApplyRecods({id: this.$store.state.user.id}).then(res => {
                    loading.close()
                    if (res.list && res.list.length > 0) {
                        this.jobApplyRecods.push(...res.list)
                    }
                })
            },
            // 我的面试机会
            getInvitedChance() {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                queryInvitedChance({id: this.$store.state.user.id}).then(res => {
                    loading.close()
                    if (res.list && res.list.length > 0) {
                        this.invitedChance.push(...res.list)
                    }
                })
            },
            // 简历被查看记录
            getLookedRecords() {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                queryLookedRecords({id: this.$store.state.user.id}).then(res => {
                    loading.close()
                    this.lookedRecords.splice(0, this.lookedRecords.length)
                    if (res.list && res.list.length > 0) {
                        this.lookedRecords.push(...res.list)
                    }
                })
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
