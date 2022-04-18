const model = require('../model/model')
post_data=async(req,res)=>{
    try{
    const users={
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        phone_number:req.body.phone_number,
        email:req.body.email,
        current_address:req.body.current_address,
        education:req.body.education,
        skills:req.body.skills,
        gender: req.body.gender,
        age:req.body.age,
        ctc:req.body.ctc,
        explain:req.body.explain
    }
    console.log(users);

    const insertData= await model.insertMany(users)
    res.json({
        message:'New Profile Added',
        profile:insertData
    })
    }catch(err){
        console.log(err);
        res.json({
            message:'Email id already exits!',
            error:err
            
        })
    }
}

module.exports={post_data}

