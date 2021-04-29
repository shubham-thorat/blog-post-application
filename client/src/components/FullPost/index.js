import React from 'react'
import './style.scss'

function FullPost(props) {
    const post = props.location.post ;
    return (
        <div className="Fullpost-container">
            <h1 className="title"> {post ? post.title : 'HEADING'} </h1>
            <div className="top-images"> 
                <img className="top-image-1" src={require('../../images/bg.jpg').default}/>
            </div>
            <div className="message">
                <p>
                    {
                        post ? post.message : null
                    }
                </p>
            </div>
            <div className="post-info">
                <p > Published Date : <br/> <strong> { post ? post.createdAt : null } </strong> </p>
                <p > Author : <br/><strong> {post ? post.creator : 'Shubham Thorat'}</strong> </p>
            </div>
        </div>
    )
}

export default FullPost
