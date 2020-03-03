import {
  ADD_GOODS,
  REDUCE_GOODS,
  ADD_TO_CART,
  INIT_SHOP_CART,
  SELECT_SINGLE_GOODS,
  SELECT_ALL_GOODS
} from "./mutation_types";
import Vue from "vue";
// 导入本地存储
import { getLocalStore, setLocalStore } from "../config/global";
import { Toast, Dialog } from "vant";

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
  // 2. 减少商品
  [REDUCE_GOODS](state, { goodsID }) {
    // 2.1 取出商品数据
    let shopCart = state.shopCart;
    // 2.2 查询该id的商品
    let goods = shopCart[goodsID];
    if (goods) {
      // 2.3 判断有该商品
      if (goods["num"] > 1) {
        // 2.4 并且商品数量大于1
        goods["num"]--;
      } else if (goods["num"] === 1) {
        // 2.5 商品数量减少到1，则删除该商品
        delete shopCart[goodsID];
      }
    }
    // 2.6 更新vuex中的数据
    state.shopCart = { ...shopCart };
    // 2.7 并且本地存储跟新后的数据
    setLocalStore("shopCart", state.shopCart);
  },
  // 3. 添加商品到购物车
  [ADD_TO_CART](state, goods) {
    this.commit("ADD_GOODS", {
      goodsID: goods.id,
      goodsName: goods.name,
      goodsImage: goods.small_image,
      goodsPrice: goods.price
    });
    Toast({
      message: "成功添加至购物车",
      icon: "certificate",
      duration: 800
    });
  },
  // 4. 初始化获取本地购物车数据
  [INIT_SHOP_CART](state) {
    // 2.1 获取本地购物车数据
    let initShopCart = getLocalStore("shopCart");
    if (initShopCart) {
      // 如果有商品，则赋值给state的shopCart
      state.shopCart = JSON.parse(initShopCart);
    }
  },
  // 5. 单个商品的选中与否
  [SELECT_SINGLE_GOODS](state, { goodsID }) {
    // 4.1 先取出state中的数据
    let shopCart = state.shopCart;
    // 4.2 根据传过来的id查询商品
    let goods = shopCart[goodsID];
    // 4.3 判断商品是否存在
    if (goods) {
      // 4.3.1 存在该商品取反值
      goods.checked = !goods.checked;
    } else {
      // 4.3.2 不存在，设置默认值
      // 注意：设置值得时候，需用vue的set方法设置，否则数据不是响应式的
      Vue.set(goods, "checked", true);
    }
    // 4.4 修改后同时更新vuex中的数据
    state.shopCart = { ...shopCart };
    // 4.5 并且本地存储跟新后的数据
    setLocalStore("shopCart", state.shopCart);
  },
  // 6. 全选商品
  [SELECT_ALL_GOODS](state, { isSelectedSAll }) {
    // 5.1 取出商品
    let shopCart = state.shopCart;
    // 5.2 判断全选还是全不选
    if (isSelectedSAll) {
      // 5.2.1 全选，则所有goods的checked为true
      Object.values(shopCart).forEach((goods, index) => {
        if (goods.checked) {
          // 已经选中的
          return;
        } else {
          Vue.set(goods, "checked", true);
        }
      });
    } else {
      // 5.2.2 全不选
      Object.values(shopCart).forEach((goods, index) => {
        if (!goods.checked) {
          // 已经没选中的
          return;
        } else {
          Vue.set(goods, "checked", false);
        }
      });
    }
    // 5.3 更新vuex中数据
    state.shopCart = { ...shopCart };
    // 5.4 并且本地存储跟新后的数据
    setLocalStore("shopCart", state.shopCart);
  }
};
