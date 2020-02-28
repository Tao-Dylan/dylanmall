<template>
  <div id="navgation">
    <router-view />
    <van-tabbar v-model="active" active-color="#ff0036">
      <van-tabbar-item name="home" to="home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item name="category" to="category" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item name="eat" to="eat" icon="smile-o">吃什么</van-tabbar-item>
      <van-tabbar-item name="cart" to="cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item name="profile" to="profile" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "home"
    };
  },
  created() {
    this.initSelectTab(this.$route.name);
  },
  mounted() {},
  methods: {
    // 初始化页面是现实的tabbar
    initSelectTab(name) {
      this.active = name;
    }
  }
};
</script>

<style scoped lang="less">
// 添加路由动画
.router-slider-enter-active,
.router-slider-leave-active {
  transition: all 0.3s;
}
.router-slider-enter,
.router-slider-leave-active {
  transform: translate3d(2rem, 0, 0);
  opacity: 0;
}
@keyframes mymove {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
@-moz-keyframes mymove {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
@-webkit-keyframes mymove {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
@-o-keyframes mymove {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
.moveToCart {
  animation: mymove 0.5s ease-in-out;
}
</style>
