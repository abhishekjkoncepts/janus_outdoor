// import React from "react";

// // MUI
// import { Grid, Typography, Button, Box } from "@mui/material";

// // CARD
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import { CardActionArea } from "@mui/material";

// const Cards = ({data, onClick}) => {
// // const Cards = ({ result }) => {
//   return (
//     <Box onClick={() => {
//       onClick()
//     }}>
//       <Box>
//         <Grid item xs={12} sm={12} md={4} lg={4}>
//           <Card
//             sx={{
//               Width: 360,
//               Height: 800,
//               borderRadius: "150px 150px 0 0",
//               border: "1px solid #C02222",
//             }}
//           >
//             <CardActionArea>
//               <CardMedia
//                 component="img"
//                 height="250"
//                 image={data?.image}
//                 // image={result?.image}
//                 alt="product 1"
//                 sx={{ backgroundColor: "grey" }}
//               />
//               <CardContent sx={{ height: "180px" }}>
//                 <Typography
//                   sx={{
//                     fontFamily: "Poppins, sans-serif",
//                     fontSize: "16px",
//                     fontWeight: "600",
//                   }}
//                 >
//                   {data?.address}
//                   {/* {result?.address} */}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   State: {data?.state} <br />
//                   {/* State: {result?.state} */}
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//           </Card>
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default Cards;

import React from "react";
import { Grid, Button, Typography, Box } from "@mui/material";

// CARD
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

const Cards = ({ data, onClick }) => {
  return (
    <>
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <Box
          sx={{
            marginTop: { xs: "10px", sm: "10px", md: "20px", lg: "20px" },
            marginBottom: { xs: "10px", sm: "10px", md: "10px", lg: "10px" },
            paddingLeft:{xs: "10px", sm: "10px", md: "0px", lg: "0px"},
            paddingRight:{xs: "10px", sm: "10px", md: "0px", lg: "0px"}
          }}
        >
          <Card
            variant="outlined"
            sx={{
              borderTopLeftRadius: "150px",
              borderTopRightRadius: "150px",
              borderRadius: "150px 150px 0 0",
              border: "2px solid #C02222",
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
                  height="250"
                  width="100"
                  image={data?.image}
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
                      color: "#D2122E",
                      fontSize: "16px",
                      fontFamily: " 'Mukta', sans-serif",
                      fontWeight: "600",
                      // textAlign: "justify",
                      wordSpacing: "1px",
                      lineHeight:"17px"
                    }}
                  >
                    {data?.address}
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
                    City : {data?.city}
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
