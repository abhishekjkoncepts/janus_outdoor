// import React from "react";


// // MUI
// import { Grid, Typography, Button, Box } from "@mui/material";

// // CARD
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import { CardActionArea } from "@mui/material";

// // REACT-ROUTER-DOM
// import { Link } from "react-router-dom";

// const Cards = () => {
//   return (
//     <Box>
//       <Grid item xs={12} sm={12} md={3} lg={3}>
//         <Card
//           sx={{
//             maxWidth: 360,
//             maxHeight: 800,
//             borderRadius: "150px 150px 0 0",
//             border: "1px solid #C02222",
//           }}
//         >
//           <CardActionArea>
//             <CardMedia
//               component="img"
//               height="250"
//               image={add1}
//               alt="green iguana"
//               sx={{ backgroundColor: "grey" }}
//             />
//             <CardContent sx={{ height: "180px" }}>
//               <Typography
//                 sx={{
//                   fontFamily: "Poppins, sans-serif",
//                   fontSize: "16px",
//                   fontWeight: "600",
//                 }}
//               >
//                 A.A Circle B.H Road Near Shivappa Nayaka Shoping Complex
//                 Shivamogga
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 State: Karnataka <br />
//                 District: Shivamogga
//                 <br />
//                 City: Shivamogga
//                 <br />
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//         </Card>
//       </Grid>
//     </Box>
//   );
// };

// export default Cards;


import React from 'react'

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

// CARD
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";


const Cards = () => {
  return (
    <Box>
       <Box>
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <Card
          sx={{
            maxWidth: 360,
            maxHeight: 800,
            borderRadius: "150px 150px 0 0",
            border: "1px solid #C02222",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              // image={}
              alt="green iguana"
              sx={{ backgroundColor: "grey" }}
            />
            <CardContent sx={{ height: "180px" }}>
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                A.A Circle B.H Road Near Shivappa Nayaka Shoping Complex
                Shivamogga
              </Typography>
              <Typography variant="body2" color="text.secondary">
                State: Karnataka <br />
                District: Shivamogga
                <br />
                City: Shivamogga
                <br />
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Box>
      
    </Box>
  )
}

export default Cards

