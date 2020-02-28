<template>
  <div class="join_vip">
    <van-icon class="icon" size="20px" name="gem" />
    <span class="vip_title">加入会员·每年预计节省806元</span>
    <span class="vip_desc">5折开卡></span>
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
.join_vip{
  position: relative;
  margin: 0 10px;
  background-color: #df8299;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  .icon{
    position: absolute;
    top: 11px;
    left: 7px;
    color: #fffe9a;
  }
  .vip_title{
    padding-left: 30px;
  }
  .vip_desc{
    padding-right: 5px;
  }
}
</style>
