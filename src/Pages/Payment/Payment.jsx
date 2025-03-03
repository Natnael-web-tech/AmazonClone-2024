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
import { axiosInstance } from '../../Api/axios'
import { ClipLoader } from "react-spinners";
import { db } from '../../Utility/Firebase';
import { doc, collection, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router'
function Payment() {
const stripe = useStripe();
const elements = useElements();
const navigate = useNavigate();
const [cardError, setCardError] = useState(null)
  const [{user, basket}] = useContext(DataContext);
const [payProcess, setPayProcess] = useState(false);
const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0);

 const total = basket.reduce((amount, item) => {
   return item.price * item.amount + amount;
 }, 0);

const handleChange= (e) => {

e?.error?.message? setCardError(e?.error?.message): setCardError('')
}

const handlePayment = async (e) => {
  e.preventDefault()

 try {

  setPayProcess(true);
const response = await axiosInstance({
  method: "POST",
  url: `/payment/create?total=${total*100}`,
});

// console.log(response.data)
  const clientSecret = response.data?.clientSecret;

const {paymentIntent} = await stripe.confirmCardPayment(

clientSecret,

{
  payment_method:{
  card: elements.getElement(CardElement)
},
});

console.log(paymentIntent);

await setDoc(
  doc(collection(db, "users"), user.uid, "orders", paymentIntent.id),
  {
    basket: basket,
    amount: paymentIntent.amount,
    created: paymentIntent.created,
  });



setPayProcess(false)

navigate('/orders', {state: {msg: 'you have placed new Order'}})

 } catch (error) {
  
console.log(error)
setPayProcess(false);
 }
  
};

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
            {basket?.map((item, index) => (
              <ProductCard key = {index} product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />

        <div className={styles.flex}>
          <h3>Payment methods</h3>
          <div className={styles.cardContainer}>
            <div className={styles.paymentDetails}>
              <form onSubmit={handlePayment}>
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                <CardElement onChange={handleChange} />

                <div className={styles.paymentPrice}>
                  <div>
                    <span>
                      Total Order | <CurrencyFormat amount={total} />
                    </span>
                  </div>

                  <button type="submit">
                    {payProcess ? (
                      <div className={styles.payLoader}>
                        <ClipLoader color='gray' size={12}/>
                        <p>please wait ...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
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
