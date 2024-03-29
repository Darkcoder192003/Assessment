const UserModel = require('../models/User')
const loginUser = async(req,res) =>{
    try {
        const userId = req.user._id;

        // Here We Are Using That ID To Get All The User Infomation Except Its Password
        const user = await UserModel.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.log(`Error in Login-User ${error}`);
    }

}
module.exports = loginUser