import React from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import {Link} from 'react-router'
import styles from './Product.module.css'



function ProductCard({product, flex, renderDesc}) {

const {image, title, id, rating, price, description} = product;



function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}



  return (
    <>
      <div
        className={`${styles.CardWrapper} ${flex ? styles.product_flexed : ""}`}
      >
        <Link to={`/products/${id}`}>
          <img src={image} alt="" />
        </Link>

        <div>
          <h3>{
  truncate(title, 60)
}
</h3>
          {renderDesc && (
            <div style={{ maxWidth: "600px" }}>
              {description} 
            </div>
          )}
          <div className={styles.rating}>
            {/* rating */}
            <Rating value={rating?.rate} precision={0.1} />
            {/* rating counter */}
            <small>{rating?.count}</small>
          </div>
          <div className={styles.price}>
            {/* price  */}
            <CurrencyFormat amount={price} />
          </div>
          <button className={styles.button}>add to cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductCard
