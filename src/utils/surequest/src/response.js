/*
 * @Descripttion: 
 * @version: 
 * @Author: suckson
 * @Date: 2019-10-09 14:26:44
 * @LastEditors: suckson
 * @LastEditTime: 2019-10-09 14:26:44
 */
export default function (xhr) {
  let arr = xhr.getAllResponseHeaders().split('\r\n')
  let headers = {};
  arr.forEach((str) =>{
      if(!str){
          return;
      }
      const [name,value] = str.split(": ");
      headers[name] = value;
  })
  return{
      ok:true,
      status:xhr.status,
      statusText:xhr.statusText,
      data:xhr.response,
      xhr,
      headers
  }
}