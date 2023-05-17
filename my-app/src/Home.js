import React, { useEffect, useState } from "react";
import Nav from 'react-bootstrap/Nav';
import "./Home.css";
import imageSlide from "./imageSlide";
const Home = (props) => {

    const [showNavbar, setShowNavbar] = useState(false)
    const [animationKey, setAnimationKey] = useState(0);
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    const [currentState, setCurrentState] = useState(0)
    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentState === 3) {
                setCurrentState(0)
            } else {
                setCurrentState(currentState + 1)
            }
        }, 5000)
        setAnimationKey(prevKey => prevKey +1);
        return () => clearTimeout(timer)
    }, [currentState]

    )



    const bgImageStyle = {
        backgroundImage: `url(${imageSlide[currentState].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        paddingBottom: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
    const goToNext = () => {
        setCurrentState(currentState)
    }
    return (

        <div>
            <header>
                <div>
                    <a href="#home" className="logo"><img src="logo.png" id="logoImg"></img> RESTO</a>
                    <Nav defaultActiveKey="#home" className={`navbar ${showNavbar && 'active'}  `} onClick={handleShowNavbar}>
                        <Nav.Link href="#home" > Home</Nav.Link>
                        <Nav.Link href="#menu"> Menu </Nav.Link>
                        <Nav.Link href="#aboutUs"> About Us </Nav.Link>
                        <Nav.Link href="/booking" className="button" id="bookNow"> Book Now </Nav.Link>
                    </Nav>

                    <div className="icons">
                        <i class="fa-solid fa-bars " id="menu-icon" onClick={handleShowNavbar}></i>
                    </div>
                </div>
            </header>
            <div >
                <div id="home" className="m-5">
                    <div id="slider">
                        <div style={bgImageStyle}></div>
                        <div id="description"  key={animationKey}>
                            <div>
                                <h1>{imageSlide[currentState].title}</h1>
                            </div>
                            <div className="carousel-boullt">
                                {
                                    imageSlide.map((imageSlide, currentState) => {
                                        <span key={currentState} onClick={() => goToNext(currentState)}>111</span>
                                    })
                                }

                            </div>
                        </div>
                    </div>

                </div>

                <div id="menu">
                    <div className="menu-container">
                        <div>
                            <img src="menu1.jpeg" id="menuImg1"></img>
                            <h3 id="omakase">OMAKASE (お任せ)</h3>
                            <p>Experience an elevated culinary journey at RESTO with our Omakase 8-course set dinner. Meticulously curated by our chefs, each dish embodies the essence of Japanese cuisine with the freshest seasonal ingredients.</p>

                            <div>
                                <h3 id="setdinner" style={{ fontWeight: "bold" }} >SET DINNER</h3>
                                <ul id="dinnerPrice">
                                    <li>8 - 10 Courses Set</li>
                                    <li>Price: $220 pp</li>
                                    <li>Beverage Pairing: $130 pp</li>
                                </ul>
                                <button id="drinkMenu"> Drink Menu</button>

                                <img src="menu2.jpeg" id="menuImg2"></img>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="aboutUs">
                    <div id="aboutUsImgContainer">
                        <img src="aboutus.jpg" id="aboutUsImg"></img>
                    </div>
                    <div id="openingHours">
                        <h3>OPENING HOURS</h3>
                        <ul>
                            <li>Monday - Thursday:</li>
                            <li>6:00 pm - 11:30 pm</li>
                            <div id="weekend">
                                <li>Friday - Sunday</li>
                                <li>6:00 pm - 01:30 am</li>
                            </div>
                        </ul>
                    </div>
                    <img src="aboutus-mobile.avif" id="aboutUsMobile"></img>
                    <div id="contact">
                        <a href="tel:+61 2 1234 5678"><p> +61 2 1234 5678 </p></a>
                        <p> 123 Swanston Street, Carlton VIC 3053, Australia</p>
                        <div id="icons">
                            <a href="http://www.facebook.com"><i class="fa-brands fa-square-facebook"></i></a>
                            <a href="http://www.instagram.com"><i class="fa-brands fa-square-instagram"></i></a>
                            <a href="mailto: RestoExample@gamil.com"><i class="fa-solid fa-envelope"></i></a>
                        </div>
                    </div>



                </div>


            </div>
        </div>
    );
};
export default Home;