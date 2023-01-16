import * as React from "react"
import { Box } from "@chakra-ui/react"
import { css } from "@emotion/react"

const SlantSeperator = () => (
  <>
    <Box
      css={css`
        width: 100%;
        height: 100px;
        background: linear-gradient(to right bottom, #ffffff 49%, #f1f6f9 50%),
          linear-gradient(-50deg, #ffffff 16px, #fff 0);
      `}
    ></Box>
  </>
)

export default SlantSeperator
