import React from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";
import  {AiFillLike}  from 'react-icons/ai';

function Toppage() {
  const navigate = useNavigate();
  const allImages = JSON.parse(localStorage.getItem("uploadedImages"));
  allImages.sort((a,b) =>a.noOfLike -b.noOfLike)
  return (
<div className='container'> 
<h1>Top Like Image</h1>
                        {
                allImages ? (
                    <div className="updateimg">
                        <img alt="images" width={"250px"} height={"100px"} src={allImages[allImages.length-1].url}/> 
                       <div>
                        <button className="recimgbtn"> <AiFillLike/> {allImages[allImages.length-1].noOfLike}</button>
                        </div>
                    </div>


                ) : (<h1>"no any images"</h1>)
            }
            <button onClick={() =>navigate("/")} className="btn btn-primary btndata">Home</button>
  </div>
  )
}

export default Toppage
