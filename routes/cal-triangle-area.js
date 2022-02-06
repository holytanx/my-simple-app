const express = require('express')
const router = express.Router()

const { validate } = require('../utils/validate_schema')

router.post('/', async (req, res) => {
  if (req.body) {
    try {
      const result = await validate(req.body, 'triangleAreaInput')
      const calculatedArea = 0.5 * req.body.height * req.body.base
      res.send({area: calculatedArea})
    } catch (e) {
      res.status(400).send(`Your input is invalid. Please correct your input \nexample: { base: 5, height: 10 } `)
    }
  }
})

module.exports = router