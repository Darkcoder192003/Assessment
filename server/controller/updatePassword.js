const UserModel = require('../models/User')
const hashPassword = require('../Password/passwordHashing')
const bcrypt= require('bcrypt')

const updatePassword = async(req,res) =>{
    try{
        const {email,password,newpassword} = req.body
        const User =await UserModel.findOne({email})
        if(newpassword && newpassword.length < 6){
            return res.status(400).send({
                success : false,
                message : "Password should be 6 hcharacter long"
            })
        }
        const comparePassword = await bcrypt.compare(password,User.password)
        if (!comparePassword) {
            return res.status(400).send({
                success: false,
                message : "Password does not match"
            })
          }
        const hashedPassword =  await hashPassword(newpassword)
        const updatedUser = await UserModel.findOneAndUpdate({email},{
            password : hashedPassword
        },{new:true})
        res.status(200).send({
            success : true,
            message : "Password Updated succesfully",
            User
        }) 
        
    } catch(error){
        console.log(`Error in updatePassword ${error}`);
    }
}
module.exports = updatePassword