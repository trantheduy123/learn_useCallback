import { useState } from "react";

const gifts = ["BMW", "Mecr", "Ca map"];
export default function Randomgiftcomponent() {
  const [gift, setGift] = useState();

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);

    setGift(gifts[index]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>{gift || "chua co phan thuong"}</h1>
      <button onClick={randomGift}>lay thuong</button>
    </div>
  );
}
