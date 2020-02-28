<template>
  <div class="search_header">
    <div class="left_address">
      <van-icon class="address_icon" size="20px" name="location-o" />
      <span class="address_title">请选择位置请选择位置请位置请位置请位置请</span>
    </div>
    <div class="right_search">
      <van-icon class="search_icon" size="18px" name="search" />
      <span class="search_prompt">输入商品名称</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchHeader",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.search_header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 50px;
  padding: 8px 5px;
  font-size: 12px;
  z-index: 1;
  background-color: #ff5a7d;
  .left_address {
    position: relative;
    width: 40%;
    padding-left: 5px;
    margin-right: 10px;
    background-color: #000;
    border-radius: 20px;
    opacity: 0.6;
    color: #fff;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    .address_icon {
      position: absolute;
      top: 7px;
    }
    .address_title {
      height: 34px;
      line-height: 34px;
      padding-left: 23px;
      white-space: nowrap;
    }
  }
  .right_search {
    position: relative;
    width: 60%;
    background-color: #fff;
    text-align: center;
    border-radius: 20px;
    .search_icon {
      position: absolute;
      top: 7px;
    }
    .search_prompt {
      height: 34px;
      line-height: 34px;
      padding-left: 20px;
    }
  }
}
</style>
