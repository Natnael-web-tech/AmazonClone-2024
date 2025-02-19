import React from 'react'
import LayOut from '../../Components/LayOut/LayOut';

import Catagory from "../../Components/Catagory/Catagory";
import Product from "../../Components/product/Product";
import CarouselEffect from '../../Components/Carousel/Carousel';
function Landing() {
  return (
    <LayOut>
      <CarouselEffect/>
      <Catagory />
      <Product />
    </LayOut>
  );
}
 
export default Landing
