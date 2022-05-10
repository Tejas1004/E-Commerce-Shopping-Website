import React, { Fragment } from 'react'
import { CgMouse } from "react-icons/all";
import "./Home.css";
import MetaData from '../layout/MetaData';
import ProductCard from "./ProuductCard";

const product = {
  name:"blue Tshirt",
  images:[{url:"https://5.imimg.com/data5/YD/QR/AO/SELLER-1445907/corporate-uniform-500x500.jpg"}],
  price:"₹6000",
  _id:"Tejas",
}

const Home = () => {
  return (
    <Fragment>
       <MetaData title="E-COMMERCE" /> 

          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="/">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Featuared Products</h2>
          <div className="container" id="container">
            <ProductCard product = {product}/>
            <ProductCard product = {product}/>
            <ProductCard product = {product}/>
            <ProductCard product = {product}/>
            <ProductCard product = {product}/>
            <ProductCard product = {product}/>
            <ProductCard product = {product}/>
            <ProductCard product = {product}/>
          </div>
    </Fragment>
  )
}

export default Home