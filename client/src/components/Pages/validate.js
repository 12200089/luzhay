// import React from "react";

const SignUpValidation = (values) => {
    const errors = {}

    const email_pattern = /^[^\s@]+@[^s@]+\.[^s@]{2,6}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;


    if (values.fullname === ""){
        errors.fullname = "Please enter your full name";
    }
    if (values.email === ""){
        errors.email = " Please enter an email address";
    }
    else if(!email_pattern.test(values.email)) {
        errors.email = "Please enter a valid email address";
    }
    if (values.password === ""){ 
        errors.password = "Please enter a password";
    }
    if (values.confirm_password === " " || values.confirm_password !== values.password){
        errors.confirm_password = "Password not matched";
    }
    if(!password_pattern.test(values.password)) {
        errors.password = "Password should have minimum length of 8 characters consisting at least one digit,uppercase letter, lowercase letter.";
    }
    if (!values.checkboxChecked) {
        errors.checkboxChecked = "Please agree to the terms and conditions";
      }
return errors; 

}
export default SignUpValidation;