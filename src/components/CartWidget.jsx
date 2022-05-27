import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { pink } from "@mui/material/colors";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export const CartWidget = ({ qtyItems }) => {
  const cartColor = pink[100];

  return (
    <>
      <Badge color="secondary" badgeContent={qtyItems} sx={{ mt: 1 }}>
        <Box sx={{ flexGrow: 0, display: "flex" }}>
          <Link to="/cart">
            <ShoppingCartIcon fontSize="large" sx={{ color: cartColor }} />
          </Link>
        </Box>
      </Badge>
    </>
  );
};
