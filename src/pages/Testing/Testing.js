// import React from 'react'
// import vide from "../../assets/video/VideoWithText.mp4";
// import sampleVid from "../../assets/video/sampleVid.mp4";
// import "./Testing.css";
// import { Box, Grid } from "@mui/material";

// const Testing = () => {
//   return (
//    <Grid container>
//       <Grid item xs={12} sm={12} md={12} lg={12}>
//         <video
//           autoPlay
//           muted
//           width="100%"
//           controls={false}
//           loop={true}
//           className="bclip"
//         >
//           <source src={sampleVid} />
//         </video>
//       </Grid>
//     </Grid>
//   )
// }

// export default Testing

// BOOTSTRAP DROPDOWN-----------------------------------------------------------------------------------------

// import React from "react";
// import "./Testing.css";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import { Box, Grid } from "@mui/material";

// import "bootstrap/dist/css/bootstrap.min.css";

// const Testing = () => {
//   return (
//     <>
//     <Box sx={{display:"flex" ,flexDirection:"row" , marginTop:"30px" , marginLeft:"30px" , justifyContent:"space-around"}}>

//       <Dropdown>
//         <Dropdown.Toggle  id="dropdown-basic" style={{backgroundColor:"grey" , border:"1px solid grey" , borderRadius:"20px"}} >
//         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         </Dropdown.Toggle>

//         <Dropdown.Menu>
//           <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//           <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//           <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>

//       </Box>
//     </>
//   );
// };

// export default Testing;

import React from "react";
import "./Testing.css";
import { Box, Grid } from "@mui/material";

import { FormControl, Select, InputLabel, MenuItem, ThemeProvider ,} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "300px",
    backgroundColor:"red",
    borderRadius:"30px",
    
  },
}));

