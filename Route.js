const {DocumentDelete,SalaryComparison,findAllDocument,SalaryIncrement,experienceIncrement,graduationAndExperience} = require('./Controller/students')

const route = require('express').Router()

route.post('/DocumentDelete',DocumentDelete)
route.post('/SalaryComparison',SalaryComparison)
route.post('/findAllDocument',findAllDocument)
route.post('/SalaryIncrement',SalaryIncrement)
route.post('/experienceIncrement',experienceIncrement)
route.post('/graduationAndExperience',graduationAndExperience)



module.exports = route