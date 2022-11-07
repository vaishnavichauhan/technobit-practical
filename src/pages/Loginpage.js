import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './style.css'


function Loginpage() {
  const navigate = useNavigate();
  var getlocalvalues = localStorage.getItem("userInfo");
  var newlocalvals = JSON.parse(getlocalvalues)

  const [message, setMessage] = useState('');
  const [passmessage, setpassMessage] = useState('');
  const [dismsg, setdismes] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
  };

  const handleChanges = event => {
    setpassMessage(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault()
    console.log(newlocalvals);
    var foundName = newlocalvals.filter((obj)=> message == obj.name && passmessage == obj.pass);
   
    if (foundName.length > 0) {
      localStorage.setItem("currntLogin",JSON.stringify(foundName[0]))
      setdismes("successfully login")
      localStorage.setItem("logedin",true)
      setTimeout(() => {
        navigate("/")
      }, 5000);
      
     
    } else {
      setdismes("login faild")
    }

  }
  return (
    <div className='container'>
      <h1>Welcome Login From</h1>

<div className='fromstl'>
<form>
        <label class="form-label">
          Email
          <input
            type="text"
            id="message"
            name="message"
            onChange={handleChange}
            value={message}
            class="form-control"
            placeholder='enter email'
          />
        </label>
        <label class="form-label mx-2">
          password:
          <input
            type="password"
            id="passmessage"
            name="passmessage"
            onChange={handleChanges}
            value={passmessage}
            class="form-control"
            placeholder='enter password'
          />
        </label>
        <div>
        <input type="submit" value="Submit" onClick={handleLogin}  className="btn btn-primary"/>
        </div>
        <h1>{dismsg}</h1>
        <p>
          you have no email and password?
          <input type="button" value="SignUp" onClick={() => navigate("/signpage")} className="btn btn-primary mx-2"/>
        </p>
        

       
      </form>
</div>
    
    </div>
  )
}

export default Loginpage