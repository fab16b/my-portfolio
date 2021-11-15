import React from 'react'
// import PortfolioList from '../portfolioList/PortfolioList';
// import {useEffect, useState } from 'react';
import "./portfolio.scss"
import { data } from "../../data.js";

export default function Portfolio() {

    // const [selected, setSelected] = useState("web");
    // const [data, setData] = useState([]);

    // const list = [ 
    //      {
    //         id: "web",
    //         title: "Web App"
    //     }, 
    //     {
    //         id: "mobile",
    //         title: "Mobile App"
    //     }
    // ];

    // useEffect(() => {
    //     switch(selected){
    //         case "web":
    //             setData(webPortfolio);
    //             break;
    //         case "mobile":
    //             setData(mobilePortfolio);
    //             break;
    //         default: 
    //             setData(webPortfolio);
    //     }

    // }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <div className="container">
                {data.map((d)=>(
                    <div className="item" style={{backgroundColor: d.bg}} onClick={()=> window.open(d.link, "_blank")}>
                        {/* <a href={d.link} target="_blank" rel="noreferrer"> */}
                        <img src={d.img} alt="" href= {d.link}/>
                        <h3>{d.title}</h3>
                    {/* </a> */}
                </div>
                ))}
            </div>
        </div>
    )
}
