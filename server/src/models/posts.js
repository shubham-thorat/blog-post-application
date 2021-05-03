import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    title : String,
    message : String,
    creator : String,
    createdAt : {
        type : Date,
        default : new Date()
    },
    photo : String
})

const Post = mongoose.model('posts',PostSchema)

export {
    Post
}
