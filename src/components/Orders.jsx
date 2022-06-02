import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {
  Grid, Typography
} from "@mui/material";
import { Container } from "@mui/system";
import { getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { orderCollection } from "../services/Firebase";
import { Loading } from "./Loading";

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
                    ml: 1,
                    boxShadow: 10,
                    borderRadius: 5,
                  }}
                >
                    
                    <Grid item xs={2}>
                  <ShoppingBasketIcon sx={{mt: 2, color: "secondary.main"}} />
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
