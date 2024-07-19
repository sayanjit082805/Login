import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});

function LoginArea() {
  return (
    <Box
      component={"form"}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "300px" },
      }}
      noValidate
    >
      <div>
        <CustomTextField
          fullWidth
          id="Username"
          label="Username/Phone Number"
          variant="outlined"
          type="text"
        />
      </div>
      <div>
        <CustomTextField
          fullWidth
          id="Password"
          label="Password"
          variant="outlined"
          type="password"
        />
      </div>
      <div>
        <Typography
          variant="h6"
          sx={{
            fontSize: "14px",
            my: 2,
            marginRight: "200px",
            marginLeft: "10px",
          }}
        >
          Forgot Password?
        </Typography>
      </div>
    </Box>
  );
}

export default LoginArea;
