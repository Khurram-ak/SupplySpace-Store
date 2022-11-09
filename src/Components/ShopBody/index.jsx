import React from 'react';
import { Container, Row, Col } from "reactstrap"
import ProductCards from '../ProductCards';
import product1 from "../../assets/images/product1.png"
import product2 from "../../assets/images/product2.png"
import product3 from "../../assets/images/product3.png"
import product4 from "../../assets/images/product4.png"
import product5 from "../../assets/images/product5.png"
import product6 from "../../assets/images/product6.png"
import product7 from "../../assets/images/product7.png"
import product8 from "../../assets/images/product8.png"

const productData=[
    {   id:1,
        image:product1,
        title:"Leonard All Steel Nursery Spades",
        price:65.40
    },
    {
        id:2,
        image:product2,
        title:"Fiskars Long-Handled Grass Shears with Swivel Head",
        price:40.64
    },
    {
        id:3,
        image:product3,
        title:"ACTION HEROES ALLIANCE SET FOR KIDS BLACK",
        price:12.44
    },
    {
        id:4,
        image:product4,
        title:"Skull Bites Cakelet Pan",
        price:38.00
    },
    {
        id:5,
        image:product5,
        title:"Naturals® Baker's Half Sheet",
        price:18.64
    },
    {
        id:6,
        image:product6,
        title:"Monopoly Board Game for Ages 8+",
        price:20.00
    },
    {
        id:7,
        image:product7,
        title:"ENGINEERING TRUCK WITH DIE CAST FOR KIDS",
        price:6.25
    },
    {
        id:8,
        image:product8,
        title:"KitchenAid Refrigerator Water Filter",
        price:54.25
    },
     
]


function ShopBody() {
    return <>
        <div className='shopBox' style={{ backgroundColor: "#F3F5F5", padding: "60px 40px" }}>

            <Container fluid style={{ backgroundColor: "white", }}>
                <Row style={{ paddingTop: "60px",paddingLeft:"40px" }} >
                    <Col>
                        <h3 style={{fontSize: "13px", fontFamily: "Poppins", color: "gray", fontWeight: '600' }}>
                            Home / Shop
                        </h3>
                        <h3 style={{ fontSize: "20px", fontFamily: "Poppins", color: "#4175FC", fontWeight: '600' }}>
                            Shop
                        </h3>
                    </Col>
                     
                </Row>
                <Row style={{ padding:"30px 40px",paddingLeft:"40px"   }} >
                    <Col>
                        <h3 style={{fontSize: "13px", fontFamily: "Poppins", color: "gray", fontWeight: '600' }}>
                           Showing all results
                        </h3>
                        
                    </Col>
                     
                </Row>
                <Row style={{ padding:"30px 40px",paddingLeft:"40px"   }} >
                <Col style={{ display: "flex", flexWrap: "wrap", justifyContent: 'center' }}>
                {productData.map(item=>{
                    return <ProductCards data={item}/>
                })
                }
                </Col>
                     
                </Row>
            </Container>
        </div>

    </>
}

export default ShopBody;