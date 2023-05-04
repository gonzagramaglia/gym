import React from "react"

export default function Menu(props){
        
    const styles = props.darkMode ? { backgroundColor: "#161616", color: "#EEEEEE" }
                                     : { backgroundColor: "#EEEEEE", color: "#161616" }
            
    function openGithub(){
        window.open("https://github.com/gonzagramaglia", "_blank")
    }                     
    
    return (
            <div className={!props.menuActive ? "menu back" : "menu"}>
                <nav style={styles} className={!props.menuActive ? "out" : ""}>
                    <img src="https://i.imgur.com/tt0VV25.png" className="photo"/>
                </nav>
                <div className="name">Gonza Gramaglia</div>
                <img src="https://i.imgur.com/OqeHTpw.png" className="github-logo" onClick={openGithub}/>
            </div>
    )
}