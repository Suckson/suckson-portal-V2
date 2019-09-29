/*
 * @Descripttion: 
 * @version: 
 * @Author: suckson
 * @Date: 2019-08-04 13:46:41
 * @LastEditors: suckson
 * @LastEditTime: 2019-09-29 16:13:41
 */
const webPackSuckosnAdminConfig = require('./build/webpack.sucksonAdmin.config')

const defaultSettings = require('./src/settings.js')

const path = require('path')
'use strict'
module.exports = {
  publicPath: './',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
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
  ...webPackSuckosnAdminConfig
}