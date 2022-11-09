import React from 'react'
import { Container, Row, Col } from 'reactstrap' 
import "./index.css"


export default function Feature() {

    return <>

        <Container>
            <Row>
                <Col style={{ display: "flex", justifyContent: "center",flexDirection:"column",alignItems:"center" }}>
                    <p style={{textAlign:"center", fontSize: "34px", fontWeight: "700",fontFamily: "Poppins" }} >
                       Our Featured Products
                    </p>
                </Col>
            </Row>
        </Container>
     
        <br></br>
        <br></br>
        <Container fluid>
            <Row className='featureBg'>
 
                <Col style={{display:"flex",alignItems:"center"}}>
                    <Container>
                        <Row>
                            <Col>
                            <h3 style={{ fontSize: "27px", fontFamily: "Poppins", color: "white", fontWeight: '600' }}>
                                Hurry Up!
                            </h3>
                            <h3 style={{ fontSize: "27px", fontFamily: "Poppins", color: "white", fontWeight: '600' }}>
                                Deals of this week
                            </h3>
                            <h3 style={{ fontSize: "20px", fontFamily: "Poppins", color: "", fontWeight: '600' }}>
                            Get a 20% Discount over Home & Kitchen, Use Code Salsha2022 
                            </h3>
                    <br />
                    <button className='shopNowBtn' style={{fontFamily:"PoppinsBold"}} >Shop Now</button>
                             </Col>
                        </Row>
                    </Container>

                </Col>
            </Row>
        </Container>


    </>
}
