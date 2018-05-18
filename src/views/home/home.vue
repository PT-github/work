<template>
    <div class="home-container">
        <div class="part1 clearfix">
            <div class="fl">
                <sSlider></sSlider>
            </div>
            <div class="fr">
                <sNews></sNews>
            </div>
        </div>
        <div class="part2 clearfix">
            <div class="fl">
                <sLesson></sLesson>
            </div>
            <div class="fr">
                <sRegist></sRegist>
            </div>
        </div>
        <div class="part3"></div>
        <div class="part4"></div>
        <div class="part5"></div>
    </div>
</template>
<script>
    import { sSlider, sNews, sRegist, sLesson } from './components'
    export default {
        name: 'home',
        data() {
            return {}
        },
        methods: {},
        computed: {},
        components: {
            sSlider,
            sNews,
            sRegist,
            sLesson
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .home-container {
        width: 1000px;
        margin: 13px auto 26px;
        .part2 {
            margin-top: 20px;
        }
        .part1 {
            .fl {
                width: 710px;
                height: 315px;
            }
            .fr {
                width: 278px;
                height: 315px;
                position: relative;
            }
        }
    }
    .clearfix {
        &:after {
            visibility: hidden;
            display: block;
            font-size: 0;
            content: " ";
            clear: both;
            height: 0;
        }
    }
</style>
<style rel="stylesheet/scss" lang="scss">
</style>
