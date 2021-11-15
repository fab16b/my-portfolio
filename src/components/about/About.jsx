import React from 'react'
import "./about.scss"

export default function About() {

    const data = [
        {
            id: 1,
            title: "Something 1",
            img: "assets/globe.jpeg",
            description: "Hi! I am Felix Mbikogbia. I am currently a student at Abilene Christian University, ACU, and I am studying Computer Science. I am a Web Developer at Nuclear Energy eXperimental Testing (NEXT) as a part-time student worker.",
        }, 
        {
            id: 2,
            title: "something 2",
            img: "assets/globe.jpeg",
            description: "During my study at ACU, I have had several opportunities to take classes and work on web projects where I got to use my design skills and ideas. I am passionate about creating technology that people can use easily and that provides great experience to people of all backgrounds. I am open minded, and always willing to learn new things!",
        },
        {
            id: 3,
            title: "something 3",
            img: "assets/globe.jpeg",
            description: "I am passionate about UX Design, Web Development, AWS Cloud technology, and Mobile App Development. I have skills in C++, JavaScript, HTML, CSS, Java, Swift, Figma, and Adobe XD. I spent most of my time learning new skills on Udemy, Coursera, and YouTube. I also like to cook, workout, and ride my bike.",
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
