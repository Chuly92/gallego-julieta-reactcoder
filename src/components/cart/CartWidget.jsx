import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

export const CartWidget = ({ qtyItems }) => {

  return (
    <>
      <Badge color="secondary" badgeContent={qtyItems} sx={{ mt: 1 }}>
        <Box sx={{ flexGrow: 0, display: "flex" }}>
          <Link to="/cart">
            <ShoppingCartIcon fontSize="large" sx={{ color: "secondary.light" }} />
          </Link>
        </Box>
      </Badge>
    </>
  );
};
