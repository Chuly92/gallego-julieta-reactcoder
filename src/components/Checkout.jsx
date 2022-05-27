import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
  ImageListItem,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { cartContext } from "../contexts/ContextHOC";
import { collection, getFirestore, addDoc } from "firebase/firestore";

export const Checkout = () => {
  const { cart, qtyItemsCart, totalPriceCart } = useContext(cartContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: 0,
  });

  const handleChange = (e) => {
    e.preventDefault();

    console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ formData, cart, totalPriceCart });
  };

  return (
    <>
      <Container sx={{ justifyContent: "center" }}>
        <Typography
          variant="title"
          align="center"
          display="block"
          sx={{
            fontSize: 38,
            fontFamily: "fantasy",
            letterSpacing: ".2rem",
            mt: 2,
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
                You will pay $ {totalPriceCart} for {qtyItemsCart} beautiful
                items
              </Typography>
            </Grid>

            <Grid item xs={5} sx={{ mt: 2, textAlign: "center" }}>
              <FormControl
                component="form"
                sx={{
                  "& .MuiTextField-root": {
                    m: 1,
                    width: "35ch",
                    justifyContent: "center",
                    display: "flex",
                    fontSize: 20,
                  },
                }}
                onSubmit={handleSubmit}
              >
                <TextField
                  required
                  color="secondary"
                  focused
                  label="Name"
                  onChange={handleChange}
                  value={formData.name}
                  name="name"
                  placeholder="Fill with your name and surname please"
                />
                <TextField
                  required
                  color="secondary"
                  focused
                  label="Email"
                  onChange={handleChange}
                  value={formData.email}
                  name="email"
                  placeholder="Insert a valid email. Example: hello@gmail.com"
                />
                <TextField
                  required
                  color="secondary"
                  focused
                  label="Phone"
                  onChange={handleChange}
                  value={formData.phone}
                  name="phone"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
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
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
