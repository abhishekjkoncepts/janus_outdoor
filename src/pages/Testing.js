import React from "react";

// MUI
import {
  Grid,
  Button,
  Typography,
  Box,
  InputLabel,
  MenuItem,
  CircularProgress,
  FormControl,
  Select,
} from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

import video from "../../src/assets/video/VideoWithText.mp4";

import Media from "react-media";
const Testing = () => {
  return (
    <>
      <Media
        queries={{
          small: "(max-height: 599px)" ,
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)",
        }}
      >
        <video
          src={video}
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "90%", objectFit: "cover" }}
        />
      </Media>
    </>
  );
};

export default Testing;
