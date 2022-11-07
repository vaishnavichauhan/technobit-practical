import React from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";
import  {AiFillLike}  from 'react-icons/ai';
function RecentlyAdd() {
  const navigate = useNavigate();
  const allImages = JSON.parse(localStorage.getItem("uploadedImages"))


  return (
    <div className='container'>
      <h1>Recently added image</h1>
        {
                allImages ? (
                    <div  className="updateimg">
                        <img alt="images" width={"250px"} height={"100px"} src={allImages[allImages.length-1].url}/> 
                       <div>
                       <button className="recimgbtn"><AiFillLike/>{allImages[allImages.length-1].noOfLike} </button>
                      </div> 
                    </div>


                ) : (<h1>"no any images"</h1>)
            }
                        <button onClick={() =>navigate("/")} className="btn btn-primary btndata">Home</button>
    </div>
  )
}

export default RecentlyAdd