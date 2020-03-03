<template>
  <div id="login">
    <div class="login_wrapper">
      <div class="login_form">
        <div class="panfish">
          <img src="@/images/login/normal.png" alt />
        </div>
        <van-icon class="icon_cross" size="23px" name="close" />
        <van-tabs v-model="loginMethod" animated>
          <!-- 登录 -->
          <van-tab title="登陆">
            <!-- 账号密码登录 -->
            <van-cell-group v-show="isShowNameLogin">
              <van-field
                v-model="username_login"
                required
                clearable
                label="用户名"
                @click.stop="changeImage(0)"
                placeholder="请输入手机号或用户名"
              />
              <van-field
                v-model="password_login"
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
                @click.stop="changeImage(1)"
              />
              <van-field v-model="imgCaptcha" center clearable maxlength="4" placeholder="请输入验证码">
                <img
                  class="verificationImage"
                  src="http://demo.itlike.com/web/xlmc/api/captcha"
                  alt="captcha"
                  @click.prevent="getCaptcha"
                  ref="imgCaptcha"
                  slot="button"
                />
              </van-field>
            </van-cell-group>
            <!-- 短信验证码登录 -->
            <van-cell-group v-show="!isShowNameLogin">
              <van-field
                v-model="phone_login"
                required
                clearable
                label="手机号"
                type="tel"
                maxlength="11"
                placeholder="请输入手机号"
                :error-message="phoneNumberRight?'':'请输入正确的手机号'"
              />
              <van-field
                clearable
                required
                center
                v-model="msgCaptcha"
                label="短信验证码"
                placeholder="验证码"
                maxlength="6"
              >
                <van-button
                  v-if="!countDown"
                  slot="button"
                  size="small"
                  type="primary"
                  :disabled="isDisabledCaptchaButton"
                  @click="sendVerifyCCode"
                >发送验证码</van-button>
                <van-button
                  v-else
                  v-model="msgCaptcha"
                  slot="button"
                  size="small"
                  type="primary"
                >已发送{{countDown}}秒</van-button>
              </van-field>
            </van-cell-group>
            <!-- 登录按钮 -->
            <van-button type="info" size="large" style="margin-top:1rem" @click="login">登录</van-button>
            <!-- 切换登录方式 -->
            <div
              class="switchLogin"
              @click="switchLogin"
            >{{this.isShowNameLogin?'短信验证码登录' : '账号密码登录'}}</div>
          </van-tab>
          <!-- 注册 -->
          <van-tab title="注册">
            <van-cell-group>
              <van-field
                v-model="username_registered"
                clearable
                placeholder="请输入手机号"
                required
                label="手机号"
              />
              <van-field
                v-model="password_registered"
                type="password"
                placeholder="请输入密码(不少于6位)"
                required
                label="密码"
              />
            </van-cell-group>
            <!-- 注册按钮 -->
            <van-button type="info" size="large" style="margin-top:1rem" @click="register">注册</van-button>
          </van-tab>
        </van-tabs>
        <!-- 第三方登录 -->
        <van-divider>其他登录方式</van-divider>
        <van-grid :column-num="2" :border="false">
          <!-- 微信登录 -->
          <van-grid-item @click="thirdLogin(0)">
            <svg
              t="1571242875453"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="7519"
              width="40"
              height="40"
            >
              <path
                d="M347.729118 353.0242c-16.487119 0-29.776737 13.389539-29.776737 29.776737S331.241998 412.677596 347.729118 412.677596s29.776737-13.389539 29.776737-29.776737-13.289617-29.876659-29.776737-29.876659zM577.749415 511.800156c-13.689305 0-24.880562 11.091335-24.880563 24.880562 0 13.689305 11.091335 24.880562 24.880563 24.880562 13.689305 0 24.880562-11.191257 24.880562-24.880562s-11.191257-24.880562-24.880562-24.880562zM500.909446 412.677596c16.487119 0 29.776737-13.389539 29.776737-29.776737s-13.389539-29.776737-29.776737-29.776737c-16.487119 0-29.776737 13.389539-29.776737 29.776737s13.289617 29.776737 29.776737 29.776737zM698.455113 511.600312c-13.689305 0-24.880562 11.091335-24.880562 24.880562 0 13.689305 11.091335 24.880562 24.880562 24.880562 13.689305 0 24.880562-11.091335 24.880562-24.880562-0.099922-13.689305-11.191257-24.880562-24.880562-24.880562z"
                fill="#00C800"
                p-id="7520"
              />
              <path
                d="M511.601093 0.799375C229.12178 0.799375 0.000781 229.820453 0.000781 512.399688s229.021077 511.600312 511.600312 511.600312 511.600312-229.021077 511.600312-511.600312S794.180328 0.799375 511.601093 0.799375z m-90.229508 634.504294c-27.37861 0-49.361436-5.595628-76.839969-10.991413l-76.640125 38.469945 21.882904-65.948477c-54.957065-38.370023-87.73146-87.831382-87.73146-148.084309 0-104.318501 98.722873-186.554254 219.32865-186.554255 107.815769 0 202.34192 65.648712 221.327088 153.979703-6.994536-0.799375-13.989071-1.298985-21.083529-1.298985-104.118657 0-186.454333 77.739266-186.454332 173.564403 0 15.98751 2.498048 31.275566 6.794692 45.964091-6.794692 0.599532-13.689305 0.899297-20.583919 0.899297z m323.547228 76.839969l16.48712 54.757221-60.153006-32.874317c-21.882904 5.495706-43.965652 10.991413-65.848555 10.991413-104.318501 0-186.554254-71.344262-186.554255-159.175644 0-87.631538 82.135831-159.175644 186.554255-159.175644 98.523029 0 186.254489 71.444184 186.254488 159.175644 0.099922 49.461358-32.774395 93.227166-76.740047 126.301327z"
                fill="#00C800"
                p-id="7521"
              />
            </svg>
            <div class="title">微信登录</div>
          </van-grid-item>
          <!-- QQ登录 -->
          <van-grid-item @click="thirdLogin(1)">
            <svg
              t="1571243237084"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="7750"
              width="40"
              height="40"
            >
              <path
                d="M511.09761 957.257c-80.159 0-153.737-25.019-201.11-62.386-24.057 6.702-54.831 17.489-74.252 30.864-16.617 11.439-14.546 23.106-11.55 27.816 13.15 20.689 225.583 13.211 286.912 6.767v-3.061z"
                fill="#FAAD08"
                p-id="7751"
              />
              <path
                d="M496.65061 957.257c80.157 0 153.737-25.019 201.11-62.386 24.057 6.702 54.83 17.489 74.253 30.864 16.616 11.439 14.543 23.106 11.55 27.816-13.15 20.689-225.584 13.211-286.914 6.767v-3.061z"
                fill="#FAAD08"
                p-id="7752"
              />
              <path
                d="M497.12861 474.524c131.934-0.876 237.669-25.783 273.497-35.34 8.541-2.28 13.11-6.364 13.11-6.364 0.03-1.172 0.542-20.952 0.542-31.155C784.27761 229.833 701.12561 57.173 496.64061 57.162 292.15661 57.173 209.00061 229.832 209.00061 401.665c0 10.203 0.516 29.983 0.547 31.155 0 0 3.717 3.821 10.529 5.67 33.078 8.98 140.803 35.139 276.08 36.034h0.972z"
                fill="#000000"
                p-id="7753"
              />
              <path
                d="M860.28261 619.782c-8.12-26.086-19.204-56.506-30.427-85.72 0 0-6.456-0.795-9.718 0.148-100.71 29.205-222.773 47.818-315.792 46.695h-0.962C410.88561 582.017 289.65061 563.617 189.27961 534.698 185.44461 533.595 177.87261 534.063 177.87261 534.063 166.64961 563.276 155.56661 593.696 147.44761 619.782 108.72961 744.168 121.27261 795.644 130.82461 796.798c20.496 2.474 79.78-93.637 79.78-93.637 0 97.66 88.324 247.617 290.576 248.996a718.01 718.01 0 0 1 5.367 0C708.80161 950.778 797.12261 800.822 797.12261 703.162c0 0 59.284 96.111 79.783 93.637 9.55-1.154 22.093-52.63-16.623-177.017"
                fill="#000000"
                p-id="7754"
              />
              <path
                d="M434.38261 316.917c-27.9 1.24-51.745-30.106-53.24-69.956-1.518-39.877 19.858-73.207 47.764-74.454 27.875-1.224 51.703 30.109 53.218 69.974 1.527 39.877-19.853 73.2-47.742 74.436m206.67-69.956c-1.494 39.85-25.34 71.194-53.24 69.956-27.888-1.238-49.269-34.559-47.742-74.435 1.513-39.868 25.341-71.201 53.216-69.974 27.909 1.247 49.285 34.576 47.767 74.453"
                fill="#FFFFFF"
                p-id="7755"
              />
              <path
                d="M683.94261 368.627c-7.323-17.609-81.062-37.227-172.353-37.227h-0.98c-91.29 0-165.031 19.618-172.352 37.227a6.244 6.244 0 0 0-0.535 2.505c0 1.269 0.393 2.414 1.006 3.386 6.168 9.765 88.054 58.018 171.882 58.018h0.98c83.827 0 165.71-48.25 171.881-58.016a6.352 6.352 0 0 0 1.002-3.395c0-0.897-0.2-1.736-0.531-2.498"
                fill="#FAAD08"
                p-id="7756"
              />
              <path
                d="M467.63161 256.377c1.26 15.886-7.377 30-19.266 31.542-11.907 1.544-22.569-10.083-23.836-25.978-1.243-15.895 7.381-30.008 19.25-31.538 11.927-1.549 22.607 10.088 23.852 25.974m73.097 7.935c2.533-4.118 19.827-25.77 55.62-17.886 9.401 2.07 13.75 5.116 14.668 6.316 1.355 1.77 1.726 4.29 0.352 7.684-2.722 6.725-8.338 6.542-11.454 5.226-2.01-0.85-26.94-15.889-49.905 6.553-1.579 1.545-4.405 2.074-7.085 0.242-2.678-1.834-3.786-5.553-2.196-8.135"
                fill="#000000"
                p-id="7757"
              />
              <path
                d="M504.33261 584.495h-0.967c-63.568 0.752-140.646-7.504-215.286-21.92-6.391 36.262-10.25 81.838-6.936 136.196 8.37 137.384 91.62 223.736 220.118 224.996H506.48461c128.498-1.26 211.748-87.612 220.12-224.996 3.314-54.362-0.547-99.938-6.94-136.203-74.654 14.423-151.745 22.684-215.332 21.927"
                fill="#FFFFFF"
                p-id="7758"
              />
              <path
                d="M323.27461 577.016v137.468s64.957 12.705 130.031 3.91V591.59c-41.225-2.262-85.688-7.304-130.031-14.574"
                fill="#EB1C26"
                p-id="7759"
              />
              <path
                d="M788.09761 432.536s-121.98 40.387-283.743 41.539h-0.962c-161.497-1.147-283.328-41.401-283.744-41.539l-40.854 106.952c102.186 32.31 228.837 53.135 324.598 51.926l0.96-0.002c95.768 1.216 222.4-19.61 324.6-51.924l-40.855-106.952z"
                fill="#EB1C26"
                p-id="7760"
              />
            </svg>
            <div class="title">QQ登录</div>
          </van-grid-item>
        </van-grid>
        <!-- 温馨提示，底部申明 -->
        <p class="agreement">
          温馨提示：
          <br />未注册的手机号，登录时将自动注册，且代表同意
          <a @click.stop="agreement(0)" class="agreement-box">用户协议</a>、
          <a @click.stop="agreement(1)" class="agreement-box">隐私策略</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { getPhoneCaptcha, phoneCaptchaLogin, pwdLogin } from "@/network/login";
