const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Done with questions')
})
module.exports = router