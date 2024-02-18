const axios = require('axios');
const { API_KEY, API_BASE_URL } = require("../constants");

const instance = axios.create({ 
    baseURL: API_BASE_URL,  
    headers: {'key': API_KEY}
});

 
const HTTP = {
    get: (url) => instance.get(url),
}
 
module.exports = HTTP;