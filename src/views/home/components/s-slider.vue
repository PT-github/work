<template>
    <div class="s-slider">
        <el-carousel ref="sliderComp" @change="slideChange" indicator-position="none" trigger="click"  height="296px" :autoplay="false" arrow="always">
            <el-carousel-item v-for="item in 3" :key="item">
                <img src="../../../assets/slider/slider.png" alt="滚图">
            </el-carousel-item>
        </el-carousel>
        <ul class="indicator-page">
            <template v-for="item in 3">
                <li @click="sliderTo(item - 1)" :class="{ 'active': (index + 1) === item }"></li>
            </template>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'sSlider',
        data() {
            return {
                index: 1
            }
        },
        methods: {
            slideChange(currentIdx) {
                this.index = currentIdx
            },
            sliderTo(idx) {
                if  (this.index === idx) {
                    return
                } else {
                    this.index = idx
                    this.$refs['sliderComp'].setActiveItem(idx)
                }
            }
        }
    }
</script>
<style type="stylesheet/scss" lang="scss" scoped>
    .s-slider {
        position: relative;
        height: 315px;
        .indicator-page {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            li {
                cursor: pointer;
                float: left;
                width: 232px;
                height: 10px;
                background-color: #666666;
                margin-left: 7px;
                position: relative;
                &:first-child {
                    margin-left: 0;
                }
                &.active {
                    background-color: #ce160e;
                    &:after {
                        content: '';
                        width: 10px;
                        height: 10px;
                        border-width: 5px;
                        border-style: solid;
                        border-top-color: transparent;
                        border-right-color: transparent;
                        border-bottom-color: #ce160e;
                        border-left-color: transparent;
                        position: absolute;
                        top: -10px;
                        left: 111px;
                    }
                }
            }
        }
        .el-carousel__item img {
            display: block;
            width: 710px;
            height: 296px;
        }
    }

</style>
<style type="stylesheet/scss" lang="scss">

</style>