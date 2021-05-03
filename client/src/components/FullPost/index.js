import React from 'react'
// import './style.scss'

function FullPost(props) {
    const post = props.location.post ;
    return (
        <div className="container d-flex justify-content-center align-items-center flex-column">
            <h1 className="heading"> {post ? post.title : 'HEADING'} </h1>
            <div className="top-images"> 
                <img className="img-fluid rounded" style={{height:"500px" ,width:"100%"}} src={post.photo}/>
            </div>
            <div className="card-text px-3 py-5">
                <p>
                    {
                        post ? post.message : null
                    }
                </p>
            </div>
            <div className="post-info d-flex" style={{width:"100%",justifyContent:"space-between"}}>
                <p> Published Date : <br/> <strong> { post ? post.createdAt : null } </strong> </p>
                <p> Author : <br/><strong> {post ? post.creator : 'Shubham Thorat'}</strong> </p>
            </div>
        </div>
    )
}

export default FullPost
