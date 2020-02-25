<template>
  <div id="navgation">
    <router-view />
    <van-tabbar v-model="active" active-color="#ff0036" >
      <van-tabbar-item  to="home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item  to="category" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item  to="eat" icon="smile-o">吃什么</van-tabbar-item>
      <van-tabbar-item  to="cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item  to="profile" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
</style>
