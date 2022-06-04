import { Grid } from "@mui/material";
import React from "react";
import { Item } from "./Item";

export const ItemList = ({ data }) => {
  return (
    <>
      <Grid container justifyContent="center" sx={{mt: 2}}>
        {data && data.map((e, index) => 
        <Item key={e.id} dataItem={e} />
        )}
      </Grid>
    </>
  );
};

