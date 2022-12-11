import React from 'react';
import { Container, Row, Col } from "reactstrap"
import "./index.css"
import { BsFillTelephoneFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import { FaFacebook } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs"
import { IoLogoLinkedin } from "react-icons/io"
import { BsTwitter } from "react-icons/bs"

import footerLogo from "../../assets/images/nodesLogo.png"

function Footer( ) {
    return <>
        <div className='footer'>
            <Container fluid style={{ height: "auto",padding:"20px 40px" }}>
                <Row>
                    <Col className='location' style={{ padding: "40px 20px" }} lg="3">
                        <img src={footerLogo} style={{width:"100%"}} alt="" />
                        <br></br>
                        <br></br>
                        <div style={{ fontSize: "12px", fontFamily: "PoppinsMed", color: "white", display: "flex" }} >
                             
                            <p style={{cursor:"pointer" ,paddingLeft: "17px", fontSize: "27px", fontFamily: "PoppinsMed", color: "white" }}>Supply Nodes </p>

                        </div>
                        <div style={{paddingLeft:"17px",justifyContent:"space-around",width:"50%", fontSize: "18px", fontFamily: "PoppinsMed", color: "white", display: "flex" }} >
                        <FaFacebook/>
                        <BsTwitter/>
                        <IoLogoLinkedin size={20}/>
                        <BsInstagram/>
                        </div>


                    </Col>
                    <Col className='timings' style={{ padding: "40px 20px", display: "flex", flexDirection: "column", alignItems: "center" }} lg="3">
                        <h3 style={{cursor:"pointer", fontSize: "20px", fontFamily: "PoppinsBold", color: "white",lineHeight:"35px" }}>Get in Touch with Us for the Best Quality Products!</h3>
                        <br></br>

                            <p style={{cursor:"pointer", fontSize: "14px", fontFamily: "PoppinsMed", color: "white" }}>For latest products news, stay tuned with us.</p>

                    

                    </Col>
                    <Col className='timings' style={{ padding: "40px 20px", display: "flex", flexDirection: "column", alignItems: "start" }} lg="3">
                        <h3 style={{cursor:"pointer", fontSize: "20px", fontFamily: "PoppinsBold", color: "white" }}>Quick Links</h3>
                        <br></br>

                            <p style={{cursor:"pointer", fontSize: "14px", fontFamily: "PoppinsMed", color: "white" }}>Know More About Us </p>

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >

                            <p style={{ cursor:"pointer",fontSize: "14px", fontFamily: "PoppinsMed", color: "white" }}>Visit Store </p>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >

                            <p style={{ cursor:"pointer",fontSize: "14px", fontFamily: "PoppinsMed", color: "white" }}>Let’s Connect </p>
                        </div>

                    </Col>
                    <Col className='timings' style={{ padding: "40px 20px", display: "flex", flexDirection: "column", alignItems: "start" }} lg="3">
                        <h3 style={{cursor:"pointer", fontSize: "20px", fontFamily: "PoppinsBold", color: "white" }}>Important Links</h3>
                        <br></br>

                            <p style={{cursor:"pointer", fontSize: "14px", fontFamily: "PoppinsMed", color: "white" }}>Privacy Policy</p>

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >

                            <p style={{ cursor:"pointer",fontSize: "14px", fontFamily: "PoppinsMed", color: "white" }}>Terms & Conditions</p>
                        </div>


                    </Col>
                </Row>

            </Container>

            <Container fluid  style={{    backgroundColor: "black", height: "70px" }}>
            <Row  >
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center", height: "70px",padding:"0px 50px" }}>
                <h3 style={{  cursor:"pointer", fontSize: "12px", fontFamily: "PoppinsMed", color: "white" }}>Copyright © 2022 | Supply Nodes  </h3>
                <h3 style={{  cursor:"pointer", fontSize: "12px", fontFamily: "PoppinsMed", color: "white" }}> Powered By <a style={{textDecoration:"none",color:"white"}} href="https://www.khurramak.com/">KhurramAk</a>   </h3>

                </div>

            </Row>
        </Container>
        </div>
       
    </>
}

export default Footer;