'use strict'
const path = require('path')
const glob = require('glob')
const config = require('../config')
// extract-text-webpack-plugin可以提取bundle中的特定文本，将提取后的文本单独存放到另外的文本
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// 使用 html-webpack-plugin 插件，这个插件可以帮我们自动生成 html 并且注入到 .html 文件中
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const packageConfig = require('../package.json')

// 多入口entry配置
exports.entries = function (globPath, entries = {}) {
  let files = glob.sync(globPath)

  files.forEach(filepath => {
    let basename
    basename = path.basename(filepath, path.extname(filepath))
    entries[basename] = filepath
  })
  return entries
}

// 多页面输出配置
exports.htmlPlugin = function (globPath) {
  let files = glob.sync(globPath + '/*/*.js')
  let template = globPath + '/index.html'
  let htmlPlugin = []

  files.forEach(filepath => {
    let basename = path.basename(filepath, path.extname(filepath))
    let config = {
      filename: basename + '.html',
      template: template,
      chunks: ['manifest', 'common', 'vendor', basename],
      inject: true
    }
    if(process.env.NODE_ENV === 'production'){
      config = merge(config, {
        minify: {
          // 删除index.html中的注释
          removeComments: true,
          // 删除index.html中的空格
          collapseWhitespace: true,
          // 删除各种html标签属性值的双引号
          removeAttributeQuotes: true
        },
      // 注入依赖的时候按照依赖先后顺序进行注入，比如，需要先注入vendor.js，再注入app.js
      chunksSortMode: 'dependency'
      })
    }
    htmlPlugin.push(new HtmlWebpackPlugin(config))
  })
  return htmlPlugin
}

// 资源文件的存放路径
exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

// 生成css、scss等各种用来编写样式的语言所对应的loader配置
exports.cssLoaders = function (options) {
  options = options || {}
  // css-loader配置
  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  // 生成各种loader配置，并且配置了extract-text-pulgin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      // 配置extract-text-plugin提取样式
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      // 无需提取样式则简单使用vue-style-loader配合各种样式loader去处理<style>里面的样式
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  // 得到各种不同处理样式的语言所对应的loader
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
// 生成处理单独的.css、.sass、.scss等样式文件的规则
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

// 显示原生报错通知
exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
