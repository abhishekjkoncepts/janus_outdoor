import React from "react";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";
import add from "../../assets/images/add1.webp";

// CSS
import "./Testing.css";

const Testing = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
        <Grid item xs={12} sm={12} md={10} lg={10}>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{ backgroundColor: "red", height: "100px" }}
            >
              {/* <article style={{ backgroundImage: `url(${add})` }}>
                <Typography>heel</Typography>
              </article> */}

              {/* <article>
                <img src={add} />
                <h1>heeloo</h1>
              </article> */}

<article >
      <picture >
        <source media="(min-width: 0px)" srcSet={add} />
        <img src={add} alt="background" />
      </picture>
      <h1>React Is Awesome</h1>
    </article>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{ backgroundColor: "green" }}
            >
              heelo
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{ backgroundColor: "blue" }}
            >
              heelo
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
      </Grid>
    </Box>
  );
};

export default Testing;
