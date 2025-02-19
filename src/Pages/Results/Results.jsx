import React, { useEffect, useState } from 'react'
import './Results.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import {useParams} from 'react-Router'
import axios from 'axios'
import { productUrl } from '../../Api/EndPoints'
import styles from './Results.module.css'
import ProductCard from '../../Components/product/ProductCard'
import Loader from '../../Components/Loader/Loader'
function Results() {
const [results, setResults] = useState([])
const [isLoading, setIsLoading] = useState(false)
const {categoryName} = useParams()

// console.log(categoryName) 

useEffect(()=> {
  setIsLoading(true);
axios.get(`${productUrl}/products/category/${categoryName}`).then((res) => {
   
    setResults(res.data)
    setIsLoading(false);
  }).catch((err) => {
     setIsLoading(false);
    console.log(err);
  });
},[])

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category/{categoryName}</p>
        <hr />

        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles.products_container}>
            {results?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results
