const mongoose = require('mongoose');
const db=async()=>{
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database connected');
    }catch(err){
        console.log(err.message);
    }
}
module.exports={db};