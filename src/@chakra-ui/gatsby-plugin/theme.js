import { baseTheme, extendTheme } from "@chakra-ui/react"

const theme = {
  colors: {
    brand: {
      500: "#0F6296",
      100: "#F1F6F9",
    },
    networkBackground: {
      500: "#F1F6F9",
    },
    dbomGreen: {
      500: "#55C3B7",
    },
    dbomGrey: {
      500: "#A2A9AD",
    },
  },
}

export default extendTheme(theme)
export { baseTheme }
