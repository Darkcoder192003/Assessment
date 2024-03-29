const jwt = require('jsonwebtoken');

const fetchuser = (req , res , next) => {
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: "Please Authenticate Using Valid Token"})
    }
    

    try {
        const data = jwt.verify(token , process.env.JWT_SECRET)
        req.user = data;
        next();
    }catch (error) {
        res.status(401).send({error: "Please Authenticate Using Valid Token"})
    }

}

module.exports = fetchuser;