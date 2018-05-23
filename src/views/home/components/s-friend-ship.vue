<template>
    <div class="s-friend-ship">
        <div class="title"></div>
        <div class="link-box clearfix">
            <router-link v-for="item in list" :key="item.id" tag='a' :to="'/'" class="fl">
                <img :src="item.imgUrl" :alt="item.name">
            </router-link>
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
            min-height: 142px;
            a {
                width: 120px;
                height: 50px;
                img {
                    width: 120px;
                    height: 50px;
                    dispaly: block;
                }
            }
        }
        .title {
            position: absolute;
            height: 36px;
            left: 0;
            right: 0;
            top: -10px;
            background-image: url("../../../assets/links/title.png");
            background-repeat: repeat;
            background-position: center center;
        }
    }
</style>