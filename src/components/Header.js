import React, {useState} from "react"
import Menu from "./Menu"

export default function Header(props){
    
    const [menuActive, setMenuActive] = useState(false)
    function openMenu(){
        setMenuActive( prevMenuActive => !prevMenuActive)
    }
    
    const logoUrl = props.darkMode ? "https://i.imgur.com/VMvoCoo.png"
                                   : "https://i.imgur.com/1Zz1w9w.png"
                             
    const styles = props.darkMode ? { backgroundColor: "#161616", color: "#EEEEEE" }
                                  : { backgroundColor: "white", color: "#161616" }
                                  
    const menuIcon = props.darkMode ? { backgroundColor: "white"}
                                    : { backgroundColor: "#333"}

                                          
    return (
        <div style={styles} className="header">
            <div className={menuActive ? "menu-hamburger active" : "menu-hamburger"} 
                 onClick={openMenu} 
            >
                <span style={menuIcon}></span>
                <span style={menuIcon}></span>
                <span style={menuIcon}></span>
            </div>
            <Menu darkMode={props.darkMode} menuActive={menuActive}/>
            <img src={logoUrl} style={styles} className="logo" />
            <p>Routine Tracker</p>
            <img src={props.switchLogoUrl} className="mode" onClick={props.switchMode} />
        </div>
    )
}