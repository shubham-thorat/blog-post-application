import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import router from './routes/posts.js'
import {MONGO_URI} from './keys/keys.js'

const app = express()
const port = 5000

//code to tell that get request can be json object ||  object as string and array
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())

mongoose.connect(MONGO_URI,{
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
app.use('/posts',router)

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:5000`)
})