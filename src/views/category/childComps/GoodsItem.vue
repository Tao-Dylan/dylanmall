<template>
  <div class="goods_item">
    <div class="left_img">
      <img :src="goodsItem.small_image" alt />
    </div>
    <div class="right_info">
      <p class="title">{{goodsItem.name}}</p>
      <p class="title_spec">{{goodsItem.spec}}</p>
      <div class="price">
        <span class="new_price">{{goodsItem.price|moneyFormat}}</span>
        <span class="old_price">{{goodsItem.origin_price|moneyFormat}}</span>
      </div>
    </div>
    <div class="add_car" @click="addToCart(goodsItem)">
      <van-icon size="15px" name="cart-o" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "GoodsItem",
  props: {
    goodsItem: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    // 扩展mutations方法
    ...mapMutations(["ADD_TO_CART"]),
    // 1. 添加商品到购物车
    addToCart(goods) {
      this.ADD_TO_CART(goods);
    }
  }
};
</script>

<style scoped lang="less">
.goods_item {
  width: 100%;
  position: relative;
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  .left_img {
    width: 30%;
    img {
      width: 100%;
      border-radius: 5px;
    }
  }
  .right_info {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20px 0 10px;
    font-size: 12px;
    .title {
      font-size: 13px;
      padding-top: 10px;
      color: #000;
    }
    .title_spec {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .price {
      .new_price {
        color: #ff0036;
        font-size: 16px;
      }
      .old_price {
        padding-left: 5px;
        text-decoration: line-through;
      }
    }
  }
  .add_car {
    position: absolute;
    bottom: 7px;
    right: 5px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    background-color: #4fc173;
    border-radius: 15px;
    .van-icon {
      padding-left: 4px;
      color: #fff;
    }
  }
}
</style>
