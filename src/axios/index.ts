import axios from 'axios'
import NProgress from 'nprogress';
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import 'nprogress/nprogress.css';

export function request(config: AxiosRequestConfig) {

  const instance = axios.create({
    baseURL: '',
    timeout: 60000,
    ...config
  })

  interface reqConfig extends AxiosRequestConfig {
    headers?: any
  }
  instance.interceptors.request.use((config: reqConfig): AxiosRequestConfig => {
    NProgress.start();
    config.headers.token = '123'
    return config
  }, err => {
  })

  instance.interceptors.response.use((res: AxiosResponse): AxiosResponse => {
    NProgress.done();
    return res.data
  }, async (err) => {
  })

  return instance(config)
}
