<template>
  <div class="edication-training">
      <div class="flex">
          <div class="left">
              <sLesson></sLesson>
          </div>
          <div class="right">
              <div class="news-title">培训项目</div>
              <ul class="pro-list clearfix">
                  <li v-for="(item, index) in projectList" :key="'project-' + index">
                      <router-link tag="a" :to="{ path: '/project-detail', query: { id: item.id } }">{{ item.name }}</router-link>
                  </li>
              </ul>
              <div class="title">
                  <p>电话热线</p>
              </div>
              <div class="button button1">
                  <p class="p1">网上在线报名</p>
                  <p class="p2">Online registration</p>
              </div>
          </div>
      </div>
      <div class="video-list">
          <div class="title"></div>
          <div class="part" v-for="(item, index) in videoList" :key="'category-' + index">
              <div class="category">{{ item.name }}</div>
              <ul class="teacherBox clearfix">
                  <li @click="playShow(v.videoUrl, v.videoPic)" v-for="(v, idx) in item.child" :key="'video-' + idx">
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
              <!--<div class="more"><span>- - - - - - - - - - - - - - - - 查看更多- - - - - - - - - - - - - - - - - - -</span></div>-->
          </div>
      </div>
      <div class="teacher-list">
          <div class="title"></div>
          <ul class="teacherBox clearfix">
              <li v-for="(item, index) in teacherList" :key="'teacher-' + index">
                  <div class="pic">
                      <img :src="item.imgUrl" :alt="item.name">
                  </div>
                  <div class="detail">
                      <div class="name">{{ item.name }}</div>
                      <div class="pro">{{ item.subject }}</div>
                      <div class="des" :title="item.detail">{{ item.detail }}</div>
                  </div>
              </li>
          </ul>
          <div class="more" v-if="teacherShowMore"><span @click="getTeachersByPage">- - - - - - - - - - - - - - - - 查看更多- - - - - - - - - - - - - - - - - - -</span></div>
      </div>
      <el-dialog @close="close" :close-on-click-modal="false" :close-on-press-escape="false"
                 :visible.sync="dialogVisible" width="1000px">
          <sVideoPlay :videoUrl="videoUrl" :videoPic="videoPic" ref="sVideoPlayDom"></sVideoPlay>
      </el-dialog>
  </div>
