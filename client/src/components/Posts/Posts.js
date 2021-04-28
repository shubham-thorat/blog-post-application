import React, { useEffect } from 'react'
import Post from './Post/Post'
import { FetchAllData } from '../../api/index'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'

function Posts() {

    const posts = useSelector(state => state.post)
    const dispatch = useDispatch()
    useEffect(() => {
        FetchAllData(dispatch)
    }, [dispatch])
    return (
        <div className="post-container">
            <h2 className="heading"> POSTS </h2>
            <div className="posts">
                {
                    posts && posts.length && posts.map(post => <Post key={post._id} props={post} />)
                }
            </div>
        </div>
    )
}

export default Posts
