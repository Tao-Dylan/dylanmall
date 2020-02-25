import axios from "axios";
import qs from "qs";

export default function request({ url = "", params = {}, type = "GET" }) {
  // 1.创建 axios 实例
  const instanse = axios.create({ url, params, type });
  // 2. 判断请求类型
  if (type.toUpperCase() == "GET") {
    // 2.1 get请求
    if (params) {
      // 防止缓存，在最后加时间戳
      if (url.indexOf("127.0.0.1") === -1) {
        params["Geek-James"] = randomCode(20);
      }
    } else {
      if (url.indexOf("127.0.0.1" === -1)) {
        params = {
          "Geek-James": randomCode(20)
        };
      }
    }
    const optons = {
      url,
      params
    };
    return instanse(optons);
  } else {
    // 2.2 POST请求
    const optons = {
      method: type.toUpperCase(),
      data: qs.stringify(params),
      url
    };
    return instanse(optons);
  }
}

/*生成指定长度的随机数*/
function randomCode(length) {
  let chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let result = "";
  for (let i = 0; i < length; i++) {
    let index = Math.ceil(Math.random() * 9);
    result += chars[index];
  }
  return result;
}
