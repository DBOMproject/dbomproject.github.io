import { baseTheme, extendTheme } from "@chakra-ui/react"

const theme = {
  colors: {
    brand: {
      500: "#0F6296",
    },
    networkBackground: {
      500: "#F1F6F9",
    },
    dbomGreen: {
      500: "#55C3B7",
    },
  },
}

export default extendTheme(theme)
export { baseTheme }
