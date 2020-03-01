<template>
  <div id="eat">
    <!-- 顶部搜索框 -->
    <div class="search">
      <div class="search_wrapper">
        <van-icon class="search_icon" size="18px" name="search" />
        <span class="search_prompt">搜索菜谱、美食...</span>
      </div>
    </div>
    <!-- 今日菜单 -->
    <div class="flash_sale">
      <span class="title">今日菜单</span>
    </div>
    <!-- 横向滚动区域 -->
    <scroll-titles :menu-titles="todayMenuTitles" />
    <!-- 菜单详细内容 -->
    <menu-detail :today-menu-detail="todayMenuDetail"/>
    <!-- <show-loading /> -->
  </div>
</template>

<script>
// 导入网络请求方法
import { getTodayMenuData, getTodayMenuDetail } from "@/network/eat";
// 导入相关的组件
import ShowLoading from "@/components/loading/ShowLoading";
import ScrollTitles from "./childComps/ScrollTitles";
import MenuDetail from "./childComps/MenuDetail";

export default {
  components: {
    ShowLoading,
    ScrollTitles,
    MenuDetail
  },
  data() {
    return {
      // 今日菜单的标题列表
      todayMenuTitles: [],
      // 今日菜单标题内容
      todayMenuDetail: []
    };
  },
  created() {
    this._initData();
  },
  mounted() {},
  methods: {
    // 1. 初始化获取网络数据
    _initData() {
      getTodayMenuData().then(res => {
        // console.log(res);
        const todayMenu = res.data;
        if (todayMenu.success) {
          // 1.1 获取今日菜单列表数据
          this.todayMenuTitles = todayMenu.data.list;
          // console.log(this.todayMenuTitles);
        }
      });
      getTodayMenuDetail("/lk01").then(res => {
        // console.log(res);
        const todayMenuList = res.data;
        if (todayMenuList.success) {
          this.todayMenuDetail = todayMenuList.data.big_recommend.list;
          // console.log(this.todayMenuDetail);
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
#eat {
  height: 100vh;
  overflow: hidden;
  .search {
    position: fixed;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    height: 50px;
    padding: 8px 15px;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    .search_wrapper {
      height: 100%;
      flex: 1;
      border-radius: 17px;
      background-color: #f5f5f5;
      display: flex;
      align-items: center;
      padding-left: 10px;
      .search_prompt {
        opacity: 0.6;
        padding-left: 5px;
      }
    }
  }
  .flash_sale {
    margin-top: 50px;
    background-color: #fff;
    font-size: 18px;
    padding: 10px;
    .title {
      padding-left: 10px;
      border-left: 4px solid #ff0036;
    }
  }
}
</style>
