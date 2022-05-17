import { Container, ImageListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const ItemDetail = ({ data }) => {
  return (
    <>

      <Container sx={{ maxWidht: 1920}} component="div">
      
      {/* Screen size up to 900px */}
        <Box
          sx={{
            float: "left",
            maxWidth: "50%",
            display: { xs: "none", md: "inline-flex"},
          }}
        >
          <ImageListItem>
            <img
              src={data.img}
              srcSet={data.img}
              alt={data.title}
              loading="lazy"
            />
          </ImageListItem>
        </Box>

        <Box sx={{ p: 1 }}>
          <Typography
            variant="title"
            align="center"
            display="flex"
            sx={{
              fontWeight: 500,
              fontSize: 30,
              fontFamily: "fantasy",
              letterSpacing: ".05rem",
              textDecoration: "none",
              display: { xs: "none", md: "block" },
              m: 2
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
              fontSize: 22,
              fontWeight: 600,
              fontFamily: "monospace",
              display: { xs: "none", md: "block" },
              m: 2,
            }}
          >
            Price: US$ {data.price}
          </Typography>
        </Box>

        
        {/* Screen size down to 900px */}
        <Box sx={{ maxWidth: "100%", display: { xs: "flex", md: "none" }}}>
          <ImageListItem>
            <img
              src={data.img}
              srcSet={data.img}
              alt={data.title}
              loading="lazy"
            />
          </ImageListItem>
        </Box>

        <Box sx={{p: 1}} variant="div">
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
              display: { xs: "block", md: "none" },
              m: 2
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
              display: { xs: "block", md: "none" },
              textAlign: 'center',
              m: 2,
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
              textAlign: 'center',
              display: { xs: "block", md: "none" },
              m: 2,
            }}
          >
            Price: US$ {data.price}
          </Typography>
        </Box>

      </Container>
    </>
  );
};
