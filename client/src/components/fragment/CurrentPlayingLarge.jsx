import React, {useEffect, useState} from 'react';
import '../assets/scss/CurrentPlayingLarge.scss';
import {useSelector} from "react-redux";

function CurrentPlayingLarge() {

    const {playing} = useSelector(state => state.musicReducer);
    const [{img,name,author},setCurrPlaying] = useState(playing);
    useEffect(()=>{
        setCurrPlaying(playing);
    },[playing]);

    return (
        <div  className={"CurrentPlayingLarge"}>
            <img className={"banner"} src={`http://localhost:5000/image/${img}`} alt=""/>
            <div className="music-left">
                <div className="wrapper">
                    <img className={"music-cover"} src={`http://localhost:5000/image/${img}`} alt=""/>
                    <div className="detail">
                        <h3>{name}</h3>
                        <p>{author}</p>
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default CurrentPlayingLarge;
