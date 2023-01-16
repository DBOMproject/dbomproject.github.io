import * as React from "react"
import { Box, Image } from "@chakra-ui/react"
import tlfLogo from "../images/linux-foundation-vert-white.svg"

const FooterElement = () => (
  <>
    <Box
      w={"100%"}
      h={"8.75rem"}
      bg={"brand.500"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Image src={tlfLogo} alt="the-linux-foundation-logo"></Image>
    </Box>
  </>
)

export default FooterElement
