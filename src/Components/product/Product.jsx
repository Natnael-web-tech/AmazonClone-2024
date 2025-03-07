import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import styles from './Product.module.css'
// import Loader from '../Loader/Loader'
import CustomLoader from '../Loader/CustomLoader'


function Product() {

const [products, setProducts] = useState([])
const [isLoading, setIsLoading] = useState(false)

useEffect(()=> {
setIsLoading(true);
    axios.get("https://fakestoreapi.com/products")
.then((res)=> {
    setProducts(res.data)
    setIsLoading(false);
}).catch((err)=> {
    console.log(err)
    setIsLoading(false);
})
}, [])


  return (
    <>
      {isLoading ? (
        <CustomLoader />
      ) : (
        <section className={styles.products}>
          {products.map((singleProduct) => (
            <ProductCard
             key={singleProduct.id}
              product={singleProduct} 
              renderAddCart={true}
              
              />
          ))}
        </section>
      )}
    </>
  );
}

export default Product
