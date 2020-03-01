<template>
  <div id="home">
    <!-- 搜索框和地址 -->
    <search-header />
    <tab-bar class="tab_bar_fixed" ref="tabbar_two" @tabClick="tabClick" v-show="isShowTabFixed" />
    <div class="loading" v-if="!isShowLoading">
      <!-- 滚动区域 -->
      <scroll
        class="scroll_height"
        ref="scroll"
        :scrollY="true"
        :listen-scroll="true"
        :probe-type="3"
        @scroll="scroll"
      >
        <div class="scroll_content">
          <div class="header">
            <!-- 顶部轮播图 -->
            <swiper :home-swiper-list="homeSwiperList" />
            <!-- Tip -->
            <tip />
            <!-- home-add -->
            <img class="img_add" :src="homeAdd.image_url" alt />
          </div>
          <!-- Grid 九宫格 -->
          <gird-category :gird-list="girdList" />
          <!-- 加入vip -->
          <join-vip />
          <!-- 限时抢购 -->
          <flash-sale :flash-goods="flashGoods" />
          <!-- 特色专区  -->
          <special :special-zoon-list="specialZoonList" />
          <!-- tabbar标签分类 -->
          <tab-bar ref="tabbar_one" @tabClick="tabClick" />
          <!-- 产品 goods 展示 -->
          <!-- <goods-list-copy ref="goods_list" @tabClick="tabClick" :tabbar-goods-list="tabTypeGoods" /> -->
          <goods-list :tabbar-goods-list="tabTypeGoods" />
        </div>
      </scroll>
    </div>
    <show-loading v-else />
    <!-- 返回顶部按钮 -->
    <back-top v-show="showBackTop" @scrollToTop="scrollToTop" />
  </div>
</template>
<script>
// 导入网络请求方法
import { getHomeData } from "@/network/home";
// 导入滚动组件
import Scroll from "@/components/vuescroll/Scroll";
// 导入相关的组件
import ShowLoading from "@/components/loading/ShowLoading";
import BackTop from "@/components/backtop/BackTop";
import Swiper from "@/views/home/childComps/header/Swiper";
import SearchHeader from "@/views/home/childComps/header/SearchHeader";
import Tip from "@/views/home/childComps/header/Tip";
import GirdCategory from "@/views/home/childComps/GirdCategory";
import JoinVip from "@/views/home/childComps/JoinVip";
import FlashSale from "@/views/home/childComps/flash/FlashSale";
import Special from "@/views/home/childComps/Special";
import TabBar from "@/views/home/childComps/tabbar/TabBar";
import GoodsList from "@/views/home/childComps/tabbar/GoodsList";
import GoodsListCopy from "@/views/home/childComps/tabbar/GoodsListCopy";

export default {
  name: "Home",
  components: {
    ShowLoading,
    BackTop,
    Scroll,
    Swiper,
    SearchHeader,
    Tip,
    GirdCategory,
    JoinVip,
    FlashSale,
    Special,
    TabBar,
    GoodsList,
    GoodsListCopy
  },
  data() {
    return {
      // 显示返回顶部
      showBackTop: false,
      // 显示加载中
      isShowLoading: true,
      // 吸顶tabbar的高度
      tabOffsetTop: 0,
      // 显示吸顶tabbar
      isShowTabFixed: false,
      // 轮播图数据
      homeSwiperList: [],
      // 首页广告
      homeAdd: {},
      // 宫格分类数据
      girdList: [],
      // 限时抢购数据
      flashGoods: [],
      // 特色专区数据
      specialZoonList: {},
      // tabbar分类全部数据
      tabbarGoodsList: [],
      // 当前显示的tabbar分类
      currentTabType: 0
    };
  },
  created() {
    // 初始化数据
    this._initData();
  },
  updated() {
    // console.log(this.$refs.tabbar_one);
    // 获取tabbar的实时高度
    const elOffsetTop = this.$refs.tabbar_one.$el.offsetTop;
    this.tabOffsetTop = elOffsetTop - 50;
  },
  mounted() {},
  methods: {
    // 1. 初始化请求数据
    _initData() {
      getHomeData().then(res => {
        const homeData = res.data;
        // console.log(homeData);
        if (homeData.success) {
          // 1.轮播图数据
          this.homeSwiperList = homeData.data.list[0].icon_list;
          // 2.首页广告图
          this.homeAdd = homeData.data.home_ad;
          // 3. 宫格分数据
          this.girdList = homeData.data.list[2].icon_list;
          // 4. 限时抢购列表
          this.flashGoods = homeData.data.list[3].product_list;
          // 5. 特色专区列表
          this.specialZoonList = homeData.data.special_zone;
          // 6. tabbar分类全部数据
          this.tabbarGoodsList = homeData.data.list[12].product_list;
          // console.log(this.tabbarGoodsList);
          // 数据加载完成，取消加载中
          this.isShowLoading = false;
        }
      });
    },
    // 2. 监听滚动
    scroll(pos) {
      // console.log(-pos.y);
      this.showBackTop = -pos.y > 500 ? true : false;
      this.isShowTabFixed = -pos.y >= this.tabOffsetTop ? true : false;
    },
    // 3. 监听返回顶部
    scrollToTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    // 4. tbbar的点击
    tabClick(index) {
      console.log("tabbar_one:", index);
      this.currentTabType = index;
      this.$refs.tabbar_two.currentIndex = index;
      this.$refs.tabbar_one.currentIndex = index;
    }
  },
  computed: {
    tabTypeGoods() {
      if (this.currentTabType === 0 || this.currentTabType === 2) {
        // console.log("进来0和2");
        return this.tabbarGoodsList;
      } else if (this.currentTabType === 1 || this.currentTabType === 3) {
        // console.log("进来1和3");
        return this.flashGoods;
      }
    }
  }
};
</script>

<style scoped lang="less">
#home {
  height: 100vh;
  overflow: hidden;
  .tab_bar_fixed {
    position: fixed;
    left: 0;
    right: 0;
    margin-top: 50px;
    z-index: 1;
  }
  .scroll_height {
    position: fixed;
    top: 0;
    width: 100%;
    bottom: 50px;
    .header {
      width: 100%;
      background-image: url("http://518taole.7-orange.cn/backImage.png");
      border-radius: 0 0 20px 20px;
      .img_add {
        width: 100%;
        padding: 0 10px;
        vertical-align: middle;
      }
    }
  }
}
</style>
