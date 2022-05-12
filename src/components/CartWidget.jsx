import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { pink } from "@mui/material/colors";
import { Box } from "@mui/system";

export const CartWidget = ({ qtyItems }) => {
  const cartColor = pink[100];

  return (
    <>
      <Badge color="secondary" badgeContent={qtyItems}>

        {/* ShoppingCart for responsive screens */}
        <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
          <ShoppingCartIcon fontSize="medium" sx={{ color: cartColor }} />
        </Box>

        {/* ShoppingCart for desktop mode */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <ShoppingCartIcon fontSize="large" sx={{ color: cartColor }} />
        </Box>

      </Badge>
    </>
  );
};
