import React, {useRef, useEffect} from "react";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import { getSongs } from "../../actions/actions";

function SideBarOptions(props) {
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(getSongs());  
    },[dispatch]);
   
    const Icon = props.Icon;
    const title = props.title;
    const className = props.className;
    const sideBarRef = useRef();
    const href = props.href;
    return (
        <Button onClick={()=>{sideBarRef.current.click();}} className={className} startIcon={Icon && <Icon/>}>
            <Link ref={sideBarRef} to={href}/>
            {title}
        </Button>
    );
}

export default SideBarOptions;