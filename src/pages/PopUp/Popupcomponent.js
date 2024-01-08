import React from "react";

// MATERIAL-UI
import { Typography, Grid, Box, Button } from "@mui/material";
import closebtn from "../../assets/images/close.png";
import TextField from "@mui/material/TextField";

import "./Popupcomponent.css";

const Popupcomponent = (props) => {
  return (
    // <Box className="popup-box">
    //   <Box className="box">
    //     <button className="btn-close" onClick={props.handleClose}></button>
    //     {/* {props.content  } */}
    //     <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    //     <TextField id="filled-basic" label="Filled" variant="filled" />
    //   </Box>
    // </Box>
    <Box
      sx={{
        position: "fixed",
        left: "0px",
        top: "0px",
        backgroundColor: "rgba(0,0,0,0.5)",
        width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
        height: { xs: "100%", sm: "100%", md: "100vh", lg: "100vh" },
        display: "flex",
        justifyContent: {
          xs: "center",
          sm: "center",
          md: "center",
          lg: "center",
        },
        alignItems: { xs: "center", sm: "center", md: "center", lg: "center" },
      }}
    >
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#fff",
          border: "1px solid #999",
          borderRadius: "4px",
          marginTop: { xs: "10px", sm: "10px", md: "60px", lg: "60px" },
          overflow: "auto",
          width: { xs: "95%", sm: "95%", md: "500px", lg: "500px" },
          height: { xs: "400px", sm: "400px", md: "500px", lg: "500px" },
          paddingLeft: { xs: "0px", sm: "0px", md: "0px", lg: "0px" },
          paddingRight: { xs: "0px", sm: "0px", md: "0px", lg: "0px" },
        }}
      >
        {/* <button className="btn-close" onClick={props.handleClose}></button> */}
        {/* Closebutton */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <img
            src={closebtn}
            onClick={props.handleClose}
            style={{
              width: "15px",
              height: "15px",
              // position: "fixed",
              marginLeft: "40px",
            }}
          />
        </Box>
        {/* text */}
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box
              sx={{
                paddingLeft: { xs: "18px", sm: "18px", md: "15px", lg: "15px" },
              }}
            >
              <Box sx={{}}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "20px",
                      sm: "20px",
                      md: "25px",
                      lg: "25px",
                    },
                    fontWeight: "700",
                    Family: "Poppins, sans-serif",
                  }}
                >
                  Support and Contact Enquiry
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Name */}
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={0.5}
            lg={0.5}
            // sx={{ backgroundColor: "red" }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={11}
            lg={11}
            sx={{ backgroundColor: "#fff" }}
          >
            <Box
              sx={{
                paddingLeft: { xs: "10px" },
                paddingRight: { xs: "10px" },
                marginTop: { xs: "0px", sm: "0px", md: "5px", lg: "5px" },
              }}
            >
              <TextField
                id="standard-basic"
                label="Name*"
                variant="standard"
                sx={{ width: "100%" }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={0.5}
            lg={0.5}
            // sx={{ backgroundColor: "green" }}
          ></Grid>
        </Grid>
        {/* Email And Phone */}
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={0.5}
            lg={0.5}
            // sx={{ backgroundColor: "red" }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={11}
            lg={11}
            sx={{
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
              },
              justifyContent: { md: "space-between", lg: "space-between" },
              marginTop: { xs: "0px", sm: "0px", md: "20px", lg: "20px" },
            }}
          >
            <Box
              sx={{
                paddingLeft: { xs: "10px" },
                paddingRight: { xs: "10px" },
              }}
            >
              <TextField
                id="standard-basic"
                label="Email*"
                variant="standard"
                sx={{
                  width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
                }}
              />
            </Box>
            <Box
              sx={{ paddingLeft: { xs: "10px" }, paddingRight: { xs: "10px" } }}
            >
              <TextField
                id="standard-basic"
                label="Phone*"
                variant="standard"
                sx={{
                  width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
                }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={0.5}
            lg={0.5}
            // sx={{ backgroundColor: "green" }}
          ></Grid>
        </Grid>
        {/* Message */}
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={0.5}
            lg={0.5}
            // sx={{ backgroundColor: "red" }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={11}
            lg={11}
            sx={{ backgroundColor: "#fff" }}
          >
            <Box
              sx={{
                paddingLeft: { xs: "10px" },
                paddingRight: { xs: "10px" },
                marginTop: { xs: "0px", sm: "0px", md: "20px", lg: "20px" },
              }}
            >
              <TextField
                id="standard-basic"
                label="Write a message*"
                variant="standard"
                sx={{ width: "100%" }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={0.5}
            lg={0.5}
            // sx={{ backgroundColor: "green" }}
          ></Grid>
        </Grid>
        {/* Button */}
        <Grid container>
          <Grid item xs={12} sm={12} md={0.5} lg={0.5}></Grid>
          <Grid item xs={12} sm={12} md={11} lg={11}>
            <Box
              sx={{
                marginTop: { xs: "20px", sm: "20px", md: "50px", lg: "50px" },
                paddingLeft: { xs: "10px", sm: "10px", md: "0px", lg: "0px" },
                paddingRight: { xs: "10px", sm: "10px", md: "0px", lg: "0px" },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#C02222",
                  width: "100%",
                }}
              >
                <Typography>SEND MESSAGE</Typography>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={0.5} lg={0.5}></Grid>
        </Grid>
        {/* Contact details */}
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "12px",
                      md: "15px",
                      lg: "15px",
                    },
                    fontWeight: "600",
                    fontFamily: "Poppins, sans-serif",
                    fontStyle: "italic",
                  }}
                >
                  or
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "12px",
                      md: "15px",
                      lg: "15px",
                    },
                    fontWeight: "500",
                    fontFamily: "Poppins, sans-serif",
                    marginTop: "10px",
                  }}
                >
                  Call us : +91 96507-64004
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "12px",
                      md: "15px",
                      lg: "15px",
                    },
                    fontWeight: "500",
                    fontFamily: "Poppins, sans-serif",
                    marginTop: "10px",
                  }}
                >
                  {" "}
                  Email-id: birender@janusalive.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Popupcomponent;
