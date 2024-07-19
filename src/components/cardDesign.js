import "../App.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Grid, Snackbar, Alert, Slide } from "@mui/material";
import LoginArea from "./loginArea";
import { styled } from "@mui/material/styles";

const CustomPaper = styled(Paper)({ borderColor: "#fde047" });

function Card() {
  const [alertVisible, setAlertVisible] = React.useState(false);

  function handleClick() {
    setAlertVisible(true);
  }

  function handleClose(event, reason) {
    if (reason == "clickaway") {
      return;
    }
    setAlertVisible(false);
  }

  function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
  }
  

  return (
    <>
      <CustomPaper
        elevation={3}
        square={false}
        variant="outlined"
        sx={{
          minHeight: "15vh",
          padding: "5px",
          borderRadius: "12px",
          background: "#0a0a0a",
          width: "350px",
        }}
      >
        <Typography
          variant="h3"
          sx={{ my: 3, marginLeft: "10px", color: "#fde047" }}
          component={"div"}
        >
          Welcome!
        </Typography>
        <LoginArea></LoginArea>
        <Button
          className="Login"
          variant="contained"
          onClick={handleClick}
          sx={{
            marginLeft: "10px",
            background: "#fde047",
            width: "300px",
            marginTop: "10px",
            marginBottom: "10px",
            marginRight: "10px",
            ":hover": {
              bgcolor: "#facc15",
            },
          }}
        >
          Login
        </Button>
        <Snackbar
          open={alertVisible}
          autoHideDuration={6000}
          onClose={handleClose}
          TransitionComponent={SlideTransition}
        >
          <Alert
            severity="success"
            variant="filled"
            onClose={handleClose}
            sx={{ width: "350px" }}
          >
            You are now successfully logged in!
          </Alert>
        </Snackbar>
        <div>
          <Button
            className="SignUp"
            variant="contained"
            sx={{
              marginLeft: "10px",
              background: "#fde047",
              marginTop: "10px",
              width: "300px",
              marginBottom: "20px",
              marginRight: "10px",
              ":hover": {
                bgcolor: "#facc15",
              },
            }}
          >
            Sign Up
          </Button>
        </div>
      </CustomPaper>
    </>
  );
}

function CardDesign() {
  return (
    <Grid
      container
      spacing={0}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Card />
      </Grid>
    </Grid>
  );
}

export default CardDesign;
