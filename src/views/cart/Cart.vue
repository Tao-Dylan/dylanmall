<template>
  <div id="cart">
    <!-- 顶部标题 -->
    <cart-header />
    <div class="loading" v-if="!isShowLoading">
      <scroll
        class="scroll_height"
        ref="scroll"
        :scrollY="true"
        :listen-scroll="true"
        :probe-type="3"
        @scroll="scroll"
      >
        <div class="scroll_content">
          <!-- 购物车没有内容 -->
          <div class="cart_empty">
            <img src="~@/images/cart/empty.png" alt />
            <p class="title">购物车空空如也</p>
            <div class="go_shoping">去逛逛</div>
          </div>
          <!-- 购物车内容 -->
          <!-- 猜你喜欢分割线 -->
          <van-divider :style="{ color: '#000', borderColor: '#bbb', padding: '0 10px' }">
            <van-icon name="like" style="padding:0 5px" color="red" />猜你喜欢
          </van-divider>
          <!-- 猜你喜欢商品展示 -->
          <goods-list :tabbar-goods-list="goodsList" />
        </div>
      </scroll>
    </div>
    <show-loading v-else />
    <!-- 提交订单 -->
    <van-submit-bar class="bottom_submit" :price="0" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="isSelectedSAll">全选</van-checkbox>
    </van-submit-bar>
    <!-- 返回顶部按钮 -->
    <back-top v-show="showBackTop" @scrollToTop="scrollToTop" />
  </div>
</template>

<script>
// 导入网络请求方法
import { getGuessYouLike } from "@/network/cart";
// 导入滚动组件
import Scroll from "@/components/vuescroll/Scroll";
// 导入相关的组件
import ShowLoading from "@/components/loading/ShowLoading";
import BackTop from "@/components/backtop/BackTop";
import CartHeader from "./childComps/CartHeader";
import GoodsList from "@/views/home/childComps/tabbar/GoodsList";

export default {
  name: "Cart",
  components: {
    Scroll,
    BackTop,
    ShowLoading,
    CartHeader,
    GoodsList
  },
  data() {
    return {
      // 显示返回顶部
      showBackTop: false,
      // 显示加载中
      isShowLoading: true,
      // 商品列表数据
      goodsList: [],
      isSelectedSAll: false
    };
  },
  created() {
    this._initData();
  },
  mounted() {},
  methods: {
    // 1. 初始化网络请求数据
    _initData() {
      getGuessYouLike().then(res => {
        // console.log(res);
        const cartData = res.data;
        if (cartData.success) {
          // 猜你喜欢善品列表数据
          this.goodsList = cartData.data.product_list;
          // console.log(this.goodsList);
          // 数据加载完成，取消加载中
          this.isShowLoading = false;
        }
      });
    },
    // 2. 监听滚动
    scroll(pos) {
      // console.log(-pos.y);
      this.showBackTop = -pos.y > 500 ? true : false;
    },
    // 3. 监听返回顶部
    scrollToTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    // 4. 提交定按钮
    onSubmit() {
     this.$toast('提交订单')
      
    }
  }
};
</script>

<style scoped lang="less">
#cart {
  width: 100%;
  .scroll_height {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 100px;
    overflow: hidden;
    .scroll_content {
      .cart_empty {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        img {
          padding-top: 40px;
        }
        .title {
          padding: 5px 0;
        }
        .go_shoping {
          height: 40px;
          line-height: 40px;
          padding: 0 25px;
          background-color: #ff0036;
          color: #fff;
          border-radius: 20px;
        }
      }
    }
  }
}
.van-submit-bar {
  border-bottom: 1px solid #eee;
  bottom: 50px;
}
</style>
