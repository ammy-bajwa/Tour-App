var express = require('express');
const app = express();
var router = express.Router();


router.get('/', (req, res) => {
    res.end(" This is specific editUser /editUser ");
});

//export this router to use in our index.js
module.exports = router;

