import { ADD_GOODS, ADD_TO_CART, INIT_SHOP_CART } from "./mutation_types";

// 导入本地存储
import { getLocalStore, setLocalStore } from "../config/global";
import { Toast } from "vant";
export default {
  // 1. 添加商品
  [ADD_GOODS](state, { goodsID, goodsName, goodsImage, goodsPrice }) {
    let shopCart = state.shopCart;
    // 1.1 判断商品是否存在
    if (shopCart[goodsID]) {
      // 1.1.1 商品存在,则数量加1
      shopCart[goodsID]["num"]++;
    } else {
      // 1.1.2 商品不存在，则添加商品，并且设置num为1
      shopCart[goodsID] = {
        num: 1,
        id: goodsID,
        name: goodsName,
        price: goodsPrice,
        smallImage: goodsImage,
        checked: true
      };
      // 1.1.3 添加商品后更新state里面的数据
      state.shopCart = { ...shopCart };
    }
    // 1.2 将更新后的数据存储在本地
    setLocalStore("shopCart", state.shopCart);
  },
  // 2. 添加商品到购物车
  [ADD_TO_CART](state, goods) {
    this.commit("ADD_GOODS", {
      goodsID: goods.id,
      goodsName: goods.name,
      goodsImage: goods.small_image,
      goodsPrice: goods.price
    });
    Toast({
      message: "成功添加至购物车",
      duration: 800
    });
  },
  // 3. 初始化获取本地购物车数据
  [INIT_SHOP_CART](state) {
    // 2.1 获取本地购物车数据
    let initShopCart = getLocalStore("shopCart");
    if (initShopCart) {
      // 如果有商品，则赋值给state的shopCart
      state.shopCart = JSON.parse(initShopCart);
    }
  }
};
