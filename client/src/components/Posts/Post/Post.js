import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'

function Post(props) { 
    const post = props.props;
    // console.log(post.message)
    const mess = post.message && (post.message.substr(0,post.message.length <= 50 ? post.message.length : 50) + '...')
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={require('../../../images/bg.jpg').default} className="card-img-top" alt="Post-1" />
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{mess}</p>
                <p className="card-info" style={{marginBottom:"0px"}}> Card Author : {post.creator} </p>
                <p className="card-info" style={{marginBottom:"9px"}}> Creation Time  : {post.createdAt} </p>
                <NavLink to={
                    { pathname:"/fullpost" ,post:post}
                } className="btn" style={{display : "block" , margin : "5px auto", backgroundColor:"#024681",color:"white"}} > SEE THE FULL POST</NavLink>
            </div>
        </div>
    )
}

export default Post
