 import React from "react";
import {useGetProductDetailsQuery} from '../slices/productApiSlice.js'
import { useParams , useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Form,Button } from "react-bootstrap";
 import { addToCart } from "../slices/cartSlice.js";
import Rating from "../components/Rating";
//import Product from "../components/Product.jsx";

 
import {useDispatch} from 'react-redux'
const ProductScreen = () => {
 const {id:productId}  = useParams();

 const [qty,setQty] = useState(1)

 
 const dispatch = useDispatch ()
 const navigate = useNavigate ()
 
 const {data:pro,isLoading,error} = useGetProductDetailsQuery(productId)
 
 
 const addToCartHandler = () => {
  dispatch (addToCart({...pro, qty}))
  navigate('/cart')
 } 

  return (
    <>
      {isLoading?(
        <h2>Loading...</h2>
      ):error?(
        <div>{error?.data?.message || error.error}</div>
      ):(<>
        <Row>
        <Col className="my-col" sm={12} md={5} lg={5}>
          <img className="img-size" src={pro.image}></img>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <Row >{pro.name}</Row>
          <Row>
            <Rating 
              value={pro.rating}
              
              text={`${pro.numReviews}reviews`}
            ></Rating>
          </Row>
          <Row>Price:${pro.price}</Row>
          <Row>{pro.description}</Row>
        </Col>
        <Col sm={12} md={3} lg={3}>
          <Card style={{ width: "18rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>Price: ${pro.price}</ListGroup.Item>
              <ListGroup.Item>
                Status: {pro.countInStock > 0 ? "InStock" : "Outof Order"}
              </ListGroup.Item>

              {pro.countInStock> 0 && ( 
                <ListGroup.Item>
                  <Row>
                    <Col>QTY</Col>
                    <Col>
                    <Form.Control
                    as='select'
                    value={qty}
                    onChange= {(e) => setQty( Number(e.target.value))}
                     >
                      {[...Array(pro.countInStock).keys()] .map((x) =>(
                        <option key={x+1} value={x+1}>
                            {x+1}
                        </option>
                      )) }
                    </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ) }


              <ListGroup.Item>
              
                <Button className="btn-block" 
                type="button"
                disabled={pro.countInStock===0}
                onClick={addToCartHandler}>Add To Cart</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      </>)}
    
    </>
  );
};

export default ProductScreen;