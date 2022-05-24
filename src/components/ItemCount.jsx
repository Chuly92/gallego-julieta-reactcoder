import React, { useState } from "react";
import { Box, Button, ButtonGroup, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

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

    if (counter > 0) {
      onAdd(counter);
    } else{
      alert("Please add an item");
    }
  };


  return (
    <>
      <Box sx={{ mt: 2, border: "none" }}>
        <ButtonGroup
          sx={{
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <IconButton
            aria-label="subtract"
            color="secondary"
            onClick={handleSubtractItem}
            sx={{ mx: 1 }}
          >
            <RemoveCircleIcon />
          </IconButton>

          <Box sx={{ display: "grid" }}>{counter}</Box>

          <IconButton
            aria-label="add"
            color="secondary"
            onClick={handleAddItem}
            sx={{ mx: 1 }}
          >
            <AddCircleIcon />
          </IconButton>
        </ButtonGroup>

        <Button
          color="secondary"
          sx={{ display: "flex", margin: "0 auto", mt: 1 }}
          onClick={handleAddToCart}
          type="submit"
          variant="contained"
        >
          Add to Cart
        </Button>
      </Box>
    </>
  );
};
