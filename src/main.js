import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/vant";

Vue.config.productionTip = false;

// 全局事件总线
Vue.prototype.$bus = new Vue();

// 引入样式初始化
import "normalize.css";
import "./asset/css/base.css";

// 引入全局过滤器
import './config/filters'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
