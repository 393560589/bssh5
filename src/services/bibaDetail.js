/**
 * 币吧详情相关接口
 * 2018-09-25
 * 邵燕金
 */
import axios from 'axios';

// 获取币吧详情页
export async function getBiBaDetail(params) {
  return axios.get('/mobile/mobile_interface/article_detail', { params: { ...params }})
}

// 获取币吧一级回帖
export async function getBiBaDetailOneBack(params) {
  return axios.get('/mobile/mobile_interface/article_one_back', { params: { ...params }})
}