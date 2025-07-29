import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: {
      lighten3: "#bccac2",
      lighten2: "#9Ab0a4",
      lighten1: "#799585",
      main: "#577b67",
      darken1: "#466252",
      darken2: "#344A3E",
      darken3: "#233129",
    },
    secondary: {
      lighten3: "#FCCFB6",
      lighten2: "#FBB891",
      lighten1: "#F9A06D",
      main: "#F88848",
      darken1: "#C66D3A",
      darken2: "#95522B",
      darken3: "#63361D",
    },
    tertiary: {
      lighten3: "#D3AEBC",
      lighten2: "#BD869B",
      lighten1: "#A75D79",
      main: "#913558",
      darken1: "#742A46",
      darken2: "#572035",
      darken3: "#3A1523",
    },
    neutral: {
      lighten3: "#D8D9DD",
      lighten2: "#C5C7CD",
      lighten1: "#B1B4BC",
      main: "#9EA1AB",
      darken1: "#7E8189",
      darken2: "#5F6167",
      darken3: "#3F4044",
    },
    warning: {
      lighten3: "#F8DE9A",
      lighten2: "#F5CD67",
      lighten1: "#F1BD35",
      main: "#EEAC02",
      darken1: "#BE8A02",
      darken2: "#8F6701",
      darken3: "#5F4501",
    },
    error: {
      lighten3: "#FCB6B8",
      lighten2: "#FB9194",
      lighten1: "#F96D71",
      main: "#F8484D",
      darken1: "#C63A3E",
      darken2: "#952B2E",
      darken3: "#631D1F",
    },
  },
  fonts: { heading: "Chicle", body: "Inter" },
  fontWeight: { regular: 400, medium: 500, semiBold: 600, bold: 700 },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
