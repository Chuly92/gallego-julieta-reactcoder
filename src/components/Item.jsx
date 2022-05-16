import React from "react";
import { Button, Card, ImageListItem, Typography } from "@mui/material";

export const Item = ({ dataItem }) => {
  return (
    <>
    {/* Card to full size screens */}
      <Card
        sx={{
          maxWidth: 240,
          maxHeight: 350,
          border: 4,
          borderRadius: 4,
          borderStyle: "double",
          borderColor: "#8f8f8f",
          display: { xs: "none", md: "block" }
        }}
      >        
        <ImageListItem>
          <img
            src={dataItem.pictureUrl}
            srcSet={dataItem.pictureUrl}
            alt={dataItem.title}
            loading="lazy" 
          />
        </ImageListItem>

        <Typography
          variant="title"
          component="div"
          align="center"
          sx={{ mb: 1, fontWeight: 500, fontSize: 18 }}
        >
          {dataItem.title}
        </Typography>

        <Typography
          variant="title"
          component="div"
          align="center"
          sx={{ mb: 1, fontWeight: 500 }}
        >
          US$ {dataItem.price}
        </Typography>

        <Button
          color="secondary"
          sx={{ display: "flex", margin: "auto", mt: 1, mb: 2, fontSize: 12 }}
          type="submit"
          variant="contained"          
        >
          View details
        </Button>
      </Card>



      {/* Card to responsive screens */}
      <Card
        sx={{
          maxWidth: 160,
          maxHeight: 250,
          border: 3,
          borderRadius: 3,
          borderStyle: "double",
          borderColor: "#8f8f8f",
          display: { xs: "block", md: "none" }
        }}
      >        
        <ImageListItem>
          <img
            src={dataItem.pictureUrl}
            srcSet={dataItem.pictureUrl}
            alt={dataItem.title}
            loading="lazy"
          />
        </ImageListItem>

        <Typography
          variant="title"
          component="div"
          align="center"
          sx={{ fontWeight: 500, fontSize: 14 }}
        >
          {dataItem.title}
        </Typography>

        <Typography
          variant="title"
          component="div"
          align="center"
          sx={{ fontWeight: 500, fontSize: 12}}
        >
          US$ {dataItem.price}
        </Typography>

        <Button
          color="secondary"
          size="small"
          sx={{ display: "flex", margin: "auto", fontSize: 10, mt: 1, mb: 1}}
          type="submit"
          variant="contained"          
        >
          View details
        </Button>
      </Card>
    </>
  );
};
