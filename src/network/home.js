import request from "./request";

const BASE_URL = "https://mock.cangdu.org/mock/5d940466d360e8289c6a8eb7/api/";

export const getHomeData = () =>
  request({
    url: BASE_URL + "homeApi",
  });
