import axios from 'axios';

export const barInfo = (params) => {
  return axios.get('/mobile/mobile_interface/bar_info', {params})
    .then((response) => {
      const { data: { res, status } } = response
      if (status === 200) {
        return res
      } else {
        return null
      }
    })
    .catch(e => console.warn(e))
}

export const barArticles = (params) => {
  return axios.get('/mobile/mobile_interface/article_list', {params})
  .then((response) => {
    const { data: { res, status } } = response
    if (status === 200) {
      return res
    } else {
      return null
    }
  })
  .catch(e => console.warn(e))
}
