import React from 'react'; 
import "./index.css"
import { Container, Row, Col, Button } from "reactstrap";

// import Fade from 'react-reveal/Fade';

 

function AboutBanner() {
    return <>
        <div className='aboutBanner'>
            <Container
                fluid="md"
            >
                <Row >
                    <Col sm="3">
                    </Col>
                    <Col className='abtleftCol' sm="6"  >
                        {/* <Fade duration={2500} left> */}
                            <div style={{cursor:"pointer"}} >
                                <h3 style={{textAlign:"center", fontSize: "55px", fontFamily: "Poppins", color: "black", fontWeight: '600' }}>
                               About Us
                                </h3>
                                <h3 style={{textAlign:"center",lineHeight:"25px", fontSize: "17px", fontFamily: "Poppins", color: "gray", fontWeight: '500' }}>
                                Supply Nodes is an Ecommerce platform with provides a variety of products with attractive, simpler, & elegant Designs & products in difference categories i.e. Pet supplies, Home and Kitchen & Health and Beauty. Our main aim is to secure the customers satisfaction not a client.
                                </h3>
                                
                            </div>

                        {/* </Fade> */}
                    </Col>

                    <Col sm="3">
                    </Col>
                   


                </Row>
            </Container>

        </div>

    </>
}

export default AboutBanner;