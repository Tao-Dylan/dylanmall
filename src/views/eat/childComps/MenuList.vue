<template>
  <div class="pull_menu_list" @click="touchClick" @touchmove.prevent>
    <div class="all">全部分类</div>
    <div class="menu_wrapper">
      <div
        class="menu_item"
        :class="currentIndex==index?'active':''"
        v-for="(item,index) in rightTitles"
        :key="index"
        @click="menuItemClick(index)"
      >{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PullMenuList",
  props: {
    rightTitles: {
      type: Array,
      default: () => []
    },
    currentIndex: {
      type: Number,
      default: () => 0
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    // 菜单内容点击
    menuItemClick(index) {
      this.$emit("menuItemClick", index);
    },
    // 整个下拉内容的点击
    touchClick() {
      this.$emit("touchClick");
    }
  }
};
</script>

<style scoped lang="less">
.pull_menu_list {
  position: fixed;
  width: 100%;
  top: 96px;
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
  .all {
    padding-left: 15px;
    height: 46px;
    line-height: 46px;
    background-color: #fff;
  }
  .menu_wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding: 0 10px;
    background-color: #fff;
    .menu_item {
      text-align: center;
      width: 80px;
      height: 26px;
      line-height: 26px;
      margin-bottom: 10px;
      border-radius: 15px;
      font-size: 12px;
      background-color: #eee;
    }
    .menu_item:last-child {
      align-self: flex-start;
    }
    .active {
      color: #ff0036;
      background-color: #fff0f5;
    }
  }
}
</style>
