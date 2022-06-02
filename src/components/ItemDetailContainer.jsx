import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../services/Firebase";
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
    const docRef = doc(db, "items", id);

    getDoc(docRef)
      .then((snapshot) => {
        if (!snapshot.data()) {
          setOpenAlert(true);
          setData("");
        } else {
          setData({ id: snapshot.id, ...snapshot.data() });
        }
        setLoading(false);
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
        sx={{ textAlign: "center", fontSize: 18 }}
      >
        <DialogTitle id="alert-dialog-title">
          {"There is no detail for this item"}
          <br />
          {"Please verify the product name/code"}
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
