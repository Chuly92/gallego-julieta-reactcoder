import React, { useContext, useEffect } from "react";
import { cartContext } from "../contexts/ContextHOC";
import { Box, Grid, Typography, Button } from "@mui/material";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, totalPriceCart } = useContext(cartContext);

  // useEffect(() => {
  //   console.log("helloWorld");
  // }, [cart]);

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
        Shopping Cart
      </Typography>

      {cart.length > 0 ? (
        <>
          <Grid container sx={{ m: 2, border: "none" }}>
            <Box sx={{ minWidth: 3 / 4, maxWidth: 3 / 4 }}>
              {cart.map((e, index) => (
                <CartItem key={index} dataItem={e} />
              ))}
            </Box>

            <Box sx={{ minWidth: 1 / 4, maxWidth: 1 / 4, mt: 2 }}>
              <Typography
                variant="title"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  fontSize: 32,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Total Cart
              </Typography>
              <Typography
                variant="title"
                sx={{
                  fontWeight: 600,
                  fontSize: 30,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                US$ {totalPriceCart.toFixed(2)}
              </Typography>

              <Link to={`/checkout`}>
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
                >
                  Continue Checkout
                </Button>
              </Link>
            </Box>
          </Grid>
        </>
      ) : (
        <Grid container sx={{ mt: 2, mb: 2 }}>
          <Box sx={{ bgcolor: "#ffe3fc" }}>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                fontSize: 30,
                m: 4,
              }}
            >
              Your shopping cart is empty. If you see something you would like
              to add to your shopping cart when shopping, click Add to Cart.
            </Typography>
            <Link to={`/`} style={{ textDecoration: "none" }}>
              <Button
                color="secondary"
                sx={{
                  display: "flex",
                  margin: "auto",
                  mt: 4,
                  mb: 4,
                  fontSize: 20,
                }}
                type="submit"
                variant="contained"
              >
                Return to the store
              </Button>
            </Link>
          </Box>
        </Grid>
      )}
    </>
  );
};
