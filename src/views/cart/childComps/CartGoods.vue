<template>
  <div class="cart_goods">
    <cart-goods-item v-for="(goodsItem,index) in shopCart" :key="index" :goods-item="goodsItem" />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import CartGoodsItem from "./CartGoodsItem";
export default {
  name: "CartGoods",
  components: {
    CartGoodsItem
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["shopCart"]),
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
</style>
