import React, { useContext } from 'react'
import './Cart.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/product/ProductCard'

function Cart() {

const [{basket,user}, dispatch] = useContext(DataContext)

  return (
    <LayOut>
    <section>

<div>
<h2>Hello</h2>
<h3>your shopping basket</h3>
<hr />

{
  basket?.length==0?(<p>you have no item in your cart </p>):(basket?.map((item, index)=> {
    return (
      <ProductCard
        key={index}
        product={item}
        renderDesc={true}
        flex={true}
        renderTruncate={true}
        renderAddCart={false}
      />
    );
  })
)
}
</div>


<div></div>

    </section>
    </LayOut>
  )
}

export default Cart
