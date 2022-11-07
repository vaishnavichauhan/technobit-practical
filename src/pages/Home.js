import React, { useEffect, useState } from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";
import uuid from 'react-uuid';
import  {AiFillLike}  from 'react-icons/ai';

function HOME() {

    const navigate = useNavigate();
    const currntLogin = JSON.parse(localStorage.getItem("currntLogin"))
    const allImages = JSON.parse(localStorage.getItem("uploadedImages"))
    const [selectedImage, setSelectedImage] = useState(null);
    const [imgAll, setimgAll] = useState(allImages);
    const [like, setlike] = useState(0);


    const recentlyaddBtn = () => {
        navigate("/recentlyadd");
    }
    const toppageBtn = () => {
        navigate("/toppage");
    }
    const logoutBtn = () => {
        localStorage.removeItem("logedin")
        navigate("/loginpage");
    }



    const uploadImg = () => {
        if (selectedImage) {
            if (!allImages) {
                var imagesToUpload = [];
                const reader = new FileReader();
                reader.addEventListener("load", () => {
                    var fileObj = {
                        "id": uuid(),
                        "url": reader.result,
                        "noOfLike": 0
                    };
                    imagesToUpload.push(fileObj);
                    localStorage.setItem('uploadedImages', JSON.stringify(imagesToUpload))
                    setimgAll(imagesToUpload);
                });
                reader.readAsDataURL(selectedImage)
            } else {
                const reader = new FileReader();
                reader.addEventListener("load", () => {
                    var fileObj = {
                        "id": uuid(),
                        "url": reader.result,
                        "noOfLike": 0
                    };
                    allImages.push(fileObj);
                    localStorage.setItem('uploadedImages', JSON.stringify(allImages))
                    setimgAll(allImages)
                });
                reader.readAsDataURL(selectedImage)
            }
        }

    }
    const pressLikes = (id) => {

        var viewdata = allImages.find(allImages => allImages.id == id);
        var index = allImages.findIndex(allImages => allImages.id == id);
        allImages[index].noOfLike = viewdata.noOfLike +1;
        localStorage.setItem('uploadedImages', JSON.stringify(allImages))
        setimgAll(allImages);
    }

    return (

        <div className='container-fuild mx-3'>
            <h1 >Welcome to Home</h1>
            <div className=" d-flex justify-content-between mb-5">
                <button onClick={() => recentlyaddBtn()}  className="btn btn-primary btndata">Recently Add Section</button>
                <div>
            <input
                    type="file"
                    name="myImage"
                    onChange={(event) => {
                        setSelectedImage(event.target.files[0]);
                    }} />
                <button onClick={() => uploadImg()} className="btn btn-primary">Upload Image</button>
            </div>
                <h3> Login user:{currntLogin.name} </h3>
            </div>
            <div className=" d-flex justify-content-between ">
                <button onClick={() => toppageBtn()}className="btn btn-primary btndata">Top Section</button>
                <button onClick={() => logoutBtn()} className="btn btn-primary btndata">Logout</button>
            </div>
          
            {
                allImages ? (
                    <div>
                        {imgAll.map((i) => {
                            return <div key={i.id} className="uploadimg">
                                <img alt="images" width={"200px"} height={"100px"} src={i.url} />
                                <div>
                                    <button onClick={() => pressLikes(i.id)} className="uploadbtnimg" ><AiFillLike/> {i.noOfLike}</button>
                                </div>
                            </div>
                        })
                        }
                    </div>


                ) : (<h1></h1>)
            }



        </div>


    )
}

export default HOME