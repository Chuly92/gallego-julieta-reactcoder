import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { Loading } from "./Loading";

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
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
    const docRef = doc(db, "items", id);

    getDoc(docRef)
      .then((snapshot) => {
        if (!docRef) {
          setOpenAlert(true);
        } else {
          setData({ id: snapshot.id, ...snapshot.data() });
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(err);
        setOpenAlert(true);
        setLoading(false);
      });
  }, [id]);


  return (
    <>
      {loading && (
        <>
          <Loading />
        </>
      )}
      {error && "Error loading data"}
      {data && !loading && <ItemDetail data={data} />}

      <Dialog
        open={openAlert}
        onClose={handleCloseAlert}
        sx={{ textAlign: "center", fontSize: 20, borderRadius: 10 }}
      >
        <DialogTitle id="alert-dialog-title">
          {"There was some error loading the database"}
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
