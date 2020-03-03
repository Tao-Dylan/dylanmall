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
          <!-- 购物车没有商品 -->
          <div class="cart_empty" v-if="!showEmptyCar">
            <img src="~@/images/cart/empty.png" alt />
            <p class="title">购物车空空如也</p>
            <div class="go_shoping">去逛逛</div>
          </div>
          <!-- 购物车有商品 -->
          <cart-goods class="goods_list" v-else />
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
    <van-submit-bar
      class="bottom_submit"
      :price="totalPrice"
      :button-text="`结算(${selectedGoods.length})`"
      @submit="onSubmit"
    >
      <van-checkbox v-model="isSelectedSAll">全选</van-checkbox>
    </van-submit-bar>
    <!-- 返回顶部按钮 -->
    <back-top v-show="showBackTop" @scrollToTop="scrollToTop" />
  </div>
</template>

<script>
// 导入网络请求方法
import { getGuessYouLike } from "@/network/cart";
import { mapState, mapGetters, mapMutations } from "vuex";
// 导入公共组件
import Scroll from "@/components/vuescroll/Scroll";
import ShowLoading from "@/components/loading/ShowLoading";
import BackTop from "@/components/backtop/BackTop";
import GoodsList from "@/views/home/childComps/tabbar/GoodsList";
// 导入业务组件
import CartHeader from "./childComps/CartHeader";
import CartGoods from "./childComps/CartGoods";

export default {
  name: "Cart",
  components: {
    Scroll,
    BackTop,
    GoodsList,
    ShowLoading,
    CartHeader,
    CartGoods
  },
  data() {
    return {
      // 显示返回顶部
      showBackTop: false,
      // 显示加载中
      isShowLoading: true,
      // 商品列表数据
      goodsList: []
    };
  },
  created() {
    this._initData();
  },
  computed: {
    // 扩展vuex中的数据
    ...mapState(["shopCart"]),
    ...mapGetters({
      totalPrice: "SELECTED_GOODS_PRICE",
      selectedGoods: "SELECTED_GOODS"
    }),
    // 1. 判断购物车是否有商品
    showEmptyCar() {
      const flag = Object.keys(this.shopCart).length;
      return flag;
    },
    // 2. 是否全选商品
    isSelectedSAll: {
      get() {
        const shopCart = this.shopCart;
        const flag = Object.values(shopCart).every(
          (goods, index) => goods.checked
        );
        return flag;
      },
      set(value) {
        console.log(value);
        const isSelectedSAll = value;
        this.SELECT_ALL_GOODS({ isSelectedSAll });
      }
    }
  },
  mounted() {},
  methods: {
    // 扩展vuex中的方法
    ...mapMutations(["SELECT_ALL_GOODS"]),
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
      this.showBackTop = -pos.y > 500 ? true : false;
    },
    // 3. 监听返回顶部
    scrollToTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    // 4. 提交定按钮
    onSubmit() {
      this.$router.push("/order");
    }
  }
};
</script>

<style scoped lang="less">
#cart {
  position: relative;
  width: 100%;
  .scroll_height {
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    height: calc(100vh - 150px);
    // padding-bottom: 150px;
    overflow: hidden;
    .scroll_content {
      .goods_list {
        padding: 10px;
      }
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
