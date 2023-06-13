import React from "react";
import {Link} from "react-router-dom";
import "../assets/scss/Brand.scss";
import Logo from "../assets/img/l2.png"


class Brand extends React.Component {
    render() {
        return (
            <Link to={"/home"} style={{ marginRight: "2rem", display: "flex", alignItems: "center" }}>
                    <h1 style={{ marginLeft: "1rem", fontSize: "2rem" }}>
                    
                        <img src={Logo} width={"40px"} height={"40px"} alt=""/>
                        
                    </h1>
            </Link>
        );
    }
}

export default Brand;