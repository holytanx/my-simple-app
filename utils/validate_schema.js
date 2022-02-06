const Ajv = require('ajv')
const ajv = new Ajv()

const { schemas } = require('./Constants/object_schemas')

const validate = (data, schema_type) => {
  return new Promise ((resolve, reject) => {
    if (schema_type in schemas) {
      const valid = ajv.validate(schemas[schema_type], data)
      if (!valid) reject('Schema') 
      else resolve('OK')
      
    } else {
      reject('Schema')
    }
  })
}

module.exports = {
  validate
}