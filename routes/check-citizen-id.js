const express = require('express')
const router = express.Router()

const { validate } = require('../utils/validate_schema')
const { checkCitizenId } = require('../utils/validate_citizen_id')

router.post('/', async (req, res) => {
  let response = {
    success: false,
    error_code: '001',
    error_msg: ''
  }
  if (req.body) {
    try {
      const result = await validate(req.body, 'citizenInput')
      const data = await checkCitizenId(req.body.citizen_id)
      response.success = true
      response.error_code = '200'
      res.status(200).send(response)
    } catch (e) {
      switch (e) {
        case 'Schema': {
          response.error_msg = 'citizen_id is required'
          break
        }
        default: {
          response.error_msg = 'citizen_id is invalid'
          break
        }
      }
      res.status(400).send(response)
    }
  } else {
    response.error_msg = 'citizen_id is required'
    res.status(400).send(response)
  }
})

module.exports = router