<template>
    <ul class="search-result">
        <li class="search-result_li" v-for="item in list">
                <!--type(0:新闻，1：开班信息，2：培训项目，3：人才简历，4：职位，5：公司)-->
                <template v-if="item.type === 0">
                    <div class="search-name">
                        <router-link tag='a' target="_blank" :to="{ path: '/news-detail', query: { id: item.id } }">{{ item.name }}</router-link>
                    </div>
                    <div class="tag">
                        <span>新闻</span>
                    </div>
                </template>
                <template v-else-if="item.type === 1">
                    <div class="search-name">
                        <router-link tag='a' target="_blank" :to="{ path: '/lesson-detail', query: { id: item.id } }">{{ item.name }}</router-link>
                    </div>
                    <div class="tag">
                        <span>开班信息</span>
                    </div>
                </template>
                <template v-else-if="item.type === 2">
                    <div class="search-name">
                        <router-link tag='a' target="_blank" :to="{ path: '/project-detail', query: { id: item.id } }">{{ item.name }}</router-link>
                    </div>
                    <div class="tag">
                        <span>培训项目</span>
                    </div>
                </template>
                <template v-else-if="item.type === 3">
                    <div class="search-name">
                        <router-link tag='a' target="_blank" :to="{ path: '/resume-detail', query: { id: item.id } }">{{ item.name }}</router-link>
                    </div>
                    <div class="tag">
                        <span>人才简历</span>
                    </div>
                </template>
                <template v-else-if="item.type === 4">
                    <div class="search-name">
                        <router-link tag='a' target="_blank" :to="{ path: '/job-detail', query: { id: item.id } }">{{ item.name }}</router-link>
                    </div>
                    <div class="tag">
                        <span>职位</span>
                    </div>
                </template>
                <template v-else-if="item.type === 5">
                    <div class="search-name">
                        <router-link tag='a' target="_blank" :to="{ path: '/company-detail', query: { id: item.id } }">{{ item.name }}</router-link>
                    </div>
                    <div class="tag">
                        <span>公司</span>
                    </div>
                </template>
        </li>
    </ul>
</template>
<script>
    import { searchByKeywords } from '@/api/service'
    export default {
        name: 'searchResult',
        data() {
            return {
                list: []
            }
        },
        watch: {
            '$route.query.keywords': function() {
                this.queryByKeywords()
            }
        },
        methods: {
            queryByKeywords() {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: false,
                    target: this.$el
                })
                searchByKeywords(this.$route.query.keywords).then(res => {
                    loading.close()
                    this.list.splice(0, this.list.length)
                    this.list.push(...res.list)
                })
            }
        },
        mounted() {
            this.queryByKeywords()
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .search-result {
        width: 1000px;
        border: 1px solid #cac9cb;
        margin: 10px auto;
        background-color: #FFF;
        .search-result_li {
            min-height: 35px;
            line-height: 20px;
            display: flex;
            padding: 10px;
            border-bottom: 1px dotted #CCC;
            &:last-child {
                border-bottom: 0;
            }
            .search-name {
                flex: 1;
                font-size: 14px;
                cursor: pointer;
                &:hover {
                    text-decoration: underline;
                }
            }
            .tag {
                width: 80px;
                color: coral;
                font-size: 12px;
                text-align: right;
                span {
                    display: inline-block;
                    height: 25px;
                    padding: 0 10px;
                    line-height: 25px;
                    border: 1px solid orange;
                    border-radius: 3px;
                }
            }
        }
    }
</style>
<style rel="stylesheet/scss" lang="scss">
</style>
