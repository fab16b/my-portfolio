import React from 'react'
import "./intro.scss"
import {ArrowDownward} from "@material-ui/icons"
import { init } from 'ityped'
import {useEffect, useRef} from 'react'
    
    

export default function Intro() {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Web Developer","UX Designer","Softwara Developer"]
        });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/felix.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I am</h2>
                    <h1>Felix Mbikogbia</h1>
                    <h3>I am a <span ref={textRef}> </span></h3>
                </div>
                <a href="#works">
                    <ArrowDownward className="downarrow"/>
                </a>
            </div>
        </div>
    )
}