import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import "./Home.css";
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

const Home = (props) => {

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
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
                    <img src="sushi1.jpeg" id="sushi1"></img>
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
                    <img src="aboutus.jpg" id="aboutUsImg"></img>

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