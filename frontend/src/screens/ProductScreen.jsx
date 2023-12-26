import { useEffect,useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
 import axios from 'axios'
import Rating from "../components/Rating";

 

const ProductScreen = () => {
  
  //const [pro,setPro] = useState([])
  const [pro,setPro] = useState([])
  console.log(pro)
  const {id:productId}  = useParams();
  useEffect(()=>{
  const fetchProduct = async() => {
    const {data}= await axios.get(`/api/products/${productId}`)
    setPro(data)
      }
  fetchProduct()
  
  },[productId])


  return (
    <>
      {/*   <Link to='/' className="btn btn-light">Home</Link> */}

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
                Status: {pro.countInStock >= 0 ? "InStock" : "OutofOrder"}
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <Button>Add To Cart</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
