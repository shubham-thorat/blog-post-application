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
        console.log(posts)
    }, [dispatch])
    return (
        // <div className="post-container">
        //     <h2 className="heading"> POSTS </h2>
        //     <div className="posts">
        //         {
        //             posts && posts.length && posts.map(post => <Post key={post._id} props={post} />)
        //         }
        //     </div>
        // </div>
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {
                    posts && posts.length && posts.map(post => <Post key={post._id} props={post} />)
                }
                </div>
            </div>
        </div>
    )
}

export default Posts
