import { useContext } from "react";
import {
  Button,
  ImageListItem,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import { cartContext } from "../contexts/ContextHOC";

export const CartItem = ({ dataItem }) => {
  const { removeItem } = useContext(cartContext);

  return (
    <>
      {/* Card to full size screens */}

      <Container
        maxWidth="3840px"
        component="div"
        sx={{ display: { xs: "none", lg: "flex" }, ml: 5, mr: 5 }}
      >
        <Grid
          maxWidth="100%"
          container
          spacing={2}
          columns={16}
          sx={{
            mt: 2,
            display: "flex",
            boxShadow: 10,
            borderRadius: 5,
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
                alt={dataItem.data.name}
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
              {dataItem.data.name}
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
              Total Item: US${" "}
              {(dataItem.data.price * dataItem.qtyItem).toFixed(2)}
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
              }}
            >
              Remove Items
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* Card to screens down to 1200px */}
      <Container component="div" sx={{ display: { xs: "flex", lg: "none" }, ml: 1, 
    maxWidth: 800, maxHeight: 300 }}>
        <Grid
          container
          spacing={2}
          columns={16}
          sx={{
            mt: 2,
            p: 1,
            display: "flex",
            boxShadow: 10,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={4}>
            <ImageListItem
              sx={{
                maxWidth: 250,
                maxHeight: 220,
              }}
            >
              <img
                src={dataItem.data.pictureUrl}
                srcSet={dataItem.data.pictureUrl}
                alt={dataItem.data.name}
                loading="lazy"
              />
            </ImageListItem>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="title"
              component="div"
              align="center"
              sx={{ fontWeight: 500, fontSize: 22, mb: 1, mt: 1 }}
            >
              {dataItem.data.name}
            </Typography>

            <Typography
              variant="title"
              component="div"
              align="center"
              sx={{ mb: 1, fontWeight: 500, fontSize: 16, color: "#575757" }}
            >
              Unit Price: US$ {dataItem.data.price}
            </Typography>

            <Typography
              variant="title"
              component="div"
              align="center"
              sx={{ mb: 1, fontWeight: 500, fontSize: 16, color: "#575757" }}
            >
              Quantity: {dataItem.qtyItem}
            </Typography>

            <Typography
              variant="title"
              component="div"
              align="center"
              sx={{ mt: 1, fontWeight: 500, fontSize: 16 }}
            >
              Total Item: US${" "}
              {(dataItem.data.price * dataItem.qtyItem).toFixed(2)}
            </Typography>

            <Button
              color="secondary"
              sx={{
                display: "flex",
                margin: "auto",
                mt: 1,
                mb: 1,
                fontSize: 10,
                alignItems: "justify-end",
              }}
              type="submit"
              variant="contained"
              onClick={(e) => {
                e.preventDefault();
                removeItem(dataItem);
              }}
            >
              Remove Items
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
