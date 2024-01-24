import React from "react";
import { Grid, Button, Typography, Box } from "@mui/material";

// CARD
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

// CSS
import "./Cards.css";

const Cards = ({ data, onClick }) => {
  return (
    <>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Box
          sx={{
            marginTop: { xs: "-10px", sm: "-10px", md: "20px", lg: "20px" },
            marginBottom: { xs: "20px", sm: "10px", md: "10px", lg: "10px" },
            paddingLeft: { xs: "10px", sm: "10px", md: "0px", lg: "0px" },
            paddingRight: { xs: "10px", sm: "10px", md: "0px", lg: "0px" },
          }}
        >
          <Card
            variant="outlined"
            sx={{
              borderTopLeftRadius: "150px",
              borderTopRightRadius: "150px",
              borderRadius: "170px 170px 0 0",
              border: "2px solid #C02222",
              background: "linear-gradient(to bottom, #C02222 85%, #000)",
            }}
          >
            <CardActionArea
              onClick={() => {
                onClick();
              }}
            >
              <Box>
                <CardMedia
                  component="img"
                  height="340"
                  width="80"
                  image={data?.image}
                  alt="Main Image"
                  sx={{
                    borderTopLeftRadius: "150px",
                    borderTopRightRadius: "150px",
                  }}
                />
              </Box>
              <CardContent
              sx={{height:"100px", marginBottom:"10px"}}>
                <Box>
                  <Typography
                    gutterBottom
                    sx={{
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 2,
                      color: "#fff",
                      fontSize: "16px",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "600",
                      // textAlign: "justify",
                      wordSpacing: "1px",
                      lineHeight: "17px",
                      textTransform: "capitalize",
                      marginBottom:"5px"
                    }}
                  >
                    {/* {data?.address} */}
                    {data?.address
                      ? data.address.charAt(0).toUpperCase() +
                        data.address.slice(1).toLowerCase()
                      : ""}
                  </Typography>
                  <Typography
                    sx={{
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                      color: "#fff",
                      fontSize: "14px",
                      fontWeight: "500",
                      fontFamily: "Poppins, sans-serif",
                      // textAlign: "justify"
                    }}
                  >
                    City : {data?.city}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                      color: "#fff",
                      fontSize: "14px",
                      fontWeight: "500",
                      fontFamily: "Poppins, sans-serif",
                      // textAlign: "justify"
                      marginBottom:"20px"
                    }}
                  >
                    State : {data?.state}
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Grid>
    </>
  );
};

export default Cards;
