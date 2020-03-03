<template>
  <div class="my_address">
    <!--导航栏-->
    <van-nav-bar title="添加地址" left-arrow :fixed="true" :border="true" @click-left="onClickLeft" />
    <!-- 联系人地址列表 -->
    <van-address-list
      style="margin-top:46px"
      v-model="chosenAddressId"
      add-button-text="+ 增加新地址"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
    />
    <!-- 路由出口 -->
    <transition name="router-slider" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 1. 返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },
    // 2. 添加地址
    onAdd() {
      this.$router.push({ path: "/order/myAddress/addAddress" });
    },
    // 3. 编辑地址
    onEdit(item, index) {
      console.log(item, index);

      this.$router.push({
        name: "editAddress",
        params: { content: item }
      });
    }
  }
};
</script>

<style scoped lang="less">
.my_address {
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 101;
  .van-address-list {
    padding: 10px;
    .van-address-item {
      border-radius: 5px;
    }
  }
}
</style>
