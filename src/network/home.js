import request from "./request";

const BASE_URL =
  "http://api.7-orange.cn:7300/mock/5def6a2d448e330a1116366e/api/";

export const getHomeData = () =>
  request({
    url: BASE_URL + "homeApi"
  });
