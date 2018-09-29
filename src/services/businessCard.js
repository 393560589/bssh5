/**
 * 文章相关接口
 * 2019-09-18
 * 邵燕金
 */
import axios from 'axios'

// 获取文章详情
export async function getBusinessCard(params) {
  return axios.get('/mobile/mobile_interface/baikeCard', { params: { ...params }})
}
