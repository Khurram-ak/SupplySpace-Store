import React from 'react'; 
import "./index.css"
import { Container, Row, Col, Button } from "reactstrap";
import homebanner from "../../assets/images/homebanner.png"

// import Fade from 'react-reveal/Fade';

 

function HomeBanner() {
    return <>
        <div className='homeBanner'>
            <Container
                fluid="md"
            >
                <Row >
                    <Col className='homeleftCol' md='6'>
                        {/* <Fade duration={2500} left> */}
                            <div >
                                <h3 style={{ fontSize: "17px", fontFamily: "Poppins", color: "black", fontWeight: '600' }}>
                                Best Quality Products
                                </h3>
                                <h3 className='homeText' style={{ width: "107%", fontSize: "55px", fontFamily: "Poppins", color: "black", fontWeight: '600' }}>
                                We Sell What You Want!
                                </h3>
                                <h3 style={{ fontSize: "15px", fontFamily: "Poppins", color: "black", fontWeight: '500' }}>
                                We aims to provide our prime customers a quality of products because we sell what you want!
                                </h3>
                            </div>

                        {/* </Fade> */}
                    </Col>

                    <Col className='homerightCol' md='6'>
                        {/* <Fade duration={2500} right> */}
                            <div  >
                                <img className='img' src={homebanner}   style={{ borderRadius: "12px",width:'95%' }} />
                            </div>
                        {/* </Fade > */}

                    </Col>


                </Row>
            </Container>

        </div>

    </>
}

export default HomeBanner;