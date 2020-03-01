<template>
  <div class="right_goods" v-if="this.rightGoods">
    <scroll class="scroll_height" :scrollY="true">
      <div class="goods_content">
        <goods-item :goods-item="item" v-for="(item,index) in rightGoods.products" :key="item.id" />
        <!-- <van-divider :style="{color:'#1989fa'}">文字</van-divider> -->
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/vuescroll/Scroll";
import GoodsItem from "./GoodsItem";
export default {
  name: "RightGoods",
  components: {
    Scroll,
    GoodsItem
  },
  props: {
    rightGoods: {
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
.right_goods {
  width: 75%;
  position: fixed;
  top: 96px;
  bottom: 50px;
  overflow: hidden;
  .scroll_height {
    height: 100%;
    // width: 75%;
    // position: fixed;
    // top: 96px;
    // bottom: 50px;
    // overflow: hidden;
    .goods_content {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 10px;
    }
  }
}
</style>
