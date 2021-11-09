import React from 'react'
import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"> felix designs.</a>
                    <div className="itemContainer">
                        <Person/>
                        <span>+1 (325) 370-0066</span>
                    </div>
                    <div className="itemContainer">
                        <Mail/>
                        <a href="#contact"><span>mbikogbiafelix@gmail.com</span></a>
                    </div>
                </div>
                <div className="right">
                     <div className="hamberger" onClick={() => setMenuOpen(!menuOpen)}>
                         <span className="line1"></span>
                         <span className="line2"></span>
                         <span className="line3"></span>
                     </div>
                </div>
            </div>
        </div>
    )
}
