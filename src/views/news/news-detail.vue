<template>
    <div class="news-detail">
        <div class="title">{{title}}</div>
        <div class="content ql-editor" id="newscontent" v-html="content"></div>
    </div>
</template>
<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
    import { queryNewsDetail } from '@/api/service'
    export default {
        name: 'newsList',
        data() {
            return {
                title: '',
                content: ''
            }
        },
        mounted() {
            this.getNewsDetail(this.$route.query.id)
        },
        methods: {
            getNewsDetail(id) {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: false,
                    target: this.$el
                })
                queryNewsDetail({ id: id }).then((res) => {
                    loading.close()
                    console.log(res)
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
      /deep/
        .title {
            padding-bottom: 5px;
            text-align: center;
            font-size: 16px;
            font-weight: bold;
        };
      .content {
        margin-top: 5px;
        color: #202020;
        font-size: 16px;
        line-height: 30px;
        padding-bottom: 40px;
      }
    }
</style>
<style rel="stylesheet/scss" lang="scss" >
 img{max-width:100%;}
</style>
