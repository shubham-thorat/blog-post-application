import React from 'react'
import FetchData from '../components/Form/FetchData';
import Posts from '../components/Posts/Posts';


function FrontPage() {
    return (
        <div className="main" style={{display:"flex",justifyContent:"space-between",border :"2px solid purple"}}> 
            <div className="app-item" style={{ width: "75%" }}>
                <Posts />
            </div>
            <div className="app-item" style={{ width: "25%", padding: " 0 10px", backgroundColor: "rgb(153, 131, 202)" }}>
                <FetchData />
            </div>
        </div>
    )
}

export default FrontPage
