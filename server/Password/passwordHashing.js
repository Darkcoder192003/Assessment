const bcrypt= require('bcrypt')

const hashPassword =async(password)=>{
    try {
    
        const salt = await bcrypt.genSalt(10);

        const hash = await bcrypt.hash(password, salt);
        return hash
    } catch (error) {
        console.error('Error:', error);
    }

}
const decryptPassword = async(password,hashedPassword)=>{
    try{
        return await bcrypt.compare(password,hashedPassword)
    }
    catch (error) {
        console.error('Error:', error);
    }
}
module.exports = hashPassword