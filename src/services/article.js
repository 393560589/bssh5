/**
 * 文章相关接口
 * 2019-09-18
 * 杨伟韦
 */
import axios from 'axios'

// 获取文章详情
export async function getArticleDetail(params) {
  return axios.get('/mobile/mobile_interface/newsDetail', { params: { ...params }})
}

// 获取评论列表
export async function getCommentList(params) {
  return axios.get('/mobile/mobile_interface/newsComment', { params: {...params} })
}

// 发布评论
export async function postComment(params) {
    return axios.post('/mobile/mobile_interface/publishComment', { params: {...params} });
}
