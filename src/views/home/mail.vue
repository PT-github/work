<template>
    <ul class="search-result">
        <li class="search-result_li" v-for="(item, index) in list" :key="'mail_' + index">
            <div class="search-name">
                {{ item.name }}
            </div>
            <template v-if="index < unreadCounts">
                <div class="tag">
                    <span>最新消息</span>
                </div>
            </template>
            <template v-else>
                <div class="tag tag-history">
                    <span>历史消息</span>
                </div>
            </template>
        </li>
    </ul>
</template>
<script>
    import { searchMail } from '@/api/service'
    export default {
        name: 'searchResult',
        data() {
            return {
                list: []
            }
        },
        computed: {
            unreadCounts() {
                return this.$route.query.count || 0
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
                searchMail(this.$store.state.user.id).then(res => {
                    loading.close()
                    this.list.splice(0, this.list.length)
                    this.list.push(...res.list)
                    this.$store.dispatch('setCount', false)
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
            .tag-history {
                color: #CCC;
                span {
                    border-color: #CCC;
                }
            }
        }
    }
</style>
