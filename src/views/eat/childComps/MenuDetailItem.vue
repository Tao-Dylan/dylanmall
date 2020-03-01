<template>
  <div class="menu_detail_item">
    <div class="item_img">
      <img :src="menuItem.image" alt />
    </div>
    <p class="item_title">{{menuItem.name}}</p>
    <div class="item_author_info">
      <img :src="menuItem.author_avatar" alt />
      <span class="author_name">{{menuItem.author_name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuDetailItem",
  props: {
    menuItem: {
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
.menu_detail_item {
  width: 49%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
  .item_img {
    width: 100%;
    img {
      width: 100%;
      border-radius: 10px;
    }
  }
  .item_title {
    padding: 5px 0;
    margin-left: 10px;
    font-weight: 700;
  }
  .item_author_info {
    padding-left: 10px;
    img {
      height: 30px;
      width: 30px;
      vertical-align: middle;
      border-radius: 50%;
    }
    .author_name {
      margin-left: 10px;
      font-size: 12px;
    }
  }
}
</style>
