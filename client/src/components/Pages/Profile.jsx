import React, {useEffect, useState} from 'react';
import './css/Profile.scss';
import {Avatar} from "@material-ui/core";
import {useSelector} from "react-redux";
import MusicCard from "../fragment/MusicCard";
import Container from "../fragment/Container";
import Grade from 'grade-js';
import SideBarOptions from "../fragment/SideBarOptions";
import {QueueMusic} from "@material-ui/icons";

function Profile() {

    const {playlists} = useSelector(state => state.musicReducer);
    const [mostPlayed, setMostPlayed] = useState([]);
    // const [userData, setUserData] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:5000/user")
    //       .then((response) => response.json())
    //       .then((data) => setUserData(data))
    //       .catch((error) => {
    //         console.error("Error fetching data:", error);
    //       });
    //   }, []);
      

    function sortByProperty(property) {
        return function (a, b) {
            if (a[property] > b[property])
                return 1;
            else if (a[property] < b[property])
                return -1;

            return 0;
        }
    }

    useEffect(() => {
        setMostPlayed(playlists.sort(sortByProperty("timesPlayed")));
    }, [playlists]);

    useEffect(() => {
        Grade(document.querySelectorAll('.gradient-wrap'))
    });

    return (
        <Container>
            <div className={"Profile"}>
                <div className="top-profile">
                    <Avatar variant={"rounded"} src={require("../assets/img/ava.jpg")}
                            style={{width: "150px", height: "150px"}}>
                    </Avatar>
                    <div className="profile-detail">
                        <h3>Group 7</h3>
                        <span className={"profile-playlist"}>
                            <SideBarOptions className={"lib-sub"} Icon={QueueMusic}
                                            href={"/home/playlist/rigsar"} title={"Rigsar"}/>
                            <SideBarOptions className={"lib-sub"} Icon={QueueMusic} href={"/home/playlist/boedra"}
                                            title={"Boedra"}/>
                            <SideBarOptions className={"lib-sub"} Icon={QueueMusic} href={"/home/playlist/zhungdra"}
                                            title={"zhungdra"}/>
                        </span>
                    </div>
                </div>
                <div className="bottom-profile">
                    <div>
                        <h3>Most Played</h3>
                        <div className="most-played">
                            {
                                mostPlayed.map((item, index) => (
                                    index <= 4 && <MusicCard key={item.id} music={item}/>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
}

export default Profile;
