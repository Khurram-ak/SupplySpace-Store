import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import "./index.css"
import review1 from "../../assets/images/review1.png"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function Reviews() {

    return <>

        <Container>
            <Row>
                <Col style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                    <p style={{textAlign:"center", fontSize: "34px", fontWeight: "700",fontFamily: "Poppins" }} >
                        Our Happy Customers
                    </p>
                </Col>
            </Row>
        </Container>
        <br />

        <Container>
            <Row>
                <Col md='4' >
                    <div className='reviewBox'  >
                        <Container>
                            <Row>
                                <Col>
                                    <p>Being a customer is Supply Nodes, I 'm glad to see Supply Nodes is growing more faster.</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Stack spacing={1}>
                                        <Rating style={{color:"#084af3"}} name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                    </Stack>
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col style={{ display: "flex", alignItems: "center" }}>
                                    <div className='revImg' style={{ height: "60px", width: "60px", borderRadius: "50%" }}>
                                    </div>
                                    <p style={{ padding: "0px 20px" }}> Moose Foxx</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
                <Col md='4' >
                    <div className='reviewBox'  >
                        <Container>
                            <Row>
                                <Col>
                                    <p>As a Regular Customer of Supply Nodes, I'm really very satisfied with them.</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Stack spacing={1}>
                                        <Rating style={{color:"#084af3"}} name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                    </Stack>
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col style={{ display: "flex", alignItems: "center" }}>
                                    <div className='revImg2' style={{ height: "60px", width: "60px", borderRadius: "50%" }}>
                                    </div>
                                    <p style={{ padding: "0px 20px" }}> Moose Foxx</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
                <Col md='4' >
                    <div className='reviewBox'  >
                        <Container>
                            <Row>
                                <Col>
                                    <p>Supply Nodes is really a fast growing online store, which sells what we want.</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Stack spacing={1}>
                                        <Rating style={{color:"#084af3"}} name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                    </Stack>
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col style={{ display: "flex", alignItems: "center" }}>
                                    <div className='revImg3' style={{ height: "60px", width: "60px", borderRadius: "50%" }}>
                                    </div>
                                    <p style={{ padding: "0px 20px" }}> Moose Foxx</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
            </Row>
        </Container>


        <br></br>
        <br></br>

    </>
}
