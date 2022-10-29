const router = require('express').Router();
const {uploadImage} = require('./controller');

router.route('/uploadImage').post(uploadImage);

module.exports = router;
