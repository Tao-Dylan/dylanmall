<template>
  <div class="flash_goods">
    <scroll class="scroll_width" :scrollX="true">
      <div class="scroll_content">
        <flash-goods-item v-for="(item,index) in flashGoods" :key="index" :goods-item="item" />
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/vuescroll/Scroll";
import FlashGoodsItem from "./FlashGoodsItem";
export default {
  name: "FlashGoods",
  components: {
    Scroll,
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
  .scroll_width {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    .scroll_content {
      display: inline-block;
    }
  }
}
</style>
