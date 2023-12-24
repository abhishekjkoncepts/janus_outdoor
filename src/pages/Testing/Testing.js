import React from "react";

import { TypeAnimation } from "react-type-animation";

import { Typewriter } from "react-simple-typewriter";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

const Testing = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        // "Hello there are you",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        // "We produce food for Hamsters",
        1000,
        // "We produce food for Guinea Pigs",
        1000,
        // "We produce food for Chinchillas",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{
        display: "inline-block",
        color: "#000",
        // marginTop: "20px",
        fontSize: "15px",
        fontWeight: "400",
        fontFamily: "Poppins, sans-serif",
      }}
      repeat={Infinity}
    />
  );
};

export default Testing;
