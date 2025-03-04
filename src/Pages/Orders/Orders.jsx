import React, { useContext, useEffect, useState } from "react";
import styles from "./Orders.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { db } from "../../Utility/Firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/product/ProductCard";


function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {

  
      const ordersCollection = collection(db, "users", user.uid, "orders");
      const orderedQuery = query(ordersCollection, orderBy("created", "desc"));

      const unsubscribe = onSnapshot(orderedQuery, (snapshot) => {
        const orders = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setOrders(orders);
      });

      return () => unsubscribe(); 
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <LayOut>
      <section className={styles.container}>
        <div className={styles.orders_container}>
          <h2>Your Orders</h2>
          {orders?.length == 0 && (
            <div style={{ padding: "20px",}}>
              You don't have an order yet
            </div>
          )}
          <div>
            {orders?.map((eachOrder, index) => {
              return (
                <div key={index}>
                  <hr />
                  <p>Order ID: {eachOrder?.id}</p>
                  {eachOrder?.data?.basket?.map((order) => {
                    return (
                      <ProductCard flex={true} product={order} key={order.id} />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
