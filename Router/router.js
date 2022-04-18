const express = require('express')
const { post_data } = require('../controller/controller')

const router = express.Router()


router.post('/post',post_data)

module.exports = router