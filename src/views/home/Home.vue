<template>
  <div id="home">home</div>
</template>

<script>
import { getHomeData } from "@/network/home";
// import { request } from "@/network/request";
export default {
  data() {
    return {};
  },
  created() {
    getHomeData().then(res => {
      console.log(res);
    });
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
</style>
