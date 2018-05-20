<template>
    <div class="s-video-and-employment">
        <div class="title">
            <router-link tag='a' :to="'/'" class="more">
                <img src="../../../assets/teacher/more.png" alt="更多">
            </router-link>
        </div>
        <div class="video-box clearfix">
            <div class="video-box-content fl">
                <div class="video-show clearfix" @click="playShow">
                    <div class="pic fl">
                        <img src="../../../assets/video/pic.png" alt="健康管理师培训视频">
                    </div>
                    <div class="detail fl">健康管理师培训视频</div>
                </div>
            </div>
            <div class="video-box-content fl">
                <div class="video-show clearfix">
                    <div class="pic fl">
                        <img src="../../../assets/video/pic.png" alt="健康管理师培训视频">
                    </div>
                    <div class="detail fl">健康管理师培训视频</div>
                </div>
            </div>
            <div class="video-box-content fl">
                <div class="video-show clearfix">
                    <div class="pic fl">
                        <img src="../../../assets/video/pic.png" alt="健康管理师培训视频">
                    </div>
                    <div class="detail fl">健康管理师培训视频</div>
                </div>
            </div>
            <div class="video-box-content fl">
                <div class="video-show clearfix">
                    <div class="pic fl">
                        <img src="../../../assets/video/pic.png" alt="健康管理师培训视频">
                    </div>
                    <div class="detail fl">健康管理师培训视频</div>
                </div>
            </div>
        </div>
        <ul class="ul clearfix">
            <li>XXXX视频教程</li>
            <li>XXXX视频教程</li>
            <li>XXXX视频教程</li>
            <li>XXXX视频教程</li>
            <li>XXXX视频教程</li>
            <li>XXXX视频教程</li>
            <li>XXXX视频教程</li>
            <li>XXXX视频教程</li>
            <li>XXXX视频教程</li>
            <li>XXXX视频教程</li>
            <li>XXXX视频教程</li>
            <li>XXXX视频教程</li>
        </ul>
        <!--<div class="fr">
            <div class="title">招聘单位</div>
            <ul>
                <li><router-link tag="a" :to="'/'">叶义言儿童生长促进中心</router-link></li>
                <li><router-link tag="a" :to="'/'">叶义言儿童生长促进中心</router-link></li>
                <li><router-link tag="a" :to="'/'">叶义言儿童生长促进中心</router-link></li>
                <li><router-link tag="a" :to="'/'">叶义言儿童生长促进中心</router-link></li>
                <li><router-link tag="a" :to="'/'">叶义言儿童生长促进中心</router-link></li>
                <li><router-link tag="a" :to="'/'">叶义言儿童生长促进中心</router-link></li>
                <li><router-link tag="a" :to="'/'">叶义言儿童生长促进中心</router-link></li>
            </ul>
        </div>-->
        <el-dialog @close="close" :close-on-click-modal="false" :close-on-press-escape="false"
                   :visible.sync="dialogVisible" width="1000px">
            <sVideoPlay ref="sVideoPlayDom"></sVideoPlay>
        </el-dialog>
    </div>
</template>
<script>
    import sVideoPlay from './s-video-play'

    export default {
        name: 'sVideoAndEmployment',
        data() {
            return {
                dialogVisible: false,
                playFlag: false
            }
        },
        methods: {
            playShow() {
                this.dialogVisible = true
            },
            close() {
                this.$refs['sVideoPlayDom'].pause()
            }
        },
        components: {
            sVideoPlay
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .s-video-and-employment {
        width: 100%;
        border: 1px solid #cac9cb;
        margin-top: 20px;
        background-color: #FFF;
        .video-box {
            margin-left: 25px;
            margin-top: 10px;
            .video-box-content {
                width: 212px;
                margin-left: 32px;
                &:first-child {
                    margin-left: 0;
                }
                .video-show {
                    height: 70px;
                    position: relative;
                    cursor: pointer;
                    &:before {
                        z-index: 1;
                        content: '';
                        width: 21px;
                        height: 20px;
                        position: absolute;
                        right: 6px;
                        bottom: 6px;
                        background-image: url("../../../assets/video/play.png");
                        background-position: center center;
                        background-repeat: no-repeat;
                    }
                    .pic {
                        img {
                            width: 92px;
                            height: 70px;
                            display: block;
                        }
                    }
                    .detail {
                        width: 120px;
                        height: 70px;
                        background-color: #e5e5e5;
                        font-size: 15px;
                        color: #333333;
                        padding: 18px 30px 18px 13px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: pre-wrap;
                        word-wrap: break-word;
                        word-break: break-all;
                    }
                }
            }
        }
        .ul {
            margin: 15px 0 0 25px;
            li {
                width: 212px;
                float: left;
                padding-left: 27px;
                background-image: url("../../../assets/video/icon.png");
                background-repeat: no-repeat;
                background-position: 2px center;
                font-size: 13px;
                height: 14px;
                line-height: 14px;
                color: #333;
                margin-bottom: 15px;
                margin-left: 32px;
                &:nth-child(4n+1) {
                    margin-left: 0;
                }
                &:hover {
                    color: #ce160e;
                    cursor: pointer;
                }
            }
        }
        .title {
            height: 40px;
            background-image: url("../../../assets/video/title1.png");
            background-position: 17px 10px;
            background-repeat: no-repeat;
            position: relative;
            .more {
                position: absolute;
                top: 10px;
                right: 10px;
            }
        }
        /*.fr {
            width: 250px;
            box-shadow: 2px 0px 2px rgba(204, 204, 204, .5) inset;
            height: 260px;
            ul {
                li {
                    background-image: url("../../../assets/video/icon.png");
                    background-position: 20px center;
                    background-repeat: no-repeat;
                    height: 30px;
                    display: block;
                    font-size: 12px;
                    line-height: 30px;
                    padding-left: 38px;
                    a {
                        color: #333333;
                        &:hover {
                            text-decoration: underline;
                            color: #ce160e;
                        }
                    }
                }
            }
            .title {
                height: 40px;
                line-height: 40px;
                background-image: url(../../../assets/video/title2.png);
                background-repeat: no-repeat;
                background-position: 19px center;
                font-size: 12px;
                font-weight: bold;
                color: #333333;
                padding-left: 44px;
            }
        }*/
    }
</style>