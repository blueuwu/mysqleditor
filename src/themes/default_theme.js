
import red from "@material-ui/core/colors/red";
import createTheme from "@material-ui/core/styles/createTheme";

// A custom default theme for this app
const DefaultTheme = createTheme({
  palette: {
    primary: {
      main: "#D4D4D4",
    },
    secondary: {
      main: "#1F77FA",
    },
    error: {
      main: red.A400,
    },
    background: {
      paper: "#EDECEC",
      default: "#fff",
    },
    text: {
      primary: "#3A4555",
      secondary: "#fff",
    },
    action: {
      active: "#789DC9",
    },
  },
});

export default DefaultTheme;
