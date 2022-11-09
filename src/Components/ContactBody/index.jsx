import React from 'react';
import "./index.css"
import { Container, Row, Col } from "reactstrap";
import { FaMap } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { AiFillPhone } from "react-icons/ai"
import Divider from '@mui/material/Divider';
import ReactWhatsapp from 'react-whatsapp';

// import Fade from 'react-reveal/Fade';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



function ContactBody() {
    return <>
        <div className='contactBanner'>
            <Container
                fluid
            >
                <Row  >
                    <Col className='contactleftCol' md="6"  >
                        {/* <Fade duration={2500} left> */}
                        <div >
                            <h3 className='contactText' style={{ fontSize: "55px", fontFamily: "Poppins", color: "black", fontWeight: '600' }}>
                                Contact Us
                            </h3>
                            <h3 style={{ lineHeight: "25px", fontSize: "14px", fontFamily: "Poppins", color: "gray", fontWeight: '500' }}>
                                Feel free to contact us at any time, we are here for our prime clients.
                            </h3>
                            <br />
                            <Divider />
                            <br />
                            <div style={{ display: "flex" }}>
                                <FaMap size={20} color="#4175FC" />
                                <h3 style={{ padding: "0px 20px", lineHeight: "25px", fontSize: "14px", fontFamily: "Poppins", color: "gray", fontWeight: '500' }}>
                                30 N GOULD ST STE 26693, SHERIDAN, WY
                                </h3>
                            </div>
                            <div style={{ display: "flex" }}>
                                <MdEmail size={20} color="#4175FC" />
                                <h3 style={{ padding: "0px 20px", lineHeight: "25px", fontSize: "14px", fontFamily: "Poppins", color: "gray", fontWeight: '500' }}>
                                    sales@supplyspace.co
                                </h3>
                            </div>
                            <div style={{ display: "flex" }}>
                                <AiFillPhone size={20} color="#4175FC" />
                                <h3 style={{ padding: "0px 20px", lineHeight: "25px", fontSize: "14px", fontFamily: "Poppins", color: "gray", fontWeight: '500' }}>
                                    +1307205-9695
                                </h3>
                            </div>

                        </div>
                        {/* </Fade> */}
                    </Col>
                    <Col md="6" style={{ display: "flex", alignItems: "center", }}>
                        <div style={{ padding: "40px 20px", border: "2px solid lightgray", backgroundColor: "white", borderRadius: "8px", margin: "20px", minHeight: "70%", width: "100%" }}>
                            <h3 style={{ fontSize: "35px", fontFamily: "Poppins", color: "black", fontWeight: '600' }}>
                                Ask Your Queries
                            </h3>
                            <br />
                            <TextField id="outlined-basic" label="Your Email" style={{ width: "100%" }} variant="outlined" />
                            <br />
                            <br />
                            <TextField id="outlined-basic" label="Subject" style={{ width: "100%" }} variant="outlined" />
                            <br />
                            <br />
                            <TextField id="outlined-basic" label="Message" multiline
                                rows={4} style={{ width: "100%" }} variant="outlined" />
                            <br />
                            <br />
                            <div style={{ display: "flex", justifyContent: "center" }}>

                            </div>
                            <ReactWhatsapp style={{ border: "none", backgroundColor: "white" }} number="13072059695"   >
                                <Button variant="contained">Send Message</Button>
                            </ReactWhatsapp>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>

    </>
}

export default ContactBody;