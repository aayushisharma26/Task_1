const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/job')
.then(()=>{
    console.log('connection');
}).catch((err)=>{
    console.log(err);
})

const signupSchema=new mongoose.Schema({
    first_name : {
        type:String,
        required:true

    },
    last_name : {
        type:String,
        required:true

    },
    phone_number: {
        type:String,
        required:true

    },  
    email : {
        type:String,
        required:true,
        unique:true
        

    },
    current_address: {
        type:String,
        required:true

    },
    education : {
        type:String,
        required:true
       

    },
    skills : {
        type:String,
        required:true
       

    },
    gender: {
        type:String,
        required:true
    },
    age: {
        type:String,
        required:true
    },
    ctc: {
        type:String,
        required:true
    },
    explain: {
        type:String,
        required:true
    }
    
    
    
    
        
    
  
})
console.log("done")
const Register=new mongoose.model("register",signupSchema)
module.exports=Register