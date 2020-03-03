// 本地化存储
export const setLocalStore = (name, val) => {
  if (!name) {
    return;
  }
  // 判断存储的是否为字符换
  if (typeof val != "string") {
    // 转化为字符串
    val = JSON.stringify(val);
  }
  window.localStorage.setItem(name, val);
};
// 本地化获取
export const getLocalStore = name => {
  if (!name) {
    return;
  }
  return window.localStorage.getItem(name);
};
// 本地化删除
export const removeLocalStore = name => {
  if (!name) return;
  return window.localStorage.removeItem(name);
};
