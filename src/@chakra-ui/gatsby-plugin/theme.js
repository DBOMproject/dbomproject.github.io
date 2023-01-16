import { baseTheme, extendTheme } from "@chakra-ui/react"

const theme = {
  colors: {
    brand: {
      500: "#0F6296",
      100: "#F1F6F9",
    },
  },
  widths: {
    landingExtent: "65em",
  },
}

export default extendTheme(theme)
export { baseTheme }
