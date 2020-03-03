<template>
  <div id="order">
    <!-- header -->
    <van-nav-bar title="填写订单" :border="true" :fixed="true" left-arrow @click-left="onClickLeft" />
    <scroll class="scroll_height" :scrollY="true">
      <div class="content">
        <!-- 选择收货地址 -->
        <van-contact-card
          :type="address_type"
          add-text="选择收货地址"
          :name="address_name"
          @click="chooseAddress"
        />
        <!-- 送达时间 -->
        <van-cell-group>
          <van-cell title="送达时间" value="请选择送达时间" is-link>
            <template slot="label">
              <span class="custom-title">超过十分钟可获得积分补偿</span>
              <van-icon name="question-o" />
            </template>
          </van-cell>
        </van-cell-group>
        <!-- 商品列表 -->
        <buy-goods-list />
        <!-- 优惠券及积分满减 -->
        <van-cell-group style="margin-top: 8px">
          <van-cell title="优惠券" is-link value="0张可用"></van-cell>
          <van-cell>
            <span slot="title">
              使用{{integral}}积分兑换
              <b>{{integralToprice | moneyFormat}}</b>
            </span>
            <van-switch
              v-model="checked"
              slot="right-icon"
              @input="onInput"
              active-color="#ff0036"
            />
          </van-cell>
        </van-cell-group>
        <!-- 商品金额 -->
        <van-cell-group style="margin-top: 8px">
          <van-cell title="商品金额">
            <div class="money">{{selectedTotalPrice/100|moneyFormat}}</div>
          </van-cell>
          <van-cell title="配送费">
            <div class="money">0.00</div>
          </van-cell>
          <van-cell title="积分" v-show="isShowPreferential">
            <div class="money">0.00</div>
          </van-cell>
        </van-cell-group>
      </div>
    </scroll>
    <!-- 支付方式 -->
    <pay-method @deletePay="deletePay" v-if="showPayMethod" />
    <!-- 提交订单按钮 -->
    <van-submit-bar
      :price="selectedTotalPrice"
      :button-text="`结算(${selectedGoods.length})`"
      @submit="onSubmit"
    />
    <!-- 路由出口 -->
    <transition name="router-slider" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { Toast, Dialog } from "vant";
import Scroll from "@/components/vuescroll/Scroll";
import BuyGoodsList from "./childComps/BuyGoodsList";
import PayMethod from "./childComps/PayMethod";

export default {
  name: "Order",
  components: {
    Scroll,
    BuyGoodsList,
    PayMethod
  },
  data() {
    return {
      // 1. 地址卡片类型
      address_type: "add",
      // 2. 地址名字
      address_name: null,
      // 3. 积分
      integral: 1000,
      // 4. 是否展示支付方式，底部弹框
      showPayMethod: false,
      // 5. 是否显示积分
      isShowPreferential: false,
      checked: false
    };
  },
  created() {},
  mounted() {},
  computed: {
    ...mapState(["shopCart"]),
    ...mapGetters({
      selectedTotalPrice: "SELECTED_GOODS_PRICE",
      selectedGoods: "SELECTED_GOODS"
    }),
    // 1. 计算积分兑换人命币
    integralToprice() {
      if (this.integral > 0) {
        return this.integral / 100;
      }
    }
  },
  methods: {
    // 1. 返回上一页
    onClickLeft() {
      this.$router.go();
    },
    // 2. 选择收货地址
    chooseAddress() {
      this.$router.push("/order/myAddress");
    },
    // 3. switch开关使用积分
    onInput() {
      // 使用积分
      let discountsPrice = this.integralToprice * 100;
      // 判断积分使用条件是否满足
      if (discountsPrice > this.selectedTotalPrice) {
        Dialog.alert({
          message: "您的实际价格小于积分兑换价格,建议您在多买几件"
        }).then(() => {
          this.checked = false;
        });
      } else {
        this.isShowPreferential = !this.isShowPreferential;
      }
    },
    // 4. 订单提交按钮
    onSubmit() {
      this.showPayMethod = !this.showPayMethod;
    },
    // 5. 提交后不想支付删除支付按钮
    deletePay() {
      this.showPayMethod = !this.showPayMethod;
    }
  }
};
</script>

<style scoped lang="less">
#order {
  // position: relative;
  width: 100%;
  .van-nav-bar {
    background-color: #ff0036;
    .van-nav-bar__title {
      color: #fff;
    }
    .van-icon {
      color: #fff;
    }
  }
  .scroll_height {
    position: absolute;
    left: 0;
    right: 0;
    top: 56px;
    height: calc(100vh - 106px);
    overflow: hidden;
    .content {
      display: flex;
      flex-direction: column;
      margin: 0 10px;
    }
  }
  /*转场动画*/
  .router-slider-enter-active,
  .router-slider-leave-active {
    transition: all 0.3s;
  }
  .router-slider-enter,
  .router-slider-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
  }
}
</style>
