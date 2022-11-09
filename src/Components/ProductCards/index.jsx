import React, { useEffect, useState } from 'react'
import { Card, CardImg, CardBody, CardSubtitle, CardTitle } from 'reactstrap'
import "./index.css"
import { useNavigate } from "react-router-dom";


function ProductCards({data}) {


    const navigate=useNavigate();
    const {id,image,title,price} = data;


    return <>
        <div className="cardUP" onClick={()=>{navigate(`/detailPage/${id}/${title}/${price}`)}}>
            <Card className="sellerCard">
                <CardImg top width="100%" style={{ borderRadius: "8px",height:"330px",cursor:"pointer" }} src={image} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="p" style={{ fontFamily: "PoppinsBold",fontSize:"18px",cursor:"pointer" }}>{title} </CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted"> </CardSubtitle>
                    <p style={{fontFamily:"Poppins",fontSize:"19px"}} className="cardText2" >${price} </p><strike><span className="mb-2 text-muted cardText" >${price+20}</span></strike>
                </CardBody>
            </Card>
        </div>

    </>
}

export default ProductCards;