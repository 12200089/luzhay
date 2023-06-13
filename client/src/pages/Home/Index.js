import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faBars } from '@fortawesome/fontawesome-free-solid';
import FormData from "../Form/Form";
import {toast} from 'react-toastify';
import "./Index.css";
// import img from "../../Assets/images/bottom_wave.png";

import ViewData from "../View/ViewData";
import Footer from "../../component/Footer/Footer";
import Users from "../Users/users";


export default function HomePage () {
    const [isActive, setIsActive] = useState(false);

  const handleIcon = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setIsActive(false);
  };
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    // setAuth(false);
    // setAdmin(false);
    sessionStorage.setItem('admin', false)
    toast.success('Sign-Out Successfully', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

  }
    return (
        <>

    <header className="header">

        <a href="#" className="logo"> <FontAwesomeIcon icon='' className="paw"/>Luzhay Admin</a>

        <nav className={`navbar ${isActive ? 'active' : ''}`}>
            <a href="#home">Home</a>
            <a href="#users">Users</a>
            <a href="#form_id">Upload</a>
            <a href="#data">View</a>
            <a style={{cursor: 'pointer'}}    >Sign-Out</a>
        </nav>

        <div className="icons">
          <button id="menu-btn" onClick={handleIcon}><FontAwesomeIcon icon={faBars}/></button>
            
        </div>
    </header>

    <section className="adminhome" id="home">
        <div className="content" onScroll={handleScroll}>
            {/* <h3>Got some pets <br/>
            share with needy ones</h3> */}
        </div>
    </section>
    <Users/>
    <FormData/>
    <ViewData/>
    <Footer />
</>
    )
};