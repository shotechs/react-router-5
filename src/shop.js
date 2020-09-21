import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
    );
    const items = await data.json();
    console.log(items.drinks);
    setItems(items.drinks);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={item.idDrink}>
          <Link to={`/shop/${index}`}>
            <h1>{item.strDrink}</h1>
          </Link>
          <h2>{item.strAlcoholic}</h2>
        </div>
      ))}
    </div>
  );
}
