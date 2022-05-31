import { AccountCircle, AlternateEmail, Phone } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogTitle,
  FormControl,
  Grid,
  ImageListItem, InputAdornment, TextField,
  Typography
} from "@mui/material";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { cartContext } from "../contexts/ContextHOC";

export const Checkout = () => {
  const { cart, qtyItemsCart, totalPriceCart } = useContext(cartContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: 0,
  });
  const [orderId, setOrderId] = useState();
  const [openOrderCreated, setOpenOrderCreated] = useState(false);

  const db = getFirestore();
  const ordersCollection = collection(db, "orders");

  const handleClose = () => {
    setOpenOrderCreated(false);
  };

  const handleChange = (e) => {
    e.preventDefault();

    console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      buyer: formData,
      items: cart.map((item) => ({
        id: item.data.id,
        name: item.data.name,
        price: item.data.price,
      })),
      date: new Date().toLocaleString(),
      total: totalPriceCart,
    };

    addDoc(ordersCollection, order)
      .then(({ orderId }) => {
        setOrderId(orderId);
        setOpenOrderCreated(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {JSON.stringify(orderId)}

      <Container sx={{ justifyContent: "center", p: 2 }}>
        <Typography
          variant="title"
          align="center"
          display="block"
          sx={{
            fontSize: 38,
            fontFamily: "fantasy",
            letterSpacing: ".2rem",
            mt: 1,
            mb: 1,
          }}
        >
          Checkout
        </Typography>

        <Box
          sx={{
            borderRadius: 5,
            boxShadow: 5,
            p: 1,
            bgcolor: "#f2f0f2",
            justifyContent: "center"
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
                sx={{ textAlign: "center", fontSize: 20, borderRadius: 10 }}
              >
                <DialogTitle id="alert-dialog-title">
                  {"Your order was created successfully"}
                  <br />
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
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
