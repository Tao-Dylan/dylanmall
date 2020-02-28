<template>
  <div class="home_swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in homeSwiperList" :key="index">
        <img :src="item.icon_url" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    homeSwiperList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.home_swiper {
  width: 100%;
  padding: 0 10px;
  padding-top: 50px;
  .my-swipe {
    border-radius: 0 0 20px 20px;
    img {
      width: 100%;
      height: 170px;
      vertical-align: middle;
    }
  }
}
</style>
