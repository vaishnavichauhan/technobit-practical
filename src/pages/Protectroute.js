import React from 'react';
import {Outlet,Navigate} from 'react-router-dom';

const Protectroute = ()=>{
    const auth = localStorage.getItem("logedin");
    console.log(auth);
    return auth ? <Outlet/> : <Navigate to= {"/loginpage"}/>
};

export default Protectroute