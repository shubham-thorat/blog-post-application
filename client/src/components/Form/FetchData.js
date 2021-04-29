import React, { useState } from 'react'
import { sendData } from '../../api'
import './style.css'

function FetchData() {
    const [post, setpost] = useState({
        title: '',
        message: '',
        creator: '',
        createdAt: new Date()
    })

    const HandleSubmit = (e) => {
            sendData(post)
            // e.preventDefault()
    }

    const HandleClear = (e) => {
        e.preventDefault()
        setpost({
            title: '',
            message: '',
            creator: '',
            createdAt: new Date()
        })
    }
    return (
        <form onSubmit={HandleSubmit}  className="box">
            <h3 className="heading" style={{ marginBottom: "30px" }}> FORM </h3>
            <div className="item">
                <input type="text" placeholder="Enter Post title" className="form-control input-sm" value={post.title} onChange={e => setpost({ ...post, title: e.target.value })} />
            </div>
            <div className="item">
                <textarea type="text" placeholder="Enter Your Message" className="form-control input-sm" value={post.message} onChange={e => setpost({ ...post, message: e.target.value })} />
            </div>
            <div className="item">
                <input type="text" placeholder="Enter Your creator name" className="form-control input-sm" value={post.creator} onChange={e => setpost({ ...post, creator: e.target.value })} />
            </div>
            <div className="item">
                <input type="text" placeholder="Enter Date of Creation" className="form-control input-sm" value={post.createdAt} onChange={e => setpost({ ...post, createdAt: e.target.value })} />
            </div>
            <button type="submit" className="btn btn-primary" style={{display : "block" , margin : "5px auto"}}> Send Data </button>
            <button type="clear" className="btn btn-danger" onClick={HandleClear} style={{display : "block" , margin : "5px auto"}}> Clear Data </button>
        </form>
    )
}

export default FetchData
