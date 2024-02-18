const express = require('express');
const router = express.Router();
const http = require('../utils/httpclient');
const constants = require('../constants/index');

const {SEARCH_ADDRESS} = constants;
 
router.get('/addresses', async function(req, res){
    try {
        const { query: { postcode } } = req;
        let addresses = [];
        if(postcode) {
            const response = await http.get(`${SEARCH_ADDRESS}?query=${postcode}`);
            const { results } = response.data;
            addresses = results;
        }
        res.render('../views/addresses.njk', { addresses });
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;
