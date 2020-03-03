<template>
  <div class="user_center">
    <van-nav-bar title="个人资料" :fixed="true" left-arrow @click-left="onClickLeft" />
    <div class="icon">
      <span class="title">头像</span>
      <img src="@/images/mine/mine.jpg" alt />
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
    <!-- 事件选择 -->
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
      maxDate: new Date("2029/12/31")
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
    // 1. 返回上一页
    onClickLeft() {
      this.$router.back();
    },
    // 2. 修改昵称
    goToChangeNickName() {
      this.$router.push({
        name: "changeNickName",
        params: { nickName: this.userInfo.user_name }
      });
    },
    // 3. 编辑生日信息
    selectBrithday() {
      this.showDateTimePopView = true;
    },
    // 4. 格式化时间
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      } else if (type === "day") {
        return `${value}日`;
      }
      return value;
    },
    // 5. DateTime pcikView 确定
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
    // 6. DateTimt pickView 取消
    cancel() {
      this.showDateTimePopView = false;
    },
    // 7. 退出登录
    logOut() {
      Dialog.confirm({
        message: "确定退出登录吗?"
      })
        .then(() => {
          this.LOGIN_OUT();
          Toast({
            message: "退出成功",
            duration: 800
          });
          this.$router.back();
        })
        .catch(() => {});
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
  z-index: 2;
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
