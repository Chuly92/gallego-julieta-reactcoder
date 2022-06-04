import { CircularProgress } from "@mui/material";
import React from "react";

export const Loading = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress size="60px" sx={{ m: 2 }} color="secondary" />
    </div>
  );
};
