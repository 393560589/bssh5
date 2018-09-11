import axios from 'axios'

axios.defaults.baseURL=window.location.origin;

axios.defaults.withCredentials=true;

axios.defaults.timeout = 100000;

axios.interceptors.request.use(
  config => {
    config.headers.accept ='application/json, text/javascript, */*; q=0.01';
    config.headers.contentType='application/x-www-form-urlencoded; charset=UTF-8';
  return config
});

axios.interceptors.response.use(response=>{
    try{
      //console.log(response)
      return response

    }catch (e) {
      console.log(e)
    }

});

export default axios
