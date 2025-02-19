import React, { useState, useEffect } from 'react'
import './ProductDetail.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from "react-Router";
import axios from 'axios';
import { productUrl } from '../../Api/EndPoints';
import ProductCard from '../../Components/product/ProductCard';

function ProductDetail() {

const [productDetail, useProductDetail] = useState([])
const {productId} = useParams()

useEffect (()=> {

axios.get(`${productUrl}/products/${productId}`)
.then((res)=> {
useProductDetail(res.data)
}).catch((err)=> {
console.log(err)
})

},[])

  return (
    <LayOut>
      <div style={{ padding: "20px" }}>
        <ProductCard product={productDetail} />
      </div>
    </LayOut>
  );
}

export default ProductDetail
