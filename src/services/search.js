import axios from 'axios';

export const resultFix = (params) => {
  return axios.post('/mobile/mobile_interface/search_result_fix', params)
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

export const resultFlow = (params) => {
  return axios.post('/mobile/mobile_interface/search_result_flow', params)
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