import React, { useContext } from "react";
import { cartContext } from "../contexts/ContextHOC";
import { Box, Grid, Typography, Button } from "@mui/material";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, totalPriceCart } = useContext(cartContext);

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
          {/* Screens up to 1200px width */}
          <Grid container sx={{ m: 2, border: "none", display: { xs: 'none', lg: 'flex'} }}>
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

              <Link to={`/checkout`} style={{ textDecoration: "none" }}>
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



          {/* Screens down to 1200px width */}
          <Grid container sx={{ display: {xs: 'block', lg: 'none'} }}>
            <Box>
              {cart.map((e, index) => (
                <CartItem key={index} dataItem={e} />
              ))}
            </Box>

            <Box>
              <Typography
                variant="title"
                sx={{
                  mb: 2,
                  mt: 4,
                  fontWeight: 600,
                  fontSize: 26,
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
                  fontSize: 24,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                US$ {totalPriceCart.toFixed(2)}
              </Typography>

              <Link to={`/checkout`} style={{ textDecoration: "none" }}>
                <Button
                  color="secondary"
                  sx={{
                    display: "flex",
                    margin: "auto",
                    mt: 2,
                    mb: 4,
                    fontSize: 12,
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
