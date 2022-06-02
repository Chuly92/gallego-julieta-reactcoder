import { useState, useEffect } from "react";
import { getDocs, query, where } from "firebase/firestore";
import { orderCollection } from "../services/Firebase";
import { Loading } from "./Loading";
import { Box, Container } from "@mui/system";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {
  Grid,
  ImageListItem,
  Typography,
  ButtonGroup,
  IconButton,
} from "@mui/material";

export const Orders = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const email = "julietagallego@live.com.ar";

  useEffect(() => {
    setLoading(true);

    const q = query(orderCollection, where("buyer.email", "==", email));
    getDocs(q)
      .then((snapshot) => {
        if (snapshot.size === 0) {
          // setOpenAlert(true);
        } else {
          setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        }
      })
      .catch((err) => setError(err))
      .finally(setLoading(false));
  }, []);

  return (
    <>

      {loading && (
        <>
          <Loading />
        </>
      )}
      {error && "Error loading data"}
      {data &&
        !loading &&
        data.map((e) => {
          return (
            <div key={e.id}>
              <Container component="div" sx={{ display: "flex"}}>
              
              <Grid
                  maxWidth="100%"
                  container
                  spacing={2}
                  columns={16}
                  sx={{
                    mt: 2,
                    // display: "flex",
                    boxShadow: 10,
                    borderRadius: 5,
                  }}
                >
                    
                    <Grid item xs={2}>
                  <ShoppingBasketIcon sx={{mt: 2}} />
                    </Grid>
                    <Grid item xs={6}>
                    <Typography
                      variant="h1"
                      component="div"
                      align="center"
                      sx={{ fontWeight: 600, fontSize: 16, mt:2, textAlign: "center" }}
                    >
                      Order ID: {e.id}
                    </Typography>
                  </Grid>

                  <Grid item xs={8}>
                  <Typography
                      variant="p"
                      component="div"
                      align="center"
                      sx={{ fontWeight: 600, fontSize: 16 }}
                    >
                      Total Items: {e.qtyItems}
                    </Typography>
                    <Typography
                      variant="p"
                      component="div"
                      align="center"
                      sx={{ fontWeight: 600, fontSize: 16}}
                    >
                      Paid: $ {e.total}
                    </Typography>
                    <Typography
                      variant="p"
                      component="div"
                      align="center"
                      sx={{ fontWeight: 600, fontSize: 16, mb: 1.5}}
                    >
                      Status: {e.status}
                    </Typography>

                  </Grid>
                </Grid>
              </Container>
            </div>
          );
        })}
    </>
  );
};
