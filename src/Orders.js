import React, { useEffect, useState } from "react";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import Order from "./Order";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // if users exist then only do the following
    if (user) {
      db.collection("users") // accessing users collection (firestore)
        .doc(user?.uid) // getting specific users(current logged in user)
        .collection("orders") // accessing particular user's order
        .orderBy("created", "desc") // list in descending order, keep recent orders at top
        // onSnapshot   :   update in realtime. when push/pulling value from db
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
