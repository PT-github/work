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
                <div class="tr" v-for="(item, index) in resume" :key="'my-resume' + index">
                    <div class="td"><router-link tag="a" target="_blank" :to="{path: '/resume-detail', query: { id: item.id }}">{{ item.name }}</router-link></div>
                    <div class="td">{{ item.openness }}</div>
                    <div class="td"><span @click="editFun(item.id)">编辑</span><span @click="refreshFun(item.id)">刷新</span><span @click="deleteFun(item.id)">删除</span></div>
                </div>
            </div>
        </div>
        <div class="createResume"><router-link tag="a" :to="'/resume-edit'">创建简历+</router-link></div>
    </div>
</template>
<script>
    import { queryMyResume, deleteMyResume, refreshMyResume } from '@/api/service'
    export default {
        name: 'sResume',
        data() {
            return {
                resume: []
            }
        },
        mounted() {
            this.getMyResume()
        },
        methods: {
            getMyResume() {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                queryMyResume({id: this.$store.state.user.id}).then(res => {
                    loading.close()
                    this.resume.splice(0, this.resume.length)
                    this.resume.push(...res.list)
                })
            },
            editFun(id) {
                this.$router.push({path: '/resume-edit', query: {id: id}})
            },
            refreshFun(id) {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                refreshMyResume({id}).then(res => {
                    loading.close()
                    if (res.success) {
                        this.$message({
                            message: '简历刷新成功',
                            type: 'success'
                        })
                    } else {
                        this.$message({
                            message: '简历刷新失败:' + res.message,
                            type: 'error'
                        })
                    }
                })
            },
            deleteFun(id) {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                deleteMyResume({id}).then(res => {
                    loading.close()
                    if (res.success) {
                        this.$message({
                            message: '简历删除成功',
                            type: 'success'
                        })
                        this.getMyResume()
                    } else {
                        this.$message({
                            message: '简历删除失败:' + res.message,
                            type: 'error'
                        })
                    }
                })
            }
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
        .createResume {
            font-size: 14px;
            border: 1px solid #CCC;
            height: 30px;
            line-height: 30px;
            text-align: center;
            margin: 10px;
            border-radius: 5px;
            cursor: pointer;
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

