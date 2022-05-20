import {
  Button,
  Container,
  Grid,
  ImageListItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const ItemDetail = ({ data }) => {
  return (
    <>
      <Container maxWidth="3840px" component="div">
        {/* Screen size up to 900px */}

        <Typography
          variant="title"
          align="center"
          display="block"
          sx={{
            fontSize: 38,
            fontFamily: "fantasy",
            letterSpacing: ".05rem",
            display: { xs: "none", md: "block" },
            maxWidth: "100%",
            mt: 2,
          }}
        >
          {data.title}
        </Typography>

        <Grid
          maxWidth="3840px"
          container
          spacing={2}
          columns={16}
          sx={{ mt: 2, display: { xs: "none", md: "flex" } }}
        >
          <Grid item xs={8}>
            <ImageListItem>
              <img
                src={data.pictureUrl}
                srcSet={data.pictureUrl}
                alt={data.title}
                loading="lazy"
              />
            </ImageListItem>
          </Grid>

          <Grid item xs={8} sx={{mt: 2}}>
            <Typography
              variant="body1"
              sx={{
                fontSize: 20,
                fontFamily: "monospace",
                display: { xs: "none", md: "flex" },
              }}
            >
              {data.description}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                fontSize: 30,
                fontWeight: 600,
                fontFamily: "monospace",
                display: { xs: "none", md: "flex" },
                mt: 1,
              }}
            >
              Price: US$ {data.price}
            </Typography>

            <Button
              color="secondary"
              sx={{
                margin: "auto",
                mt: 2,
                mb: 2,
                fontSize: 12,
                display: { xs: "none", md: "flex" },
              }}
              type="submit"
              variant="contained"
              disabled
            >
              Add to Cart
            </Button>
          </Grid>
        </Grid>

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
            display="flex"
            sx={{
              fontWeight: 500,
              fontSize: 32,
              fontFamily: "fantasy",
              letterSpacing: ".05rem",
              mt: 2,
              textAlign: "center",
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
              justifyContent: "center",
              m: 2,
            }}
          >
            Price: US$ {data.price}
          </Typography>

          <Button
            color="secondary"
            sx={{ margin: "auto", fontSize: 14, mt: 1, mb: 1, display: "flex" }}
            type="submit"
            variant="contained"
            disabled
          >
            Add to Cart
          </Button>
        </Box>
      </Container>
    </>
  );
};
