import React, { useEffect, Suspense, lazy, useState, useCallback } from "react";

// MUI
import { Grid, Typography, Button, Box, Container } from "@mui/material";

// REACT_ROUTER-DOM
import { useLocation, useNavigate , useParams } from "react-router-dom";

// IMAGES
import samimg from "../../../assets/images/samOutdoor.jpeg";
import janusAdver from "../../../assets/images/JanusAdvertisement.jpeg";
import R2 from "../../../assets/images/R2.png";

// CARD
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";


// CSS
import "./Fullblog.css"

// LAZY-LOAD
import LazyLoad from "react-lazyload";

// Redux
import { useSelector } from "react-redux";
// REDUX
import { getBlogs, getBlogsByTitle , getRelatedBlogs } from "../../../redux/actions/Blog";
import Fullpageadvertisement from "../../FullPageAdvertisement/Fullpageadvertisement";


function createMarkup(htmlContent) {
  return { __html: htmlContent };
}

const Fullblog = () => {
  console.log("hi id"  )
  const { state } = useLocation();
  console.log("state" , state)
  // const { id } = state;

  const { param } = useParams();
  // const blogData = await fetch
  

  const { SingleBlog , Related , blogid } = useSelector((state) => state.BlogReducer);

  const navigate = useNavigate();

  const { Blogs } = useSelector((state) => state.BlogReducer);

  useEffect(() => {
    getBlogsByTitle(param);
    // getBlogs();
    getRelatedBlogs()
  }, []);

  // Pagination

  let handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      // When the user reaches the bottom of the page
      if(Related?.page + 1 <= Related.total_pages){
      getRelatedBlogs(Related?.page + 1 );
    }
    }
  }, [ Related]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <Box sx={{ marginTop: { xs: "60px", sm: "60px", md: "80px", lg: "80px" } }}>
      {/* TITLE */}
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.6}
          lg={0.6}
          // sx={{ backgroundColor: "orange" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8.5}
          lg={8.5}
          // sx={{ backgroundColor: "aqua" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              paddingLeft: { xs: "5px", sm: "5px", md: "0px", lg: "0px" },
              paddingRight: { xs: "5px", sm: "5px", md: "0px", lg: "0px" },
              height: "auto",
            }}
          >
            <Box
              component="img"
              sx={{
                width: {
                  xs: "0px",
                  sm: "0px",
                  md: "23px",
                  lg: "23px",
                },
                height: {
                  xs: "0px",
                  sm: "0px",
                  md: "23px",
                  lg: "23px",
                },
                marginTop: { xs: "12px", sm: "12px", md: "9px", lg: "9px" },
              }}
              alt="redTriangleArrow"
              src={R2}
            />

            <Typography
              sx={{
                color: "#D2122E",
                fontSize: { xs: "25px", sm: "25px", md: "27px", lg: "27px" },
                fontFamily: "Poppins, sans-serif",
                fontWeight: "600",
                // textAlign: "justify",
                marginTop: { xs: "3px", sm: "3px", md: "0px", lg: "0px" },
                paddingLeft: { xs: "5px", sm: "5px", md: "5px", lg: "5px" },
                paddingRight: { xs: "5px", sm: "5px", md: "5px", lg: "5px" },
                // wordSpacing: "-1px"
                lineHeight: { xs: "1.2", sm: "1.2" },
                paddingTop: "3px",
                paddingBottom: "3px",
              }}
            >
              {SingleBlog?.title}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={2.9}
          lg={2.9}
          // sx={{ backgroundColor: "green" }}
        ></Grid>
      </Grid>

      {/* IMAGE */}

      <Grid
        container
        sx={{
          // backgroundColor: "green",
          marginTop: "10px",
        }}
      >
        <Grid
          xs={12}
          sm={12}
          md={0.6}
          lg={0.6}
          // sx={{ backgroundColor: "orange" }}
        ></Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={8.5}
          lg={8.5}
          sx={{
            width: "800px",
            alignItems: "center",
            // backgroundColor: "aqua",
          }}
        >
          {/* IMAGE */}
          <Box>
            <Box
              component="img"
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "100%",
                },
                height: {
                  xs: "100%",
                  sm: "100%",
                  md: "600px",
                  lg: "600px",
                },
                padding: {
                  xs: "10px",
                  sm: "10px",
                  md: "0px",
                  lg: "0px",
                },
              }}
              alt="ArticleImage"
              // src={FullArticle?.photo}
              // src={samimg}
              src={SingleBlog?.photo}
            />
          </Box>

          {/* DESCRIPTION */}

          <Box>
            <Typography
              sx={{
                marginTop: {
                  xs: "10px",
                  sm: "10px",
                  md: "20px",
                  lg: "20px",
                },
                marginBottom: {
                  xs: "10px",
                  sm: "10px",
                  md: "20px",
                  lg: "20px",
                },
                fontSize: { xs: "17px", sm: "17px", md: "19px", lg: "19px" },
                backgroundColor: "#fff",
                // fontFamily: "'Noto Sans', sans-serif",
                fontFamily: "Poppins, sans-serif",

                fontWeight: "500",
                // textAlign: "justify",
                paddingLeft: { xs: "10px", sm: "10px", md: "0px", lg: "0px" },
                paddingRight: {
                  xs: "10px",
                  sm: "10px",
                  md: "0px",
                  lg: "0px",
                },
              }}
              // dangerouslySetInnerHTML={createMarkup(SingleBlog?.description)}
              dangerouslySetInnerHTML={createMarkup(SingleBlog?.description)}
            />
          </Box>

          {/* RELATED ARTICLE TITLE */}

          <Box>
            <Typography
              sx={{
                fontSize: { xs: "25px", sm: "25px", md: "30px", lg: "30px" },
                backgroundColor: "#fff",
                // fontFamily: "'Noto Sans', sans-serif",
                fontFamily: " 'Mukta', sans-serif",
                fontWeight: "700",
                color: "#D2122E",
                paddingBottom: {
                  xs: "5px",
                  sm: "5px",
                  md: "30px",
                  lg: "30px",
                },
                paddingLeft:{
                  xs:"10px",
                  sm:"10px",
                  md:"0px",
                  lg:"0px"
                }
              }}
            >
              Related Blogs
            </Typography>
          </Box>

          {/* RELATED BLOGS */}

          <Grid container spacing={3}>
            {Related &&
              Related?.data?.map((item) => (
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
                        md: "30px",
                        lg: "30px",
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
                        borderTopRightRadius: "151px",
                        borderRadius: "170px 170px 0 0",
                        border: "2px solid #C02222",
                        background:
                          "linear-gradient(to bottom, #C02222 85%, #000)",
                      }}
                    >
                      <CardActionArea
                        onClick={() => {
                          getBlogsByTitle(item?.engtitle);
                          navigate(`/blog/${item?.engtitle}`);
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
          {/* <Typography>
          {JSON.stringify(Related)}
          </Typography> */}
          
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={2.5}
          lg={2.5}
          sx={
            {
              // backgroundColor: "green",
              // marginTop:"10px"
            }
          }
        >
          <Fullpageadvertisement />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.4}
          lg={0.4}
          // sx={{ backgroundColor: "orange" }}
        ></Grid>
      </Grid>
      
    </Box>
  );
};

export default Fullblog;
