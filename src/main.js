// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery'
import axios from 'axios'
import qs from 'qs'
import store from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'
import '../static/animate.css'

Vue.config.productionTip = false
Vue.prototype.$ = jquery
Vue.prototype.$http = axios
Vue.prototype.qs = qs

Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//加载路由
  store,
  components: { App },
  template: '<App/>'
})
