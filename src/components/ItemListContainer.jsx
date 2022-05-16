import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";

export const ItemListContainer = ({ greetings }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dataMock = [
    {
      id: 1,
      title: "Pikachu Plush",
      description: "Pikachu Squishy Plush 10 In. Made in Japan",
      price: 19.99,
      pictureUrl: 'https://www.pokemoncenter.com/products/images/P4537/701-03482/P4537_701-03482_01.jpg',
    },
    {
      id: 2,
      title: "Pikachu Celebrations",
      description: "Sweetheart Pikachu Plush 8 In. Made in China",
      price: 25,
      pictureUrl: "https://www.pokemoncenter.com/products/images/P6348/701-05580/P6348_701-05580_01.jpg",
    },
    {
      id: 3,
      title: "Snorlax Pikachu",
      description: "Costume Pikachu Poke Plush 8 In. Made in China",
      price: 29.00,
      pictureUrl: "https://www.pokemoncenter.com/products/images/P6502/701-06597/P6502_701-06597_01.jpg",
    },
    {
      id: 4,
      title: "Pikachu Squishy",
      description: "Pikachu Pokemon Squishy Plush 13 ¾ In. Made in Japan",
      price: 34.99,
      pictureUrl: "https://www.pokemoncenter.com/products/images/P7730/701-29240/P7730_701-29240_01.jpg",
    },
    {
      id: 5,
      title: "Eevee Pikachu",
      description: "Pikachu is wearing a cape that looks like Eevee. Size: 9 In. Made in Japan",
      price: 18.99,
      pictureUrl: "https://www.pokemoncenter.com/products/images/P5048/701-03985/P5048_701-03985_01.jpg",
    },
  ];

  const fetchData = () => {
    setLoading(true);
    setError("");

    const dataPromise = new Promise((res, rej) => {
      setTimeout(() => {
        res(dataMock);
      }, 2000);
    });

    dataPromise
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h3 style={{ textAlign: "center" }}>{greetings}</h3>
      {loading && <h3 style={{textAlign: 'center'}}>Loading Data...</h3>}
      {error && "Error loading data"}
      {data && <ItemList data={data} />}
    </>
  );
};
