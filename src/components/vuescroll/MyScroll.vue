<template>
  <vue-scroll ref="vue_scroll" :ops="ops" @handle-scroll="handleScroll">
    <slot />
  </vue-scroll>
</template>

<script>
import vueScroll from "vuescroll";
export default {
  name: "MyScroll",
  components: {
    vueScroll
  },
  props: {
    // 1.vuescroll的配置参数
    mode: {
      type: String,
      default: () => "native"
    },
    pullRefresh: {
      type: Boolean,
      default: () => false
    },
    // 2.scrollPanel的配置参数
    scrollX: {
      type: Boolean,
      default: () => false
    },
    scrollY: {
      type: Boolean,
      default: () => false
    },
    // 3.滚动条配置，类似于原生滚动
    disable: {
      type: Boolean,
      default: () => true // 不显示滚动条
    }
  },
  data() {
    return {
      ops: {
        // 滚动配置
        vuescroll: {
          // mode: 'native',
          mode: 'slide',
          pullRefresh: {
            enable: this.pullRefresh,
            tips: {
              deactive: "Pull to Refresh",
              active: "Release to Refresh",
              start: "Refreshing...",
              beforeDeactive: "Refresh Successfully!"
            }
          }
        },
        // 滚动内容配置
        scrollPanel: {
          scrollingY: this.scrollY,
          scrollingX: this.scrollX
        },
        // 滚动条移动配置
        rail: {},
        // 滚动条配置，类似于原生滚动
        bar: {
          disable: true
        }
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleScroll(vertical, horizontal, e) {
      // console.log('v:',vertical);
      // console.log('h:',horizontal);
      // console.log('e:',e);
    }
  }
};
</script>

<style scoped lang="less">
.slot-refresh {
  position: absolute;
  top: 50px;
}
</style>
