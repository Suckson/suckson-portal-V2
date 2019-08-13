/*
 * @Descripttion: 
 * @version: 
 * @Author: suckson
 * @Date: 2019-08-04 13:46:41
 * @LastEditors: suckson
 * @LastEditTime: 2019-08-11 14:28:41
 */
const webPackSuckosnConfig = require('./build/webpack.suckson.config')
const webPackBlogConfig = require('./build/webpack.blog.config.js')

const defaultSettings = require('./src/settings.js')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
'use strict'
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: './',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      webPackSuckosnConfig
    },
    blogold: {
         entry: 'suckson-portal/js/index.js',
         template: 'suckson-portal/index.html',
         filename: 'blogold.html',
         
    },
    blog: {
      entry: 'suckson-blog/index.js',
      template: 'public/blog.html',
      filename: 'blog.html',
      webPackBlogConfig
   }
  },
  devServer: {
    port: defaultSettings.PORT,
    open: true,
    overlay: {// eslint 是否显示错误
      warnings: false,
      errors: true
    }
  },
  css: {
    sourceMap: true
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([{
        from: path.join(__dirname, 'chaiheng'),
        to: path.join(__dirname, 'dist'),
        toType: 'dir'
      }])
    ]
  }
}