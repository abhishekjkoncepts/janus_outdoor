import React from "react";

import { Grid, Typography, Button, Box } from "@mui/material";

import { makeStyles } from "@mui/styles";

import { Card, CardActions, CardContent } from "@mui/material";

import JanusAdvertisement from "../../assets/images/JanusAdvertisement.jpeg";

const useStyles = makeStyles({
  root: {
    position: "sticky",
    top: "1rem",
    minWidth: "275",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Fullpageadvertisement = () => {
  const classes = useStyles();
  return (
    // <Card className={classes.root} elevation={15}>
    //   <CardContent>
    //     <Typography
    //       className={classes.title}
    //       color="textSecondary"
    //       gutterBottom
    //     >
    //       Shopping Cart
    //     </Typography>
    //     <Typography variant="div" component="h1">
    //       {" "}
    //       Order Summary
    //     </Typography>
    //     <Typography variant="subtitle2">
    //       <hr />
    //     </Typography>
    //     <Grid container>
    //       <Grid item xs={11} sm={11} md={11} lg={11}>
    //         <Typography variant="body1" component="div">
    //           Shipping
    //         </Typography>
    //       </Grid>
    //       <Grid item xs={1} sm={1} md={1} lg={1}>
    //         <Typography variant="h6" component="div">
    //           €0
    //         </Typography>
    //       </Grid>
    //       <Grid item xs={11} sm={11} md={11} lg={11}>
    //         <Typography variant="body1" component="div">
    //           Total
    //         </Typography>
    //       </Grid>
    //       <Grid item xs={1} sm={1} md={1} lg={1}>
    //         <Typography variant="h6" component="div">
    //           €0
    //         </Typography>
    //       </Grid>
    //     </Grid>
    //   </CardContent>

    //   <CardActions>
    //     <Button size="large" color="secondary">
    //       BUY NOW ({1})
    //     </Button>
    //   </CardActions>
    // </Card>
    <Box
      className={classes.root}
      sx={{
        display: "flex",
        justifyContent: {
          xs: "center",
          sm: "center",
          md: "flex-end",
          lg: "flex-end",
        },
        paddingLeft: {
          xs: "10px",
          sm: "10px",
          md: "20px",
          lg: "20px",
        },
        paddingRight: {
          xs: "10px",
          sm: "10px",
          md: "0px",
          lg: "0px",
        },
        paddingTop:{
          xs: "10px",
          sm: "10px",
          md: "0px",
          lg: "0px",
        },
        paddinBottom:{
          xs: "10px",
          sm: "10px",
          md: "20px",
          lg: "20px",
        }
      }}
    >
      <a
        href="https://www.januskoncepts.com"
        // href="https://www.youtube.com/uttaranchalwasi"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Box
          sx={{
            backgroundColor: "#F0F0F0",

            marginTop: {
              xs: "10px",
              sm: "10px",
              md: "0px",
              lg: "0px",
            },
            marginBottom: {
              xs: "40px",
              sm: "40px",
              md: "0px",
              lg: "0px",
            },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "10px",
                  sm: "10px",
                  md: "9px",
                  lg: "9px",
                },
                fontWeight: "600",
                textAlign: "center",
                color: "black",
              }}
            >
              ADVERTISEMENT
            </Typography>
          </Box>
          <Box
            component="img"
            sx={{
              width: {
                xs: "200px",
                sm: "200px",
                md: "100%",
                lg: "100%",
              },
              height: {
                xs: "200px",
                sm: "200px",
                md: "100%",
                lg: "100%",
              },
            }}
            alt="redTriangleArrow"
            src={JanusAdvertisement}
          />
        </Box>
      </a>
    </Box>
  );
};

export default Fullpageadvertisement;
