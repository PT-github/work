<template>
    <div class="news-detail">
        <div class="title">{{title}}</div>
        <div class="content" v-html="content"></div>
    </div>
</template>
<script>
    import { queryProjectDetail } from '@/api/service'
    export default {
        name: 'projectDetail',
        data() {
            return {
                title: '',
                content: ''
            }
        },
        mounted() {
            this.getProjectDetail(this.$route.query.id)
        },
        methods: {
            getProjectDetail(id) {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: true
                })
                queryProjectDetail({ id: id }).then((res) => {
                    loading.close()
                    this.title = res.data.title
                    this.content = res.data.content
                }).catch(() => {
                    loading.close()
                })
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .news-detail {
        width: 1000px;
        margin: 0 auto;
        background-color: #FFF;
        padding: 20px 10px;
        .title {
            padding-bottom: 20px;
            text-align: center;
            font-size: 16px;
            font-weight: bold;
        }
    }
</style>