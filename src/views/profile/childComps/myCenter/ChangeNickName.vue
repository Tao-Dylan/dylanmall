<template>
  <div class="change_nick_name">
    <van-nav-bar
      title="修改昵称"
      right-text="保存"
      :fixed="true"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickSave"
    />
    <div style="margin-top:46px">
      <van-cell-group title="请输入新昵称">
        <van-field v-model="nickName" clearable ref="field" :placeholder="nickName" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { Toast } from "vant";
export default {
  data() {
    return {
      nickName: this.$route.params.nickName
    };
  },
  mounted() {
    // 获取输入框焦点
    this.$refs.field.focus();
  },
  methods: {
    ...mapMutations(["CHANGE_USER_NICK_NAME"]),
    // 1. 返回上一页
    onClickLeft() {
      this.$router.back();
    },
    // 2. 保存修改后的用户昵称
    onClickSave() {
      // console.log(this.nickName);
      if (this.nickName.length > 0) {
        let nickName = this.nickName;
        this.CHANGE_USER_NICK_NAME({ nickName });
        Toast({
          message: "修改成功",
          duration: 800
        });
      } else {
        Toast({
          message: "请输入有效的昵称",
          duration: 800
        });
      }
    }
  }
};
</script>

<style scoped lang="less">
.change_nick_name {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #f5f5f5;
  z-index: 1;
}
</style>
