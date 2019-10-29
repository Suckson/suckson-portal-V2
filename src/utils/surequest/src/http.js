import { Promise, resolve, reject } from "q";

/*
 * @Descripttion: 
 * @version: 
 * @Author: suckson
 * @Date: 2019-10-09 14:08:33
 * @LastEditors: suckson
 * @LastEditTime: 2019-10-09 14:15:11
 */
export default function(options) {
  let xhr = new XMLHttpRequest();

  xhr.open(options.methed, options.url, true)

  for(let key in options.hreaders){
    xhr.setRequestHeader(encodeURIComponent(key), encodeURIComponent(options.hreaders[key]))
  }
  xhr.send(options.data)
  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4){
        if(xhr.status >= 200 && xhr.status < 300){
          resolve(xhr)
        }else{
          reject(xhr)
        }
      }
    }
  })
}