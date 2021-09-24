import { createMuiTheme } from "@material-ui/core/styles";
export const theme = createMuiTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#fafafa",
    },
    primary: {
      light: "rgba(89, 210, 188, 1)",
      main: "#C80C81",
    },
    secondary: {
      light: "rgba(89, 210, 188, 1)",
      main: "#C80C81",
    },
    pwar: {
      yellow: "#fdd835",
      yellowLight: "#ffeb3b",
      purple: "#7b1fa2",
      purpleLight: "#6a1b9a",
      pink: "#e91e63",
      pinkLight: "#ad1457",
      black: "#000000",
      blackLight: "#212121",
      grey: "#bdbdbd",
      greyLight: "#e5e5e5",
    },
    pbr: {
      primary: "#C80C81",
      secondary: "#f4c8dd",
      textPrimary: "#ffffff",
      textSecondary: "#bdbdbd",
      textPrimaryOpp: "#000000",
      textSecondaryOpp: "#757575",
    },
  },
  typography: {
    fontFamily: [
      "Carter One",
      "Poppins",
      "Balsamiq Sans",
      "Work Sans",
      "Montserrat",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
export default theme;
