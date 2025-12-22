import React, { useState } from "react";
import style from './grid.module.css'

const App = () => {
  const products = [
    { name: "Apple", price: 1000, category: "Electronics" },
    { name: "Redmi", price: 500, category: "Electronics" },
    { name: "Motorola", price: 700, category: "Electronics" },
    { name: "Samsung", price: 1100, category: "Electronics" },
    { name: "Asus", price: 600, category: "Electronics" },
    { name: "Nova", price: 300, category: "Electronics" },
    { name: "Acer", price: 200, category: "Electronics" },
    { name: "Nokia", price: 100, category: "Electronics" },
  ];

  const [filter, setFilter] = useState("all");

  const filteredProducts = products.filter((p) => {
    if (filter === "under500") return p.price < 500;
    if (filter === "over1000") return p.price > 1000;
    return true; 
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => a.price - b.price);

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-amber-300 gap-5">
      <h2 className="bg-white p-4 rounded-full">Product Grid</h2>
      <ul className={style.grid}>
        <li><b>Name — Price — Category</b></li>

        {sortedProducts.map((p) => (
          <li key={p.name}>
            {p.name} — ₹{p.price} — {p.category}
          </li>
        ))}
      </ul>

      <div className={style.box}>
        <button className={style.Buttons} onClick={() => setFilter("under500")}>Under 500</button>
        <button className={style.Buttons} onClick={() => setFilter("over1000")} >
          Over 1000
        </button>
        <button className={style.Buttons} onClick={() => setFilter("all")}>
          All
        </button>
      </div>
    </div>
  );
};

export default App;
