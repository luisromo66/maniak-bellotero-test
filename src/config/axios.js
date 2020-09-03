import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master'
})

export default axiosClient;