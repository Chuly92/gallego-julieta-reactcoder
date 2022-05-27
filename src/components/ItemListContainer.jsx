import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { Typography } from "@mui/material";
import { Loading } from "./Loading";
import {getFirestore, getDocs, collection, query, where} from 'firebase/firestore';

export const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { id } = useParams();

  const fetchData = () => {
    setLoading(true);
    const db = getFirestore();

    if (id) {
      const q = query(collection(db, "items"), where("categoryCode", "==", id));
      getDocs(q)
        .then((snapshot) => {
          if (snapshot.size === 0) {
            alert("There are no products in this category");
          } else {
            setData(
              snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            );
          }
        })
        .catch((err) => setError(err))
        .finally(setLoading(false));
    } else {
      const itemCollection = collection(db, "items");
      getDocs(itemCollection)
        .then((snapshot) => {
          setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((err) => setError(err))
        .finally(setLoading(false));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Typography
        variant="title"
        align="center"
        display="block"
        sx={{
          fontSize: 38,
          fontFamily: "fantasy",
          letterSpacing: ".2rem",
          mt: 2,
        }}
      >
        Store
      </Typography>

      {loading && (
        <>
          <Loading />
        </>
      )}

      {error && "Error loading data"}
      {data && <ItemList data={data} />}
    </>
  );
};
