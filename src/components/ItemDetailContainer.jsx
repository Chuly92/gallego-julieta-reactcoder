import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import dataMock from "../data/products.json";
import { CircularProgress } from "@mui/material";

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { id } = useParams();

  const getItemDetail = () => {
    setLoading(true);
    setError("");

    const dataPromise = new Promise((res, rej) => {
      setTimeout(() => {
        const itemFilter = dataMock.find((item) => item.id == id);
        res(itemFilter);
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
      {loading && (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress size="60px" sx={{ m: 2 }} color="secondary" />
          </div>
        </>
      )}
      {error && "Error loading data"}
      {data && !loading && <ItemDetail data={data} />}
    </>
  );
};
