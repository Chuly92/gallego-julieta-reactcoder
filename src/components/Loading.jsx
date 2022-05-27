import React from "react";
import { CircularProgress } from "@mui/material";

export const Loading = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress size="60px" sx={{ m: 2 }} color="secondary" />
    </div>
  );
};