import { mapActions } from "vuex";
import { Toast, Dialog } from "vant";
export default {
  data() {
    return {
      loginMethod: 0, // 登录方式 注册|登录
      username_login: "", // 用户名
      password_login: "", // 用户密码
      imgCaptcha: "", // 图片验证码
      phone_login: "", // 手机号
      msgCaptcha: "", // 输入的短信验证码
      msgCaptchaResult: null, // 短信返回的验证码
      userInfo: null, // 用户信息
      username_registered: "", // 注册用户名
      password_registered: "", // 注册密码
      countDown: 0, //短信验证码倒计时
      isShowNameLogin: true // 登录切换 用户名 | 验证码
    };
  },
  computed: {
    // 1. 验证手机号格式是否正确
    phoneNumberRight() {
      // 1.1 判断是账号密码登录还是手机号登录
      let value = this.isShowNameLogin ? this.username_login : this.phone_login;
      if (value.length > 10) {
        return /[1][3,4,5,6,7,8][9]{9}$/.test(this.phone_login);
      } else {
        return true;
      }
    },
    // 2. 发送短信验证码按钮是否隐藏
    isDisabledCaptchaButton() {
      if (this.phone_login.length > 0 && this.phoneNumberRight) {
        // 注意：返回 false 表示显示发送按钮
        return false;
      } else {
        // 注意：返回 true 表示隐藏按钮
        return true;
      }
    }
  },
  methods: {
    ...mapActions(["syncuserInfo"]),
    changeImage() {},
    // 1. 切换登录方式
    switchLogin() {
      this.isShowNameLogin = !this.isShowNameLogin;
    },
    // 2. 获取验证码图片（账号密码登录）
    getCaptcha() {
      // 1.获取验证码的标签
      let captchaEle = this.$refs.imgCaptcha;
      this.$set(
        captchaEle,
        "src",
        "http://demo.itlike.com/web/xlmc/api/captcha?time=" + new Date()
      );
    },
    // 3. 获取短信验证码
    sendVerifyCCode() {
      Toast({
        message: "已发送验证码",
        duration: 500
      });
      // 倒计时发送验证码，每一秒递减
      this.countDown = 10;
      this.timeIntervalID = setInterval(() => {
        this.countDown--;
        if (this.countDown === 0) {
          clearInterval(this.timeIntervalID);
        }
      }, 1000);
      // 同时发送短信获取验证码
      getPhoneCaptcha(this.phone_login).then(res => {
        let result = res.data;
        console.log("手机验证码：", res);
        if (result.success_code === 200) {
          Dialog.alert({
            title: "温馨提示",
            message: "验证码获取成功，请输入验证码:" + result.data.code
          }).then(() => {});
          // 保存短信返回的的验证码
          this.msgCaptchaResult = result.code;
        }
      });
    },
    // 4. 登录
    login() {
      //  判断登录方式
      if (!this.isShowNameLogin) {
        // 4.1 手机验证码登录
        if (!this.phoneNumberRight || this.phone_login.length < 10) {
          // 4.1.1 验证手机号
          Toast({
            message: "请输入正确的手机号",
            duration: 800
          });
          return;
        } else if (
          this.msgCaptcha.length < 7 &&
          this.msgCaptcha != Number(this.msgCaptcha)
        ) {
          // 4.1.2 验证验证码
          Toast({
            message: "请输入正确的验证码",
            duration: 800
          });
          return;
        }
        // 4.1.3 验证通过，请求后台登录
        console.log("手机登录号码：", this.phone_login);
        console.log("手机登录验证码：", this.msgCaptcha);
        phoneCaptchaLogin(this.phone_login, this.msgCaptcha).then(res => {
          let resultData = res.data;
          console.log("手机快捷登录成功:", resultData);
          // 设置userInfo，保存到vuex和本地
          this.syncuserInfo(resultData.data);
          this.$router.back();
        });
      } else {
        // 4.2 账号密码登录
        if (this.username_login.trim().length === 0) {
          // 4.2.1 验证用户名
          Toast({
            message: "请输入用户名",
            duration: 800
          });
          return;
        } else if (this.password_login.length === 0) {
          // 4.2.2 验证密码
          Toast({
            message: "密码不能为空",
            duration: 800
          });
          return;
        } else if (this.imgCaptcha.length < 1) {
          // 4.2.3 验证图片验证码
          Toast({
            message: "请输入验证码",
            duration: 800
          });
          return;
        }
        // 4.2.4 验证通过，请求后台登录
        console.log("账号：", this.username_login);
        console.log("密码", this.password_login);
        pwdLogin(
          this.username_login,
          this.password_login,
          this.imgCaptcha
        ).then(res => {
          console.log("账号密码登录：", res);
          // 设置userInfo，保存到vuex和本地
          let resultData = res.data;
          this.syncuserInfo(resultData.data);
          this.$router.back();
        });
      }
    },
    // 2. 注册
    register() {},
    // 第三方登录
    thirdLogin() {}
  }
};
</script>

<style scoped lang="less">
#login {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: url("../../images/login/back2.jpg") no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  .login_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
    .login_form {
      position: relative;
      width: 350px;
      max-width: 90%;
      padding: 25px;
      border-radius: 15px;
      background-color: #fff;
      .icon_cross {
        position: absolute;
        top: 5px;
        right: 20px;
      }
      img {
        position: absolute;
        left: 50%;
        width: 80px;
        transform: translate(-50%, -80%);
      }
      .van-tabs {
        padding-top: 15px;
        .switchLogin {
          margin-top: 15px;
          font-size: 14px;
          color: #000;
        }
      }
      .van-divider {
        color: #1989f1;
        border-color: #1989fa;
      }
    }
  }
}
.agreement {
  font-size: 14px;
  color: #767676;
  .agreement-box {
    color: blue;
  }
}
.title {
  padding: 5px;
  font-size: 14px;
}
</style>
