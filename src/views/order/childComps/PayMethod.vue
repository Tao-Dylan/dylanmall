<template>
  <div class="pay_method">
    <van-overlay :show="true" z-index="101">
      <div class="content">
        <!-- 付款详情 -->
        <van-nav-bar title="付款详情" left-arrow>
          <van-icon @click="deleteClick" name="cross" slot="left" size="18px" />
          <van-icon @click="questionClick" name="question-o" slot="right" size="18px" />
        </van-nav-bar>
        <!-- 付款金额 -->
        <div class="price">
          <span class="price_kind">¥</span>
          <span class="price_num">{{totalPrice}}</span>
        </div>
        <!-- 支付方式选择 -->
        <van-radio-group v-model="radio">
          <van-cell clickable @click="radio = '1'">
            <template slot="title">
              <img
                src="~@/images/order/wx.png"
                alt
                width="25px"
                height="25px"
                style=" vertical-align: middle;padding-right:5px"
              />
              <span>微信支付</span>
            </template>
            <van-radio slot="right-icon" name="1" checked-color="#07c160" />
          </van-cell>
          <van-cell clickable @click="radio = '2'">
            <template slot="title">
              <img
                src="~@/images/order/zfb.png"
                alt
                width="25px"
                height="25px"
                style=" vertical-align: middle;padding-right:5px"
              />
              <span>支付宝支付</span>
            </template>
            <van-radio slot="right-icon" name="2" checked-color="#07c160" />
          </van-cell>
          <van-cell clickable @click="radio = '3'">
            <template slot="title">
              <img
                src="~@/images/order/hb.png"
                alt
                width="25px"
                height="25px"
                style=" vertical-align: middle;padding-right:5px"
              />
              <span>花呗支付</span>
            </template>
            <van-radio slot="right-icon" name="3" checked-color="#07c160" />
          </van-cell>
        </van-radio-group>
        <span class="button" @click="goToPay">立即付款</span>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import { Toast } from "vant";
import { mapState } from "vuex";

export default {
  data() {
    return {
      radio: "1"
    };
  },
  computed: {
    ...mapState(["shopCart"]),
    // . 计算总价
    totalPrice() {
      let totalPrice = 0;
      Object.values(this.shopCart).forEach((goods, index) => {
        if (goods.checked) {
          totalPrice += goods.price * goods.num * 100;
        }
      });
      return totalPrice;
    }
  },
  methods: {
    // 1. 左边X号取消付款
    deleteClick() {
      console.log("dekete");
      this.$emit("deletePay");
    },
    // 2. 右边点击疑问
    questionClick() {
      Toast({
        message: "敬请期待....",
        forbidClick: true,
        duration: 500
      });
    },
    // 3. 去付款
    goToPay() {
      Toast({
        message: "敬请期待....",
        forbidClick: true,
        duration: 500
      });
    }
  }
};
</script>

<style scoped lang="less">
.pay_method {
  .van-overlay {
    .content {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #fff;
      .price {
        height: 70px;
        line-height: 70px;
        text-align: center;
        font-size: 48px;
        color: #000;
        .price_kind {
          padding-right: 5px;
          font-size: 20px;
          color: #000;
        }
        .price_num {
        }
      }
      .button {
        display: block;
        margin: 0 auto;
        width: 96%;
        height: 50px;
        line-height: 50px;
        // margin-top: 100px;
        padding-bottom: 50px;
        text-align: center;
        border-radius: 10px;
        font-size: 18px;
        color: #fff;
        background-color: #ff0036;
      }
    }
  }
}
</style>
