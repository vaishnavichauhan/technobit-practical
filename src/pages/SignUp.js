import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './style.css';
import { Formik, setNestedObjectValues } from "formik";
import * as Yup from "yup";

function Signuppage() {
    const navigate = useNavigate();
    const [data, setdata] = useState({ name: "", pass: "" })
    const { name, pass } = data;

    // const yupSch = Yup.object().shape({
    //     name: Yup.string()
    //         .required("Email is required")
    //         .email("Invalid email format"),
    //     pass: Yup.string()
    //         .required("Password is a required field")
    //         .min(8, "Password must be at least 8 characters"),
    // });
   
    const handlechang = (e) => {
        const { name, value } = e.target;
        setdata({ ...data, [name]: value })
    }

    const handleSignUp = async (e) => {
        e.preventDefault()
        var userInfo = localStorage.getItem("userInfo");
        if (!userInfo) {
            var arr = [];
            var newarrlen = arr.push(data);
            localStorage.setItem('userInfo', JSON.stringify(arr));
        } else {
            var userInfoArray = JSON.parse(userInfo);
            userInfoArray.push(data);
            localStorage.setItem('userInfo', JSON.stringify(userInfoArray))
        }

       navigate("/loginpage")
    }

    return (




        <div className='container'>
 <h1>Welcome Signup From</h1>
            {/* <Formik
                validationSchema={yupSch}
                initialValues={{ name: "", pass: "" }}
                onSubmit={(values) => {
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    // handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <div className="login fromstl">
                        <div className="form">
                            <form noValidate onSubmit={handleSignUp}>
                                <label class="form-label mx-2">
                                Email
                                <input
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={name}
                                    placeholder="Enter email id"
                                    className="form-control inp_text"
                                    id="email"
                                />
                                </label>
                                <p className="error">
                                    {errors.name && touched.name && errors.name}
                                </p>
                                <label class="form-label mx-2">
                    password:
                                <input
                                    type="password"
                                    name="pass"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={pass}
                                    placeholder="Enter password"
                                    className="form-control"
                                />
                                <p className="error">
                                    {errors.pass && touched.pass && errors.pass}
                                </p>
                                </label>
                                <div>
                                <button type="submit"  className="btn btn-primary" >Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </Formik> */}

           
            <form onSubmit={handleSignUp} className='fromstl'>
                <label class="form-label mx-2">
                    Email
                    <input type="text" name="name" value={name} onChange={handlechang}
                        class="form-control"
                        placeholder='enter email' />
                </label>
                <label class="form-label mx-2">
                    password:
                    <input type="password" name="pass" value={pass} onChange={handlechang} class="form-control"
                        placeholder='enter password' />
                </label>
                <div>

                    <input type="submit" value="Submit" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}

export default Signuppage