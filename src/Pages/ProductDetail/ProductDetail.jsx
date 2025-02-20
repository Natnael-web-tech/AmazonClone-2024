import React, { useState, useEffect } from 'react'
import './ProductDetail.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from "react-router";
import axios from 'axios';
import { productUrl } from '../../Api/EndPoints';
import ProductCard from '../../Components/product/ProductCard';
import Loader from '../../Components/Loader/Loader';
function ProductDetail() {

const [productDetail, useProductDetail] = useState({})
const [isLoading, setIsLoading] = useState(false)
const {productId} = useParams()

useEffect (()=> {
setIsLoading(true);
axios.get(`${productUrl}/products/${productId}`)
.then((res)=> {
useProductDetail(res.data)
setIsLoading(false)
}).catch((err)=> {
console.log(err)
setIsLoading(false);
})

},[])

  return (
    <LayOut>
      <div>
        {isLoading ? <Loader /> : <ProductCard
         product={productDetail} 
        flex = {true}
        renderDesc= {true}
        />}
      </div>
   
    </LayOut>
  );
}

export default ProductDetail
