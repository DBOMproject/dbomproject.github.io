import * as React from "react"
import { Box, Image, Text } from "@chakra-ui/react"
import tlfLogo from "../images/linux-foundation-vert-white.svg"
import { Link } from "gatsby"

const FooterElement = () => (
  <>
    <Box
      w={"100%"}
      h={"10rem"}
      bg={"brand.500"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDir={"column"}
    >
      <Link
        href={"https://www.linuxfoundation.org/"}
        isExternal={true}
        textDecoration={"none"}
      >
        <Image src={tlfLogo} alt="the-linux-foundation-logo"></Image>
      </Link>
      <Box
        pt="2rem"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDir={"column"}
      >
        <Text color={"white"} fontSize="xs">
          {`Copyright © DBOM Technical Project a Series of LF Projects, LLC`}
        </Text>
        <Text color={"white"} fontSize="xs">
          {`For website terms of use, trademark policy and other project policies
          please see `}
          <Link href="https://lfprojects.org">
            <Text as="u">{`https://lfprojects.org`}</Text>
          </Link>
        </Text>
      </Box>
    </Box>
  </>
)

export default FooterElement
