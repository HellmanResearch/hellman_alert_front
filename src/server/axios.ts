import { AxiosRequest } from './types';
import service from './service';

function _axios(_axiosRequest: AxiosRequest) {
  return new Promise((resolve, reject) => {
    service({
      url: _axiosRequest.url,
      method: _axiosRequest.method,
      headers: _axiosRequest.headers,
      data: _axiosRequest.data,
      params: _axiosRequest.params,
      responseType: _axiosRequest.responseType,
    })
      .then((response) => {
        if (response.status === 200) {
          resolve(response)
         // resolve(new Response(response.data));
        } else {
          resolve(response)
          /// 权限控制
         // resolve(new Response(response.data));
        }
      })
      .catch((error) => {
        const message =
          error?.data?.errorMessage || error?.message || '请求失败';
        reject({
          message: message,
          data: null,
        });
      });
  });
}
export const postReq = (_axiosRequest: AxiosRequest) => {
  return _axios({
    url: _axiosRequest.url,
    headers: _axiosRequest.headers,
    method: 'POST',
    data: _axiosRequest.data,
    params: _axiosRequest.params,
  });
};

export const getReq = (_axiosRequest: AxiosRequest | string,params?:Record<string,any>) => {
  if (typeof _axiosRequest === 'string') { 
    return _axios({
      url: _axiosRequest,
      params,
    })
  }
  return _axios({
    url: _axiosRequest.url,
    headers: _axiosRequest.headers,
    method: 'GET',
    data: _axiosRequest.data,
    params: _axiosRequest.params ,
  });
};
