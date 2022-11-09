import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap"
import "./index.css"

import product1 from "../../assets/images/product1.png"
import product2 from "../../assets/images/product2.png"
import product3 from "../../assets/images/product3.png"
import product4 from "../../assets/images/product4.png"
import product5 from "../../assets/images/product5.png"
import product6 from "../../assets/images/product6.png"
import product7 from "../../assets/images/product7.png"
import product8 from "../../assets/images/product8.png"
import ReactWhatsapp from 'react-whatsapp';
function DetailPageBody() {

    const { id, title, price } = useParams();
    const [image, setImage] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        if (id == 1) {
            setImage(product1)
            setDescription("Fully welded all steel design with a lifetime warranty.Flat blade back prevents soil buildup, reducing added weight during use.While the large turned step gives plenty of pushing surface.")
        }
        else if (id == 2) {
            setImage(product2)
            setDescription("The innovative design of our Fiskars shears makes trimming grasses easier than ever. It's 36in length eliminates kneeling and bending for fewer post-gardening aches and pains. Position blades vertical for edging, or horizontal for getting into those hard to mow areas.")
        }
        else if (id == 3) {
            setImage(product3)
            setDescription("Mini skulls will bring lots of shivers and smiles. New bite size morsels are extra cute or creepy, depending on how you decorate and serve them.")
        }
        else if (id == 4) {
            setImage(product4)
            setDescription("Mini skulls will bring lots of shivers and smiles. New bite size morsels are extra cute or creepy, depending on how you decorate and serve them.")
        }
        else if (id == 5) {
            setImage(product5)
            setDescription(" the Baker's Half Sheet is an essential tool in the kitchen you will use in a variety of ways from sheet pan dinners, to baked goods to food prep. Our top-rated Naturals® Bakeware collection is made of pure aluminum for superior heat conductivity and produces consistent evenly browned baked goods every time. These premium pans have a lifetime durability and will never rust.")
        }
        else if (id == 6) {
            setImage(product6)
            setDescription("Buy, sell, dream, and scheme the way to riches with the Monopoly board game! Select a favorite Monopoly token, place it on Go, and roll the dice to own it all! Featuring classic Monopoly gameplay, this favorite family board game is all about buying, selling, and trading properties to win. Chance or Community cards can be a game changer. They can make a player richer--or send someone to Jail! Looking for games for Family Game Night? The Monopoly game is a Family Game Night staple.")

        }
        else if (id == 7) {
            setImage(product7)
            setDescription("Salsha brings you the best price for Engineering Truck With Die Cast For Kids with express shipping all over Pakistan.Features: Engineering Truck (4 Module), Premium Quality,Perfect Finishing,Durable,")
        }
        else if (id == 8) {
            setImage(product8)
            setDescription("Certified to reduce 99% of lead as well as other potentially harmful contaminants, KitchenAid™ filters offer convenient, filtered water for you and your family. For the cleanest water, replace your KitchenAid™ filter every 6 months (or 200 gallons). ")
        }


    }, [])


    return <>
        <div style={{ backgroundColor: "#F3F5F5", padding: "60px 40px" }}>

            <Container fluid style={{ backgroundColor: "white", }}>
                <Row style={{ paddingTop: "60px", paddingLeft: "0px", paddingBottom: "50px" }} >
                    <Col md="6">

                        <img src={image} style={{ width: "100%" }} alt="" />
                    </Col>
                    <Col className='detailRightCol' md="6" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <div>

                            <h3 style={{ fontSize: "27px", fontFamily: "Poppins", color: "", fontWeight: '600', cursor: "pointer" }}>
                                {title}
                            </h3>
                            <br />
                            <h3 style={{ fontSize: "17px", fontFamily: "Poppins", color: "gray", fontWeight: '500', cursor: "pointer" }}>
                                {description}
                            </h3>
                            <br />

                            <h3 style={{ fontSize: "22px", fontFamily: "Poppins", color: "", fontWeight: '600', cursor: "pointer" }}>
                                SKU: 9077990
                            </h3>
                            <br />
                            <h3 style={{ fontSize: "20px", fontFamily: "Poppins", color: "", fontWeight: '600', cursor: "pointer" }}>
                                Price: ${price}
                            </h3>
                            <br />
                            <h3 style={{ fontSize: "20px", fontFamily: "Poppins", color: "", fontWeight: '600', cursor: "pointer" }}>
                                Colors:
                            </h3>
                            <br />


                            <div style={{ display: 'flex' }}>

                                <div className='colorBox' style={{ backgroundColor: "red" }} >

                                </div>
                                <div className='colorBox' style={{ backgroundColor: "#FE6464" }} >

                                </div>
                                <div className='colorBox' style={{ backgroundColor: "#173F5F" }} >

                                </div>
                                <div className='colorBox' style={{ backgroundColor: "#FFBF00" }}>

                                </div>

                            </div>
                            <br></br>
                        </div>

                        <ReactWhatsapp style={{border:"none",backgroundColor:"white"}}  number="13072059695"   >
                                <button className="qouteBtn">Order Now</button>
                        </ReactWhatsapp>


                    </Col>

                </Row>

            </Container>
        </div>
    </>
}

export default DetailPageBody;