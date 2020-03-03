import {
  SELECTED_GOODS,
  SELECTED_GOODS_COUNT,
  SELECTED_GOODS_PRICE
} from "./mutation_types";

export default {
  // 1. 选中的商品
  [SELECTED_GOODS](state) {
    let selectGoodsList = [];
    // 1.1 获取本地shopCart
    let shopCart = state.shopCart;
    // 1.2 遍历数组，判断哪些商品选中
    Object.values(shopCart).forEach((goods, index) => {
      if (goods.checked) {
        selectGoodsList.push(shopCart[goods.id]);
      }
    });
    return selectGoodsList;
  },
  // 2. 选中商品中的总价
  [SELECTED_GOODS_PRICE](state) {
    let totalPrice = 0;
    Object.values(state.shopCart).forEach((goods, index) => {
      if (goods.checked) {
        // 2.2 计算总价,由于Vant的SubmitBar组件接受的价格格式是保留两位小数且中间不需要.所以需要转换下
        totalPrice += goods.price * goods.num * 100;
      }
    });
    return totalPrice;
  },
  // 3. 选中商品的数量
  [SELECTED_GOODS_COUNT](state) {
    
  }
};
