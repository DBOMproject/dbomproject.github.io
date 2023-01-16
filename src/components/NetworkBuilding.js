import * as React from "react"
import { Box, Button, Container, Text } from "@chakra-ui/react"
import networkPattern from "../images/network-pattern.svg"
import { FaGithub } from "react-icons/fa"

const NetworkBuilding = () => (
  <>
    <Box
      w={"100%"}
      h={{ base: "30rem", md: "30rem", lg: "31.45rem" }}
      display={"flex"}
      flexDirection={"column"}
      bg={"networkBackground.500"}
      bgImage={networkPattern}
      bgPosition={"center top"}
    >
      <Container maxW="65em">
        <Box
          display={"flex"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          flexDirection={"column"}
          mt={{ base: "2rem", sm: "4rem", md: "4rem", lg: "5rem" }}
        >
          <Text as="b" fontSize="md" color={"brand.500"}>
            {`Getting Started With A DBoM Node`}
          </Text>
          <Text mb="1.5rem" fontSize="2xl">
            {`Let’s Build The Network Together!`}
          </Text>
          <Text fontSize="sm">
            {`Dive right in with our simple deployments for docker compose and
            kubernetes. Try DBoM to see the future of supply chain integrity and
            experience the`}
            <Text as="b">{` Internet of Attestations`}</Text>
          </Text>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={{ base: "4rem", sm: "4rem", md: "5rem", lg: "6rem" }}
        >
          <Button
            leftIcon={<FaGithub />}
            variant="outline"
            border={"0.125rem solid"}
            borderRadius={"0.5rem"}
            color={"brand.500"}
            background={"white"}
            p={"1.5rem"}
          >
            Explore Deployment Options
          </Button>
        </Box>
      </Container>
    </Box>
  </>
)

export default NetworkBuilding
