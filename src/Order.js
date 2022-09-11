import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order({ orderType }) {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(orders + 1);
  }

  return (
    <>
      {orderType}: {orders} <RestaurantButton handleClick={orderOne} />
    </>
  );
}

export default Order;

/**
 * const props = {
 *  message: "....",
 *  orderType: "..."
 * }
 *
 *
 * function f({message, orderType}) {
 *      console.log(message);
 *      console.log(orderType);
 * }
 *
 * f(props);
 *
 */
