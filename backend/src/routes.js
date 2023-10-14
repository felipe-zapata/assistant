const express = require('express')
const asyncHandler = require('express-async-handler')

const ttsController = require('./controller/ttsController')

const router = express.Router()

router.post('/tts/postScript', asyncHandler(ttsController.postScript))

module.exports = router
