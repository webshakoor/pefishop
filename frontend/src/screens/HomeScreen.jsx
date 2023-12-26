import React from 'react'
import { useEffect,useState } from 'react';
//import Container from 'react-bootstrap/Container';
import {Row,Col } from 'react-bootstrap';
import axios from 'axios'

 //import products from '../Products.js'
 import Product from '../components/Product.jsx'

const HomeScreen = () => {
  const [products,setProducts] = useState([]);
  useEffect(()=>{
      const fetchProducts= async () => {
        const {data} = await axios.get('/api/products');
        setProducts(data)
     
      }
      fetchProducts()
  },[])


  return (
    <div>
      
        <Row>
          {products.map((pro)=>(
            <Col sm={12} md={12} lg={4} xl={4}>
            <Product pro={pro}></Product>
            </Col>
          ))}
        </Row>
      
     
    </div>
  )
}

export default HomeScreen