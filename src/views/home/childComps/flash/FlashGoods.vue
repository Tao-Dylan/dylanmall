<template>
  <div class="flash_goods">
    <flash-goods-item
      v-for="(item,index) in flashGoods"
      :key="index"
      :goods-item="item"
    />
  </div>
</template>

<script>
import MyScroll from "@/components/vuescroll/MyScroll";
import FlashGoodsItem from "./FlashGoodsItem";
export default {
  name: "FlashGoods",
  components: {
    MyScroll,
    FlashGoodsItem
  },
  props: {
    flashGoods: {
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
.flash_goods {
  width: 100%;
  display: flex;
  overflow: hidden;
}
</style>
