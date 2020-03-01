<template>
  <div id="back_top" @click="scrollToTop">
    <img src="~@/images/backtop/back-top.png" alt />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    // 监听点击回到顶部
    scrollToTop() {
      this.$emit('scrollToTop')
      // console.log("totop");
    }
  }
};
</script>

<style scoped lang="less">
#back_top {
  position: fixed;
  bottom: 150px;
  right: 20px;
  img {
    width: 40px;
    height: 40px;
  }
}
</style>
