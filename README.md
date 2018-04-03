# vue-cli

> Analysis of vue-cli template configuration information

vue-cli template 配置文件分析

完成对 package.json 的包分析；build以及config文件夹中的配置文件 代码分析；便于以后修改配置。

build/webpack.base.conf.js
	配置webpack编译入口
	配置webpack输出路径和命名规则
	配置模块resolve规则
	配置不同类型模块的处理规则

build/webpack.dev.conf.js
	将webpack的热重载客户端代码添加到每个entry对应的应用
	合并基础的webpack配置
	配置样式文件的处理规则，styleLoaders
	配置Source Maps
	配置webpack插件

build/utils.js
	计算资源文件存放路径 
	生成cssLoaders用于加载.vue文件中的样式 
	生成styleLoaders用于加载不在.vue文件中的单独存在的样式文件

build/build.js
	loading动画
	删除目标文件夹
	执行webpack构建
	输出信息

build/webpack.prod.conf.js
	合并基础的webpack配置
	配置样式文件的处理规则，styleLoaders
	配置webpack的输出
	配置webpack插件
	gzip模式下的webpack插件配置
	webpack-bundle分析

config/index.js
	在这里面描述了开发和构建两种环境下的配置，前面的build文件夹下也有不少文件引用了index.js里面的配置

package.json
{
  "name": "vue-cli",
  "version": "1.0.0",
  "description": "Analysis of vue-cli template configuration information",
  "author": "jian.yin",
  "private": true,
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "build": "node build/build.js"
  },
  "dependencies": {
    "vue": "^2.5.2"
  },
  "devDependencies": {
    // 添加css3前缀
    "autoprefixer": "^7.1.2",
    // js编译
    "babel-core": "^6.22.1",
    "babel-helper-vue-jsx-merge-props": "^2.0.3",
    "babel-loader": "^7.1.1",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-plugin-transform-vue-jsx": "^3.5.0",
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",
    // 一个颜色的插件。可以通过chalk.blue(‘hello world’)来改变颜色
    "chalk": "^2.0.1",
    // 拷贝文件和文件夹
    "copy-webpack-plugin": "^4.0.1",
    // 将css转化为模块
    "css-loader": "^0.28.0",
    // 把css打包成独立的文件 样式通过link引入，而不是放在style标签内
    "extract-text-webpack-plugin": "^3.0.0",
    // 将file转化为模块 处理图片等
    "file-loader": "^1.1.4",
    // 友好地输出webpack的警告、错误等信息
    "friendly-errors-webpack-plugin": "^1.6.1",
    // 根据模板创建html文件
    "html-webpack-plugin": "^2.30.1",
    // 在macOS，Windows和Linux上显示原生通知
    "node-notifier": "^5.1.2",
    // 用于优化和最小化css资源
    "optimize-css-assets-webpack-plugin": "^3.2.0",
    // 终端显示的 loading 插件
    "ora": "^1.2.0",
    // 查找当前机器上的开放端口或域套接字
    "portfinder": "^1.0.13",
    "postcss-import": "^11.0.0",
    "postcss-loader": "^2.0.8",
    "postcss-url": "^7.2.1",
    // 用于删除文件或文件夹的插件
    "rimraf": "^2.6.0",
    // 语义化版本检查插件
    "semver": "^5.3.0",
    // 执行Unix命令行的插件
    "shelljs": "^0.7.6",
    "uglifyjs-webpack-plugin": "^1.1.1",
    // 将url转化为模块
    "url-loader": "^0.5.8",
    // 将vue component转化为模块
    "vue-loader": "^13.3.0",
    // 将vue style转化为模块
    "vue-style-loader": "^3.0.1",
    // 将Vue 模板预编译为渲染函数
    "vue-template-compiler": "^2.5.2",
    "webpack": "^3.6.0",
    // 创建一个交互式树形图，显示所有捆绑包的内容
    "webpack-bundle-analyzer": "^2.9.0",
    // 更改时更新浏览器
    "webpack-dev-server": "^2.9.1",
    // 合并webpack配置 可以是 array 或 object
    "webpack-merge": "^4.1.0"
  },
  "engines": {
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
}


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
