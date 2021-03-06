import { Button, Dialog, DialogActions, DialogTitle, Typography } from '@mui/material';
import { getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { itemCollection } from "../../services/Firebase";
import { Loading } from "../extras/Loading";
import { ItemList } from "./ItemList";


export const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [openAlert, setOpenAlert] = useState(false);

  const { id } = useParams();

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  useEffect(() => {
    setLoading(true);

    if (id) {
      const q = query(itemCollection, where("categoryCode", "==", id));
      getDocs(q)
        .then((snapshot) => {
          if (snapshot.size === 0) {
            setOpenAlert(true);
          } else {
            setData(
              snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            );
          }
        })
        .catch((err) => setError(err))
        .finally(setLoading(false));
    } else {
      getDocs(itemCollection)
        .then((snapshot) => {
          setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((err) => setError(err))
        .finally(setLoading(false));
    }
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
          <Loading />
        </>
      )}

      {error && "Error loading data"}
      {data && <ItemList data={data} />}

      <Dialog
        open={openAlert}
        onClose={handleCloseAlert}
        sx={{ textAlign: "center", fontSize: 20, borderRadius: 10 }}
      >
        <DialogTitle id="alert-dialog-title">
          {"There was some error loading the category"}
          <br />
          {"Please verify the category name/code"}
        </DialogTitle>
        <DialogActions>
          <Button
            color="secondary"
            variant="contained"
            sx={{ display: "flex", margin: "0 auto" }}
            onClick={handleCloseAlert}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
