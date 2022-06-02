import { AccountCircle, AlternateEmail, Phone } from "@mui/icons-material";
import {Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, ImageListItem, InputAdornment, TextField, Typography, Alert, Snackbar} from '@mui/material';
import { addDoc, serverTimestamp } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../contexts/ContextCart";
import { Loading } from "./Loading";
import { orderCollection } from "../services/Firebase";

export const Checkout = () => {
  const { cart, qtyItemsCart, totalPriceCart, clear } = useContext(cartContext);

  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: 0,
    email: "",
  });

  const [emailConfirmed, setEmailConfirmed] = useState("");

  const [orderId, setOrderId] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [openOrderCreated, setOpenOrderCreated] = useState(false);
  const [openMailNotEq, setOpenMailNotEq] = useState(false);

  const handleClose = () => {
    setOpenOrderCreated(false);
    clear();
    navigate("/");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailConfirm = (e) => {
    e.preventDefault();
    setEmailConfirmed(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.email !== emailConfirmed) {
      setOpenMailNotEq(true);
      setLoading(false);
    } else {
      const order = {
        buyer: formData,
        items: cart.map((item) => ({
          id: item.data.id,
          name: item.data.name,
          price: item.data.price,
          qtyItem: item.qtyItem
        })),
        date: serverTimestamp(),
        qtyItems: qtyItemsCart,
        total: totalPriceCart,
        status: "Initial"
      };

      addDoc(orderCollection, order)
        .then((e) => {
          setOrderId(e.id);
          setOpenOrderCreated(true);
        })
        .catch((err) => setError(err))
        .finally(setLoading(false));
    }
  };

  return (
    <>
      <Container sx={{ justifyContent: "center", p: 2 }}>
        <Typography
          variant="title"
          align="center"
          display="block"
          sx={{
            fontSize: 38,
            fontFamily: "fantasy",
            letterSpacing: ".2rem",
            mb: 2,
          }}
        >
          Checkout
        </Typography>

        {loading && <Loading />}

        <Box
          sx={{
            borderRadius: 5,
            boxShadow: 5,
            p: 1,
            bgcolor: "#f2f0f2",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            spacing={2}
            columns={{ xs: 2, md: 10 }}
            sx={{ mt: 2, display: "flex" }}
          >
            <Grid item xs={5} sx={{ textAlign: "center" }}>
              <Typography variant="h5" component="div">
                Your purchase is almost ready!
              </Typography>
              <ImageListItem
                sx={{ maxWidth: 150, maxHeight: 150, mt: 2, mb: 4 }}
              >
                <img
                  src={
                    "https://clipart.world/wp-content/uploads/2021/01/Happy-Pikachu-clipart-transparent-1.png"
                  }
                  srcSet={
                    "https://clipart.world/wp-content/uploads/2021/01/Happy-Pikachu-clipart-transparent-1.png"
                  }
                  alt={"happyPikachu"}
                  loading="lazy"
                />
              </ImageListItem>

              <Typography variant="h6" component="div">
                You will pay $ {totalPriceCart} for {qtyItemsCart} items
              </Typography>
            </Grid>

            <Grid item xs={5} sx={{ mt: 2, textAlign: "center" }}>
              <FormControl
                component="form"
                sx={{
                  "& .MuiTextField-root": {
                    m: 1,
                    width: "30ch",
                    justifyContent: "center",
                    display: "flex",
                    fontSize: 20,
                  },
                }}
                focused
                onSubmit={handleSubmit}
              >
                <TextField
                  required
                  color="secondary"
                  label="Name"
                  onChange={handleChange}
                  value={formData.name}
                  name="name"
                  type="text"
                  placeholder="Fill with your name and surname please"
                  inputProps={{ minLength: 4 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  required
                  color="secondary"
                  label="Phone"
                  onChange={handleChange}
                  value={formData.phone}
                  name="phone"
                  type="tel"
                  inputProps={{
                    minLength: 10,
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Phone />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  required
                  color="secondary"
                  label="Email"
                  onChange={handleChange}
                  value={formData.email}
                  name="email"
                  type="email"
                  placeholder="Example: yourmail@gmail.com"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AlternateEmail />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  required
                  color="secondary"
                  label="Confirm your email"
                  onChange={handleEmailConfirm}
                  value={emailConfirmed}
                  name="emailConfirm"
                  type="email"
                  placeholder="Example: yourmail@gmail.com"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AlternateEmail />
                      </InputAdornment>
                    ),
                  }}
                />

                <Button
                  color="secondary"
                  sx={{
                    display: "flex",
                    margin: "auto",
                    mt: 4,
                    mb: 4,
                    fontSize: 16,
                    alignItems: "justify-end",
                  }}
                  type="submit"
                  variant="contained"
                  onSubmit={handleSubmit}
                >
                  Proceed to payment
                </Button>
              </FormControl>

              <Dialog
                open={openOrderCreated}
                onClose={handleClose}
                sx={{ textAlign: "center", fontSize: 20 }}
              >
                <DialogTitle id="alert-dialog-title">
                  {"Your order was created successfully!"}
                  <DialogContent>
                    {"The ID tracing is: " +
                      orderId +
                      ". You will receive an email with this information and the receipt of the shopping."}
                  </DialogContent>
                </DialogTitle>
                <DialogActions>
                  <Button
                    color="secondary"
                    variant="contained"
                    sx={{ display: "flex", margin: "0 auto" }}
                    onClick={handleClose}
                  >
                    OK
                  </Button>
                </DialogActions>
              </Dialog>

              <Snackbar
        open={openMailNotEq}
        autoHideDuration={1000}
        onClose={() => setOpenMailNotEq(false)}
      >
        <Alert
          severity="error"
          sx={{ width: "100%", fontSize: 18 }}
          variant="filled"
        >
          Email fields do not match
        </Alert>
      </Snackbar>

            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
