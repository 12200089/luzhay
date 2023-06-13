import React, {useContext, useState} from "react";
import '../assets/scss/Navigation.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import SearchBar from "./SearchBar";
import Brand from "./Brand";
import DropDownProfile from "./DropDownProfile";
import {Avatar, Button} from "@material-ui/core";
import {ThemeContext} from "../../api/Theme";

function Navigation({setAuth}) {
    const [isOpenProfile, setOpenProfile] = useState(false); 
    
    function handleOpenProfile() {
        setOpenProfile(!isOpenProfile);
    }
    const useStyle = useContext(ThemeContext);
    return (
        <nav style={useStyle.component}>
            <Brand/>
            <SearchBar/>
            <div className="profile" onClick={handleOpenProfile}>
                <Button className={"Dropdown-btn"}
                style={{color:'blue'}}
                        startIcon={<Avatar style={{width:'30px',background:"#0F6BAE",height:'30px',padding:'18px'}} >G7</Avatar>}
                        endIcon={isOpenProfile ? <ExpandMoreIcon/> : <ExpandLessIcon/>}>

                </Button>
                {
                    isOpenProfile &&
                    <DropDownProfile setAuth={setAuth}/>
                }
            </div>
        </nav>
    );
}

export default Navigation;