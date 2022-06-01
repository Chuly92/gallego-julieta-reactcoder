import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, ImageListItem, Typography } from "@mui/material";
import { Container } from "@mui/system";

export const NotFound = () => {
  return (
    <>
      <Container>
        <Typography
          variant="title"
          align="center"
          display="block"
          sx={{
            fontSize: 38,
            fontFamily: "fantasy",
            letterSpacing: ".2rem",
            mt: 2,
            mb: 2,
          }}
        >
          Page Not Found
        </Typography>

        <Box
          sx={{
            display: "grid",
            justifyItems: "center",
          }}
        >
          <ImageListItem sx={{ maxWidth: 300, justifyContent: "center" }}>
            <img
              src={
                "https://www.pokemoncenter.com/static/images/404-not-found.jpg"
              }
              srcSet={
                "https://www.pokemoncenter.com/static/images/404-not-found.jpg"
              }
              alt="notFoundImg"
              loading="lazy"
            />
          </ImageListItem>

          <Typography
            sx={{
              display: "flex",
              textAlign: "center",
              fontSize: 20,
              mt: 3,
            }}
          >
            Sorry! We're not able to find the page that you're looking for.
          </Typography>

          <Link to={`/`} style={{ textDecoration: "none" }}>
            <Button
              color="secondary"
              sx={{
                display: "flex",
                margin: "auto",
                mt: 3,
                mb: 3,
                fontSize: 16,
              }}
              type="submit"
              variant="contained"
            >
              Return to the store
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};
