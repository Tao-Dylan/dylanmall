<template>
  <div id="profile">
    <!-- 顶部 -->
    <div class="my_header">我的</div>
    <!-- 个人登录信息 -->
    <van-cell class="info" center is-link>
      <template slot="title">
        <!-- 登录状态 -->
        <div v-if="userInfo.token" class="profile_info" @click="goToMyCenter">
          <div class="author_img">
            <img src="@/images/mine/mine.jpg" alt />
          </div>
          <div class="person_info">
            <p class="name">涛-Dylan</p>
            <p class="phone">手机号：11223455433</p>
          </div>
        </div>
        <!-- 非登录状态 -->
        <div v-if="!userInfo.token" class="personMsg">
          <div class="author_img">
            <img src="@/images/login/grey.jpg" alt />
          </div>
          <div class="person_info">
            <router-link to="/login">立即登录</router-link>
          </div>
        </div>
      </template>
    </van-cell>
    <!-- 我的订单 -->
    <van-cell icon="label" title="我的订单" value="查看全部订单" is-link />
    <!-- 服务项目 -->
    <van-grid :border="false">
      <van-grid-item
        v-for="(order,index) in orderData"
        :key="index"
        :icon="order.icon"
        :text="order.title"
      />
    </van-grid>
    <!-- 我的优惠卷和地址 -->
    <van-cell
      style="margin-top:8px"
      title="我的优惠券"
      icon="gold-coin"
      value="1张"
      is-link
      to="/navigation/profile/couponList"
    />
    <van-cell title="我的收货地址" icon="todo-list" is-link />
    <!-- 我的绿卡 -->
    <van-cell is-link icon="vip-card" style="margin-top:8px">
      <template slot="title">
        <span class="custom-title">我的绿卡</span>
        <van-tag type="danger" round>NEW</van-tag>
      </template>
    </van-cell>
    <!-- 客服，意见-->
    <van-cell title="联系客服" icon="phone" value="客服时间 07:00-22:00" is-link></van-cell>
    <van-cell title="意见反馈" icon="comment-circle" is-link></van-cell>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {   
    return {
      orderData: [
        { icon: "cart-circle-o", title: "待支付" },
        { icon: "gift-o", title: "待收货" },
        { icon: "smile-comment-o", title: "待评价" },
        { icon: "cash-back-record", title: "售后/退款" }
      ]
    };
  },
  computed:{
    ...mapState(['userInfo'])
  },
  created() {},
  mounted() {},
  methods: {
    // 1. 到个人中心页面
    goToMyCenter(){
      // this.$router.push({name:''})
    }
  }
};
</script>

<style scoped lang="less">
#profile {
  .my_header {
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    background-color: #ff0036;
  }
  .info {
    background-color: #ff0036;
    .van-cell__right-icon {
      color: #fff;
    }
    .profile_info,
    .personMsg {
      display: flex;
      // background-color: #ff0036;
      align-items: center;
      .author_img {
        img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
        }
      }
      .person_info {
        padding-left: 10px;
        color: #fff;
        a{
          color: #fff;
        }
      }
    }
  }
}
.van-cell__left-icon {
  color: #ff0036;
  font-size: 18px;
}
</style>
