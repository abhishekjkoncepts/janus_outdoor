import React, { useState } from "react";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";
import TextField from "@mui/material/TextField";

// REACT-ROUTER-DOM
import { Link } from "react-router-dom";

// CSS
import "./Contactus.css";

// IMAGES
import address from "../../assets/images/address.png";
import call from "../../assets/images/call.png";
import Gmail from "../../assets/images/email.png";

// post
import { submitContactDetails } from "../../redux/actions/Contactus";
import { getType, submitenquiry } from "../../redux/actions/Outdoor";

// Toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getBlogId } from "../../redux/actions/Blog";
import { Helmet } from "react-helmet";

const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setCity("");
  };

  // const handleSubmit = () => {
  //   submitContactDetails({
  //     name: name,
  //     email: email,
  //     phone: Number(phone),
  //     message: message,
  //     city: city,
  //   }).then(() => {
  //     // Display a success message using Toastify
  //     toast.success("Thanks, we will contact you soon");

  //     resetForm();
  //   });
  // };

  const handleSubmit = () => {
    // Check if required fields are not empty
    if (!name || !email || !city || !phone || !message) {
      // Display an error message using Toastify
      toast.error("Please fill in all required fields");
      return;
    }

    submitContactDetails({
      name: name,
      email: email,
      phone: Number(phone),
      message: message,
      city: city,
    }).then(() => {
      // Display a success message using Toastify
      toast.success("Thanks, we will contact you soon");

      resetForm();
    });
  };
  return (
    <>
      <Helmet>
        <title>ReachOut Hoarding: Your Best Outdoor Advertising Partner</title>
        <meta
          name="description"
          content={
            "Contact Reach Out Hoarding for top-notch outdoor hoarding advertising partner. Let us amplify your brand's visibility and impact on the streets"
          }
        />
      </Helmet>

      <Box
        sx={{ marginTop: { xs: "51px", sm: "51px", md: "66px", lg: "66px" } }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={0.7}
            lg={0.7}
            // sx={{ backgroundColor: "red" }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={5.3}
            lg={5.3}
            // sx={{ backgroundColor: "#fff" }}
          >
            <Box
              sx={{
                marginTop: { xs: "5px", sm: "5px", md: "100px", lg: "100px" },
                marginBottom: {
                  xs: "0px",
                  sm: "0px",
                  md: "0px",
                  lg: "0px",
                },
                display: "flex",
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "flex-start",
                  lg: "flex-start",
                },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "40px",
                      sm: "40px",
                      md: "50px",
                      lg: "50px",
                    },
                    fontWeight: "700",
                    fontFamily: "Poppins, sans-serif",
                    color: "#C02222",
                  }}
                >
                  Contact Us
                </Typography>
              </Box>
            </Box>

            <Box>
              <Box
                sx={{
                  marginTop: { xs: "1px", sm: "1px", md: "10px", lg: "10px" },
                  marginBottom: {
                    xs: "1px",
                    sm: "1px",
                    md: "10px",
                    lg: "10px",
                  },
                  paddingLeft: { xs: "10px", sm: "10px", md: "0px", lg: "0px" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "14px",
                      md: "15px",
                      lg: "15px",
                    },
                    fontWeight: "500",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Have questions or need assistance? Reach out to us; your
                  satisfaction is our priority. We're just a message away!
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: { xs: "10px", sm: "10px", md: "0px", lg: "0px" },
                }}
              >
                {/* Address */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    marginTop: { xs: "5px", sm: "5px", md: "5px", lg: "5px" },
                  }}
                >
                  <Box>
                    <img
                      src={address}
                      style={{
                        width: "20px",
                        height: "20px",
                        marginTop: "10px",
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: "600",
                        fontFamily: "Poppins, sans-serif",
                        marginLeft: "10px",
                        marginTop: "3px",
                        color: "rgb(79, 74, 76)",
                      }}
                    >
                      B-79, Top Floor, VDS Work Eutopia,
                      <br /> B Block, Sector 63, Noida, Uttar Pradesh 201301
                    </Typography>
                  </Box>
                </Box>

                {/* PhoneNo */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    marginTop: { xs: "5px", sm: "5px", md: "10px", lg: "10px" },
                  }}
                >
                  <Box>
                    <img src={call} style={{ width: "20px", height: "20px" }} />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: "600",
                        fontFamily: "Poppins, sans-serif",
                        marginLeft: "10px",
                        marginTop: "3px",
                        color: "rgb(79, 74, 76)",
                      }}
                    >
                      +91 96507-64004
                    </Typography>
                  </Box>
                </Box>

                {/* Email */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    marginTop: { xs: "5px", sm: "5px", md: "10px", lg: "10px" },
                  }}
                >
                  <Box>
                    <img
                      src={Gmail}
                      style={{ width: "20px", height: "20px" }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: "600",
                        fontFamily: "Poppins, sans-serif",
                        marginLeft: "10px",
                        marginTop: "3px",
                        color: "rgb(79, 74, 76)",
                      }}
                    >
                      birender@januskoncepts.com
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={5.3}
            lg={5.3}
            // sx={{ backgroundColor: "blue" }}
          >
            <Box
              sx={{
                marginTop: {
                  xs: "20px",
                  sm: "20px",
                  md: "120px",
                  lg: "120px",
                },
                marginBottom: {
                  xs: "20px",
                  sm: "20px",
                  md: "100px",
                  lg: "100px",
                },
              }}
            >
              {/* Name n Email */}
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  // sx={{ backgroundColor: "pink" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: { xs: "0px", sm: "0px", md: "0px", lg: "0px" },
                      marginBottom: {
                        xs: "5px",
                        sm: "5px",
                        md: "5px",
                        lg: "5px",
                      },
                    }}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Name*"
                      variant="outlined"
                      sx={{
                        width: { xs: "95%", sm: "95%", md: "98%", lg: "98%" },
                      }}
                      value={name}
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
                  md={6}
                  lg={6}
                  // sx={{ backgroundColor: "cyan" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: { xs: "5px", sm: "5px", md: "0px", lg: "0px" },
                      marginBottom: {
                        xs: "5px",
                        sm: "5px",
                        md: "5px",
                        lg: "5px",
                      },
                    }}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Email*"
                      variant="outlined"
                      sx={{
                        width: { xs: "95%", sm: "95%", md: "98%", lg: "98%" },
                      }}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>

              {/* Pincode n City */}
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  // sx={{ backgroundColor: "pink" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: {
                        xs: "5px",
                        sm: "5px",
                        md: "5px",
                        lg: "5px",
                      },
                      marginBottom: {
                        xs: "5px",
                        sm: "5px",
                        md: "0px",
                        lg: "0px",
                      },
                    }}
                  >
                    <TextField
                      id="outlined-basic"
                      label="City*"
                      variant="outlined"
                      sx={{
                        width: { xs: "95%", sm: "95%", md: "98%", lg: "98%" },
                      }}
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  // sx={{ backgroundColor: "cyan" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: {
                        xs: "5px",
                        sm: "5px",
                        md: "5px",
                        lg: "5px",
                      },
                      marginBottom: {
                        xs: "5px",
                        sm: "5px",
                        md: "0px",
                        lg: "0px",
                      },
                    }}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Phone*"
                      variant="outlined"
                      sx={{
                        width: { xs: "95%", sm: "95%", md: "98%", lg: "98%" },
                      }}
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>

              {/* Messsage */}
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  // sx={{ backgroundColor: "pink" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: {
                        xs: "5px",
                        sm: "5px",
                        md: "10px",
                        lg: "10px",
                      },
                      marginBottom: {
                        xs: "0px",
                        sm: "0px",
                        md: "0px",
                        lg: "0px",
                      },
                    }}
                  >
                    <TextField
                      id="outlined-multiline-static"
                      label="Message"
                      multiline
                      rows={2}
                      sx={{
                        width: { xs: "95%", sm: "95%", md: "99%", lg: "99%" },
                      }}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>

              {/* Button */}
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: {
                        xs: "center",
                        sm: "center",
                        md: "flex-start",
                        lg: "flex-start",
                      },
                      paddingLeft: {
                        xs: "10px",
                        sm: "10px",
                        md: "0px",
                        lg: "0px",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        marginTop: {
                          xs: "15px",
                          sm: "15px",
                          md: "20px",
                          lg: "20px",
                        },
                        marginBottom: {
                          xs: "5px",
                          sm: "5px",
                          md: "10px",
                          lg: "10px",
                        },
                        display: "flex",
                        justifyContent: {
                          xs: "center",
                          sm: "center",
                          md: "center",
                          lg: "center",
                        },
                        alignItems: "center",
                        width: {
                          xs: "100px",
                          sm: "100px",
                          md: "115px",
                          lg: "115px",
                        },
                        height: {
                          xs: "35px",
                          sm: "35px",
                          md: "40px",
                          lg: "40px",
                        },
                        backgroundColor: "#C02222",
                        borderRadius: "20px",
                      }}
                      onClick={handleSubmit}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "12px",
                            sm: "12px",
                            md: "15px",
                            lg: "15px",
                          },
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "600",
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                      >
                        Submit
                      </Typography>
                    </Box>
                    {/* <Box>
                      <Button onClick={getBlogId}> get id</Button>
                    </Box> */}
                  </Box>
                </Grid>
                <ToastContainer position="top-center" autoClose={3000} toastStyle={{ top: "80px" }} />
              </Grid>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={0.7}
            lg={0.7}
            // sx={{ backgroundColor: "green" }}
          ></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Contactus;
