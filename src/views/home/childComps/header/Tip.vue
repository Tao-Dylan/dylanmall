<template>
  <div class="tip">
    <div class="left">
      <van-icon class="icon" size="15px" name="logistics" />
      <span class="left_title">最快29分钟送达</span>
    </div>
    <div class="center">
      <van-icon class="icon" size="15px" name="after-sale" />
      <span class="center_title">0元起送 0配送费</span>
    </div>
    <div class="right">
      <van-icon class="icon" size="15px" name="certificate" />
      <span class="right_title">安心退</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.tip {
  width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  line-height: 30px;
  color: #4fc173;
  .icon {
    vertical-align: middle;
    padding-right: 3px;
  }
}
</style>
