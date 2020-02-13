const express = require('express');
const axios = require('axios');

const router = express.Router();

router.post('/', (req, res) => {
    let searchQuery = req.body;
    console.log(searchQuery)
    let url = ``;
    axios
        .get(url)
        .then(result => {
            console.log(`successful GET from Weather API`)
            console.log('response from Weather API: ', result.data)
            res.send(result.data)
        })
        .catch(error => {
            console.log('ERROR on GET route from Weather API, ', error)
            res.sendStatus(500)
        })
})

module.exports = router