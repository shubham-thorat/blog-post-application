import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import router from './routes/posts.js'
const app = express()

//code to tell that get request can be json object ||  object as string and array
dotenv.config()
app.use(express.json({extended:true,limit:"50mb"}))
app.use(express.urlencoded({extended : true,limit:"50mb"}))
app.use(cors())

mongoose.connect(process.env.REACT_APP_MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology : true
})

const db = mongoose.connection
db.on('error',err =>{
    console.log(err)
})
db.once('open',()=>{
    console.log('Database is Connected')
})

//app used router 
app.use('/blog-post-application/posts',router)


const port = process.env.REACT_APP_PORT
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})