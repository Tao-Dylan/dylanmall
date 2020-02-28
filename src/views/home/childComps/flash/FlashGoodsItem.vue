<template>
  <div class="falsh_goods_item">
    <a href="javascript:">
      <img :src="goodsItem.small_image" alt />
      <p class="item_title">{{goodsItem.name}}</p>
      <div class="item_price">
        <div class="new_price">{{goodsItem.price|moneyFormat}}</div>
        <div class="old_price">{{goodsItem.origin_price|moneyFormat}}</div>
      </div>
      <div class="add_car">
        <van-icon size="15px" name="cart-o" />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "FalshGoodsItem",
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
.falsh_goods_item {
  position: relative;
  margin: 8px;
  a {
    img {
      width: 100px;
      height: 100px;
    }
    .item_title {
      width: 100px;
      height: 34px;
      line-height: 17px;
      font-size: 12px;
    }
    .item_price {
      margin-top: 5px;
      .new_price {
        color: #f37078;
      }
      .old_price {
        text-decoration: line-through;
        font-size: 12px;
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
}
</style>
