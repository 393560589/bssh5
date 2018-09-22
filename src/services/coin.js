/**
 * 币讯相关接口
 * 2019-09-12
 * 杨伟韦
 */
import axios from 'axios'

// 获取币讯列表
export async function getCoinList(params) {
  return axios.get('/mobile/mobile_interface/flashNewsList', { params: { ...params }})
}

// 获取币讯详情
export async function getCoinDetail(params) {
  return axios.get('/mobile/mobile_interface/flashNewsDetail', { params: {...params} })
}
