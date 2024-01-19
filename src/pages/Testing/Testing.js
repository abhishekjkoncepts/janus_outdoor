import React from "react";
import { Container, Button, Paper, Input } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { colors } from "material-ui";
import { purple, green,} from "@mui/material/colors";

const Colors={
  secondary:"#C02222",
  buttoncolor:"green"
}
const theme = createTheme({
  palette: {
    beta: {
      main:Colors.buttoncolor,
    },
    secondary:{
      main:Colors.secondary
    }
  },
});
const Testing = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          maxWidth: "400px",
        }}
      >
        <Paper
          sx={{
            padding: "1rem",
            marginTop: "2rem",
            maxWidth: "400px",
          }}
        >
          <Input fullWidth placeholder="firstname" />
          <Input fullWidth placeholder="lastname" />
          <Input fullWidth placeholder="password" />
          <Input fullWidth placeholder="new password" />
          <Button
            variant="contained"
            disableRipple={true}
            sx={{ marginTop: "5px" }}
          >
            Submit
          </Button>
          <Button
            variant="contained" 
            color="beta"
            disableRipple={true}
            sx={{ marginLeft:"20px",marginTop: "5px", borderRadius:"20px" }}
          >
            Submit
          </Button>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Testing;
