import React from "react";
import {
  Card,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Plush",
      imgUrl: "https://pokemon.originalstitch.com/en/img/info/20200306.jpg",
    },
    {
      id: 2,
      name: "Customes",
      imgUrl:
        "https://www.pokemoncenter.com/site/binaries/content/gallery/bloomreach/home/explore-more/04-april-2022/202204_visnav_plush.jpg",
    },
  ];

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
