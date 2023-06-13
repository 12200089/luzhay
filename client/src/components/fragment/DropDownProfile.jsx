import React, {useContext, useState} from "react";
import { Link, useHistory } from "react-router-dom";
import '../assets/scss/DropDownProfile.scss';
import {ThemeContext} from "../../api/Theme";
import {AccountBox, ExitToApp} from "@material-ui/icons";
import {Button} from "@material-ui/core";
import { toast } from "react-toastify";

const DropDownProfile = ({setAuth}) => {
    let history = useHistory();
    const useStyle = useContext(ThemeContext);
    const [currStyle, setCurrStyle] = useState(null);
    const [currStyle2, setCurrStyle2] = useState(null);
    const handleOver = () => {
        setCurrStyle(useStyle.button.onHover)
    };
    const handleOut = () => {
        setCurrStyle(null)
    };
    const handleOver2 = () => {
        setCurrStyle2(useStyle.button.onHover)
    };
    const handleOut2 = () => {
        setCurrStyle2(null)
    };

    const logout = async e => {
        e.preventDefault();
        try {
          localStorage.removeItem("token");
          setAuth(false);
          history.push('/');
          toast.success("Logout successfully");
        } catch (err) {
          console.error(err.message);
        }
      };
   
    return (
        <div style={useStyle.component} className="dropdown-profile">
            <Link to="/home/profile" className={"hb"}>
                <Button 
                        style={currStyle}
                        startIcon={<AccountBox/>}
                        variant={"text"} 
                        onMouseOver={handleOver} onMouseOut={handleOut} 
                        >Profile
                </Button>
            </Link>
                <Button  style={currStyle2}
                        startIcon={<ExitToApp/>}
                        variant={"text"}
                        onClick={e => logout(e)}
                        onMouseOver={handleOver2} onMouseOut={handleOut2} 
                        >Logout
                </Button>
        </div>
    );
}
export default DropDownProfile;