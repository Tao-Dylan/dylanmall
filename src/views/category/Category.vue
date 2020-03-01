<template>
  <div id="category">
    <!-- 顶部搜索框 -->
    <div class="search">
      <div class="search_wrapper">
        <van-icon class="search_icon" size="18px" name="search" />
        <span class="search_prompt">输入商品名称</span>
      </div>
    </div>
    <!-- Loading -->
    <div class="loading" v-if="!isShowLoading">
      <div class="category_content">
        <!-- 左边大菜单栏 -->
        <left-title :left-titles="leftTitleList" @leftTitleClick="leftTitleClick" />
        <!-- 右侧数据展示栏 -->
        <right-content :right-detail-data="rightDetailData" />
      </div>
    </div>
    <show-loading v-else />
  </div>
</template>

<script>
// 导入网络请求方法
import { getCategoryData, getCategoryRightData } from "@/network/category";
// 导入相关的组件
import ShowLoading from "@/components/loading/ShowLoading";
import LeftTitle from "./childComps/LeftTitle";
import RightContent from "./childComps/RightContent";
export default {
  name: "Category",
  components: { ShowLoading, LeftTitle, RightContent },
  data() {
    return {
      // 判断左边是否点击
      flag: false,
      // 显示loading加载组件
      isShowLoading: true,
      // 左边大菜单数据
      leftTitleList: [],
      // 右边详细数据
      rightDetailData: []
    };
  },
  created() {
    this._initData();
  },
  mounted() {},
  methods: {
    // 1. 获取网络数据
    _initData() {
      getCategoryData().then(res => {
        const leftData = res.data;
        // console.log(res);
        if (leftData.success) {
          // 1.1 左边数据
          this.leftTitleList = leftData.data.cate;
          // console.log(this.leftTitleList);
        }
      });
      getCategoryRightData("/lk001").then(res => {
        const rightData = res.data;
        // console.log(res);
        if (rightData.success) {
          // 1.2 获取右边数据
          this.rightDetailData = rightData.data.cate;
          this.isShowLoading = false;
          // console.log(this.rightDetailData);
        }
      });
    },
    // 2. 监听左边菜单栏的点击，而发送数据请求
    leftTitleClick(index) {
      // this.isShowLoading = true;
      this.flag = true;
      let param = 0;
      if (index >= 9) {
        param = `/lk0${index + 1}`;
      } else {
        param = `/lk00${index + 1}`;
      }
      getCategoryRightData(param).then(res => {
        const rightData = res.data;
        // console.log(res);
        if (rightData.success) {
          // 2.2 新获取右边数据
          this.rightDetailData = rightData.data.cate;
          // this.isShowLoading = false;
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
#category {
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
  .category_content {
    margin-top: 50px;
    display: flex;
    .right {
      // width: 75%;
      background-color: #fff;
    }
  }
}
</style>
