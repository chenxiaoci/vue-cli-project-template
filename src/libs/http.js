/**
 * reinforce axios
 */

import axios from 'axios'

// request 拦截器
axios.interceptors.request.use(
  request => {
    return request
  },
  error => {
    return Promise.reject(error)
  }
)

// response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)
