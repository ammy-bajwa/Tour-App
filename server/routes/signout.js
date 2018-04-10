const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    req.logout();
    res.redirect('/signin');
  });

//export this router to use in our index.js
module.exports = router;

