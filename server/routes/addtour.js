var express = require('express');
const app = express();
var router = express.Router();


router.get('/', (req, res) => {
    res.end(" Here You Will Add Your Tour /tours ");
});

//export this router to use in our index.js
module.exports = router;

