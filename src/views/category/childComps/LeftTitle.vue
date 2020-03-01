<template>
  <div class="left_titles">
    <scroll class="scroll_height" :scrollY="true">
      <div class="scroll_content">
        <div
          class="title_item"
          :class="currentIndex==index?'active':''"
          v-for="(item,index) in LeftTitles"
          :key="item.id"
          @click="titleClick(index)"
        >{{item.name}}</div>
      </div>
    </scroll>
  </div>
</template>

<script>
// 导入滚动组件
import Scroll from "@/components/vuescroll/Scroll";
export default {
  name: "LeftTitle",
  components: {
    Scroll
  },
  props: {
    LeftTitles: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  created() {},
  mounted() {},
  methods: {
    titleClick(index) {
      // console.log(index);
      this.currentIndex = index;
      this.$emit('leftTitleClick',index)
      this.$bus.$emit('leftTitleClick',index)
    }
  }
};
</script>

<style scoped lang="less">
.left_titles {
  width: 25%;
  .scroll_height {
    width: 25%;
    padding-right: 1px;
    position: fixed;
    top: 50px;
    bottom: 50px;
    background-color: #eee;
    overflow: hidden;
    .scroll_content {
      width: 100%;
      .title_item {
        height: 46px;
        line-height: 46px;
        font-size: 14px;
        padding-left: 15px;
        border-bottom: 1px solid #fff;
      }
      .active {
        color: #ff0036;
        border-left: 3px solid #ff0036;
        background-color: #fff;
        box-shadow: 0px 12px 8px -12px #ccc;
      }
    }
  }
}
</style>
