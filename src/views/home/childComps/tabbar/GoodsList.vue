<template>
  <div class="good_list">
    <div class="goods_wrapper">
      <goods-list-item
        v-for="(goodsItem,index) in tabbarGoodsList"
        :key="index"
        :goods-item="goodsItem"
      />
    </div>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    tabbarGoodsList: {
      type: Array,
      default: () => []
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
.good_list {
  margin: 0 10px 10px;
  .goods_wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
