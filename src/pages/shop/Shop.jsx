import React from 'react'
import {PRODUCTS} from '../../products.js'
import Product from './Product.jsx'
import './shop.css'

function Shop() {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>P's Shop</h1>
        </div>
        <div className='products'>
            {PRODUCTS.map((product) => <Product data={product} />)}
        </div>
    </div>
  )
}

export default Shop