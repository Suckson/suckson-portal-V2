import Col from './col'
import Button from './button'

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