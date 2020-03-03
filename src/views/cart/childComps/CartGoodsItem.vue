<template>
  <div class="cart_goods_item">
    <van-checkbox
      class="checkbox"
      v-model="goodsItem.checked"
      @click.stop="singleGoodsClick(goodsItem.id)"
      checked-color="#ff0036"
      icon-size="18px"
    />
    <img :src="goodsItem.smallImage" alt />
    <div class="info">
      <p class="title">{{goodsItem.name}}</p>
      <div class="price_num">
        <div class="price">{{goodsItem.price | moneyFormat}}</div>
        <div class="change_num">
          <span class="reduce" @click="reduceGoods(goodsItem.id,goodsItem.num)">-</span>
          <span class="count">{{goodsItem.num}}</span>
          <span class="add" @click="addGoods(goodsItem)">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { Dialog } from "vant";

export default {
  name: "CartGoodsItem",
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
    ...mapMutations(["SELECT_SINGLE_GOODS", "ADD_GOODS", "REDUCE_GOODS"]),
    // 1. 点击是否选中单个商品
    singleGoodsClick(goodsID) {
      this.SELECT_SINGLE_GOODS({ goodsID });
    },
    // 2. 添加选中商品数量
    addGoods(goods) {
      const obj = {
        goodsID: goods.id,
        goodsName: goods.name,
        goodsImage: goods.smallImage,
        goodsPrice: goods.price
      };
      this.ADD_GOODS(obj);
    },
    // 3. 减少选中商品的数量
    reduceGoods(goodsID, goodsNum) {
      // 先判断商品数量多少
      if (goodsNum > 1) {
        this.REDUCE_GOODS({ goodsID });
      } else if (goodsNum === 1) {
        Dialog.confirm({
          title: "确认删除这个宝贝吗",
          overlay: false
        })
          .then(() => {
            this.REDUCE_GOODS({ goodsID });
          })
          .catch(() => {});
      }
    }
  }
};
</script>

<style scoped lang="less">
.cart_goods_item {
  width: 100%;
  background-color: #fff;
  display: flex;
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 5px;
  .checkbox {
    width: 6%;
  }
  img {
    width: 29%;
    height: 100%;
  }
  .info {
    position: relative;
    display: flex;
    width: 65%;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 10px;
    .title {
      height: 40px;
      line-height: 20px;
      font-size: 14px;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .price_num {
      position: relative;
      line-height: 20px;
      .price {
        color: #f386be;
        font-size: 14px;
      }
      .change_num {
        position: absolute;
        // top: 70px;
        bottom: 0;
        right: 0;
        width: 90px;
        display: flex;
        text-align: center;
        border: 1px solid #ccc;
        .reduce {
          width: 30px;
          border-right: 1px solid #ccc;
        }
        .count {
          width: 30px;
          line-height: 20px;
          font-size: 12px;
        }
        .add {
          width: 30px;
          border-left: 1px solid #ccc;
        }
      }
    }
  }
}
</style>
