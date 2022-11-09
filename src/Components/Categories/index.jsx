import React from 'react';
import "./index.css"
import { Container, Row, Col, Button } from "reactstrap";
import cate1 from "../../assets/images/cate1.jpg"
import cate2 from "../../assets/images/cate2.jpg"
import cate3 from "../../assets/images/cate3.jpg"
// import Fade from 'react-reveal/Fade';
import "./index.css"



function Categories() {
    return <>
        <br></br>
        <div className='Categories'>

            <Container>
                <Row>
                    <Col style={{ display: "flex", justifyContent: "center" }}>
                        <h3 style={{ fontSize: "35px", fontFamily: "Poppins", color: "black", fontWeight: '600' }}>
                            Our Selling Categories
                        </h3>
                    </Col>
                </Row>
                <br></br>

                <Row >
                    <Col className='cateLeftCol' md='4'>
                        <img src={cate1} style={{ width: "100%" }} />
                        <br></br>

                        <h3 style={{ fontSize: "35px", fontFamily: "Poppins", color: "black", fontWeight: '600' }}>
                            Pet Supplies
                        </h3>
                        <h3 style={{ fontSize: "15px",lineHeight:"23px", fontFamily: "Poppins", color: "black", fontWeight: '600' }}>
                            Products for and services related to the nourishment or care of pets other than horses & there feed.
                        </h3>
                    </Col>
                    <Col className='midCol' md='4'>
                    <img src={cate2} style={{ width: "100%" }} />
                        <br></br>

                        <h3 style={{ fontSize: "35px", fontFamily: "Poppins", color: "black", fontWeight: '600' }}>
                        Home & Kitchen
                        </h3>
                        <h3 style={{ fontSize: "15px",lineHeight:"23px", fontFamily: "Poppins", color: "black", fontWeight: '600' }}>
                        The cooking utensils and equipment can be classified into: Large equipment: e.g Ovens, Toaster, Shakers, Grinders e.t.c.   </h3>
                    </Col>

                    <Col className='cateRightCol' md='4'>
                    <img src={cate3} style={{ width: "100%" }} />
                        <br></br>

                        <h3 style={{ fontSize: "35px", fontFamily: "Poppins", color: "black", fontWeight: '600' }}>
                        Health & Beauty
                        </h3>
                        <h3 style={{ fontSize: "15px",lineHeight:"23px", fontFamily: "Poppins", color: "black", fontWeight: '600' }}>
                        Health and beauty encompasses a variety of products, including fragrances, makeup, hair care, bathing, nail care, and shaving.
                        </h3>

                    </Col>


                </Row>
            </Container>

        </div>

    </>
}

export default Categories;