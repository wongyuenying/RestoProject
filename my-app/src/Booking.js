import { useState } from "react";
import "./Home.css";
import "./Booking.css";
import Nav from 'react-bootstrap/Nav';
import "react-datepicker/dist/react-datepicker.css";
import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




const Booking = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const [guest, setGuest] = React.useState('');
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    const totalGuests = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ]
    const handleChange = (event) => {
        setGuest(event.target.value);
    };

    return (

        <div>
            <header>
                <div>
                    <a href="/#home" className="logo"><img src="logo.png" id="logoImg"></img> RESTO</a>
                    <Nav defaultActiveKey="/booking" className={`navbar ${showNavbar && 'active'}  `} onClick={handleShowNavbar}>
                        <Nav.Link href="/#home" > HOME</Nav.Link>
                        <Nav.Link href="/#menu"> MENU </Nav.Link>
                        <Nav.Link href="/#aboutUs"> CONTACT </Nav.Link>
                        <Nav.Link href="/booking" className="button" id="bookNow"> BOOK NOW </Nav.Link>
                    </Nav>

                    <div className="icons">
                        <i class="fa-solid fa-bars " id="menu-icon" onClick={handleShowNavbar}></i>
                    </div>
                </div>
            </header>

            <div className="container">
                <div >
                    <div style={{ padding: 90 }}></div>

                    <div id="form">
                        <h2>Reservation</h2>


                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer 
                                components={[
                                    'DatePicker',
                                    'MobileDatePicker',
                                    'DesktopDatePicker',
                                    'StaticDatePicker',
                                ]}
                            >
                                <DemoItem >
                                    <DesktopDatePicker defaultValue={dayjs('2022-04-17')} />
                                </DemoItem>


                            </DemoContainer>
                        </LocalizationProvider>
                        <Box sx={{ minWidth: 120 }} id="box">
                            <FormControl fullWidth>


                                <InputLabel id="demo-simple-select-label">Guest(s)</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={guest}
                                    label="Guest"
                                    onChange={handleChange}
                                >
                                    {totalGuests.map((guests) => (
                                        <MenuItem value={guests}> {guests}</MenuItem>
                                    ))}

                                </Select>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer
                                        components={[
                                            'TimePicker',
                                            'MobileTimePicker',
                                            'DesktopTimePicker',
                                        ]}
                                    >
                                        <DemoItem >
                                            <DesktopTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                                        </DemoItem>

                                    </DemoContainer>
                                </LocalizationProvider>
                            </FormControl>
                        </Box>
                        <button id="submit"> Submit</button>


                    </div>

                </div>
                <div id="bookingOpeningHours">
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
                <div id="bookingContact">
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


    );
};
export default Booking;