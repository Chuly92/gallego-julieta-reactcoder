import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import dataMock from "../products.json";
import { CircularProgress, Pagination, Typography } from "@mui/material";

export const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { id } = useParams();

  const fetchData = () => {
    setLoading(true);
    setError("");

    const dataPromise = new Promise((res, rej) => {
      setTimeout(() => {
        if (id) {
          const categoryFilter = dataMock.filter((cat) => cat.categoryId == id);
          res(categoryFilter);
        } else {
          res(dataMock);
        }
      }, 2000);
    });

    dataPromise
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, [id]);

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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress size="60px" sx={{ m: 2 }} color="secondary" />
          </div>
        </>
      )}

      {error && "Error loading data"}
      {data && 
      <ItemList data={data}/>}
    </>
  );
};
