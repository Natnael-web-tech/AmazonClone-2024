import React from 'react'
import {useState, useContext } from 'react'
import styles from './Payment.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/product/ProductCard'
import {
  useStripe,
  useElements,
  CardElement
} from "@stripe/react-stripe-js";
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'



function Payment() {
const stripe = useStripe();
const elements = useElements();
const [cardError, setCardError] = useState(null)
  const [{user, basket}] = useContext(DataContext);

const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0);

 const total = basket.reduce((amount, item) => {
   return item.price * item.amount + amount;
 }, 0);

const handleChange= (e) => {

e?.error?.message? setCardError(e?.error?.message): setCardError('')
}


  return (
    <LayOut>
      <div className={styles.paymentHeader}>
        Checkout <span className={styles.totalItem}>{totalItem}</span> items
      </div>

      <section className={styles.payment}>
        <div className={styles.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div> {user?.email?.split("@")[0]}</div>
            <div>2345 Mount Everst rd.</div>
            <div>sandiego, Ca</div>
          </div>
        </div>
        <hr />

        <div className={styles.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />

        <div className={styles.flex}>
          <h3>Payment methods</h3>
          <div className={styles.cardContainer}>
            <div className={styles.paymentDetails}>
              <form action="">
                {cardError && <small style={{color: "red"}} >{cardError}</small>}
<CardElement onChange={handleChange}/>

<div className={styles.paymentPrice} >
  <div>
    <span>
      Total Order | <CurrencyFormat amount={total}/>
    </span>
  </div>

<button>Pay Now</button>

</div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment
