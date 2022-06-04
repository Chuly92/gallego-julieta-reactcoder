import { Box, Button, Grid, ImageListItem, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../contexts/ContextCart";
import { CartItem } from "./CartItem";

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
          <Grid container sx={{ display: { xs: "none", lg: "flex" }, mb: 4 }}>
            <Box sx={{ minWidth: 3 / 4, maxWidth: 3 / 4 }}>
              {cart.map((e, index) => (
                <CartItem key={index} dataItem={e} />
              ))}
            </Box>

            <Box
              sx={{
                minWidth: 1 / 5,
                maxWidth: 1 / 5,
                mt: 2,
                ml: 2,
                boxShadow: 10,
                borderRadius: 5,
              }}
            >
              <ImageListItem sx={{ maxWidth: "100%", m: 1 }}>
                <img
                  src={
                    "https://i.pinimg.com/originals/af/eb/24/afeb243618c66a6ca7819bd301c83af1.jpg"
                  }
                  srcSet={
                    "https://i.pinimg.com/originals/af/eb/24/afeb243618c66a6ca7819bd301c83af1.jpg"
                  }
                  alt={"pikaCart"}
                  loading="lazy"
                />
              </ImageListItem>

              <Typography
                variant="title"
                sx={{
                  mb: 2,
                  mt: 4,
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
                US$ {totalPriceCart}
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
          <Grid
            container
            sx={{
              display: { xs: "flex", lg: "none", justifyContent: "center" },
            }}
          >
            <Box>
              {cart.map((e, index) => (
                <CartItem key={index} dataItem={e} />
              ))}
            </Box>

            <Grid
              container
              columns={8}
              sx={{
                maxWidth: 750,
                maxHeight: 300,
                mt: 4,
                mb: 4,
                display: "flex",
                justifyContent: "center",
                textAlign: "center"
              }}
            >
              <Grid item xs={4}>
                <ImageListItem
                  sx={{ ml: 4, maxWidth: 250, borderRadius: 20, mt: 0 }}
                >
                  <img
                    src={
                      "https://i.pinimg.com/originals/af/eb/24/afeb243618c66a6ca7819bd301c83af1.jpg"
                    }
                    srcSet={
                      "https://i.pinimg.com/originals/af/eb/24/afeb243618c66a6ca7819bd301c83af1.jpg"
                    }
                    alt={"pikaCart"}
                    loading="lazy"
                  />
                </ImageListItem>
              </Grid>

              <Grid item xs={4}>
                <Typography
                  variant="title"
                  sx={{
                    mt: 2,
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
                    mt: 2,
                    fontWeight: 600,
                    fontSize: 22,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  US$ {totalPriceCart}
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
              </Grid>
            </Grid>
          </Grid>
        </>
      ) : (
        <Grid container sx={{ mt: 2, mb: 2 }}>
          <Box
            sx={{
              bgcolor: "primary.light",
              borderRadius: 5,
              boxShadow: 10,
              textAlign: "center",
              mx: 4,
            }}
          >
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
