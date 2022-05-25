import {useContext, useEffect} from 'react';
import {
  Button,
  ImageListItem,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import { cartContext } from "../contexts/ContextHOC";

export const CartItem = ({ dataItem }) => {

  const {cart, removeItem} = useContext(cartContext);

  // useEffect(() => {
  //   console.log('helloWorld');

  // }, [cart]);

  return (
    <>
      {/* Card to full size screens */}

      <Container maxWidth="3840px" component="div" 
      sx={{ ml: 5, mr: 5 }}>
        <Grid
          maxWidth="100%"
          container
          spacing={2}
          columns={16}
          sx={{
            mt: 2,
            display: "flex",
            border: 2,
            borderRadius: 10,
            borderColor: "#fcb3e2",
          }}
        >
          <Grid item xs={6}>
            <ImageListItem
              sx={{
                maxWidth: 300,
                maxHeight: 300,
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={dataItem.data.pictureUrl}
                srcSet={dataItem.data.pictureUrl}
                alt={dataItem.data.title}
                loading="lazy"
              />
            </ImageListItem>
          </Grid>

          <Grid item xs={10} sx={{ mt: 2 }}>
            <Typography
              variant="title"
              component="div"
              align="center"
              sx={{ fontWeight: 500, fontSize: 28, mb: 2, mt: 2 }}
            >
              {dataItem.data.title}
            </Typography>

            <Typography
              variant="title"
              component="div"
              align="center"
              sx={{ mb: 1, fontWeight: 500, fontSize: 18, color: "#575757" }}
            >
              Unit Price: US$ {dataItem.data.price}
            </Typography>

            <Typography
              variant="title"
              component="div"
              align="center"
              sx={{ mb: 1, fontWeight: 500, fontSize: 18, color: "#575757" }}
            >
              Quantity: {dataItem.qtyItem}
            </Typography>

            <Typography
              variant="title"
              component="div"
              align="center"
              sx={{ mt: 2, fontWeight: 500, fontSize: 20 }}
            >
              Total Item: US$ {dataItem.data.price * dataItem.qtyItem}
            </Typography>

              <Button
                color="secondary"
                sx={{
                  display: "flex",
                  margin: "auto",
                  mt: 2,
                  fontSize: 14,
                  alignItems: "justify-end",
                }}
                type="submit"
                variant="contained"
                onClick={(e) => {
                  e.preventDefault();
                  removeItem(dataItem);
                  
                }
                }
              >
                Remove Items
              </Button>

          </Grid>
        </Grid>
      </Container>
    </>
  );
};
