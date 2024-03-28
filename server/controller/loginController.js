const UserModel = require('../models/User')
const decryptPassword = require('../Password/passwordHashing')
const jwt = require('jsonwebtoken');
const bcrypt= require('bcrypt')


const loginController = async(req,res) =>{
    try {
        const {email,password} = req.body
        if(!email || !password){
            return res.status(500).send({
                success: false,
                message : 'Enter email and password' 
            })
        }
        const User =await UserModel.findOne({email})
        if(!User){
            return res.status(400).json({ error: "Please enter a valid credentials" })
        }
        const comparePassword = await bcrypt.compare(password,User.password)
        if (!comparePassword) {
            return res.status(400).send({
                success: false,
                message : "Enter valid credentials"
            })
          }
          const token = jwt.sign({_id:User._id}, process.env.JWT_SECRET);
        //   User.password = undefined

        
          res.status(200).send({
              success : true,
              message : 'Login Successfully',
              token,
              User,
          })
        
    } catch (error) {
        console.log(`Error in Login-Controller ${error}`);
    }

}
module.exports = loginController