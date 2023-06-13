import React from "react";
import logo from "../assets/img/l2.png";
import { useState } from "react";
import {toast} from 'react-toastify';

import {
    Link,
  } from "react-router-dom";

const SignIn = ({setAuth}) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(
        "http://localhost:5000/song/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success('Login Successfully', {
          position: "top-center",
          autoClose: 1000,
          });
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

    return(
        <div className="login template d-flex justify-content-center align-items-center 100-w 100-vh mt-5">
            <div className="form_container 40-w p-5 mt-5 rounded bg-light"> 
            <form onSubmit={onSubmitForm}>
                <h3 className="text-center">Sign in</h3>
                <div className="text-center mt-2 mb-3">
                <img className="img-fluid" width={80} height={80} src={logo} alt="noImage"/>
                </div>
                <div className="mb-3">
                    <input 
                      type="email"
                      name="email" 
                      // id='email' 
                      placeholder="Email address" 
                      className="form-control" 
                      value={email}
                      onChange={e => onChange(e)}
                      />

                </div>
                <div className="mb-2">
                    <input 
                      type="password"
                      name="password" 
                      // id='password' 
                      placeholder="Password" 
                      className="form-control " 
                      value={password}
                      onChange={e => onChange(e)}/>
                </div> 
                <div className="d-grid">
                    <button className="btn" style={{backgroundColor:'#0F6BAE',color:'white',fontSize:20}} 
                    >Sign in</button>
                </div>
                <p className="text-end" style={{fontSize:'14px', marginRight: 80}}>
                    Don't have an account?<Link className="signupLink" to='/signup'> Sign Up</Link>
                </p>
            </form>
            </div>
        </div>
    )
}

export default SignIn;
