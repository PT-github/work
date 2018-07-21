<template>
    <div class="s-myvideo">
        <div class="title">我的视频</div>
        <div class="part" v-for="(item, index) in videoList" :key="'category-' + index">
            <div class="category">{{ item.name }}</div>
            <ul class="teacherBox clearfix">
                <li v-for="(v, idx) in item.child" :key="'video-' + idx" @click="playShow(v.videoUrl, v.videoPic)">
                    <div class="pic">
                        <img :src="v.imgUrl" :alt="v.name">
                    </div>
                    <div class="detail">
                        <div class="name">{{ v.name }}</div>
                        <div class="pro">点击率：<span class="orange">{{ v.click }}</span></div>
                        <div class="des" :title="v.detail">{{ v.detail }}</div>
                    </div>
                </li>
            </ul>
        </div>
        <el-dialog @close="close" :close-on-click-modal="false" :close-on-press-escape="false"
                   :visible.sync="dialogVisible" width="1000px">
            <sVideoPlay :videoUrl="videoUrl" :videoPic="videoPic" ref="sVideoPlayDom"></sVideoPlay>
        </el-dialog>
    </div>
</template>
<script>
    import { queryCategory,queryVideoByCategory } from '@/api/service'
    import sVideoPlay from '@/views/home/components/s-video-play'
    export default {
        name: 'sMyvideo',
        data() {
            return {
                videoList: [],
                dialogVisible: false,
                videoUrl: '',
                videoPic: ''
            }
        },
        mounted() {
            const loading = this.$loading({
                lock: true,
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.1)',
                fullscreen: false,
                target: this.$el.querySelector('.video-list')
            })
            this.getVideoByCategory().then(() => {
                loading.close()
            })
        },
        methods: {
            close() {
                this.$refs['sVideoPlayDom'].pause()
            },
            playShow(url, pic) {
                this.videoUrl = url
                this.videoPic = pic
                this.dialogVisible = true
                this.$nextTick(() => {
                    this.$refs['sVideoPlayDom'].play()
                })
            },
            getVideoByCategory() {
                return queryCategory().then(res => {
                    let obj = {}
                    for (let i = 0; i < res.list.length; i++) {
                        obj = res.list[i]
                        obj.child = []
                        this.videoList.push(obj)
                        queryVideoByCategory({categoryId: res.list[i].id}).then(ret => {
                            this.videoList[i].child.push(...ret.list)
                        })
                    }

                })
            },
        },
        components: {
            sVideoPlay
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .s-myvideo {
        .title {
            height: 35px;
            line-height: 35px;
            text-indent: 20px;
            border: 1px solid #CCC;
            margin: 10px 10px 0;
            font-size: 14px;
            border-radius: 5px;
        }
        .category {
            margin: 10px 2.5% 0;
            height: 30px;
            line-height: 30px;
            padding: 0 5px;
            font-size: 14px;
            border-bottom: 1px dotted #CCC;
        }
        .teacherBox {
            padding-top: 15px;
            li {
                cursor: pointer;
                width: 30%;
                display: flex;
                height: 120px;
                margin-left: 2.5%;
                margin-bottom: 15px;
                float: left;
                .detail {
                    flex: 1;
                    padding-left: 10px;
                    padding-top: 10px;
                    padding-right: 15px;
                    overflow: hidden;
                    background-color: rgba(204, 204, 204, .2);
                    .orange {
                        color: #e18000;
                    }
                    .name {
                        font-size: 14px;
                        font-weight: bold;
                        color: #000;
                        height: 25px;
                        line-height: 25px;
                        text-align: center;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .pro {
                        height: 25px;
                        line-height: 25px;
                        font-size: 13px;
                        color: #333333;
                        text-align: right;
                    }
                    .des {
                        color: #666666;
                        font-size: 12px;
                        line-height: 20px;
                        text-indent: 10px;
                    }
                }
                .pic {
                    width: 130px;
                    height: 120px;
                    img {
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
</style>