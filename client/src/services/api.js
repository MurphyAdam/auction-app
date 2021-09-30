import axios from 'axios';
import { getCookie } from '../util/Cookies';


// window origin - base url
const API_ENDPOINT = `${window.location.origin}/api`;

const api = axios.create({
    baseURL: API_ENDPOINT,
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFTOKEN',
    withCredentials: true
});

api.CancelToken = axios.CancelToken;
api.isCancel = axios.isCancel;

const jwtToken = () => {
  const token = localStorage.getItem('jwtKey');
  if(token) {
    return {
      exists: true,
      token: JSON.parse(token)
    }
  }
  return {
    exists: false,
    token: null
  }
}

// Use interceptor to inject the token to requests
api.interceptors.request.use(request => {
    request.headers['X-CSRFTOKEN'] = getCookie('csrftoken');
    const tokenData = jwtToken();
    request.headers['Authorization'] = tokenData.exists ?
     `Token ${tokenData.token}`
     : '';
    return request;
});

api.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    // Return any error which is not due to authentication | authorization back to the calling service
    const status = error.response.status;
    if (![401, 403].includes(status)) {
      return new Promise((_resolve, reject) => {
        reject(error);
      });
    }
    // Return any error which is not due to authorization back to the calling service
    // but first let's remove the Authorization token from headers for DRF
    if (status === 401) {
      delete api.defaults.headers.common["Authorization"];
      localStorage.removeItem('jwtKey');
    }
    // Logout user if token refresh didn't work or user is disabled
    if (error.config.url === '/security/get-csrf/') {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
    // 403 (forbidden): needs authentication/ authorization
    if (status === 403) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
    // Try request again with new token
    try {
      const response = await api.get('/security/get-csrf/');
      // New request with new token
      const config = error.config;
      config.headers['X-CSRFTOKEN'] = response.data.csrftoken;
      return await new Promise((resolve_1, reject_3) => {
        api.request(config).then(response_1 => {
          resolve_1(response_1);
        }).catch((error_1) => {
          reject_3(error_1);
        });
      });
    } catch (error_2) {
      Promise.reject(error_2);
    }
}
);


export default api;