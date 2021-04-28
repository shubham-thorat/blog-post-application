import React from 'react'
import './style.css'

function Post(props) { 
    const post = props.props;
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={require('../../../images/bg.jpg').default} className="card-img-top" alt="Post-1" />
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.message}</p>
                <p className="card-info" style={{marginBottom:"0px"}}> Card Author : {post.creator} </p>
                <p className="card-info" style={{marginBottom:"9px"}}> Creation Time  : {post.createdAt} </p>
                <a href="#" className="btn" style={{display : "block" , margin : "5px auto", backgroundColor:"#024681",color:"white"}}> SEE THE FULL POST</a>
            </div>
        </div>
    )
}

export default Post
