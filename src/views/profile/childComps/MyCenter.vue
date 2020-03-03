<template>
  <div class="user_center">
    <van-nav-bar title="个人资料" :fixed="true" left-arrow @click-left="onClickLeft" />
    <div class="icon">
      <span class="title">头像</span>
      <img src="./../../../images/mine/defaultImg.jpeg" alt />
    </div>
    <van-cell-group>
      <van-cell title="昵称" is-link :value="userInfo.user_name" @click="goToChangeNickName" />
      <van-cell
        title="生日"
        is-link
        @click="selectBrithday"
        :value="userInfo.brithday?userInfo.brithday:'未填写'"
      />
      <van-cell title="手机号" :value="phoneNumber" />
    </van-cell-group>

    <van-button size="large" style="margin-top:1rem" @click="logOut">退出登录</van-button>
    <van-popup v-model="showDateTimePopView" round position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        @confirm="confirm"
        @cancel="cancel"
        :formatter="formatter"
        :max-date="maxDate"
        :min-date="minDate"
      />
    </van-popup>
    <!--路由的出口-->
    <transition name="router-slider" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { Dialog, Toast } from "vant";
import { mapState, mapMutations } from "vuex";
import Moment from "moment";
export default {
  data() {
    return {
      showDateTimePopView: false,
      currentDate: new Date("1989/01/01"),
      // 最小时间
      minDate: new Date("1949/01/01"),
      maxDate: new Date("2020/12/31")
    };
  },
  computed: {
    ...mapState(["userInfo"]),
    phoneNumber() {
      return this.userInfo.phone;
    }
  },
  created() {},
  mounted() {},
  methods: {
    ...mapMutations(["LOGIN_OUT", "USER_INFO_BRITHDAY"]),
    // 返回上一页
    onClickLeft() {
      this.$router.back();
    },
    // 修改昵称
    goToChangeNickName() {
      this.$router.push({
        name: "changeNickName",
        params: { nickName: this.userInfo.user_name }
      });
    },
    // 编辑生日信息
    selectBrithday() {},
    // 退出登录按钮
    logOut() {},
    // 格式化时间
    formatter() {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      } else if (type === "day") {
        return `${value}日`;
      }
      return value;
    },
    // DateTime pcikView 确定
    confirm(value) {
      let brithday = Moment(value).format("YYYY年MM月DD日");
      this.brithdayText = brithday;
      this.USER_INFO_BRITHDAY({ brithday });
      this.showDateTimePopView = false;
      Toast({
        message: "个人资料修改成功!",
        duration: 800
      });
    },
    // DateTimt pickView 取消
    cancel() {
      this.showDateTimePopView = false;
    },
    // 退出登录
    logOut() {
      console.log("退出登录");
      Dialog.confirm({
        message: "确定退出登录吗?"
      })
        .then(() => {
          // on confirm
          this.LOGIN_OUT();
          Toast({
            message: "退出成功",
            duration: 800
          });
          this.$router.back();
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>

<style scoped lang="less">
.user_center {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 999;
  .icon {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    background-color: #fff;
    height: 50px;
    width: 100%;
    .title {
      height: 50px;
      line-height: 50px;
    }
    img {
      border: 1px solid #ebedf0;
      border-radius: 50%;
      height: 50px;
      width: 50px;
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
