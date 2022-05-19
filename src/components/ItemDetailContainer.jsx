import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const getItemDetail = () => {
    setLoading(true);
    setError("");

    const dataPromise = new Promise((res, rej) => {
      setTimeout(() => {
        //const itemFilter = dataMock.find( item => item.id === id)
        //res(itemFilter)
        res({
          title: 'Snorlax Poké Maniac Costume Pikachu Poké Plush - 8 In',
          description: "As seen in the Pokémon video games, Poké Maniacs are Trainers who love dressing up as intimidating Pokémon and other creatures. Although this Pikachu plush is in costume as Snorlax, it's not sleepy at all! With a tough look, it seems more than ready to jump into battle!",
          price: 22.99,          
          img: "https://www.pokemoncenter.com/products/images/P6502/701-06597/P6502_701-06597_01.jpg",
        });
      }, 2000);
    });

    dataPromise
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getItemDetail();
  }, []);

  return (
    <>
      {loading && <h3 style={{textAlign: 'center'}}>Loading Data...</h3>}
      {error && "Error loading data"}
      {data && <ItemDetail data={data} />}
    </>
  );

}
