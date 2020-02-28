<template>
  <div class="tab_bar">
    <div
      class="item"
      :class="currentIndex == index?'active':''"
      v-for="(item,index) in tabTitle"
      :key="index"
      @click="tabClick(index)"
    >{{item}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      tabTitle: ["全部", "晚餐", "人气", "心选"]
    };
  },
  created() {},
  mounted() {},
  methods: {
    tabClick(index) {
      console.log(index);
      this.$emit("tabClick", index);
    }
  }
};
</script>

<style scoped lang="less">
.tab_bar {
  display: flex;
  height: 40px;
  line-height: 40px;
  padding-bottom: 5px;
  justify-content: space-around;
  font-size: 14px;
  background-color: #f5f5f5;
  .item {
  }
  .active {
    color: #ff0036;
    border-bottom: 2px solid #ff0036;
  }
}
</style>
