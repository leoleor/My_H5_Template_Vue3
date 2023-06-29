import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 10 * 1000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 让每个请求携带自定义token 请根据实际情况自行修改
    // const token = 'Bearer ' + localStorage.getItem('TOKEN')
    // if (localStorage.getItem('TOKEN')) {
    //   config.headers['Authorization'] = token
    // }
    return config
  },
  (error) => {
    console.log('err:' + error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    return res
  },
  (error) => {
    console.log('err:' + error)
    let { message } = error
    if (message === 'Network Error') {
      message = '后端接口连接异常'
    } else if (message.includes('timeout')) {
      message = '系统接口请求超时'
    } else if (message.includes('Request failed with status code')) {
      message = '系统接口' + message.substr(message.length - 3) + '异常'
    }
    return Promise.reject(message)
  }
)
export default service