import React from 'react'
import './Product.css'

export default function Product({id,title,image,price,rating}) {
  return (
    <div className='product'>
        <img src={image} alt=''/>
        <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
                <small>₹</small>
                <strong>{price}</strong>
        </p>
        </div>
       
        <div className='product_rating'>
        <p>Rating: </p>
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p> * </p>
                    ))
                }
        </div>
        
        
        <button>Add to Cart</button>
    </div>
  )
}
