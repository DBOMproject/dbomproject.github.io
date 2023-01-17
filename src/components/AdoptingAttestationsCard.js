import * as React from "react"
import { Box, Flex, Image, Text } from "@chakra-ui/react"

const AdoptingAttestationsCard = ({ title, text, imageSrc }) => (
  <Flex
    background={"white"}
    boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px;"}
    transition={"0.25s all ease-in-out"}
    borderRadius={"md"}
    _hover={{
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
      transform: "scale(1.02)",
      borderLeftWidth: "8px",
    }}
    // minHeight={"6em"}
    pb={2}
    pt={2}
    borderLeft={"10px solid"}
    borderLeftColor={"brand.500"}
    justifyContent={{ lg: "center", base: "start" }}
  >
    <Flex alignItems={"center"} justifyContent={"center"}>
      <Box padding={5}>
        <Image objectFit="cover" src={imageSrc} alt={title} />
      </Box>

      <Flex direction={"column"} mr={4}>
        <Text color={"black"} fontWeight={"bold"}>
          {title}
        </Text>
        <Text fontSize={"sm"}>{text}</Text>
      </Flex>
    </Flex>
  </Flex>
)

export default AdoptingAttestationsCard
