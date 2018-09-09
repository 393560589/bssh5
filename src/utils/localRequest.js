import fetch from 'dva/fetch';
import { Modal } from 'antd-mobile';
import router from 'umi/router';

const alert = Modal.alert;

let isShowModal = false;
let isLoadNew = false;

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
	return fetch(url, options)
		.then(checkStatus)
		.then(parseJSON)
		.then(data => {
		    //console.log(data)
            return ({ data })
        })
		.catch(err => {

			if(isShowModal) return;

			isShowModal = true;
			alert('警告', '青蛙试玩未打开', [
				{ text: '打开青蛙', onPress: () => { document.location.href = 'qinwa://'; isShowModal = false; }, style: 'default' },
				{ text: '下载安装', onPress: () => { router.push('/InstallApp'); isShowModal = false; } },
			]);
		});  //({ err })
}
