<template>
  <div class="right_titles">
    <scroll class="scroll_width" ref="scroll" :scrollX="true">
      <!-- 横向滚动区域 -->
      <div class="titles_content" ref="scroll_content">
        <div
          ref="title_item"
          @click="titleClick(index)"
          class="title_item"
          :class="currentIndex==index?'active':''"
          v-for="(item,index) in rightTitles "
          :key="index"
        >{{item.name}}</div>
      </div>
    </scroll>
    <!-- 下拉菜单按钮 -->
    <div class="pull_menu" @click="menuBtnClick">
      <van-icon
        v-if="menuBtn"
        size="20px"
        name="arrow-down"
        class="icon"
        :class="rotate? 'rotate':''"
      />
    </div>
    <!-- 下拉菜单展示 -->
    <pull-menu-list
      v-if="showPullMenu"
      :right-titles="rightTitles"
      :current-index="currentIndex"
      @menuItemClick="menuItemClick"
      @touchClick="menuBtnClick"
    />
  </div>
</template>

<script>
import Scroll from "@/components/vuescroll/Scroll";
import PullMenuList from "./PullMenuList";
export default {
  name: "RightTitle",
  components: {
    Scroll,
    PullMenuList
  },
  props: {
    rightTitles: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      // 下拉按钮的旋转
      rotate: false,
      // 是否显示下拉菜按钮
      menuBtn: false,
      // 是否显示下拉后的内容
      showPullMenu: false,
      // 当前显示的title索引
      currentIndex: 0
    };
  },
  created() {
    // 监听全局事件
    this.$bus.$on("leftTitleClick", index => {
      this.currentIndex = 0;
      this.scrollMenuItem(0)
      if (this.showPullMenu) {
        this.showPullMenu = false;
      }
    });
  },
  watch: {
    rightTitles() {
      this.$nextTick(() => {
        this._showPullMenu();
      });
    }
  },
  mounted() {},
  methods: {
    // 1. 横向滚动的title的点击
    titleClick(index) {
      // 1.1 替换当前的索引
      this.currentIndex = index;
      // 1.2 如果下拉内容显示，则让它消失
      this.showPullMenu = false;
      // 1.3 通知父组件传递对应索引的数据
      this.$emit("rightTitleClick", index);
      // 1.4 对应的索引标签滚动到合适的位置
      this.scrollMenuItem(index);
    },
    // 2. 判断是否显示下拉按钮
    _showPullMenu() {
      // 2.1 如果标题总宽度超过滚动宽度，则显示下拉按钮
      const scrollWidth = this.$refs.scroll.$el.clientWidth;
      const scrollContent = this.$refs.scroll_content.clientWidth;
      this.menuBtn = scrollContent > scrollWidth ? true : false;
    },
    // 3. 下拉按钮的点击
    menuBtnClick() {
      // 3.1 显示下拉内容
      this.showPullMenu = !this.showPullMenu;
      // 3.2 下拉按钮图标的旋转
      this.rotate = !this.rotate;
    },
    // 4. 下拉菜单里面的标题点击
    menuItemClick(index) {
      // 4.1 相当于直接点击了相对应的横向滚动标题
      this.titleClick(index);
    },
    // 5. 点击横向菜单内容，该内容移动到合适的位置的方法
    scrollMenuItem(index) {
      const el = this.$refs.title_item[index];
      this.$refs.scroll.scrollToElement(el, 100, -100);
    }
  },
  beforeDestroy() {
    // 移除监听事件总线
    this.$bus.$off();
  }
};
</script>

<style scoped lang="less">
.right_titles {
  position: relative;
  width: 100%;
  .scroll_width {
    width: calc(75% - 46px);
    height: 46px;
    position: fixed;
    left: 25%;
    // padding-right: 46px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0px 12px 8px -12px #ccc;
    .titles_content {
      display: inline-block;
      padding-left: 10px;
      white-space: nowrap;
      .title_item {
        display: inline-block;
        margin: 10px 10px 10px 0;
        height: 26px;
        width: 80px;
        line-height: 26px;
        text-align: center;
        font-size: 12px;
        background-color: #eee;
        border-radius: 12px;
        white-space: nowrap;
      }
      .active {
        color: #ff0036;
        background-color: #fff0f5;
      }
    }
  }
  .pull_menu {
    position: absolute;
    top: 0;
    right: 0;
    width: 46px;
    height: 46px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .icon {
      transition: all 0.5s;
    }
    .rotate {
      transform: rotate(180deg);
    }
  }
}
</style>
