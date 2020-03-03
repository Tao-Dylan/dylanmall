<template>
  <div class="buy_goods_list">
    <ul class="buy_lsit_wrapper">
      <li class="item" v-for="(item,index) in goods">
        <img :src="item.smallImage" alt />
        <div class="info">
          <p class="title">{{item.name}}</p>
          <div class="price_num">
            <span class="price">{{item.price | moneyFormat}}</span>
            <div class="total_info">
              <span class="total_num">共{{item.num}}件</span>
              <span class="calculate">小计：</span>
              <span class="total_price">{{item | itemTotalPrice |moneyFormat}}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "BuyGoodsList",
  data() {
    return {
       
    };
  },
  filters: {
    itemTotalPrice(item) {
      return item.price * item.num;
    }
  },
  computed: {
    ...mapState(["shopCart"]),
    ...mapGetters({
      selectedCount: "SELECTED_GOODS_COUNT",
      goods: "SELECTED_GOODS"
    }),

    // 单件商品的总价：数量*价格
    itemTotalPrice(item) {
      return item.num * item.price;
    }
  },
  created() {},
  mounted() {},
  methods: {
    onSubmit() {}
  }
};
</script>

<style scoped lang="less">
.buy_goods_list {
  width: 100%;
  .buy_lsit_wrapper {
    .item {
      display: flex;
      margin-top: 8px;
      padding: 8px;
      background-color: #fff;
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
          padding-top: 10px;
          color: #000;
          font-size: 15px;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .price_num {
          position: relative;
          display: flex;
          justify-content: space-between;
          line-height: 20px;
          font-size: 14px;
          .price {
            color: #ff0036;
          }
          .total_info {
            .calculate {
            }
            .total_num {
              padding-right: 10px;
              font-size: 12px;
            }
            .total_price {
              color: red;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>

