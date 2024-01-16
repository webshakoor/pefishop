import React from 'react'
import {Row,Col } from 'react-bootstrap';
import { useGetProductsQuery } from '../slices/productApiSlice.js';
import Product from '../components/Product.jsx'


const HomeScreen = () => {
 const {data:products, isLoading, error} = useGetProductsQuery()
 

  return (
    <>
      {isLoading ? (
        <h2>...Loading</h2>
      ) : error ? (<div>{error?.data?.message || error.error}</div>) : (<>
           <Row>
           {products.map((pro)=>(
             <Col sm={12} md={12} lg={4} xl={4}>
             <Product pro={pro}></Product>
             </Col>
           ))}
        </Row>
      </>)}
   
    </>
   
  )
}

export default HomeScreen