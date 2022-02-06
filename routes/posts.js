const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', async (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/posts').then(apiRes => {
    const data = apiRes.data
    res.render('pages/posts', { data: data })
  }).catch(err => {
    res.render('pages/404')
  })
})

module.exports = router