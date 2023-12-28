import React from "react";
import { Grid, Button, Typography, Box } from "@mui/material";

// CARD
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

const Cardii = ({ data, onClick }) => {
  return (
    <>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Card variant="outlined">
          <CardActionArea
            onClick={() => {
              onClick();
            }}
          >
            <Box>
              <CardMedia
                component="img"
                height="160"
                image={data?.image}
                alt="Main Image"
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
                    color: "#D2122E",
                    fontSize: "16px",
                    fontFamily: " 'Mukta', sans-serif",
                    fontWeight: "600",
                    // textAlign: "justify",
                    wordSpacing: "1px",
                  }}
                >
                  {data?.state}
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                    color: "black",
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: " 'Mukta', sans-serif",
                    // textAlign: "justify"
                  }}
                >
                    {data?.desc}
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default Cardii;
