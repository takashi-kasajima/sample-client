import { red, grey, amber } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// sample theme
const theme = createTheme({
  typography: {
    // font family
    fontFamily: [
      "Cuprum",
      "Noto Sans JP",
      "Montserrat",
      "SF Pro Display",
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

    h1: {
      fontFamily: "Cuprum",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "72px",
      lineHeight: "150%",
    },
    h2: {
      fontFamily: "Cuprum",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "60px",
      lineHeight: "24px",
    },
    h3: {
      fontFamily: "Cuprum",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "48px",
      lineHeight: "150%",
    },
    h4: {
      fontFamily: "Cuprum",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "36px",
      lineHeight: "150%",
    },
    h5: {
      fontFamily: "Cuprum",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "28px",
      lineHeight: "150%",
    },
    h6: {
      fontFamily: "SF Pro Display",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "10px",
      lineHeight: "150%",
    },
    subtitle1: {
      fontFamily: "Cuprum",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "24px",
      lineHeight: "150%",
    },
    subtitle2: {
      fontFamily: "Cuprum",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "20px",
      lineHeight: "150%",
    },
    body1: {
      fontFamily: "SF Pro Display",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "150%",
    },
    body2: {
      fontFamily: "SF Pro Display",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "150%",
    },
  },

  palette: {
    text: {
      // primary: '#ffffff'
    },
    primary: {
      main: grey.A400,
      contrastText: "#ffffff",
    },
    secondary: {
      main: amber.A700,
      contrastText: "#ffffff",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#c9c9c9",
    },
    action: {
      hoverOpacity: 0.8,
    },
  },
  spacing: 4,
});

// SP Responsive
theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down("sm")]: {
    fontSize: "52px",
  },
};
theme.typography.h2 = {
  ...theme.typography.h2,
  [theme.breakpoints.down("sm")]: {
    fontSize: "48px",
  },
};
theme.typography.h3 = {
  ...theme.typography.h3,
  [theme.breakpoints.down("sm")]: {
    fontSize: "42px",
  },
};
theme.typography.h4 = {
  ...theme.typography.h4,
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
};
theme.typography.h5 = {
  ...theme.typography.h5,
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
};
theme.typography.subtitle1 = {
  ...theme.typography.subtitle1,
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
  },
};
theme.typography.subtitle2 = {
  ...theme.typography.subtitle1,
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
};

export default theme;