</template>
<script>
    import {sLesson} from '@/views/home/components'
    import { queryProject, queryTeachersByPage, queryCategory,queryVideoByCategory } from '@/api/service'
    import sVideoPlay from '../home/components/s-video-play'
    export default {
        name: 'educationTraining',
        data() {
            return {
                projectList: [],
                pageNum: 1,
                pageSize: 9,
                teacherList: [],
                teacherShowMore: true,
                videoList: [],
                dialogVisible: false,
                videoUrl: '',
                videoPic: ''
            }
        },
        mounted() {
            this.getProject()
            this.getTeachersByPage()
            this.getVideoByCategory()
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
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: false,
                    target: this.$el.querySelector('.video-list')
                })
                queryCategory().then(res => {
                    let obj = {}
                    for (let i = 0; i < res.list.length; i++) {
                        obj = res.list[i]
                        obj.child = []
                        this.videoList.push(obj)
                    }
                    this.videoList.forEach((item, index) => {
                        queryVideoByCategory({categoryId: item.id}).then(ret => {
                            this.videoList[index].child.push(...ret.list)
                        })
                    })
                }).then(() => {
                    this.$nextTick(() => {
                        loading.close()
                    })
                })
            },
            getTeachersByPage() {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: false,
                    target: this.$el.querySelector('.teacher-list')
                })
                queryTeachersByPage({
                    pageNum: this.pageNum,
                    pageSize: this.pageSize
                }).then((res) => {
                    loading.close()
                    this.teacherList.push(...res.list)
                    if (this.pageNum >= res.totalPage) {
                        this.teacherShowMore = false
                    }
                    this.pageNum++
                }).catch(() => {
                    loading.close()
                })
            },
            getProject() {
                const loading = this.$loading({
                    lock: true,
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.1)',
                    fullscreen: false,
                    target: this.$el.querySelector('.pro-list')
                })
                queryProject().then((res) => {
                    loading.close()
                    this.projectList = res.list
                }).catch(() => {
                    loading.close()
                })
            }
        },
        components: {
            sLesson,
            sVideoPlay
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .edication-training {
        width: 1000px;
        margin: 10px auto;
        .video-list {
            border: 1px solid #cac9cb;
            margin-top: 10px;
            background-color: #FFF;
            min-height: 200px;
            .category {
                margin: 10px 2.5% 0;
                background-color: rgba(204, 204, 204, .8);
                height: 30px;
                line-height: 30px;
                padding: 0 5px;
                font-size: 15px;
                color: #FFF;
            }
            .more {
                font-size: 12px;
                color: #999;
                text-align: center;
                height: 25px;
                line-height: 25px;
                span {
                    cursor: pointer;
                }
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
            .title {
                height: 40px;
                background-image: url(/static/imgs/title_02.png);
                background-position: 17px center;
                background-repeat: no-repeat;
                -webkit-box-shadow: 1px 1px 1px rgba(204, 204, 204, 0.5);
                box-shadow: 1px 1px 1px rgba(204, 204, 204, 0.5);
                position: relative;
            }
        }
        .teacher-list {
            border: 1px solid #cac9cb;
            margin-top: 10px;
            background-color: #FFF;
            min-height: 120px;
            .more {
                font-size: 12px;
                color: #999;
                text-align: center;
                height: 25px;
                line-height: 25px;
                span {
                    cursor: pointer;
                }
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
                        margin-left: 10px;
                        padding-top: 10px;
                        overflow: hidden;
                        .name {
                            font-size: 14px;
                            font-weight: bold;
                            color: #000;
                            height: 25px;
                            line-height: 25px;
                        }
                        .pro {
                            height: 25px;
                            line-height: 25px;
                            font-size: 13px;
                            color: #333333;
                        }
                        .des {
                            color: #666666;
                            font-size: 12px;
                            line-height: 20px;
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
            .title {
                height: 40px;
                background-image: url(/static/imgs/title_01.png);
                background-position: 17px center;
                background-repeat: no-repeat;
                -webkit-box-shadow: 1px 1px 1px rgba(204, 204, 204, 0.5);
                box-shadow: 1px 1px 1px rgba(204, 204, 204, 0.5);
                position: relative;
            }
        }
        .flex {
            display: flex;
            .left {

                background-color: #FFF;
                width: 710px;
                .title {
                    height: 40px;
                    background-image: url(/static/imgs/title_04.png);
                    background-position: 17px center;
                    background-repeat: no-repeat;
                    -webkit-box-shadow: 1px 1px 1px rgba(204, 204, 204, 0.5);
                    box-shadow: 1px 1px 1px rgba(204, 204, 204, 0.5);
                    position: relative;
                }
            }
            .right {
                padding-bottom: 15px;
                flex: 1;
                border: 1px solid #cac9cb;
                background-color: #FFF;
                position: relative;
                margin-left: 10px;
                .title {
                    height: 38px;
                    margin: 1px 1px 0;
                    border-bottom: 1px solid #d3d3d3;
                    border-top: 1px solid #d3d3d3;
                    background-image: url("/static/imgs/tell.png");
                    background-repeat: no-repeat;
                    background-position: 126px center;
                    p {
                        width: 118px;
                        height: 36px;
                        background-color: #9b9b9b;
                        color: #FFF;
                        font-size: 22px;
                        text-align: center;
                        line-height: 36px;
                    }
                }
                .button {
                    width: 230px;
                    height: 60px;
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-image: url("../../assets/regist/btn1.png");
                    margin: 0 auto;
                    cursor: pointer;
                    .p1 {
                        font-size: 16px;
                        color: #008dd6;
                        padding-top: 15px;
                        padding-left: 84px;
                    }
                    .p2 {
                        font-size: 12px;
                        color: #008dd6;
                        padding-top: 3px;
                        padding-left: 84px;
                    }
                }
                .button1 {
                    margin-top:14px;
                }
                .button2 {
                    margin-top:16px;
                    background-image: url("../../assets/regist/btn2.png");
                }
                .orange {
                    color: #ff7200 !important;
                }
                .pro-list {
                    padding: 36px 15px 0;
                    min-height: 176px;
                    li {
                        float: left;
                        width: 50%;
                        height: 35px;
                        line-height: 35px;
                        font-size: 12px;
                        color: #1257a3;
                        padding: 0 5px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        cursor: pointer;
                        &:hover {
                            color: #d91023;
                        }
                        &:before {
                            content: '•';
                            padding-right: 5px;
                        }
                    }
                }
                .news-title {
                    position: absolute;
                    top: 7px;
                    left: -7px;
                    width: 277px;
                    height: 29px;
                    background-image: url(../../assets/news/news-title.png);
                    background-repeat: no-repeat;
                    background-position: left center;
                    font-size: 12px;
                    color: #FFF;
                    padding: 6px 0 0 14px;
                }
            }
        }
    }
</style>
