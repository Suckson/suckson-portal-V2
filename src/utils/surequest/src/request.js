/*
 * @Descripttion: 
 * @version: 
 * @Author: suckson
 * @Date: 2019-10-09 13:32:45
 * @LastEditors: suckson
 * @LastEditTime: 2019-10-09 14:05:14
 */
import defaultOptions from './default'
import {assert,merge,cloneObj} from './utils'
class SuRequest {
  constructor(){
    const _this = this
    return new Proxy(function(){},{
      apply(fn,thisArg,agrs){
                
      },
      get(fn,key){
          return _this[key];
      },
      set(fn,key,val){
          _this[key] = val;
          return true;
      }
    })
  }
}
export default new SuRequest();