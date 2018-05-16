<template>
    <div class="app-wrapper">
        <sHeader></sHeader>
        <transition name="fade" mode="out-in">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition>
    </div>
</template>


<script>
    import {sHeader} from './components'

    export default {
        components: {
            sHeader
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
    }
</style>
