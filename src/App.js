import React, {useState} from "react"
import Header from "./components/Header"
import Display from "./components/Display"

export default function App(){
    
    const [darkMode, setDarkMode] = useState(false)
    
    function switchMode(){
        setDarkMode( prevDarkMode => !prevDarkMode )
    }
    
    const switchLogoUrl = darkMode ? "https://i.imgur.com/ormTOip.png"
                                   : "https://i.imgur.com/uscikaq.png"
    
    return (
        <div className="body">
            <Header darkMode={darkMode} switchMode={switchMode} switchLogoUrl={switchLogoUrl} />
            <Display darkMode={darkMode} />
        </div>
    )
}
