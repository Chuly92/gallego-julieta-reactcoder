import { Box } from "@mui/material";
import React from "react";
import { Item } from "./Item";

export const ItemList = ({ data }) => {
  return (
    <>

      {data &&
        data.map((e, index) => (

            <Box
              key={e.id}
              className="boxItemList"
              sx={{
                display: 'inline-flex',
                flexWrap: 'nowrap',
                p: 0.5,
                m: 0.5,
                alignItems: 'center',
                alignContent: 'center',
                alignSelf: 'center',
              }}
            >
              <Item dataItem={e} />
            </Box>
        ))}
    </>
  );
};
