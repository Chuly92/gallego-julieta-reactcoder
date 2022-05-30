import { Button, Dialog, DialogActions, DialogTitle, Typography } from '@mui/material';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { Loading } from "./Loading";

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
    const db = getFirestore();

    if (id) {
      const q = query(collection(db, "items"), where("categoryCode", "==", id));
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
      const itemCollection = collection(db, "items");
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
          {"Please try again"}
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
