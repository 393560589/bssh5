import axios from 'axios';

export const getHomePageUserInfo = (params) => {
  return axios.post('/mobile/mobile_interface/user_info', params);
}

export const getHomePageList = (params) => {
  return axios.post('mobile/mobile_interface/user_article', params);
}