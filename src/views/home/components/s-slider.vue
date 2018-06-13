<template>
    <div class="s-slider">
        <!---->
        <el-carousel ref="sliderComp" :autoplay="false" @change="slideChange" indicator-position="none" trigger="click"  height="296px" arrow="always">
            <el-carousel-item v-for="item in list" :key="item.id">
                <img :src="item.imgurl" :alt="item.name">
            </el-carousel-item>
        </el-carousel>
        <ul class="indicator-page">
            <template v-for="(item, idx) in list">
                <li @click="sliderTo(idx)" :class="{ 'active': index === idx }"></li>
            </template>
        </ul>
    </div>
</template>
<script>
	import { queryPoster } from '@/api/service'
    export default {
        name: 'sSlider',
        data() {
            return {
            	list: [],
                index: 0
            }
        },
        mounted() {
        	this.queryPoster()
        },
        methods: {
	        queryPoster() {
		        const loading = this.$loading({
			        lock: true,
			        spinner: 'el-icon-loading',
			        background: 'rgba(0, 0, 0, 0.1)',
			        fullscreen: false,
			        target: this.$el
		        })
                queryPoster().then((res) => {
	                loading.close()
                    this.list = res.list
                }).catch(() => {
                	loading.close()
                })
            },
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
<style rel="stylesheet/scss" lang="scss" scoped>
    .s-slider {
        position: relative;
        height: 315px;
        .indicator-page {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            li {
                cursor: pointer;
                flex: 1;
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
                        left: 50%;
                        margin-left: -5px;
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
