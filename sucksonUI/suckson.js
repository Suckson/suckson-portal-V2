/*
 * @Descripttion: 
 * @version: 
 * @Author: suckson
 * @Date: 2019-09-29 16:44:17
 * @LastEditors: suckson
 * @LastEditTime: 2019-09-29 16:50:40
 */
import Col from './components/col'
import Button from './components/button'


import './stylessheet/suckson.globe.styl'

const suckosn = {
  config: {},
  install:  (Vue) => {
    Vue.prototype.Suckson = () => {
      console.log('ok')
    }
    let components = [Col, Button]
    components.forEach((component) => {
      console.log(component.name)
      Vue.component(component.name, component)
    })
    console.log('install Suckson ok')
  }
}

export default suckosn