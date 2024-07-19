import "./App.css";
import CardDesign from "./components/cardDesign";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },

  typography: {
    fontFamily: ["Roboto Condensed"],
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <CardDesign />
      </div>
    </ThemeProvider>
  );
}
