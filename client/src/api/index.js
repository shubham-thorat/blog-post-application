import axios from 'axios'
import { fetchData } from '../redux/postDataAction'

const url = 'http://localhost:5000/blog-post-application/posts'

export const sendData = (postData)=>{
    // console.log(postData)
    axios.post(url,postData)
    .then(response => {
        console.log(response)
    })
    .catch(error =>{
        console.log(error)
    })
}

export const FetchAllData = (dispatch)=>{
    axios.get(url)
    .then(response =>{
        dispatch(fetchData(response.data))
    })
    .catch(err =>{
        console.log(err)
    })
}