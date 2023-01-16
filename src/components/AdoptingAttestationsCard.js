import * as React from "react"
import { Box, Flex, Image, Text } from "@chakra-ui/react"

const AdoptingAttestationsCard = ({ title, text, imageSrc }) => (
  <Flex
    background={"white"}
    boxShadow={"0px 3px 12px rgba(0, 0, 0, 0.1);"}
    borderRadius={"md"}
    // minHeight={"6em"}
    pb={2}
    pt={2}
    borderLeft={"10px solid"}
    borderLeftColor={"brand.500"}
    justifyContent={{ lg: "center", base: "start" }}
  >
    <Flex alignItems={"center"} justifyContent={"center"}>
      <Box padding={5}>
        {" "}
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
