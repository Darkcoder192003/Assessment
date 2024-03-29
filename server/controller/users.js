const UserModel = require('../models/User')

const users = async(req,res) =>{
    try {
        const Users = await UserModel.find();
        return  res.status(201).json(Users)
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}
module.exports = users