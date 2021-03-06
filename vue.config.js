// 配置文件
module.exports = {
  runtimeCompiler: true, //是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: false, //不在production环境使用SourceMap
  devServer: {
    //跨域
    port: 8088, // 端口号
    open: false, //配置自动启动浏览器
    proxy: {
      // 配置跨域处理 可以设置多个
      "/api": {
        target: "https://mock.cangdu.org/mock/5d940466d360e8289c6a8eb7/api/",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
