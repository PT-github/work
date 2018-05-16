<template>
    <div class="app-wrapper">
        <sHeader></sHeader>
        <transition name="fade" mode="out-in">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition>
        <sFooter></sFooter>
    </div>
</template>


<script>
    import { sHeader, sFooter } from './components'

    export default {
        components: {
            sHeader,
            sFooter
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "src/styles/mixin.scss";

    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
        background-color: #f2f2f2;
    }
</style>
