<template>
  <div class="special">
    <!-- 特色专区  -->
    <div class="special_title">
      <p class="title">特色专区</p>
    </div>
    <!-- 产品展示 -->
    <div class="special_wrapper">
      <!-- 新品尝鲜 -->
      <div class="new_item" v-for="(item,index) in specialZoonList.newItemList" :key="item.id">
        <p class="new_item_title">{{item.title}}</p>
        <p class="new_item_subtitle">{{item.subtitle}}</p>
        <img :src="item.imageOne" alt />
        <img :src="item.imageTwo" alt />
      </div>
      <!-- 十二月爆款 -->
      <div class="hot_item" v-for="(item,index) in specialZoonList.hotItemList" :key="item.id">
        <p class="hot_item_title">{{item.title}}</p>
        <p class="hot_item_subtitle">{{item.subtitle}}</p>
        <img :src="item.imageOne" alt />
        <img :src="item.imageTwo" alt />
      </div>
      <!-- vip专享 -->
      <div class="vip_item" v-for="(item,index) in specialZoonList.vipItemList" :key="item.id">
        <p class="vip_item_title">{{item.title}}</p>
        <p class="vip_item_subtitle">{{item.subtitle}}</p>
        <img :src="item.imageOne" alt />
        <img :src="item.imageTwo" alt />
      </div>
      <!-- 吃什么 -->
      <div class="other_item" v-for="(item,index) in specialZoonList.otherItemList" :key="item.id">
        <p class="other_item_title">{{item.title}}</p>
        <p class="other_item_subtitle">{{item.subtitle}}</p>
        <img src="~@/images/special/peanut.jpeg" alt />
      </div>
      <!-- 平价菜场 -->
      <div
        class="low_price_item"
        v-for="(item,index) in specialZoonList.lowPriceItemList"
        :key="item.id"
      >
        <p class="low_item_title">{{item.title}}</p>
        <p class="low_item_subtitle">{{item.subtitle}}</p>
        <img :src="item.image" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Special",
  props: {
    specialZoonList: {
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
.special {
  font-size: 20px;
  margin: 0 10px;
  background-color: #fff;
  border-radius: 5px;
  .special_title {
    padding: 10px 0;
    .title {
      padding-left: 10px;
      border-left: 4px solid #ff0036;
    }
  }
  .special_wrapper {
    pading-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    font-size: 12px;
    border-top: 1px solid #f5f5f5;
    .new_item {
      width: 50%;
      padding: 10px 10px 0;
      border-right: 1px solid #f5f5f5;
      border-bottom: 1px solid #f5f5f5;
      .new_item_title {
        background-image: linear-gradient(135deg, red, orange);
        -webkit-background-clip: text;
        color: transparent;
      }
      .new_item_subtitle {
        padding: 5px 0;
      }
    }
    .hot_item {
      width: 50%;
      padding: 10px 10px 0;
      border-bottom: 1px solid #f5f5f5;
      .hot_item_title {
        background-image: linear-gradient(150deg, #b2233f, #f70d3c);
        -webkit-background-clip: text;
        color: transparent;
      }
      .hot_item_subtitle {
        padding: 5px 0;
      }
    }
    .vip_item {
      width: 50%;
      padding: 10px 10px 0;
      border-right: 1px solid #f5f5f5;
      .vip_item_title {
        color: #43ad3f;
      }
      .vip_item_subtitle {
        padding: 5px 0;
      }
    }
    .other_item {
      width: 25%;
      padding: 10px 10px 0;

      border-right: 1px solid #f5f5f5;
      .other_item_title {
        color: #000;
      }
      .other_item_subtitle {
        padding: 5px 0;
      }
    }
    .low_price_item {
      width: 25%;
      padding: 10px 10px 0;
      .low_item_title {
        color: #000;
      }
      .low_item_subtitle {
        padding: 5px 0;
      }
    }
  }
}
img {
  margin-right: 20px;
  width: 50px;
  height: 50px;
}
</style>
