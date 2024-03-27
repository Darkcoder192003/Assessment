const UserModel = require('../models/User')
const hashPassword = require('../Password/passwordHashing')

const registerController = async(req,res) => {
    try {
        const {name,email,password,gender} = req.body
        if(!name){
            return res.status(400).send({
                success : false,
                message : "name required"
            })
        }
        if(!email){
            return res.status(400).send({
                success : false,
                message : "email required"
            })
        }
        if(!password){
            return res.status(400).send({
                success : false,
                message : "password required"
            })
        }
        if(!gender){
            return res.status(400).send({
                success : false,
                message : "gender required"
            })
        }
       
        const existingUser = await UserModel.findOne({email})
        if(existingUser){
            return res.status(500).send({
                success: false,
                message: 'User alredy exist'
            })
        }
        const securePassword = await hashPassword(password);
        console.log(securePassword)
        const user = await UserModel({name,email,password:securePassword,gender}).save()
       return  res.status(201).send({
            success: true,
            message: 'Registration Successfull'
        })
    } catch (error) {
        console.log(`Error in registerController ${error}`);
        return res.status(500).send({
            success: false,
        })
    }
}
module.exports = registerController