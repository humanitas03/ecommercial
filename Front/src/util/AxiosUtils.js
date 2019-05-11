/**
 * Created by Lee jin Hyeok on 2019-05-11
 * 
 * <pre>
 * It is a utility module that performs processing related to Axios.
 * This module does <strong>not control</strong> Axios processing.
 * </pre>
 * 
 * @author Lee jin hyeok
 * @create_by 2019-05-11
 * @description javascript array utils
 * @license Open-source license 1.0
 */

import axios     from 'axios'

/** 서버측 경로를 설정 한다.*/
const host       = 'localhost';
const port       = '8080'

const serverHTTP = host+':'+port;

/**
 * <pre>
 * Axis의 기본 설정 작업을 하며 이곳에서 <strong>기본 경로</strong>를 설정
 * 추후 CSRF토큰 및 보안과 공통 인자와 관련 된 설정을 추가하여 공통적으로 적용
 * </pre>
 */
const instanse = axios.create({
  baseURL: serverHTTP
});


var axiosUtils = {

    handlerError : (error, c) => {
        console.debug(e.response.status + ' Not Found Error');
        if(c) c(error, data);
    },

    handlerSuccess : (data, c) => {
        console.debug(e.response.status + ' Success');
        if(c) c(e);
    },
    /**
    * <pre>
    * GET 메서드를 호출 하여 통신을 처리 한다.
    * </pre>
    * options
    * @member {String} url 서버와 매핑할 url
    * @member {Object} option XMLHttpRequests 통신 시에 사용할 옵션 값(head 처리) 
    */
    $get : (options, param, callback) => {

        const { url
              , option } = options;

        // 기본 값을 매핑한다
        url = url||'/';

        instanse.get(url)
                .then()

        
        axios.get('http://localhost:8080/product/listTest', {params : {nowPage:nowPage, itemCnt: itemCnt}}).then(
            data => {

        }
    
    },

    $post : (e, t, e) => {

    }
}

/**
 * Request Wrapper with default success/error actions
 */
const request = function(options) {
  const onSuccess = function(response) {
    console.debug('Request Successful!', response);
    return response.data;
  }

  const onError = function(error) {
    console.error('Request Failed:', error.config);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      console.error('Status:',  error.response.status);
      console.error('Data:',    error.response.data);
      console.error('Headers:', error.response.headers);

    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.error('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  }

  return instanse(options)
            .then(onSuccess)
            .catch(onError);
}

export default request;