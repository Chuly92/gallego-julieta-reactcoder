import {Container, Grid, ImageListItem, Typography, Box, ButtonGroup, IconButton, Button, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText} from '@mui/material';
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../contexts/ContextCart";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DeleteIcon from "@mui/icons-material/Delete";

export const CartItem = ({ dataItem }) => {
  const { removeItem, updateItem } = useContext(cartContext);
  const [counter, setCounter] = useState(dataItem.qtyItem);

  const [openRemoveAlert, setOpenRemoveAlert] = useState(false);

  const handleClose = () => {
    setOpenRemoveAlert(false);
  };

  const handleQtyCounter = (e, newQty) => {
    e.preventDefault();

    if (newQty) {

      if (updateItem(dataItem, newQty)) {
        setCounter(newQty);
      } else {
        newQty = dataItem.qtyItem;
      }
    }
  };

  useEffect(() => {

  }, [counter]);

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
              sx={{ fontWeight: 500, fontSize: 28, mb: 1, mt: 1 }}
            >
              {dataItem.data.name}
            </Typography>

            <ButtonGroup
              sx={{
                alignItems: "center",
                width: "100%",
                justifyContent: "center",
                mt: 2,
                mb: 2
              }}
            >
              <Typography
                variant="title"
                component="div"
                align="center"
                sx={{ m: 1, fontWeight: 500, fontSize: 18, color: "#575757" }}
              >
                Qty
              </Typography>
              <IconButton
                aria-label="subtract"
                color="secondary"
                onClick={(e) => handleQtyCounter(e, counter - 1)}
              >
                <RemoveCircleIcon />
              </IconButton>

              <Box sx={{ display: "grid" }}>{dataItem.qtyItem}</Box>

              <IconButton
                aria-label="add"
                color="secondary"
                onClick={(e) => handleQtyCounter(e, counter + 1)}
              >
                <AddCircleIcon />
              </IconButton>

              <IconButton
                color="secondary"
                type="submit"
                variant="contained"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenRemoveAlert(true);
                }}
              >
                <DeleteIcon fontSize="small"/>
              </IconButton>
            </ButtonGroup>

            <Typography
              variant="title"
              component="div"
              align="center"
              sx={{
                mb: 2,
                mt: 2,
                fontWeight: 500,
                fontSize: 18,
                color: "#575757",
              }}
            >
              Unit Price: US$ {dataItem.data.price}
            </Typography>

            <Typography
              variant="title"
              component="div"
              align="center"
              sx={{ mt: 1, fontWeight: 500, fontSize: 22 }}
            >
              Total Item: US${" "}
              {(dataItem.data.price * dataItem.qtyItem).toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
      </Container>







      {/* Card to screens down to 1200px */}
      <Container
        component="div"
        sx={{
          display: { xs: "flex", lg: "none" },
          ml: 1,
          maxWidth: 800,
          maxHeight: 300,
        }}
      >
        <Grid
          container
          spacing={2}
          columns={16}
          sx={{
            mt: 2,
            // p: 1,
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
              sx={{ fontWeight: 500, fontSize: 22, mb: 1}}
            >
              {dataItem.data.name}
            </Typography>

            <ButtonGroup
              sx={{
                alignItems: "center",
                width: "100%",
                justifyContent: "center",
                mb: 1
              }}
            >
              <Typography
                variant="title"
                component="div"
                align="center"
                sx={{ m: 1, fontWeight: 500, fontSize: 16, color: "#575757" }}
              >
                Qty
              </Typography>
              <IconButton
                aria-label="subtract"
                color="secondary"
                onClick={(e) => handleQtyCounter(e, counter - 1)}
              >
                <RemoveCircleIcon fontSize="small"/>
              </IconButton>

              <Box sx={{ display: "grid" }}>{dataItem.qtyItem}</Box>

              <IconButton
                aria-label="add"
                color="secondary"
                onClick={(e) => handleQtyCounter(e, counter + 1)}
              >
                <AddCircleIcon fontSize="small"/>
              </IconButton>

              <IconButton
                color="secondary"
                type="submit"
                variant="contained"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenRemoveAlert(true);
                }}
              >
                <DeleteIcon fontSize="small"/>
              </IconButton>
            </ButtonGroup>

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
              sx={{ mt: 1, mb: 1, fontWeight: 500, fontSize: 16 }}
            >
              Total Item: US${" "}
              {(dataItem.data.price * dataItem.qtyItem).toFixed(2)}
            </Typography>
          </Grid>
        </Grid>

      <Dialog
        open={openRemoveAlert}
        onClose={handleClose}
        aria-labelledby="alertDelete"
      >
        <DialogTitle id="alertDelete">{"This action can't be reversed"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
              removeItem(dataItem);
            }}
          >
            Ok
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>

      </Container>
    </>
  );
};
