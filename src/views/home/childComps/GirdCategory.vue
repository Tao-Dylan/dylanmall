<template>
  <div class="gird_category">
    <van-grid :border="false" :column-num="5">
      <van-grid-item
        v-for="(item,index) in girdList"
        :key="index"
        :icon="item.icon_url"
        :text="item.name"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "GirdCategory",
  props: {
    girdList: {
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
.gird_category {
  padding: 5px 10px;
  .van-grid {
    border-radius: 5px;
    overflow: hidden;
  }
}
</style>
