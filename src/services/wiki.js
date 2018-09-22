/**
 * 百科相关接口
 * 2019-09-19
 * 杨伟韦
 */
import axios from 'axios'

// 获取文章详情
export async function getWikiDetail(params) {
  console.log(params)
  return axios.get('/mobile/mobile_interface/baikeDetail', { params: { ...params }})
}