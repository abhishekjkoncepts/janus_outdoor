import React, { useEffect, useState } from "react";

// MATERIAL-UI
import { Typography, Grid, Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

// IMAGES
import closebtn from "../../assets/images/close.png";
import call from "../../assets/images/call.png";
import mail from "../../assets/images/mail.png";

// REDUX
// post-----
import { submitenquiry } from "../../redux/actions/Outdoor";
// get-----
import { getProductsById } from "../../redux/actions/Outdoor";

// REACT-ROUTER-DOM
import { useLocation } from "react-router-dom";

// TOASTIFY
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Popupcomponent.css";

const Popupcomponent = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [ProductId, setProductId] = useState("");

  const [DATA, setDATA] = useState(null);

  const location = useLocation();
  useEffect(() => {
    console.log(location);
    getProductsById(location.state.id).then((res) => {
      console.log("PRODUCTS BY ID", res?._id);

      setProductId(res?._id);

      setDATA(res);
    });
  }, []);
  return (
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
                display: "flex",
                justifyContent: "center",
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
                  Enquiry Now
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
                marginTop: { xs: "0px", sm: "0px", md: "10px", lg: "10px" },
              }}
            >
              <TextField
                id="standard-basic"
                label="Name*"
                variant="standard"
                value={name}
                sx={{ width: "100%" }}
                onChange={(e) => {
                  setName(e.target.value);
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
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
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
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
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

        {/* Button */}
        <Grid container>
          <Grid item xs={12} sm={12} md={0.5} lg={0.5}></Grid>
          <Grid item xs={12} sm={12} md={11} lg={11}>
            <Box
              sx={{
                marginTop: { xs: "20px", sm: "20px", md: "40px", lg: "40px" },
                paddingLeft: { xs: "10px", sm: "10px", md: "10px", lg: "10px" },
                paddingRight: {
                  xs: "10px",
                  sm: "10px",
                  md: "10px",
                  lg: "10px",
                },
              }}
            >
              {/* <Button
                variant="contained"
                disableRipple
                disableElevation
                endIcon={<SendIcon />}
                sx={{
                  // backgroundColor: "#C02222",
                  bgcolor: "#C02222",
                  width: "100%",
                  "$:hover": { bgcolor: "green" },
                }}
                onClick={() => {
                  console.log({
                    name: name,
                    email: email,
                    phone: phone,
                    message: message,
                  });
                  submitenquiry({
                    id: ProductId,
                    name: name,
                    email: email,
                    phone: phone,
                    message: message,
                  });
                }}
              >
                <Typography>SEND MESSAGE</Typography>
              </Button> */}
              {/* <Box
                sx={{
                  bgcolor: "#C02222",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "35px",
                  borderRadius: "5px",
                }}
                onClick={() => {
                  console.log({
                    name: name,
                    email: email,
                    phone: phone,
                    message: message,
                  });
                  submitenquiry({
                    ProductId: ProductId,
                    name: name,
                    email: email,
                    phone: phone,
                    message: message,
                  });
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "400",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  SEND MESSAGE
                </Typography>
              </Box> */}
              <Box
                sx={{
                  bgcolor: "#C02222",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "35px",
                  borderRadius: "5px",
                }}
                onClick={() => {
                  console.log({
                    name: name,
                    email: email,
                    phone: phone,
                    message: message,
                  });

                  submitenquiry({
                    ProductId: ProductId,
                    name: name,
                    email: email,
                    phone: phone,
                    message: message,
                  });

                  // Add toast notification
                  toast.success("Query sent successfully!", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000, // Adjust the duration of the notification
                  });
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "400",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  SEND MESSAGE
                </Typography>
              </Box>
              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                toastStyle={{ top: "80px" }}
              />
              {/* Add this line to render ToastContainer */}
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
                marginTop: { xs: "20px", sm: "20px", md: "30px", lg: "30px" },
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <img
                  src={call}
                  style={{
                    height: "15px",
                    width: "15px",
                    marginTop: "3px",
                    marginRight: "8px",
                  }}
                />
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
                  }}
                >
                  +91 96507-64004
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <img
                  src={mail}
                  style={{
                    height: "15px",
                    width: "15px",
                    marginTop: "3px",
                    marginRight: "8px",
                  }}
                />
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
                  }}
                >
                  birender@janusalive.com
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
