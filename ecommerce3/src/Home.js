import React from 'react'
import './Home.css';
import Product from './Product';
import './Home.css'
export default function Home() {
  return (
    <div className='home'>
  
      <img className='home_image' src='./images/home.jpg' alt='heloo'/>
      <div className='home_row'>
        <Product 
            id="12"
            title="iPhone 14"
            price={80000}
            rating={4}
            image= "./images/iphone14.jpg"
        />
        <Product 
            id="12"
            title="iPhone14"
            price={1100}
            rating={4}
            image= "./images/iphone14.jpg"
        />
        <Product 
            id="12"
            title="iPhone14"
            price={1100}
            rating={4}
            image= "./images/iphone14.jpg"
        />
         <Product 
            id="12"
            title="iPhone 14"
            price={80000}
            rating={4}
            image= "./images/iphone14.jpg"
        />
         <Product 
            id="12"
            title="iPhone 14"
            price={80000}
            rating={4}
            image= "./images/iphone14.jpg"
        />
         <Product 
            id="12"
            title="iPhone 14"
            price={80000}
            rating={4}
            image= "./images/iphone14.jpg"
        />
         <Product 
            id="12"
            title="iPhone 14"
            price={80000}
            rating={4}
            image= "./images/iphone14.jpg"
        />
         <Product 
            id="12"
            title="iPhone 14"
            price={80000}
            rating={4}
            image= "./images/iphone14.jpg"
        />
      </div>
    </div>
  )
}
