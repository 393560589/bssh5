import request from '../utils/request';
import axios from 'axios'
export function query() {
  return request('/api/users');
}
export function getbanner(params) {
  return axios.get('/mobile/mobile_interface/broadcast_img',params)
}//测试banner是否获取
