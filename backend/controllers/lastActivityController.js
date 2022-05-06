
const asyncHandler = require("express-async-handler");
const LastActivity=require('../models/lastActivityModel')
const User=require('../models/userModel');
const getLastSeen=asyncHandler(async(req,res)=>{
    const data=await LastActivity.find({user:req.params.id})
    if(data && data.length>0){
        /*const date1=data.updatedAt
        console.log("data",data);
        console.log("date1",new Date(date1));
        const date2=new Date(Date.now());
        const datediff=date1.getTime()-date2.getTime();
        
        console.log("date2",date2);*/
        res.json(data);
    }else{
        res.status(404)
        throw new Error("no record exists yet");
    }
})
const addLastSeen=asyncHandler(async(req,res)=>{
    const data=await LastActivity.findOne({user:req.params.id})
    if(data && data.length>0){
        await data.save();
        res.json("success activity logged")
    }else{
        await LastActivity.create({
            user:req.params.id
        })
        res.json("success activity created")
    }
})
module.exports={addLastSeen,getLastSeen}