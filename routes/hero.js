const express = require('express')
const router = express.Router()

const heros = require('../utils/Constants/heros')

router.get('/', (req, res) => {
  res.render('pages/hero', { data: heros.heros })
})

module.exports = router