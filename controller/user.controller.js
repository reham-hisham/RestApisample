const usermodel =require('../models/user.model')
const productModel= require('../models/Product.model')
const bcrypt = require('bcrypt')
class userController {
    static login =async(req, res)=>{
        try {
            
            const user = await usermodel.findOne({email:req.body.email})
            if(!user){
                throw new Error("email not found")
            }
       


            const ispassword = await bcrypt.compare(req.body.password , user.password)
            console.log(ispassword)
            if(ispassword){
               
            await  user.generateToken()
                res.send(user)
            }
        } catch (error) {
            res.send({
                apiStatus:false,
                message:error.message
              })
        }
    }
 static add= async(req, res) =>{
        try {
         const newUser=   await new usermodel(
                req.body
            )
            await newUser.save()
         res.send(newUser)
            
        } catch (error) {
            console.log(error.message)
        }
 }
 static allProduct =async(req, res)=>{
    try {
        const allProduct = await productModel.find()
        res.send(allProduct)
    } catch (error) {
      res.send(
       { apiStatus:false, message:error.message}
      )

    }
 }
static search = async()=>{
    try {
        const result = await productModel.find({price:20})
        console.log(result)
    } catch (error) {
        
    }
}

}
module.exports = userController

//$2b$08$VT4Y1Qyo9GxwGc8LSkQc9.wEDuXPyFjjTvkymgi8ASU31uyj2NBA2

