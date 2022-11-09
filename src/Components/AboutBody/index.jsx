import React from 'react';
import "./index.css"
import { Container, Row, Col, Button } from "reactstrap";
import { FaStore } from "react-icons/fa"
import { FaCertificate } from "react-icons/fa"
import { BsCash } from "react-icons/bs"
import { TbTruckDelivery } from "react-icons/tb"
// import Fade from 'react-reveal/Fade';
import abt1 from "../../assets/images/abt1.png"
import abt2 from "../../assets/images/abt2.png"
import abt4 from "../../assets/images/abt4.png"
import abt3 from "../../assets/images/abt3.png"



function AboutBody() {
    return <>
        <div className='aboutBody'>
            <br/>
            <Container fluid="md">
                <Row style={{ padding: "35px 0px", display: "flex", justifyContent: "center" }} >
                    <Col className='' lg="6"  >
                        {/* <Fade duration={2500} left> */}
                        <div >
                            <h3 style={{ fontSize: "35px", fontFamily: "Poppins", color: "black", fontWeight: '600' }}>
                                We Are Your Favourite, Online Store.
                            </h3>
                            <h3 style={{ lineHeight: "25px", fontSize: "14px", fontFamily: "Poppins", color: "gray", fontWeight: '500' }}>
                                The thing that makes us favourite is our quality of product including there unique ideas, simpler & attractive designs. We provides the product according to our client need.
                            </h3>
                            <h3 style={{ lineHeight: "25px", fontSize: "14px", fontFamily: "Poppins", color: "gray", fontWeight: '500' }}>
                                As we deals in different categories which makes us different from others is that we provide certified & registered products with pay-back guarantee & a speed delivery.
                            </h3>

                        </div>

                        {/* </Fade> */}
                    </Col>

                    <Col md="6">
                        <Container fluid="md">
                            <Row style={{ padding: "0px 0px", display: "flex", justifyContent: "center" }} >

                                <Col md="6">

                                    <div style={{ height: "200px", width: "auto", }}>
                                        <FaStore size={30} color="#4175FC" />
                                        <h3 style={{ marginTop: "12px", fontSize: "20px", fontFamily: "Poppins", color: "black", fontWeight: '600' }}>
                                            Store
                                        </h3>
                                        <h3 style={{ lineHeight: "25px", fontSize: "14px", fontFamily: "Poppins", color: "gray", fontWeight: '500' }}>
                                            We deal in different categories like Pets, Home, Kitchen & Beauty & Health.
                                        </h3>
                                    </div>
                                    <div style={{ height: "200px", width: "auto", }}>
                                        <BsCash size={30} color="#4175FC" />
                                        <h3 style={{ marginTop: "12px", fontSize: "20px", fontFamily: "Poppins", color: "black", fontWeight: '600' }}>
                                            Pay-back Guarantee
                                        </h3>
                                        <h3 style={{ lineHeight: "25px", fontSize: "14px", fontFamily: "Poppins", color: "gray", fontWeight: '500' }}>
                                            We assure our essential clients a pay-back guarantee, they are not satisfied .   </h3>
                                    </div>


                                </Col>
                                <Col md="6">
                                    <div style={{ height: "200px", width: "auto", }}>
                                        <FaCertificate size={30} color="#4175FC" />
                                        <h3 style={{ marginTop: "12px", fontSize: "20px", fontFamily: "Poppins", color: "black", fontWeight: '600' }}>
                                            Certified Products
                                        </h3>
                                        <h3 style={{ lineHeight: "25px", fontSize: "14px", fontFamily: "Poppins", color: "gray", fontWeight: '500' }}>
                                            All the products we have in our store are registered & certified by authorities.
                                        </h3>
                                    </div>
                                    <div style={{ height: "200px", width: "auto", }}>
                                        <TbTruckDelivery size={30} color="#4175FC" />
                                        <h3 style={{ marginTop: "12px", fontSize: "20px", fontFamily: "Poppins", color: "black", fontWeight: '600' }}>
                                            Delivery
                                        </h3>
                                        <h3 style={{ lineHeight: "25px", fontSize: "14px", fontFamily: "Poppins", color: "gray", fontWeight: '500' }}>
                                            We provides a very fast delivery, we aims to deliver our essence as soon as possible.     </h3>
                                    </div>
                                </Col>

                            </Row>
                        </Container>

                    </Col>



                </Row>


            </Container>

            <Container style={{ backgroundColor: "#4175FC" }} fluid >
                <Row style={{ padding: "60px 30px" }} >
                    <Col md="3" style={{ padding: "5px 0px", display: "flex", justifyContent: "center", alignItems: "center", }}   >
                        <h3 style={{textAlign:"center", fontSize: "29px", fontFamily: "Poppins", color: "white", fontWeight: '600' }}>
                            Our Success Ratio
                        </h3>
                    </Col>
                    <Col md="3" style={{ padding: "5px 0px", display: "flex", justifyContent: "center", alignItems: "center" }}  >
                        <div>
                            <h3 style={{ textAlign: "center", fontSize: "29px", fontFamily: "Poppins", color: "white", fontWeight: '600' }}>
                                2000+
                            </h3>
                            <h3 style={{ textAlign: "center", fontSize: "18px", fontFamily: "Poppins", color: "white", fontWeight: '500' }}>
                                Sold Products
                            </h3>
                        </div>

                    </Col>
                    <Col md="3" style={{ padding: "5px 0px", display: "flex", justifyContent: "center", alignItems: "center" }}  >
                        <div>
                            <h3 style={{ textAlign: "center", fontSize: "29px", fontFamily: "Poppins", color: "white", fontWeight: '600' }}>
                                500+
                            </h3>
                            <h3 style={{ textAlign: "center", fontSize: "18px", fontFamily: "Poppins", color: "white", fontWeight: '500' }}>
                                Customers
                            </h3>
                        </div>

                    </Col>
                    <Col md="3" style={{ padding: "5px 0px", display: "flex", justifyContent: "center", alignItems: "center" }}  >
                        <div>
                            <h3 style={{ textAlign: "center", fontSize: "29px", fontFamily: "Poppins", color: "white", fontWeight: '600' }}>
                                10+
                            </h3>
                            <h3 style={{ textAlign: "center", fontSize: "18px", fontFamily: "Poppins", color: "white", fontWeight: '500' }}>
                                Product Categories
                            </h3>
                        </div>

                    </Col>
                </Row>
            </Container>


            <Container style={{ backgroundColor: "#F3F5F5" }} fluid >
                <Row style={{ padding: "80px 30px" }} >
                    <Col md="3" style={{ padding: "5px 0px", display: "flex", justifyContent: "center", alignItems: "center", }}   >
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <img src={abt1} alt="" style={{ width: "20%" }} />
                            <br />
                            <h3 style={{ textAlign: "center", fontSize: "25px", fontFamily: "Poppins", color: "black", fontWeight: '600' }}>
                                Worldwide Shipping
                            </h3>
                            <h3 style={{ textAlign: "center", fontSize: "14px", fontFamily: "Poppins", color: "black", fontWeight: '500' }}>
                                We provide a world wide shipping for our essential clients
                            </h3>
                        </div>
                    </Col>
                    <Col md="3" style={{ padding: "5px 0px", display: "flex", justifyContent: "center", alignItems: "center" }}  >
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <img src={abt2} style={{ width: "20%" }} alt="" />
                            <br />
                            <h3 style={{ textAlign: "center", fontSize: "25px", fontFamily: "Poppins", color: "black", fontWeight: '600' }}>
                                Best Quality
                            </h3>
                            <h3 style={{ textAlign: "center", fontSize: "14px", fontFamily: "Poppins", color: "black", fontWeight: '500' }}>
                                We provide the best quality of product & 100% durable material. No compromise over quality.
                            </h3>
                        </div>

                    </Col>
                    <Col md="3" style={{ padding: "5px 0px", display: "flex", justifyContent: "center", alignItems: "center" }}  >
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <img src={abt3} style={{ width: "20%" }} alt="" />
                            <br />
                            <h3 style={{ textAlign: "center", fontSize: "25px", fontFamily: "Poppins", color: "black", fontWeight: '600' }}>
                                Best Offers
                            </h3>
                            <h3 style={{ textAlign: "center", fontSize: "14px", fontFamily: "Poppins", color: "black", fontWeight: '500' }}>
                                We provides a best discounted offers for our essential customers & have a gifts for them.
                            </h3>
                        </div>

                    </Col>
                    <Col md="3" style={{ padding: "5px 0px", display: "flex", justifyContent: "center", alignItems: "center" }}  >
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <img src={abt4} style={{ width: "20%" }} alt="" />
                            <br />
                            <h3 style={{ textAlign: "center", fontSize: "25px", fontFamily: "Poppins", color: "black", fontWeight: '600' }}>
                                Secure Payments
                            </h3>
                            <h3 style={{ textAlign: "center", fontSize: "14px", fontFamily: "Poppins", color: "black", fontWeight: '500' }}>
                                We provide the a secure payment gateway & trade assurance.
                            </h3>
                        </div>

                    </Col>
                </Row>
            </Container>

        </div>

    </>
}

export default AboutBody;