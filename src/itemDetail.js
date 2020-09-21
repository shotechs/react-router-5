import React, { useState, useEffect } from "react";

export default function ItemDetail({ match }) {
  useEffect(() => {
    console.log("match", match.params.id);
    fetchItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [item, setItem] = useState({});
  const fetchItem = async () => {
    var indexArray = match.params.id;
    const data = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
    );
    const item = await data.json();
    console.log(item.drinks[indexArray]);
    setItem(item.drinks[indexArray]);
  };
  return (
    <div>
      <h1>{item.strDrink}</h1>
      <h2>{item.strAlcoholic}</h2>
      <h3>{item.strGlass}</h3>
      <h4>{item.strIngredient1}</h4>
      <h5>{item.strIngredient2}</h5>
      <p>{item.strInstructions}</p>{" "}
      <p>
        <img src={item.strDrinkThumb} alt="img"></img>
      </p>
    </div>
  );
}
