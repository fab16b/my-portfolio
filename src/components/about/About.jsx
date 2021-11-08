import React from 'react'
import "./about.scss"

export default function About() {

    const data = [
        {
            id: 1,
            title: "Something 1",
            img: "assets/globe.jpeg",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
        }, 
        {
            id: 2,
            title: "something 2",
            img: "assets/globe.jpeg",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
        },
        {
            id: 3,
            title: "something 3",
            img: "assets/globe.jpeg",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",
        }
    ]
    return (
        <div className="about" id="about">
            <h1>About</h1>
            <div className="container">
            {data.map((d)=>(
                <div className="card">
                    <div className="top">
                        <img src={d.img} alt="" />
                    </div>
                    <div className="center">
                        {d.description}
                    </div>
                    <div className="bottom">
                        {/* <h3>Felix</h3>
                        <h4>ceo of billion under</h4> */}
                    </div>
                </div>
                ))}
                </div>
        </div>
    )
}
