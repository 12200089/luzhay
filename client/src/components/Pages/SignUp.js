import React, { useState } from "react";
import logo from "../assets/img/l2.png";
import { toast } from 'react-toastify';
import { Link, useHistory } from "react-router-dom";

const SignUp = () => {
  let history = useHistory();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
    confirmpassword: ""
  });

  const [errors, setErrors] = useState({});

  const { email, password, name, confirmpassword } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

    const validateForm = () => {
      let formIsValid = true;
      const newErrors = {};
    
      if (!name) {
        formIsValid = false;
        newErrors.name = "Please enter your name";
      }
    
      if (!email) {
        formIsValid = false;
        newErrors.email = "Please enter your email";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        formIsValid = false;
        newErrors.email = "Please enter a valid email";
      }
    
      if (!password) {
        formIsValid = false;
        newErrors.password = "Please enter a password";
      } else if (password.length < 6) {
        formIsValid = false;
        newErrors.password = "Password must be at least 6 characters long";
      } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}/.test(password)) {
        formIsValid = false;
        newErrors.password =
          "1 lowercase, uppercase, digit & special character";
      }
    
      if (!confirmpassword) {
        formIsValid = false;
        newErrors.confirmpassword = "Please confirm your password";
      } else if (confirmpassword !== password) {
        formIsValid = false;
        newErrors.confirmpassword = "Passwords do not match";
      }
    
      setErrors(newErrors);
      return formIsValid;
    };

  const onSubmitForm = async e => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const body = { email, password, name, confirmpassword };
        const response = await fetch(
          "http://localhost:5000/song/register",
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
          toast.success("Signup Successfully");
          history.push('/signin');
        } else {
          toast.error(parseRes);
        }
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center 100-w 100-vh mt-1">
      <div className="40-w p-5 mt-5 rounded bg-light">
        <form onSubmit={onSubmitForm}>
          <h3 className="text-center">Create an account</h3>
          <div className="text-center mt-2 mb-3">
            <img className="img-fluid" width={80} height={80} src={logo} alt="Logo" />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className={`form-control ${errors.name && 'is-invalid'}`}
              id="fullname"
              value={name}
              onChange={onChange}
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className={`form-control ${errors.email && 'is-invalid'}`}
              id="email"
              value={email}
              onChange={onChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={`form-control ${errors.password && 'is-invalid'}`}
              id="password"
              value={password}
              onChange={onChange}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              className={`form-control ${errors.confirmpassword && 'is-invalid'}`}
              id="confirm_password"
              value={confirmpassword}
              onChange={onChange}
            />
            {errors.confirmpassword && <div className="invalid-feedback">{errors.confirmpassword}</div>}
          </div>

          <div className="d-grid">
            <button className="btn" style={{ backgroundColor: "#0F6BAE", fontSize: 20, color: 'white' }}>
              Sign Up
            </button>
          </div>
          <p className="text-end" style={{ fontSize: "14px", marginRight: 20 }}>
            Already have an account? <Link className="signinLink" to="/signin">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
