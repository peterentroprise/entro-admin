import { createMuiTheme } from "@material-ui/core/styles"
import indigo from "@material-ui/core/colors/indigo"
import pink from "@material-ui/core/colors/pink"
import red from "@material-ui/core/colors/red"

const customTheme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: indigo,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    overline: {
      textTransform: "none",
    },
    fontFamily: [
      "Muli",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
  overrides: {
    MuiButton: {
      // override the styles of all instances of this component
      root: {
        textTransform: "none",
      },
    },
  },
})

export default customTheme
