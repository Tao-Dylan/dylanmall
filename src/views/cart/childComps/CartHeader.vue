<template>
  <div class="cart_header">
    <p class="title">购物车</p>
    <span class="manage">管理</span>
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
.cart_header{
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  .manage{
    position: absolute;
    right: 15px;
    font-size: 13px;
  }
}
</style>
