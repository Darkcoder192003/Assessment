const UserModel = require('../models/User')
const decryptPassword = require('../Password/passwordHashing')

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
        const comparePassword = await decryptPassword(password,User.password)
        if (!comparePassword) {
            return res.status(400).send({
                success: false,
                message : "Enter valid credentials"
            })
          }
          res.status(200).send({
              success : true,
              message : 'Login Successfully',
              User
          })
    } catch (error) {
        console.log(`Error in Login-Controller ${error}`);
    }

}
module.exports = loginController