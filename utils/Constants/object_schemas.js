const schemas = {
  'triangleAreaInput': {
    type: 'object',
    properties: {
      base: {
        type: 'number'
      },
      height: {
        type: 'number' 
      }
    },
    required: ['base', 'height']
  },
  'citizenInput': {
    type: 'object',
    properties: {
      citizen_id: {
        type: 'string'
      }
    },
    required: ['citizen_id']
  }
}

module.exports = {
  schemas
}