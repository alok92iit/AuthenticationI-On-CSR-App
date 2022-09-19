const mongoose =require("mongoose")
const passporLocalMongoose =require("passport-local-mongoose")
const UserSchema =new mongoose.Schema({
    email:{
        type:String,
        trim:true,
        required:true
    },
    gender:{
        type:'String',
        required:true
    }
})

UserSchema.plugin(passporLocalMongoose)
const User =mongoose.model("User",UserSchema)

module.exports =User;