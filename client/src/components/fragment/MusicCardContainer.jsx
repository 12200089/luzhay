import React, {useEffect} from "react"
import '../assets/scss/MusicCardContainer.scss';
import MusicCard from "./MusicCard";
import {useSelector, useDispatch} from "react-redux";
import Container from "./Container";
import HeroBanner from "./Banner";
import { getSongs } from "../../actions/actions";

function MusicCardContainer() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSongs());  
    },[dispatch]);

    const {playlists} = useSelector(state => state.musicReducer);

    return (
        <Container>
            <HeroBanner/>
            
            <div className={"music-card-container"} id='music'>
                {   
                    playlists.map(item => (
                        <MusicCard key={item.id} music={item}/>
                    ))
                }  
            </div>
        </Container>
    );
}

export default MusicCardContainer;
