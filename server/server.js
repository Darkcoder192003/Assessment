const express =require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const morgan = require('morgan');
const connectDB = require("./config/db");

dotenv.config()

connectDB();

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

const PORT = process.env.PORT || 8080

app.get('',(req,res)=>{
    res.status(200).json({
        success : true,
        message : 'Success'
    })
})

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})