import Vue from 'vue'
import App from './App'
import route from './plugin/route.js'
Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.route = route

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView);

const app = new Vue({
    ...App
})
app.$mount()
