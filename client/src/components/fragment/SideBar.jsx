import React, {useContext} from "react";
import "../assets/scss/SideBar.scss";
import SideBarOptions from "./SideBarOptions";
import {ThemeContext} from "../../api/Theme";
import {ExploreOutlined, HomeOutlined, SearchOutlined, QueueMusic} from "@material-ui/icons";

function SideBar() {
    const useStyle = useContext(ThemeContext);
    return (
        <aside style={useStyle.component2} className={"aside-bar"}>
            <div className="aside-bar-container">
                <p className={"p1"}>
                    <span style={{color: 'white',fontSize:30, marginLeft:70}}>LUZHAY</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={HomeOutlined} href={"/home"} title={"Home"} />
                <SideBarOptions className={"lib-sub"} Icon={ExploreOutlined} href={"/home/about"}  title={"About"}/>
                <SideBarOptions className={"lib-sub"} Icon={SearchOutlined} href={"/home/search"}  title={"Search"}/>
               
            </div>
            <div className="aside-bar-container playlist">
                <p className={"p1"}>
                    <span style={{color: 'white', fontSize:20}}>Category</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={QueueMusic} href={"/home/playlist/rigsar"}  title={"Rigsar"}/>
                <SideBarOptions className={"lib-sub"} Icon={QueueMusic} href={"/home/playlist/boedra"}  title={"Boedra"}/>
                <SideBarOptions className={"lib-sub"} Icon={QueueMusic} href={"/home/playlist/zhungdra"}  title={"Zhungdra"}/>

            </div>
        </aside>
    );
}

export default SideBar;