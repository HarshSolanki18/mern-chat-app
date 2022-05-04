const mongoose=require('mongoose');

const lastActivitySchema=mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User"},

},{timestamps:true});

const LastActivity=mongoose.model("LastActivity",lastActivitySchema);

module.exports=LastActivity;