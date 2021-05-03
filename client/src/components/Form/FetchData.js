import React, { useState } from 'react'
import { sendData } from '../../api'


function SubmitPost() {
    const [post, setpost] = useState({
        title: '',
        message: '',
        creator: '',
        createdAt: new Date(),
        photo: ''
    })

    const HandleSubmit = (e) => {
        sendData(post)
    }

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const imageurl = await convertBase64(file)
        console.log(imageurl)
        setpost({
            ...post,
            photo: imageurl
        })
    }
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result)
            }
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }
    return (
        <form onSubmit={HandleSubmit}>
            <div class="mb-3 mx-2 mt-3">
                <input type="text" class="form-control" id="exampleInputTitle" placeholder="Enter Post Title" value={post.title} onChange={e => setpost({ ...post, title: e.target.value })} />
            </div>
            <div class="mb-3 mx-2">
                <textarea type="text" class="form-control" id="exampleInputMessage" placeholder="Enter Post Message" value={post.message} onChange={e => setpost({ ...post, message: e.target.value })}/>
            </div>
            <div class="mb-3 mx-2">
                <input type="text" class="form-control" id="exampleInputName" placeholder="Enter Your Name" value={post.creator} onChange={e => setpost({ ...post, creator: e.target.value })}/>
            </div>

            <div class="mb-3 mx-2">
                <input type="text" class="form-control" id="exampleInputDate" placeholder="Enter Date Of Creation" value={post.createdAt} onChange={e => setpost({ ...post, createdAt: e.target.value })}/>
            </div>

            <div class="mb-3 mx-2 d-flex">
                <input type="file"  id="UploadImage" onChange={uploadImage}/>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary"> Create Post </button>
            </div>
        </form>
    )
}

export default SubmitPost
