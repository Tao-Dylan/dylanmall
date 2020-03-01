<template>
  <div class="right_content" v-if="this.rightDetailData">
    <!-- 上部分title横向滚动 -->
    <right-title :right-titles="rightDetailData" @rightTitleClick="rightTitleClick" />
    <!-- 下部分详细内容纵向滚动 -->
    <right-goods :right-goods="rightGoods" />
  </div>
</template>

<script>
import RightTitle from "./RightTitle";
import RightGoods from "./RightGoods";
export default {
  name: "RightContent",
  components: {
    RightTitle,
    RightGoods
  },
  props: {
    rightDetailData: {
      type: Array,
      default: () => []
    },
    flag: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      currentTitleIndex: 0
    };
  },
  updated() {
    // console.log("updated:", this.flag);
  },
  created() {},
  computed: {  
    // 1. 根据右边菜单的点击传递不同的数据
    rightGoods() {
      return this.rightDetailData[this.currentTitleIndex];
    }
  },
  methods: {
    rightTitleClick(index) {
      this.currentTitleIndex = index;
    }
  }
};
</script>

<style scoped lang="less">
.right_content {
  width: 75%;
  background-color: #f9f9f9;
  .top {
    height: 46px;
    background-color: #fff;
  }
  .scroll {
    padding-top: 30px;
    height: 300px;
    // background-color: #fff;
  }
}
</style>
