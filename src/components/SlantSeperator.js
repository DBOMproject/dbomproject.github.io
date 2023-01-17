import * as React from "react"
import { Box } from "@chakra-ui/react"
import { css } from "@emotion/react"

const SlantSeperator = () => (
  <Box
    css={css`
      width: 100%;
      height: 10em;
      overflow: hidden;
      position: relative;
    `}
    _after={{
      content: '" "',
      position: "absolute",
      height: "10em",
      boxShadow: "rgb(147 154 161 / 20%) 4px 1px 5px 10px",
      bottom: "-5em",
      width: "100%",
      display: "block",
      transform: "rotate(-4deg)",
      backgroundColor: "var(--chakra-colors-brand-100)",
    }}
  ></Box>
)

export default SlantSeperator
