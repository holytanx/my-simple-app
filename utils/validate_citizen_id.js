

const checkCitizenId = (data) => {
  return new Promise((resolve, reject) => {
    const validReg = /^\d{13}$/
    const valid = validReg.test(data)
    if (valid) {
      const output = calculateData(data)
      console.log(output)
      if (output) {
        resolve()
      }
    } else {
      reject('Citizen')
    }
  })
  
} 

const calculateData = (data) => {
  const arrayData = data.slice(0, -1).split('').map(Number)
  const multiplyWithPositions = arrayData.map((value, i) => {
    return value * (i+1)
  })
  const sum = multiplyWithPositions.reduce((currentSum, data) => currentSum+data, 0)
  let result 
  result = sum % 11
  result = 11 - result
  return result
}

module.exports = {
  checkCitizenId
}