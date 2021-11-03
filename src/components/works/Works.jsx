import "./works.scss";
import {useEffect, useState } from 'react';

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);    

     const data = [
        {
            id: 1,
            title: "LSMS Website",
            img: "assets/lsmsWebsite.png",
            icon: "https://westsiderc.org/wp-content/uploads/2021/04/Website-Icon-2.png",
            description: "This is a test description",
            link: "https://github.com/matthewmiddlebrook/LSMS/tree/Frontend",
            bg: "#386caf"
        }, 
        {
            id: 2,
            title: "NEXT Website",
            img: "assets/nextWebsite.png",
            icon: "https://westsiderc.org/wp-content/uploads/2021/04/Website-Icon-2.png",
            description: "This is a test description",
            link: "https://www.acunextlab.org",
            bg: "#cccccc"
        },
        {
            id: 3,
            title: "Math Website",
            img: "assets/mathWebsite.png",
            icon: "https://westsiderc.org/wp-content/uploads/2021/04/Website-Icon-2.png",
            description: "This is a test description",
            link: "https://github.com/fab16b/Fun-Math-Website-Interface",
            bg: "#dff78f"
        },
        {
            id: 4,
            title: "Horoscope Mobile App",
            img: "assets/horoscope.png",
            icon: "https://azure.microsoft.com/svghandler/app-service-mobile?width=600&height=315",
            description: "This is a test description",
            link: "https://play.google.com/store/apps/details?id=com.felixmbikogbia.horology",
            bg: "#5f3cb7"
        }
    ];

    const handleClick = (way) =>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 3) : 
        setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0)

        document.addEventListener('keydown', function(e) {
            switch (e.key) {
                case 37:
                    setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 3)
                    break;
                case 39:
                    setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0)
                    break;
                default:
            }
        });
    }
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d) => (  <div className="container">
                    <h1>Works</h1>
                    <div className="item" style={{backgroundColor: d.bg}}>
                        <div className="left">
                            <img src={d.img} alt="" />
                        </div>
                        <div className="right">
                            <div className="rightContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.description}</p>
                                <span>Projects</span>
                            </div>
                        </div>
                    </div>
                </div> ))}
            </div>

            <img src="assets/arrow-right.png" className="arrow left" alt="" onClick={() =>handleClick("left")} />
            <img src="assets/arrow-right.png" className="arrow right" alt="" onClick={() =>handleClick("right")}  />

        </div>
    )
}
