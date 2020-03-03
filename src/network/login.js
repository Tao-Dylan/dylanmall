import request from "./request";

// 基础路径
const BASE_URL = "https://mock.cangdu.org/mock/5d940466d360e8289c6a8eb7/api/";
const LOCAL_URL = "http://demo.itlike.com/web/xlmc/api/";

// 获取手机验证码get ,Easy Mock 模拟发送验证码
export const getPhoneCaptcha = phoneMumber =>
  request({ url: BASE_URL + "send_code", params: { phoneMumber } });

// 手机验证码登录post, Easy Mock 模拟用户登录
export const phoneCaptchaLogin = (phone, captcha) =>
  request({
    url: BASE_URL + "login_code",
    params: { phone, captcha },
    type: "POST"
  });

// 账号密码登录psot, Easy Mock 模拟用户登录
export const pwdLogin = (userName, pwd, captcha) =>
  request({
    url: LOCAL_URL + "login_pwd",
    params: { userName, pwd, captcha },
    type: "POST"
  });
