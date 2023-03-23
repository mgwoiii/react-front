import axios from 'axios';

let urlPath = '/api/user/';

export default {
  get() {
        return axios.get(urlPath + 'login');
    },
}