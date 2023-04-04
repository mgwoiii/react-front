import axios from 'axios';

let urlPath = '/api/login/';

export default {
  test() {
    return axios.get(urlPath + 'test');
  },
  join(params) {
    return axios.post(urlPath + 'join', params);
  },
  login(params, config) {
    return axios.post(urlPath + 'action', params, config);
  },
  logOut() {
    return axios.post(urlPath + 'logout');
  },
};
