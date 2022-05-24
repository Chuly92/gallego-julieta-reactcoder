import {
  Container,
  Grid,
  ImageListItem,
  Typography,
} from "@mui/material";
import {useEffect, useState, useContext} from 'react';
import { ItemCount } from "./ItemCount";
import { cartContext } from "../contexts/ContextHOC";

export const ItemDetail = ({ data }) => {

  const [showItemCount, setShowItemCount] = useState(true);
  const { addItem } = useContext(cartContext);

  const onAdd = (qtyItem) => {
    //Here will add the item to the number on cart icon
    const dataItem = {data, qtyItem}

    addItem(dataItem);
    setShowItemCount(false);
  } 
  
  useEffect((e) => {
    if (!showItemCount) alert('Item added to cart!');
  }, [showItemCount])
    
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
            <ImageListItem sx={{textDecoration: 'none'}}>
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
            
            { showItemCount &&            
              <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            }

          </Grid>
        </Grid>

        {/* Screen size down to 900px */}

        <Grid sx={{ maxWidth: "100%", display: { xs: "flex", md: "none" } }}>
          <ImageListItem sx={{textDecoration: 'none'}}>
            <img
              src={data.pictureUrl}
              srcSet={data.pictureUrl}
              alt={data.title}
              loading="lazy"
            />
          </ImageListItem>
        </Grid>

        <Grid sx={{ p: 1, display: { xs: "block", md: "none" } }} variant="div">
          <Typography
            variant="title"
            display="flex"
            sx={{
              fontWeight: 500,
              fontSize: 32,
              fontFamily: "fantasy",
              letterSpacing: ".05rem",
              mt: 2,
              justifyContent: "center"
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

          { showItemCount &&            
              <ItemCount stock={5} initial={1} onAdd={onAdd}/>
          }
          
        </Grid>      

      </Container>
    </>
  );
};
