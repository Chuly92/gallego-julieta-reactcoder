import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Box } from "@mui/system";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const handleAddItem = (e) => {
    e.preventDefault();

    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert("Maximum units allowed");
    }
  };

  const handleSubtractItem = (e) => {
    e.preventDefault();

    if (counter > 0) setCounter(counter - 1);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    counter > 0
      ? alert("Added to cart")
      : alert("You have to add an item to add");
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 200,
          maxHeight: 400,
          mx: 2,
          border: 4,
          borderRadius: 4,
          borderStyle: "double",
          borderColor: "#8f8f8f",
        }}
      >
        <CardMedia component="img" image="/storeItem1.png" alt="image" />

        <CardContent sx={{ alignItems: "center" }}>
          <Typography
            variant="title"
            component="div"
            align="center"
            sx={{ mb: 1, fontWeight: 500 }}
          >
            Pikachu Plush
          </Typography>

          <ButtonGroup
            sx={{
              alignItems: "center",
              width: "100%",
              justifyContent: "space-evenly",
            }}
          >
            <IconButton
              aria-label="add"
              color="secondary"
              onClick={handleSubtractItem}
            >
              <RemoveCircleIcon />
            </IconButton>

            <Box sx={{ display: "grid" }}>{counter}</Box>

            <IconButton
              aria-label="delete"
              color="secondary"
              onClick={handleAddItem}
            >
              <AddCircleIcon />
            </IconButton>
          </ButtonGroup>
        </CardContent>
        <CardActions>
          <Button
            color="secondary"
            sx={{ display: "flex", margin: "0 auto" }}
            onClick={handleAddToCart}
            type="submit"
            variant="contained"
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
