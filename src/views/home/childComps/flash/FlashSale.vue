<template>
  <div class="flash_sale">
    <!-- 限时抢购  -->
    <div class="flash_time">
      <div class="flash_desc">
        <span class="title">限时抢购</span>
        <van-count-down :time="time">
          <template v-slot="timeData">
            <span class="item">{{ timeData.hours|timeFomart }}</span>
            <span class="item">{{ timeData.minutes|timeFomart }}</span>
            <span class="item">{{ timeData.seconds|timeFomart }}</span>
          </template>
        </van-count-down>
      </div>
      <span class="more">更多</span>
    </div>
    <!-- 抢购商品，横向滚动 -->
    <my-scroll :scrollX="true">
      <flash-goods :flash-goods="flashGoods" />
    </my-scroll>
  </div>
</template>

<script>
import MyScroll from "@/components/vuescroll/MyScroll";
import FlashGoods from "./FlashGoods";
export default {
  name: "FlashSale",
  components: {
    MyScroll,
    FlashGoods
  },
  props: {
    flashGoods: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      time: 30 * 60 * 60 * 1000
    };
  },
  filters: {
    timeFomart(time) {
      return time < 10 ? "0" + time : time;
    }
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.flash_sale {
  margin: 7px 10px;
  background-color: #fff;
  border-radius: 5px;
  .flash_time {
    font-size: 20px;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    .flash_desc {
      display: flex;
      .title {
        padding: 0 10px;
        border-left: 4px solid #ff0036;
      }
      .item {
        display: inline-block;
        width: 22px;
        margin-right: 5px;
        color: #fff;
        font-size: 12px;
        text-align: center;
        background-color: #1989fa;
      }
    }
    .more {
      line-height: 23px;
      font-size: 14px;
      padding-right: 5px;
      color: #ff0036;
    }
  }
}
</style>
