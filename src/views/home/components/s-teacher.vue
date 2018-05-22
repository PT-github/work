<template>
    <div class="s-teacher">
        <div class="title">
            <div class="fl">
                <span class="m fl"><img src="../../../assets/teacher/title.png" alt="优秀导师"></span>
                <span class="s fl">/</span>
                <span class="l fl">SHOW</span>
            </div>
            <div class="fr">
                <router-link tag='a' :to="'/'" class="more">
                    <img src="../../../assets/teacher/more.png" alt="更多">
                </router-link>
            </div>
        </div>
        <template v-if="list && list.length > 0">
            <div class="slide-btn">
                <div class="left" @click="go('pre')"></div>
                <div class="right" @click="go('next')"></div>
            </div>
            <div class="s-teacher-content">
                <el-carousel ref="teacherSlider" :interval="5000" class="s-teacher-slider" :autoplay="true" arrow="never" indicator-position="none" trigger="click" height="174px">
                    <el-carousel-item v-for="(item, index) in list" :key="'carousel-' + index">
                        <div class="teacher-l fl" v-for="v in item">
                            <div class="t-pic">
                                <img :src="v.imgUrl" :alt="v.name">
                            </div>
                            <div class="des">{{ v.category }}</div>
                            <div class="name">{{ v.name }}</div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </template>
    </div>
</template>
<script>
    import { queryTeachers } from '@/api/service'
    export default {
        name: 'sTeacher',
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
                    target: this.$el
                })
                queryTeachers().then((res) => {
                    loading.close()
                    if (res.list && res.list.length > 0) {
                        var tempArray = []
                        for(let i = 0; i < res.list.length; i++) {
                            tempArray.push(res.list[i])
                            if ((i + 1) % 6 === 0 && i + 1 != res.list.length) {
                                this.list.push(tempArray)
                                tempArray = []
                            }
                            if (i + 1 === res.list.length) {
                                this.list.push(tempArray)
                            }
                        }
                    }
                }).catch(() => {
                    loading.close()
                })
            },
            go(p) {
                if (p === 'pre') {
                    this.$refs['teacherSlider'].prev()
                } else if (p === 'next') {
                    this.$refs['teacherSlider'].next()
                }
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .s-teacher {
        width: 100%;
        height: 267px;
        border: 1px solid #cac9cb;
        background-color: #FFF;
        margin-top: 20px;
        position: relative;
        .slide-btn {
            > div {
                background-position: center center;
                background-repeat: no-repeat;
                cursor: pointer;
                position: absolute;
                top: 50%;
                width: 20px;
                height: 38px;
                margin-top: -10px;
            }
            .left {
                left: 15px;
                background-image: url("../../../assets/teacher/left.png");
            }
            .right {
                right: 15px;
                background-image: url("../../../assets/teacher/right.png");
            }
        }
        .s-teacher-slider {
            width: 930px;
            margin: 0 auto;
            padding-top: 33px;
            box-shadow: 1px -2px 1px rgba(204, 204, 204, .5), -2px -2px 1px rgba(204, 204, 204, .5);
            .teacher-l {
                position: relative;
                width: 135px;
                height: 174px;
                margin-left: 17px;
                cursor: pointer;
                .name {
                    font-size: 12px;
                    text-align: center;
                    margin-top: 10px;
                    color: #333333;
                }
                .des {
                    position: absolute;
                    top: 130px;
                    height: 20px;
                    left: 0;
                    right: 0;
                    background-color: rgba(204, 204, 204, .8);
                    font-size: 12px;
                    color: #FFF;
                    line-height: 20px;
                    text-align: center;
                }
                .t-pic {
                    width: 135px;
                    height: 150px;
                    border-top-left-radius: 20px;
                    border-top-right-radius: 20px;
                    overflow: hidden;
                    img {
                        width: 100%;
                        height: 100%;
                        display: block;
                    }
                }
            }
        }
        .title {
            height: 40px;
            .fr {
                .more {
                    display: block;
                    margin-right: 10px;
                    margin-top: 10px;
                }
            }
            .fl {
                .m {
                    padding-left: 14px;
                    padding-top:14px;
                }
                .s {
                    font-size: 24px;
                    color: #999999;
                    padding-top: 10px;
                    padding-left: 5px;
                }
                .l {
                    font-size: 12px;
                    color: #c30210;
                    padding-top: 20px;
                    padding-left: 5px;
                }
            }
        }
    }
</style>