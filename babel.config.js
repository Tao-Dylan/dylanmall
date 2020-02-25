module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [ // 按需导入vant组件的配置
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true
      },
      "vant"
    ]
  ]
};
