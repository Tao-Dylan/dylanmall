<template>
  <div class="goods_list">
    <!-- tabbar标签页 -->
    <van-tabs
      v-model="currentIndex"
      :border="false"
      animated
      sticky
      offset-top="100"
      color="#ff0036"
      background="#f5f5f5"
      title-active-color="#ff0036"
      @click="tabClick"
    >
      <van-tab v-for="(item,index) in tabTitle" :key="index">
        <div slot="title">
          <span>{{item}}</span>
        </div>
        <!-- 全部 -->
        <div class="goods_wrapper">
          <goods-list-item
            v-if="item ==='全部'"
            v-for="(goodsItem,indey) in tabbarGoodsList"
            :key="indey"
            :goods-item="goodsItem"
          />
        </div>
        <!-- 晚餐 -->
        <div class="goods_wrapper">
          <goods-list-item
            v-if="item ==='晚餐'"
            class="goods_wrapper"
            v-for="(goodsItem,indey) in tabbarGoodsList"
            :key="indey"
            :goods-item="goodsItem"
          />
        </div>
        <!-- 人气 -->
        <div class="goods_wrapper">
          <goods-list-item
            v-if="item ==='人气'"
            class="goods_wrapper"
            v-for="(goodsItem,indey) in tabbarGoodsList"
            :key="indey"
            :goods-item="goodsItem"
          />
        </div>
        <!-- 心选 -->
        <div class="goods_wrapper">
          <goods-list-item
            v-if="item ==='心选'"
            class="goods_wrapper"
            v-for="(goodsItem,indey) in tabbarGoodsList"
            :key="indey"
            :goods-item="goodsItem"
          />
        </div>
      </van-tab>
    </van-tabs>
    <!-- 标签页对应的内容 -->
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
    },
    // flashGoods: {
    //   type: Array,
    //   default: () => []
    // }
  },
  data() {
    return {
      currentIndex: 0,
      tabTitle: ["全部", "晚餐", "人气", "心选"]
    };
  },
  created() {},
  mounted() {},
  methods: {
    tabClick(index) {
      console.log(index);
      this.$emit("tabClick", index);
    }
  }
};
</script>

<style scoped lang="less">
.goods_list {
  margin: 0 10px 10px;
  .van-tabs {
    border-radius: 5px;
    overflow: hidden;
    .goods_wrapper {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
}
</style>
