const express = require('express');
const router = express.Router();
const http = require('../utils/api');
const constants = require('../constants/index');

const {SEARCH_ADDRESS} = constants;
 
router.get('/addresses', async function(req, res){
    try {
        const { query: { postcode } } = req;
        let items = [];
        if(postcode) {
            const response = await http.get(`${SEARCH_ADDRESS}?query=${postcode}`);
            const { results } = response.data;
            items = results;
        }
        res.render('../views/addresses.njk', { items });
    } catch (error) {
        console.log(error);
        // Can have a common handler to render errr-or page
    }
})

module.exports = router;
