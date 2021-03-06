// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import 'normalize.css/normalize.css'


// import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

import { Dialog,Button, Loading, MessageBox, Message, Carousel, CarouselItem, } from 'element-ui';
Vue.use(Dialog);

Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Button);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;

import '@/styles/index.scss' // global css
import App from './App'
import router from './router'
import store from './store'
import './permission' // permission control
process.env.NODE_ENV === 'development' && require('./mock') // simulation data
// require('./mock')
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.min.css'
import * as filters from './filters' // global filters
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'video.js/dist/lang/zh-CN'
Vue.use(VueVideoPlayer)

// Vue.use(Element, {
//   size: 'medium' // set element-ui default size
// })
// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
