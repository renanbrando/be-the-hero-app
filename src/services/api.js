import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.5.171:3333'
});
export default api