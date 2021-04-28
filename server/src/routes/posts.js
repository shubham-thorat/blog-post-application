import express from 'express'
import { Post } from '../models/posts.js';

const router = express.Router()

router.get('/',(req,res)=>{
   Post.find((err,post)=>{
       if(err){
           console.log(err) }
       else{
            res.json(post)
        }
   })
})

router.post('/',(req,res)=>{
    const data = req.body
    const newPost = new Post(data)
    newPost.save()
    res.send(newPost)
})
export default router