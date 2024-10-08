import { useState } from "react";
import "./Home.css";
import "./Booking.css";
import Nav from 'react-bootstrap/Nav';
import "react-datepicker/dist/react-datepicker.css";
import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField, Button, Box, Stepper, Step, StepLabel, Grid, MenuItem, Select, InputLabel, FormControl, FormHelperText } from '@mui/material';
import { DatePicker, TimePicker, LocalizationProvider } from '@mui/x-date-pickers';

const Booking = (props) => {
    const [showNavbar, setShowNavbar] = useState(false)
    const [activeStep, setActiveStep] = useState(0);
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [selectedTime, setSelectedTime] = useState('18:00');
    const [numOfPeople, setNumOfPeople] = useState(1);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [notes, setNotes] = useState('');
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    const steps = [
        'Booking',
        'Personal Details',
        'Summary',
    ];

    const timeOptions = [
        '18:00', '18:30', '19:00', '19:30',
        '20:00', '20:30', '21:00', '21:30',
        '22:00', '22:30'
    ];

    const handleFirstNameChange = e => {
        setFirstName(e.target.value);
        if (e.target.validity.valid) {
            setFirstNameError(false);
        } else
            setFirstNameError(true);
    }

    const handleLastNameChange = e => {
        setLastName(e.target.value);
        if (e.target.validity.valid) {
            setLastNameError(false);
        } else
            setLastNameError(true);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
        if (e.target.validity.valid) {
            setEmailError(false);
        } else
            setEmailError(true);
    }
    const handleNext = e => {
        e.preventDefault();
        if (activeStep == 1) {
            let valid = true;
            if (firstName == '') {
                setFirstNameError(true);
                valid = false;
            }
            if (lastName == '') {
                setLastNameError(true);
                valid = false;
            }
            if (email == '') {
                setEmailError(true);
                valid = false;
            }
            if (!valid) {        
                return;
            }
            
        }
        
            setActiveStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };

    return (

        <div>
            <header>
                <div className="nav">
                    <div></div>
                    <a href="/"><img src="new_logo.png" id="logoImg"></img></a>

                    <Nav defaultActiveKey="/booking" className={`navbar ${showNavbar && 'active'}  `} onClick={handleShowNavbar}>
                        <Nav.Link href="/#menu"> MENU </Nav.Link>
                        <Nav.Link href="/#footer"> CONTACT US</Nav.Link>
                        <div className="bookingButton">
                            <Nav.Link href="/booking" className="button" id="bookNow">
                                RESERVATIONS
                            </Nav.Link>
                        </div>
                    </Nav>

                    <div className="icons">
                        <i class="fa-solid fa-bars " id="menu-icon" onClick={handleShowNavbar}></i>
                    </div>
                </div>
            </header>
            <section id="reservation">
                <div className="container">
                    {activeStep < 3 && (
                        <div className="row">
                            <div className="reservation-box column">
                                <h3>MAKE A RESERVATION</h3>
                                <p>Book your table now to experience the Resto ventures.</p>
                                <h4 style={{ paddingTop: "20px" }}>Surcharge:</h4>
                                <p>Applies to total bill on Sunday and Public holidays (15%)</p>
                                <p style={{ paddingTop: "20px" }}> (Feel free to try out the form and a fake confirmation email will be sent to you!)</p>
                            </div>
                            <div className="reservation-form column>">
                                <div className="form-container">

                                    {activeStep < 3 && (
                                        <Box sx={{ width: '100%', padding: "40px 50px", color: "'white'" }} >
                                            <Stepper activeStep={activeStep} alternativeLabel>
                                                {steps.map((label) => (
                                                    <Step key={label}>
                                                        <StepLabel>{label}</StepLabel>
                                                    </Step>
                                                ))}
                                            </Stepper>

                                            {activeStep === 0 && (
                                                <Box component="form" sx={{ mt: 6 }} noValidate autoComplete="off">
                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <Grid container spacing={2}>
                                                            <Grid item xs={12} sm={6}>
                                                            <FormControl fullWidth >
                                                                <DatePicker 
                                                                    label="Select Date"
                                                                    value={selectedDate}
                                                                    onChange={(newValue) => setSelectedDate(newValue)}
                                                                    renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
                                                                />
                                                                </FormControl>
                                                            </Grid>
                                                            <Grid item xs={12} sm={6} textAlign="left">
                                                                <FormControl fullWidth >
                                                                    <InputLabel>Select Time</InputLabel>
                                                                    <Select
                                                                        label="Select Time"
                                                                        value={selectedTime}
                                                                        onChange={(e) => setSelectedTime(e.target.value)}
                                                                    >
                                                                        {timeOptions.map((time) => (
                                                                            <MenuItem key={time} value={time}>
                                                                                {time}
                                                                            </MenuItem>
                                                                        ))}
                                                                    </Select>
                                                                </FormControl>
                                                            </Grid>
                                                        </Grid>
                                                    </LocalizationProvider>
                                                    <TextField
                                                        required
                                                        label="Number of People"
                                                        type="number"
                                                        fullWidth
                                                        margin="normal"
                                                        value={numOfPeople}
                                                        onChange={(e) => setNumOfPeople(e.target.value)}
                                                        inputProps={{ min: 1, max: 10 }}
                                                        sx={{ mt: 4 }}

                                                    />
                                                </Box>
                                            )}
                                            {activeStep === 1 && (
                                                <Box component="form" sx={{ mt: 4 }} noValidate autoComplete="off">
                                                    <TextField
                                                        required
                                                        label="First Name"
                                                        fullWidth
                                                        margin="normal"
                                                        value={firstName}
                                                        onChange={handleFirstNameChange}
                                                        error={firstNameError}
                                                        helperText={firstNameError ? "Please enter your first name (letters and spaces only)" : ""}
                                                        inputProps={{
                                                            pattern: "[A-Za-z ]+",
                                                        }}
                                                    />
                                                    <TextField
                                                        required
                                                        label="Last Name"
                                                        fullWidth
                                                        margin="normal"
                                                        value={lastName}
                                                        error={lastNameError}
                                                        onChange={handleLastNameChange}
                                                        helperText={lastNameError ? "Please enter your last name (letters and spaces only)" : ""}
                                                        inputProps={{
                                                            pattern: "[A-Za-z ]+",
                                                        }}
                                                    />
                                                    <TextField
                                                        required
                                                        label="Email"
                                                        type="email"
                                                        fullWidth
                                                        margin="normal"
                                                        value={email}
                                                        error={emailError}
                                                        onChange={handleEmailChange}
                                                        helperText={emailError ? "Please enter a valid email" : ""}
                                                        inputProps={{
                                                            type: "email",
                                                        }}
                                                    />
                                                    <TextField
                                                        label="Notes (Optional)"
                                                        multiline
                                                        fullWidth
                                                        margin="normal"
                                                        onChange={(e) => setNotes(e.target.value)}
                                                        value={notes}
                                                    />
                                                </Box>
                                            )}

                                            {activeStep === 2 && (
                                                <Box sx={{ mt: 6, color: "black", textAlign: 'left', lineHeight: 2 }}>
                                                    <p><strong>Name:</strong> {firstName + " " + lastName}</p>
                                                    <p><strong>Email:</strong> {email}</p>
                                                    <p><strong>Party:</strong> {numOfPeople}</p>
                                                    <p><strong>Date:</strong> {selectedDate.format('DD-MMM-YYYY (ddd)')}</p>
                                                    <p><strong>Time:</strong> {selectedTime}</p>
                                                    <p><strong>Notes:</strong> {notes ? notes : '-'} </p>
                                                </Box>
                                            )}


                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                                                <Button disabled={activeStep === 0} onClick={handleBack}>
                                                    Back
                                                </Button>
                                                <Button variant="contained" onClick={handleNext} type="submit">
                                                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                                                </Button>
                                            </Box>
                                        </Box>

                                    )}

                                </div>

                            </div>
                        </div>



                    )}
                    {activeStep >2 && (
                    <div className="confirmation-box">
                        <h3>THANK YOU FOR BOOKING</h3>
                        <p>A confirmation email will be sent to your email soon.</p>
                    </div>
    )}

                </div>










            </section>
            <div id="footer">
                <div className="footerLogoContainer">
                    <a href="/">
                        <img src="new_logo.png" id="footerLogo"></img>
                    </a>
                </div>
                <div className="contactWrap">
                    <div className="row">
                        <div className="col">
                            <div className="row-title">HOURS</div>
                            <div className="row" id="openingHours">
                                <ul>
                                    <li>Tuesday - Sunday:</li>
                                    <li>6:00 pm - 12:00 am</li>

                                </ul>
                            </div>
                        </div>
                        <div class="vl"></div>
                        <div className="col">
                            <div className="row-title">VISIT US</div>
                            <div className="row">
                                <p>123 Flinders Street, Melbourne VIC 3000</p>


                            </div>
                        </div>
                        <div class="vl"></div>
                        <div className="col">
                            <div className="row-title">CONTACT</div>
                            <div className="row" id="contact">
                                <ul>
                                    <li>
                                        <p>info@restoproject.com</p>
                                    </li>
                                    <div id="icons">
                                        <a href="http://www.facebook.com"><i class="fa-brands fa-square-facebook"></i></a>
                                        <a href="http://www.instagram.com"><i class="fa-brands fa-square-instagram"></i></a>
                                        <a href="mailto: info@restoproject.com"><i class="fa-solid fa-envelope"></i></a>
                                    </div>
                                </ul>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};
export default Booking;