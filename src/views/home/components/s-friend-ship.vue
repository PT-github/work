<template>
    <div class="s-friend-ship">
        <div class="title"></div>
        <div class="link-box clearfix">
            <a  v-for="(item, index) in list" :href="item.link" class="fl" :key="'friend-ship' + index">
                {{item.name}}
            </a>
        </div>
    </div>
</template>

<script>
    import { queryFriendShips } from '@/api/service'
    export default {
        name: 'sFriendShip',
        mounted() {
            this.getData()
        },
        data() {
            return {
                list: []
            }
        },
        methods: {
            getData() {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: false,
                    target: this.$el.querySelector('.link-box')
                })
                queryFriendShips().then((res) => {
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
    .s-friend-ship {
        margin-top: 20px;
        position: relative;
        background-color: #FFF;
        .link-box {
            padding-top: 42px;
            padding-bottom: 20px;
            padding-left:20px;
            padding-right: 20px;
            display: flex;
            flex-wrap: wrap;
            a {
                width: 232px;
                height: 30px;
                line-height: 30px;
                font-size: 13px;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-right: 10px;
                &:nth-child(4n) {
                    margin-right: 0;
                }
                &:hover {
                    text-decoration: underline;
                }
                img {
                    width: 120px;
                    height: 50px;
                    display: block;
                }
            }
        }
        .title {
            position: absolute;
            height: 36px;
            left: 0;
            right: 0;
            top: -10px;
            background-image: url(/static/imgs/title.png);
            background-repeat: repeat;
            background-position: center center;
        }
    }
</style>
