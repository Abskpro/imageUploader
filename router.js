const router = require('express').Router();
const {uploadImage} = require('./controller');

router.route('/upload').post(uploadImage);

module.exports = router;
