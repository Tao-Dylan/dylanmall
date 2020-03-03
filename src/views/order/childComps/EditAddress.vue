<template>
  <div class="edit_address">
    <van-nav-bar title="编辑地址" :fixed="true" :border="true" left-arrow @click-left="onClickLeft" />
    <van-address-edit
    style="margin-top:46px"
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :address-info="addressInfo"
      @save="onSave"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import areaList from "@/config/area.js";
import { Toast } from "vant";
export default {
  data() {
    return {
      areaList: areaList,
      addressInfo: {},
      searchResult: []
    };
  },
  created() {
    this.addressInfo = this.$route.params.content
  },
  mounted() {},
  methods: {
    // 1. 返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },
    // 2, 保存地址
    onSave() {
      Toast("保存成功");
    },
    // 3. 数据改变
    onChangeDetail() {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>

<style scoped lang="less">
.edit_address {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 999;
}
</style>