const Testing = () => {
  const classes = useStyles();

  return (
    <div style={{ marginTop: "30px", marginLeft: "50px" }}>
      <FormControl className={classes.formControl}>
        <Select>
          <MenuItem value={12}>a</MenuItem>
          <MenuItem value={12}>b</MenuItem>
          <MenuItem value={12}>c</MenuItem>
          <MenuItem value={12}>d</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};


//  <Box
//             sx={{
//               marginTop: { xs: "10px", sm: "10px", md: "20px", lg: "20px" },
//               marginBottom: { xs: "20px", sm: "20px", md: "60px", lg: "60px" },
//             }}
//           >
//             <Carousel
//               cols={4}
//               rows={1}
//               gap={20}
//               loop={true}
//               showDots={false}
//               dotColorActive="#795548"
//               dotColorInactive="#ccc"
//               style={{ padding: "10px" }}
//             >
//               <Carousel.Item width="20%">
//                 <Box
//                   sx={{
//                     marginTop: {
//                       xs: "20px",
//                       sm: "20px",
//                       md: "10px",
//                       lg: "10px",
//                     },
//                     marginBottom: {
//                       xs: "0px",
//                       sm: "0px",
//                       md: "60px",
//                       lg: "60px",
//                     },
//                   }}
//                 >
//                   <Card
//                     sx={{
//                       maxWidth: "245px",
//                       maxHeight: 800,
//                       borderRadius: "150px 150px 0 0",
//                       border: "2px solid #C02222",
//                       background:
//                         "linear-gradient(to bottom, #C02222 85%, #000)",
//                     }}
//                   >
//                     <CardActionArea>
//                       <CardMedia
//                         component="img"
//                         height="250"
//                         image={add1}
//                         alt="green iguana"
//                         sx={{
//                           overflow: "hidden", // Ensure the overflow is hidden to hide the zoomed-in part
//                           transition: "transform 0.1s ease-in-out", // Add a smooth transition effect
//                           "&:hover": {
//                             transform: "scale(1.1)", // Scale the card by 10% when hovered
//                           },
//                         }}
//                       />
//                       <CardContent sx={{ height: "60px" }}>
//                         <Typography
//                           sx={{
//                             fontFamily: "Poppins, sans-serif",
//                             fontSize: "21px",
//                             fontWeight: "600",
//                             textAlign: "center",
//                             color: "#fff",
//                           }}
//                         >
//                           OUTDOOR
//                         </Typography>
//                       </CardContent>
//                     </CardActionArea>
//                   </Card>
//                 </Box>
//               </Carousel.Item>

//               <Carousel.Item width="20%">
//                 <Box
//                   sx={{
//                     marginTop: {
//                       xs: "20px",
//                       sm: "20px",
//                       md: "10px",
//                       lg: "10px",
//                     },
//                     marginBottom: {
//                       xs: "0px",
//                       sm: "0px",
//                       md: "60px",
//                       lg: "60px",
//                     },
//                   }}
//                 >
//                   <Card
//                     sx={{
//                       maxWidth: "245px",
//                       maxHeight: 800,
//                       borderRadius: "150px 150px 0 0",
//                       border: "2px solid #C02222",
//                       background:
//                         "linear-gradient(to bottom, #C02222 85%, #000)",
//                     }}
//                   >
//                     <CardActionArea>
//                       <CardMedia
//                         component="img"
//                         height="250"
//                         image={add1}
//                         alt="green iguana"
//                         sx={{
//                           overflow: "hidden", // Ensure the overflow is hidden to hide the zoomed-in part
//                           transition: "transform 0.1s ease-in-out", // Add a smooth transition effect
//                           "&:hover": {
//                             transform: "scale(1.1)", // Scale the card by 10% when hovered
//                           },
//                         }}
//                       />
//                       <CardContent sx={{ height: "60px" }}>
//                         <Typography
//                           sx={{
//                             fontFamily: "Poppins, sans-serif",
//                             fontSize: "21px",
//                             fontWeight: "600",
//                             textAlign: "center",
//                             color: "#fff",
//                           }}
//                         >
//                           CINEMA
//                         </Typography>
//                       </CardContent>
//                     </CardActionArea>
//                   </Card>
//                 </Box>
//               </Carousel.Item>

//               <Carousel.Item width="20%">
//                 <Box
//                   sx={{
//                     marginTop: {
//                       xs: "20px",
//                       sm: "20px",
//                       md: "10px",
//                       lg: "10px",
//                     },
//                     marginBottom: {
//                       xs: "0px",
//                       sm: "0px",
//                       md: "60px",
//                       lg: "60px",
//                     },
//                   }}
//                 >
//                   <Card
//                     sx={{
//                       maxWidth: "245px",
//                       maxHeight: 800,
//                       borderRadius: "150px 150px 0 0",
//                       border: "2px solid #C02222",
//                       background:
//                         "linear-gradient(to bottom, #C02222 85%, #000)",
//                     }}
//                   >
//                     <CardActionArea>
//                       <CardMedia
//                         component="img"
//                         height="250"
//                         image={add1}
//                         alt="green iguana"
//                         sx={{
//                           overflow: "hidden", // Ensure the overflow is hidden to hide the zoomed-in part
//                           transition: "transform 0.1s ease-in-out", // Add a smooth transition effect
//                           "&:hover": {
//                             transform: "scale(1.1)", // Scale the card by 10% when hovered
//                           },
//                         }}
//                       />
//                       <CardContent sx={{ height: "60px" }}>
//                         <Typography
//                           sx={{
//                             fontFamily: "Poppins, sans-serif",
//                             fontSize: "21px",
//                             fontWeight: "600",
//                             textAlign: "center",
//                             color: "#fff",
//                           }}
//                         >
//                           AIRPORT BRANDING
//                         </Typography>
//                       </CardContent>
//                     </CardActionArea>
//                   </Card>
//                 </Box>
//               </Carousel.Item>

//               <Carousel.Item width="20%">
//                 <Box
//                   sx={{
//                     marginTop: {
//                       xs: "20px",
//                       sm: "20px",
//                       md: "10px",
//                       lg: "10px",
//                     },
//                     marginBottom: {
//                       xs: "0px",
//                       sm: "0px",
//                       md: "60px",
//                       lg: "60px",
//                     },
//                   }}
//                 >
//                   <Card
//                     sx={{
//                       maxWidth: "245px",
//                       maxHeight: 800,
//                       borderRadius: "150px 150px 0 0",
//                       border: "2px solid #C02222",
//                       background:
//                         "linear-gradient(to bottom, #C02222 85%, #000)",
//                     }}
//                   >
//                     <CardActionArea>
//                       <CardMedia
//                         component="img"
//                         height="250"
//                         image={add1}
//                         alt="green iguana"
//                         sx={{
//                           overflow: "hidden", // Ensure the overflow is hidden to hide the zoomed-in part
//                           transition: "transform 0.1s ease-in-out", // Add a smooth transition effect
//                           "&:hover": {
//                             transform: "scale(1.1)", // Scale the card by 10% when hovered
//                           },
//                         }}
//                       />
//                       <CardContent sx={{ height: "60px" }}>
//                         <Typography
//                           sx={{
//                             fontFamily: "Poppins, sans-serif",
//                             fontSize: "21px",
//                             fontWeight: "600",
//                             textAlign: "center",
//                             color: "#fff",
//                           }}
//                         >
//                           TRANSIT MEDIA
//                         </Typography>
//                       </CardContent>
//                     </CardActionArea>
//                   </Card>
//                 </Box>
//               </Carousel.Item>

//               <Carousel.Item>
//                 <Box
//                   sx={{
//                     marginTop: {
//                       xs: "20px",
//                       sm: "20px",
//                       md: "10px",
//                       lg: "10px",
//                     },
//                     marginBottom: {
//                       xs: "0px",
//                       sm: "0px",
//                       md: "60px",
//                       lg: "60px",
//                     },
//                   }}
//                 >
//                   <Card
//                     sx={{
//                       maxWidth: "245px",
//                       maxHeight: 800,
//                       borderRadius: "150px 150px 0 0",
//                       border: "2px solid #C02222",
//                       background:
//                         "linear-gradient(to bottom, #C02222 85%, #000)",
//                     }}
//                   >
//                     <CardActionArea>
//                       <CardMedia
//                         component="img"
//                         height="250"
//                         image={add1}
//                         alt="green iguana"
//                         sx={{
//                           overflow: "hidden", // Ensure the overflow is hidden to hide the zoomed-in part
//                           transition: "transform 0.1s ease-in-out", // Add a smooth transition effect
//                           "&:hover": {
//                             transform: "scale(1.1)", // Scale the card by 10% when hovered
//                           },
//                         }}
//                       />
//                       <CardContent sx={{ height: "60px" }}>
//                         <Typography
//                           sx={{
//                             fontFamily: "Poppins, sans-serif",
//                             fontSize: "21px",
//                             fontWeight: "600",
//                             textAlign: "center",
//                             color: "#fff",
//                           }}
//                         >
//                           MALL MEDIA
//                         </Typography>
//                       </CardContent>
//                     </CardActionArea>
//                   </Card>
//                 </Box>
//               </Carousel.Item>

//               <Carousel.Item width="20%">
//                 <Box
//                   sx={{
//                     marginTop: {
//                       xs: "20px",
//                       sm: "20px",
//                       md: "10px",
//                       lg: "10px",
//                     },
//                     marginBottom: {
//                       xs: "0px",
//                       sm: "0px",
//                       md: "60px",
//                       lg: "60px",
//                     },
//                   }}
//                 >
//                   <Card
//                     sx={{
//                       maxWidth: "245px",
//                       maxHeight: 800,
//                       borderRadius: "150px 150px 0 0",
//                       border: "2px solid #C02222",
//                       background:
//                         "linear-gradient(to bottom, #C02222 85%, #000)",
//                     }}
//                   >
//                     <CardActionArea>
//                       <CardMedia
//                         component="img"
//                         height="250"
//                         image={add1}
//                         alt="green iguana"
//                         sx={{
//                           overflow: "hidden", // Ensure the overflow is hidden to hide the zoomed-in part
//                           transition: "transform 0.1s ease-in-out", // Add a smooth transition effect
//                           "&:hover": {
//                             transform: "scale(1.1)", // Scale the card by 10% when hovered
//                           },
//                         }}
//                       />
//                       <CardContent sx={{ height: "60px" }}>
//                         <Typography
//                           sx={{
//                             fontFamily: "Poppins, sans-serif",
//                             fontSize: "21px",
//                             fontWeight: "600",
//                             textAlign: "center",
//                             color: "#fff",
//                           }}
//                         >
//                           INFLIGHT BRANDING
//                         </Typography>
//                       </CardContent>
//                     </CardActionArea>
//                   </Card>
//                 </Box>
//               </Carousel.Item>
//             </Carousel>
//           </Box>
