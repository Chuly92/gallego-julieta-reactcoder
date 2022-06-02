import { Container, Grid, ImageListItem, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../contexts/ContextCart";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ data }) => {
  const { cart, addItem } = useContext(cartContext);

  const [showItemCount, setShowItemCount] = useState(true);
  const [stockWithCart, setStockWithCart] = useState(data.stock);
  const [itemInCart, setItemInCart] = useState(false);

  const onAdd = (qtyItem) => {
    const dataItem = { data, qtyItem };
    addItem(dataItem);
  };

  useEffect( () => {
    const reviewCart = cart.map((obj) => {
      if (obj.data.id === data.id) {
        const updatedStock = data.stock - obj.qtyItem;
        setStockWithCart(updatedStock);
        setItemInCart(true);
        
        if(updatedStock === 0){
          setShowItemCount(false);
        }
      }

      if(!itemInCart){
        setStockWithCart(data.stock);
      }
  })}, [data, itemInCart, cart])

  return (
    <>
      {data && (
        <Container maxWidth="3840px" component="div">
          {/* Screen size up to 900px */}

          <Typography
            variant="title"
            align="center"
            display="block"
            sx={{
              fontSize: 38,
              fontFamily: "fantasy",
              letterSpacing: ".05rem",
              display: { xs: "none", md: "block" },
              maxWidth: "100%",
              mt: 2,
            }}
          >
            {data.name}
          </Typography>

          <Grid
            maxWidth="3840px"
            container
            spacing={2}
            columns={16}
            sx={{ mt: 2, display: { xs: "none", md: "flex" } }}
          >
            <Grid item xs={8}>
              <ImageListItem sx={{ textDecoration: "none" }}>
                <img
                  src={data.pictureUrl}
                  srcSet={data.pictureUrl}
                  alt={data.name}
                  loading="lazy"
                />
              </ImageListItem>
            </Grid>

            <Grid item xs={8} sx={{ mt: 2 }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: 20,
                  fontFamily: "monospace",
                  display: { xs: "none", md: "flex" },
                }}
              >
                {data.description}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: 30,
                  fontWeight: 600,
                  fontFamily: "monospace",
                  display: { xs: "none", md: "flex" },
                  mt: 1,
                }}
              >
                Price: US$ {data.price}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: 18,
                  fontFamily: "monospace",
                  color: "#525252",
                  display: { xs: "none", md: "flex" },
                  mt: 2,
                  justifyContent: "center",
                }}
              >
                {stockWithCart === 1 ? (
                  <>Hurry Up! There is only {stockWithCart} unit in stock!</>
                ) : (
                  <>Stock: {stockWithCart} units</>
                )}
              </Typography>

              {showItemCount && (
                <ItemCount stock={stockWithCart} initial={1} onAdd={onAdd} />
              )}
            </Grid>
          </Grid>

          {/* Screen size down to 900px */}

          <Grid sx={{ maxWidth: "100%", display: { xs: "flex", md: "none" } }}>
            <ImageListItem sx={{ textDecoration: "none" }}>
              <img
                src={data.pictureUrl}
                srcSet={data.pictureUrl}
                alt={data.name}
                loading="lazy"
              />
            </ImageListItem>
          </Grid>

          <Grid
            sx={{ p: 1, display: { xs: "block", md: "none" } }}
            variant="div"
          >
            <Typography
              variant="title"
              display="flex"
              align="center"
              sx={{
                fontWeight: 500,
                fontSize: 32,
                fontFamily: "fantasy",
                letterSpacing: ".05rem",
                mt: 2,
                justifyContent: "center",
              }}
            >
              {data.title}
            </Typography>

            <Typography
              variant="body1"
              display="flex"
              sx={{
                fontSize: 18,
                fontFamily: "monospace",
                textAlign: "center",
                mt: 2,
              }}
            >
              {data.description}
            </Typography>

            <Typography
              variant="body2"
              display="flex"
              sx={{
                fontSize: 22,
                fontWeight: 600,
                fontFamily: "monospace",
                justifyContent: "center",
                m: 2,
              }}
            >
              Price: US$ {data.price}
            </Typography>

            <Typography
                variant="body2"
                sx={{
                  fontSize: 18,
                  fontFamily: "monospace",
                  color: "#525252",
                  display: { xs: "flex", md: "none" },
                  mt: 2,
                  justifyContent: "center",
                }}
              >
                {stockWithCart === 1 ? (
                  <>Hurry Up! There is only {stockWithCart} unit in stock!</>
                ) : (
                  <>Stock: {stockWithCart} units</>
                )}
              </Typography>

            {showItemCount && <ItemCount stock={stockWithCart} initial={1} onAdd={onAdd} />}
          </Grid>
        </Container>
      )}
    </>
  );
};
