import Vue from 'vue'

// 价格过滤器
Vue.filter('moneyFormat',(value)=> {
  return '¥' + Number(value).toFixed(2) 
})