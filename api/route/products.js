const express = require('express');
const router = express.Router();

    
router.get('/', getProducts);

router.post('/', postProducts);


module.exports = router;