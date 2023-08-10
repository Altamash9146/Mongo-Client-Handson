const {database} = require('../Config/Db');
const studentCollection = database.collection('student_records'); 


const findAllDocument = async (req, res)=>{
    const data  = await studentCollection.find().toArray()
    res.send(data)
}

const SalaryIncrement = async (req,res)=>{
    const data = await studentCollection.find({"salary":{"$gt":"30000"}})
    res.send(data)
}


const experienceIncrement = async (req,res)=>{
    const data = await studentCollection.find({"overallExp":{"$gt":"2"}})
    res.send(data)
}

const graduationAndExperience = async (req,res)=>{
    const data = await studentCollection.find({"yearGrad":{"$gt":"2015"}},{"overallExp":{"$gt":"2"}})
    res.send(data)
}

const SalaryComparison = async (req,res)=>{
    const data = await studentCollection.updateMany({"salary":{"$gt":"70000"}},{"$set":{"salary":"90000"}})
    res.send(data)
}   

const DocumentDelete = async (req,res) =>{
    const data = await studentCollection.deleteMany({"lastcompany":"Y" })
    res.send(data)
}

module.exports = {DocumentDelete,SalaryComparison,SalaryIncrement,experienceIncrement,findAllDocument,graduationAndExperience};
