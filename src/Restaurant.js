import React from "react";
import Order from "./Order.js";

const Restaurant = () => {
  return (
    <div className="orders">
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          <Order orderType={"Pizzas"} />
        </li>
        <li>
          <Order orderType={"Salads"} />
        </li>
        <li>
          <Order orderType={"Chocolate cake"} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
