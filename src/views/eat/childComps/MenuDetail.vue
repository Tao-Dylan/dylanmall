<template>
  <div class="menu_detail">
    <scroll class="scroll_height" ref="scroll" :scrollY="true">
      <div class="menu_wrapper">
        <menu-detail-item v-for="(item,index) in todayMenuDetail" :key="item.id" :menu-item="item" />
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/vuescroll/Scroll";
import MenuDetailItem from "./MenuDetailItem";
export default {
  name: "MenuDetail",
  components: {
    Scroll,
    MenuDetailItem  
  },
  props: {
    todayMenuDetail: {
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
.menu_detail {
  position: relative;
  width: 100%;
  margin-top: 46px;
  .scroll_height {
    position: fixed;
    top: 136px;
    bottom: 50px;
    overflow: hidden;
    .menu_wrapper {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 10px;
    }
  }
}
</style>
