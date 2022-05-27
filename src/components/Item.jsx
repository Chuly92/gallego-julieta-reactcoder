import React from "react";
import { Button, Card, ImageListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Item = ({ dataItem }) => {
  return (
    <>
      {/* Card to full size screens */}

      <Card 
        sx={{          
          maxWidth: 250,
          height: 380,
          border: 1,
          borderRadius: 5,
          borderColor: "#fcb3e2",
          display: { xs: "none", md: "block" },   
          m: 0.5   
        }}        
      >
        <ImageListItem>
          <img
            src={dataItem.pictureUrl}
            srcSet={dataItem.pictureUrl}
            alt={dataItem.name}
            loading="lazy"
          />
        </ImageListItem>

        <Typography
          variant="title"
          component="div"
          align="center"
          sx={{ mb: 1, fontWeight: 500, fontSize: 18 }}
        >
          {dataItem.name}
        </Typography>

        <Typography
          variant="title"
          component="div"
          align="center"
          sx={{ mb: 1, fontWeight: 500 }}
        >
          US$ {dataItem.price}
        </Typography>

        <Link to={`/item/${dataItem.id}`} style={{ textDecoration: "none" }}>
        <Button
          color="secondary"
          sx={{ display: "flex", margin: "auto", mt: 1, mb: 2, fontSize: 12, alignItems: "justify-end" }}
          type="submit"
          variant="contained"
        >
          View details
        </Button>
        </Link>
        
      </Card>


      {/* Card to responsive screens */}
      <Card
        sx={{
          maxWidth: 160,
          maxHeight: 300,
          border: 1,
          borderRadius: 5,
          borderColor: "#fcb3e2",
          display: { xs: "block", md: "none" },
          m: 0.5
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
          sx={{ fontWeight: 600, fontSize: 14, minHeight: 55 }}
        >
          {dataItem.title}
        </Typography>

        <Typography
          variant="title"
          component="div"
          align="center"
          sx={{ fontWeight: 400, fontSize: 12, mt: 1 }}
        >
          US$ {dataItem.price}
        </Typography>

        <Link to={`/item/${dataItem.id}`} style={{ textDecoration: "none" }}>
          <Button
            color="secondary"
            size="small"
            sx={{ display: "flex", margin: "auto", fontSize: 10, mt: 1, mb: 1}}
            type="submit"
            variant="contained"
          >
            View details
          </Button>
        </Link>
      </Card>
    </>
  );
};
