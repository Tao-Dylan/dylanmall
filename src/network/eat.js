import request from "./request";

const BASE_URL =
  "http://api.7-orange.cn:7300/mock/5def6a2d448e330a1116366e/api/";

// 今日菜单的分类
export const getTodayMenuData = () =>
  request({
    url: BASE_URL + "recipe/allScene"
  });
// 菜单商品数据（根据标题点击传值）
export const getTodayMenuDetail = params =>
  request({
    url: BASE_URL + "recipe/menulist" + params
  });
