import request from "./request";

const BASE_URL =
  "http://api.7-orange.cn:7300/mock/5def6a2d448e330a1116366e/api/";

export const getCategoryData = () =>
  request({
    url: BASE_URL + "homeApi/categories"
  });
// 右边数据（根据左边的标题点击传值）
export const getCategoryRightData = params =>
  request({
    url: BASE_URL + "homeApi/categoriesdetail" + params
  });
