import { FETCH_ALL } from "./PostDataType"

export const fetchData = (posts)=>{
    // console.log('detch Data action' , posts)
    return {
        type : FETCH_ALL,
        payload : posts
    }
}