import axios from 'axios';

// 创建一个 axios 实例
const request = axios.create({
    baseURL: 'http://localhost:3000/admin/api'
});


export default request;
