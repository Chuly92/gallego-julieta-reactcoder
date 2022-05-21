import React from "react";
import categories from "../data/categories.json";
import {
  Container,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const Categories = () => {

  return (
    <>
      <Container maxWidth="3840px" component="div">

        <Typography
          variant="title"
          align="center"
          display="block"
          sx={{
            fontSize: 38,
            fontFamily: "fantasy",
            letterSpacing: ".2rem",
            mt: 2,
          }}
        >
          Categories
        </Typography>

        <Grid
          maxWidth="3840px"
          container
          sx={{ mt: 2}}
          flexDirection="column"
          justifyContent="center"
          alignContent="space-around"
        >
          {categories.map((cat, index) => (
              <ImageList sx={{ maxWidth: 600, maxHeight: 600 }} cols={1} key={cat.id}>
                <Link
                  to={`/category/${cat.id}`}
                >
                  <ImageListItem>
                    <img
                      src={cat.imgUrl}
                      srcSet={cat.imgUrl}
                      alt="Plush"
                      loading="lazy"
                    />
                    <ImageListItemBar
                      title={cat.name}
                      sx={{ textAlign: "center", fontWeight: 600 }}
                    />
                  </ImageListItem>
                </Link>
              </ImageList>
          ))}
        </Grid>
      </Container>
    </>
  );
};
