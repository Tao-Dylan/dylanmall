<template>
  <div class="pull_menu_list" @click="touchClick" @touchmove.prevent>
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
  width: 75%;
  top: 96px;
  bottom: 50px;
  background-color: rgba(0, 0, 0, .4);
  z-index: 1;
  .menu_wrapper {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    background-color: #fff;
    border-bottom: 1px solid #f5f5f5;
    .menu_item {
      text-align: center;
      width: 30%;
      height: 26px;
      line-height: 26px;
      margin-right: 8px;
      margin-bottom: 10px;
      border-radius: 15px;
      font-size: 12px;
      background-color: #eee;
    }
    .active {
      color: #ff0036;
      background-color: #fff0f5;
    }
  }
}
</style>
