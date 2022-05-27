import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import {Loading} from './Loading';
import {getFirestore, getDoc, doc} from 'firebase/firestore';

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { id } = useParams();

  const getItemDetail = () => {
    
    setLoading(true);
    const db = getFirestore();
        const docRef = doc(db, "items", id);

    getDoc(docRef)
    .then((snapshot) => {
        if(!docRef){
          alert('There is no detail for this item');
        }else{
          console.log(snapshot.data())
          setData({ id: snapshot.id, ...snapshot.data()})
        }
      })
      .catch((err) => setError(err))
      .finally(setLoading(false));
}

  useEffect(() => {
    getItemDetail();
  }, []);

  return (
    <>
      {loading && (
        <>
          <Loading />
        </>
      )}
      {error && "Error loading data"}
      {data && !loading && <ItemDetail data={data} />}
    </>
  );
};
