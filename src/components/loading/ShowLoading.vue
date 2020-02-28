<template>
  <div class="show_loading">
    <van-loading color="#ff0036" type="spinner" size="50px" vertical>亲~加载中...</van-loading>
  </div>
</template>

<script>
export default {
  name: "ShowLoading",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.show_loading {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  .van-loading__text {
    color: #ff0036;
  }
}
</style>
