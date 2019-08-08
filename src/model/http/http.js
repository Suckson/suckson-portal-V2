import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request拦截器
service.interceptors.request.use(config => {
  //此处进行token等数据处理
  return config
}, error => {
  // Do something with request error
  Promise.reject(error)
});

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code !== 200) {
      //此处进行异常处理
      return Promise.reject(res);
    }
    return response
  },
  error => {
    //此处进行异常处理
    return Promise.reject(error)
  }
);

export default service
