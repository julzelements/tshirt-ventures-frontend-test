import React from "react";
import { useState } from "react";

interface Props {
  item?: string;
  price?: number;
}

const Invoices = (props: Props) => {
  const [price, setPrice] = useState(props.price);
  const [item, setItem] = useState(props.item);

  const handleSubmit = (event: React.SyntheticEvent) => {
    alert(`A item was submitted: ${item}
    A price was submitted: ${price}`);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item">Item:</label>
      <input
        id="item"
        name="item"
        type="text"
        value={item}
        onChange={(event) => setItem(event.target.value)}
      />
      <label htmlFor="price">Price:</label>
      <input
        id="price"
        name="price"
        type="number"
        value={price}
        onChange={(event) => setPrice(Number(event.target.value))}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Invoices;
