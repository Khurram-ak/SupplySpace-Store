import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import vogue1 from "../../assets/images/vogue1.jpg"
import vogue2 from "../../assets/images/vogue2.jpg"
import vogue3 from "../../assets/images/vogue3.jpg"
import "./index.css"
export default function Vogue() {

    return <>

        <Container>
            <Row>
                <Col style={{ display: "flex", justifyContent: "center",flexDirection:"column",alignItems:"center" }}>
                    <p style={{ fontSize: "34px", fontWeight: "700",fontFamily: "Poppins" }} >
                        Vogue
                    </p>

                </Col>
            </Row>
        </Container>
        <br />
        <br />

        <Container style={{   cursor: 'pointer' }} >
            <Row>
                <Col md="4">
                    <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
                    <img src={vogue1} style={{width:'100%'}} />
                    <p  style={{ fontSize: "24px", fontWeight: "700",fontFamily: "Poppins",marginTop:"12px" }}>Most Loved Product</p>
                    <p  style={{ fontSize: "24px", fontWeight: "700",fontFamily: "Poppins" }}>Elegant Fragrance</p>
                    </div>
                </Col>
                <Col md="4">
                <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>

                    <p  style={{ fontSize: "24px", fontWeight: "700",fontFamily: "Poppins" }}>Top Sold Product</p>
                    <p  style={{ fontSize: "24px", fontWeight: "700",fontFamily: "Poppins" }}>Dog Feed</p>
                    <img src={vogue2} style={{width:'100%'}} />
                    </div>
                </Col>
                <Col md="4">
                <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
                    <img src={vogue3} style={{width:'100%'}} />
                    <p  style={{ fontSize: "24px", fontWeight: "700",fontFamily: "Poppins",marginTop:"12px" }}>New Edition</p>
                    <p  style={{ fontSize: "24px", fontWeight: "700",fontFamily: "Poppins" }}>Cocktail Shaker</p>
                    </div>
                </Col>
            </Row>
            
        </Container>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

    </>
}
