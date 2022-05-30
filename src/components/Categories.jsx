import {
    Container,
    Grid,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    Typography
} from "@mui/material";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "./Loading";

export const Categories = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);

  const fetchCategories = () => {
    setLoading(true);
    const db = getFirestore();
    const catCollection = collection(db, "categories");
    
    getDocs(catCollection)
      .then((snapshot) => {
        setCategories(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((err) => setError(err))
      .finally(setLoading(false));
  }

  useEffect(() => {
    fetchCategories();
  }, []);

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

        {loading && <Loading />}

        <Grid
          maxWidth="3840px"
          container
          sx={{ mt: 2 }}
          flexDirection="column"
          justifyContent="center"
          alignContent="space-around"
        >
          {categories.map((cat, index) => (
            <ImageList
              sx={{ maxWidth: 600, maxHeight: 600, borderRadius: 5, boxShadow: 5 }}
              cols={1}
              key={cat.id}
            >
              <Link to={`/category/${cat.code}`}>
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
