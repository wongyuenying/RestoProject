import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Booking from "./Booking";

const Navbar = () => {

  const [showNavbar, setShowNavbar] = useState(false)
  const [active, setActive] = useState(null);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  const handleActive = event => {

    setActive(current => !current);
  }
  return (

    <div>
      <a href="#home" className="logo"><img src="logo.png" id="logoImg"></img> RESTO</a>
      <Nav defaultActiveKey="#home" className={`navbar ${showNavbar && 'active'}  `} onClick={handleShowNavbar}>
        <Nav.Link href="#home" > Home</Nav.Link>
        <Nav.Link href="#menu" onClick={handleActive}> Menu </Nav.Link>
        <Nav.Link href="#aboutUs"> About Us </Nav.Link>
        <Nav.Link href="/booking" className="button" id="bookNow"> <Booking /> Book Now </Nav.Link>
      </Nav>

      <div className="icons">
        <i class="fa-solid fa-bars " id="menu-icon" onClick={handleShowNavbar}></i>
      </div>
    </div>
  );
};

export default Navbar;