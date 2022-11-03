const userModel = require('../models/user.model')

const JWT = require('jsonwebtoken')
const userAuth = async(req, res , next)=>{
try {
    const givenToken = req.header("Authorization").replace("Bearer ","")
    const d_token = JWT.verify(givenToken,"random")
    const user  = await userModel.findById(d_token.id)
    console.log(user.Role)
    if(user.Role!="User"){
throw new Error (" not user")
    }
    next()

} catch (error) {
    res.send({
        apiStatus:false,
        message:error.message
    })
}

}
module.exports = userAuth