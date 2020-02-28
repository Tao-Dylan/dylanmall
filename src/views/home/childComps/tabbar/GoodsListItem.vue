<template>
  <div class="goods_list_item">
    <img :src="goodsItem.small_image" alt />
    <div class="item_info">
      <p class="item_title">{{goodsItem.name}}</p>
      <p class="item_spec">{{goodsItem.spec}}</p>
      <div class="price">
        <span class="new_price">{{goodsItem.price|moneyFormat}}</span>
        <span class="old_price">{{goodsItem.origin_price|moneyFormat}}</span>
      </div>
    </div>
    <div class="add_car">
      <van-icon size="15px" name="cart-o" />
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
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
  methods: {}
};
</script>

<style scoped lang="less">
.goods_list_item {
  position: relative;
  background-color: #fff;
  width: 49%;
  border-radius: 5px;
  margin-top: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 13px;
  img {
    width: 100%;
  }
  .item_info {
    padding: 0 8px 10px;
    .item_title {
      // height: 35px;
      line-height: 17px;
      color: #000;
    }
    .item_spec {
      padding: 5px 0;
      font-size: 12px;
    }
    .price {
      margin-top: 10px;
      .new_price {
        font-size: 16px;
        color: #ff0036;
      }
      .old_price {
        margin-left: 8px;
        font-size: 12px;
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
