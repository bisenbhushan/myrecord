const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    resetToken:String,
    expireToken:Date,
    pic:{
     type:String,
     default:"https://res.cloudinary.com/dhawaldhak/image/upload/v1607625344/vqqjuoqwhdviafmhmjye.jpg"
    },
    
})

mongoose.model("User",userSchema)