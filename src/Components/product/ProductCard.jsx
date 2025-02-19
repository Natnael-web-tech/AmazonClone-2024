import React from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import {Link} from 'react-Router'
import styles from './Product.module.css'



function ProductCard({product}) {

const {image, title, id, rating, price} = product;


  return (
    <div className={styles.CardWrapper}>
     <Link to={`/products/${id}`}>
        <img src={image} alt="" />
        </Link>

<div>
    <h3>{title}</h3>

    <div className={styles.rating}>
        {/* rating */}
        <Rating value={rating?.rate} precision= {0.1}/>
        {/* rating counter */}
        <small>{rating?.count}</small>
    </div>
<div>
{ /* price  */}
<CurrencyFormat amount={price}/>
</div>
<button className={styles.button}>add to cart</button>
</div>

    </div>
  )
}

export default ProductCard
