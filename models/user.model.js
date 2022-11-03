const mongoose =require('mongoose')
const emailValidator = require('validator')
var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
const bcrypt = require('bcrypt')
const jwt =require('jsonwebtoken')
const user = mongoose.Schema(
{
    name:{
        type:String,
        min:3,
        required:true

    },
    email:{
        type:String,
        validator(val){
            if(!emailValidator.isEmail(val)){
                throw new Error("Not Valid Email")
            }
        },
        required:true
    },
    password:{
        type:String,
       // match:[strongRegex,"please choose strong password"],
        required:true

    },
    Role:{
        type:String,
        enum:["User", "Admin"],
        default: "User"
    },
    tokens:[
        {
            token:{
             type:String
            }
        }
        
    ]
}
)
user.pre("save", async function(){
    if(this.isModified('password')){
          this.password = await bcrypt.hash(this.password ,8)
    }
  


})
user.methods.generateToken = async function(){
const newtoken = await jwt.sign({id:this._id},"random")
this.tokens = this.tokens.concat({token:newtoken})
await this.save()
return newtoken
}
const User = mongoose.model("User", user)
module.exports= User