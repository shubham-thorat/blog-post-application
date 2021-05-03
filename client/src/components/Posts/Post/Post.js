import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'

function Post(props) {
    const post = props.props;
    const mess = post.message && (post.message.substr(0, post.message.length <= 110 ? post.message.length : 110) + '...')
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img src={post.photo} className="bd-placeholder-img card-img-top" width="100%" height="225" alt="Thumbnail" />
                <div className="card-body">
                    <h5 className="heading my-0 py-1"> {post.title} </h5>
                    <p className="card-text">{mess}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <NavLink to={{ pathname: "/fullpost", post: post }} type="button" className="btn btn-sm btn-outline-secondary" > View</NavLink>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted fw-bold fs-6">  - {post.creator}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
