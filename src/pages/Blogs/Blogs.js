import React, { useEffect } from "react";
// MUI
import { Grid, Typography, Button, Box } from "@mui/material";
// CSS
import "./Blogs.css"

// CARD
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

// REACT_ROUTER-DOM
import { useNavigate } from "react-router-dom";

// REDUX
import { getBlogs, getBlogsById } from "../../redux/actions/Blog";
import { useSelector } from "react-redux";

import store from "../../redux/store";
import types from "../../redux/types";

// Advertisemnt
import Fullpageadvertisement from "../FullPageAdvertisement/Fullpageadvertisement";

const Blogs = () => {
  const navigate = useNavigate();

  const {dispatch} = store;

  const { Blogs } = useSelector((state) => state.BlogReducer);

  useEffect(() => {
    getBlogs();
  }, []);

  function createMarkup(htmlContent) {
    return { __html: htmlContent };
  }

  return (
    <Box sx={{ marginTop: { xs: "55px", sm: "55px", md: "90px", lg: "90px" } }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
        <Grid item xs={12} sm={12} md={10.6} lg={10.6}>
          <Grid container>
            {/* Blogs */}
            <Grid
              item
              xs={12}
              sm={12}
              md={9.5}
              lg={9.5}
              // sx={{ backgroundColor: "yellow" }}
            >
              <Grid container spacing={2}>
                {Blogs &&
                  Blogs?.data?.map((item) => (
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                      <Box
                        sx={{
                          marginTop: {
                            xs: "20px",
                            sm: "20px",
                            md: "0px",
                            lg: "0px",
                          },
                          marginBottom: {
                            xs: "0px",
                            sm: "0px",
                            md: "10px",
                            lg: "10px",
                          },
                          paddingLeft: {
                            xs: "10px",
                            sm: "10px",
                            md: "0px",
                            lg: "0px",
                          },
                          paddingRight: {
                            xs: "10px",
                            sm: "10px",
                            md: "0px",
                            lg: "0px",
                          },
                        }}
                      >
                        <Card
                          variant="outlined"
                          sx={{
                            borderTopLeftRadius: "150px",
                            borderTopRightRadius: "150px",
                            borderRadius: "170px 170px 0 0",
                            border: "2px solid #C02222",
                            background:
                              "linear-gradient(to bottom, #C02222 85%, #000)",
                          }}
                        >
                          <CardActionArea
                            onClick={() => {
                              // getBlogsById(item?._id);
                              dispatch({
                                type: types.GET_BLOG_ID,
                                payload :  item?._id
                              })
                              navigate(`/blog/${item?.engtitle}`, {state: {id: item?._id}});
                            }}
                          >
                            <Box>
                              <CardMedia
                                component="img"
                                height="340"
                                width="80"
                                image={item.photo}
                                alt="Main Image"
                                sx={{
                                  borderTopLeftRadius: "150px",
                                  borderTopRightRadius: "150px",
                                }}
                              />
                            </Box>
                            <CardContent>
                              <Box sx={{}}>
                                <Typography
                                  gutterBottom
                                  sx={{
                                    display: "-webkit-box",
                                    overflow: "hidden",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 2,
                                    color: "#fff",
                                    fontSize: "16px",
                                    fontSize: {
                                      xs: "16px",
                                      sm: "16px",
                                      md: "19px",
                                      lg: "19px",
                                    },
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: "600",
                                    // textAlign: "justify",
                                    wordSpacing: "1px",
                                  }}
                                >
                                  {item.title}
                                </Typography>
                                <Typography
                                  color="text.secondary"
                                  sx={{
                                    display: "-webkit-box",
                                    overflow: "hidden",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 3,
                                    color: "#fff",
                                    fontSize: {
                                      xs: "16px",
                                      sm: "16px",
                                      md: "16px",
                                      lg: "16px",
                                    },
                                    fontWeight: "500",
                                    fontFamily: "Poppins, sans-serif",
                                    // textAlign: "justify"
                                  }}
                                  dangerouslySetInnerHTML={createMarkup(
                                    item.description
                                  )}
                                />
                              </Box>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Box>
                    </Grid>
                  ))}
              </Grid>
            </Grid>

            {/* Add */}
            <Grid
              item
              xs={12}
              sm={12}
              md={2.5}
              lg={2.5}
              sx={
                {
                  // backgroundColor: "green",
                }
              }
            >
              <Fullpageadvertisement/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
      </Grid>
    </Box>
  );
};

export default Blogs;
