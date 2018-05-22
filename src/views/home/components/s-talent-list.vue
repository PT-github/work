<template>
    <div class="s-talent-list">
        <div class="title">
            <router-link tag='a' :to="'/'" class="more">
                <img src="../../../assets/teacher/more.png" alt="更多">
            </router-link>
        </div>
        <ul class="list">
            <li v-for="item in list" class="list-li">
                <div class="search_job_list">
                    <div class="part01 clearfix">
                        <div class="search_user_list_neme fl">
                            <router-link tag="a" :to="'/'" class=" disc_per">{{item.name}}</router-link>
                            <span class="disc_user_mes">{{item.sex}},{{item.age}}岁,</span>
                        </div>
                        <div class="disc_time fr">更新时间：{{item.updateTime}}</div>
                    </div>
                    <div class="company_det">
                        <span class="search_job_list_box_s">
                            意向：
                            <span class="com_search_job_em">{{item.itention}}</span>
                        </span>
                        <span class="search_job_list_box_line">|</span>
                        <span class="search_job_list_box_s">
                            薪资：
                            <span class="com_search_job_em com_search_job_em_pay">{{item.salary}}</span>
                        </span>
                        <span class="search_job_list_box_line">|</span>
                        <span class="search_job_list_box_s">
                            经验：
                            <span class="com_search_job_em">{{item.experience}}</span>
                        </span>
                        <span class="search_job_list_box_line">|</span>
                        <span class="search_job_list_box_s">
                            学历：
                            <span class="com_search_job_em">{{item.education}}</span>
                        </span>
                    </div>
                </div>
            </li>

        </ul>
    </div>
</template>
<script>
    import { queryTalents } from '@/api/service'
    export default {
        name: 'sTalentList',
        mounted() {
            this.getTalents()
        },
        data() {
            return {
                list: []
            }
        },
        methods: {
            getTalents() {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: false,
                    target: this.$el.querySelector('.list')
                })
                queryTalents().then((res) => {
                    loading.close()
                    this.list = res.list
                }).catch(() => {
                    loading.close()
                })
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .s-talent-list {
        width: 100%;
        border: 1px solid #cac9cb;
        margin-top: 20px;
        background-color: #FFF;
        .list {
            min-height: 58px;
        }
        .list-li {
            &:last-child {
                .search_job_list {
                    border-bottom: 0;
                }
            }
        }
        .search_job_list {
            margin-left: 10px;
            margin-right: 10px;
            border-bottom: 1px solid #e4e4e4;
            padding-top: 10px;
            padding-bottom: 10px;
            color: #676767;
            position: relative;
            font-size: 13px;
            .company_det {
                font-size: 12px;
                .com_search_job_em_pay {
                    color: #e8620e;
                }
            }
            .part01 {
                margin-bottom: 10px;
                .search_user_list_neme {
                    color: #1369c0;
                    .disc_user_mes {
                        font-size: 12px;
                        padding-left: 10px;
                        color: #a4a4a4;
                    }
                }
                .disc_time {
                    color: #9d9999;
                    font-size: 12px;
                    padding-top: 1px;
                }
            }
        }
        .title {
            height: 40px;
            background-image: url("../../../assets/hunter/title_06.png");
            background-position: 17px 10px;
            background-repeat: no-repeat;
            box-shadow: 1px 1px 1px rgba(204, 204, 204, .5);
            position: relative;
            .more {
                position: absolute;
                top: 10px;
                right: 10px;
            }
        }
    }
</style>
<style rel="stylesheet/scss" lang="scss">
    .list {
        .el-loading-spinner {
            margin-top: -9px;
        }
    }
</style>