import { Button, Container, ImageListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const ItemDetail = ({ data }) => {
  return (
    <>
      <Container maxWidth="3840px" component="div">
        {/* Screen size up to 900px */}
        <Box
          sx={{
            float: "left",
            maxWidth: "50%",
            display: { xs: "none", md: "inline-flex" },
          }}
        >
          <ImageListItem>
            <img
              src={data.pictureUrl}
              srcSet={data.pictureUrl}
              alt={data.title}
              loading="lazy"
            />
          </ImageListItem>
        </Box>

        <Box sx={{ p: 4, mx: 2 }}>
          <Typography
            variant="title"
            align="center"
            display="flex"
            sx={{
              fontSize: 48,
              fontFamily: "fantasy",
              letterSpacing: ".05rem",
              display: { xs: "none", md: "block" },
            }}
          >
            {data.title}
          </Typography>

          <Typography
            variant="body1"
            display="flex"
            sx={{
              fontSize: 28,
              fontFamily: "monospace",
              display: { xs: "none", md: "block" },
              m: 2,
            }}
          >
            {data.description}
          </Typography>

          <Typography
            variant="body2"
            display="flex"
            sx={{
              fontSize: 32,
              fontWeight: 600,
              fontFamily: "monospace",
              display: { xs: "none", md: "block" },
            }}
          >
            Price: US$ {data.price}
          </Typography>

          <Button
            color="secondary"
            sx={{
              margin: "auto",
              mt: 1,
              mb: 2,
              fontSize: 12,
              alignItems: "justify-end",
              display: { xs: "none", md: "block" }
            }}
            type="submit"
            variant="contained"
            
          >
            Add to Cart
          </Button>
        </Box>

        {/* Screen size down to 900px */}
        <Box sx={{ maxWidth: "100%", display: { xs: "flex", md: "none" } }}>
          <ImageListItem>
            <img
              src={data.pictureUrl}
              srcSet={data.pictureUrl}
              alt={data.title}
              loading="lazy"
            />
          </ImageListItem>
        </Box>

        <Box sx={{ p: 1, display: { xs: "block", md: "none" } }} variant="div">
          <Typography
            variant="title"
            align="center"
            display="flex"
            className="titulito"
            sx={{
              fontWeight: 500,
              fontSize: 32,
              fontFamily: "fantasy",
              letterSpacing: ".05rem",
              mt: 2,
            }}
          >
            {data.title}
          </Typography>

          <Typography
            variant="body1"
            display="flex"
            sx={{
              fontSize: 18,
              fontFamily: "monospace",
              textAlign: "center",
              mt: 2,
            }}
          >
            {data.description}
          </Typography>

          <Typography
            variant="body2"
            display="flex"
            sx={{
              fontSize: 22,
              fontWeight: 600,
              fontFamily: "monospace",
              justifyContent:'center', 
              m: 2,
            }}
          >
            Price: US$ {data.price}
          </Typography>

          <Button
            color="secondary"
            sx={{ margin: "auto", fontSize: 10, mt: 1, mb: 1, display: 'flex'}}
            type="submit"
            variant="contained"  
          >
            Add to Cart
          </Button>
        </Box>
      </Container>
    </>
  );
};
