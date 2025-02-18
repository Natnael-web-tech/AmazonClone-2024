import { useState } from 'react'
import Header from './Components/Header/Header'
import Carousel from './Components/Carousel/Carousel'
import Catagory from './Components/Catagory/Catagory'
import Product from './Components/product/Product'


function App() {
 

  return (
    <>
      <div>
       <Header/>
       <Carousel/>
       <Catagory/>
       <Product/>
      </div>
     
    </>
  )
}

export default App
