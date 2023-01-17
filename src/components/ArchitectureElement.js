import * as React from "react"
import { Box, Button, Container, Image, Text, Tooltip } from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import architectureDiagram from "../images/Architecture.png"

const ArchitectureElement = () => (
  <>
    <Box
      w={"100%"}
      h={{ base: "42rem", sm: "48rem", md: "51rem", lg: "53rem" }}
      display={"flex"}
      flexDirection={"column"}
    >
      <Container maxW="65em">
        <Box
          display={"flex"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          flexDirection={"column"}
          mt={"5rem"}
        >
          <Text as="b" fontSize="md" color={"brand.500"}>
            {`Modular Microservices Architecture`}
          </Text>
          <Text fontSize="2xl" pb="1.5rem">
            {`Easy to Run - Easy to Scale!`}
          </Text>
          <Text fontSize="md">
            {`DBoM is built on a modular microservices architecture, with pre-packaged docker based deployments for development and easy-to-use Kubernetes deployments for production use`}
          </Text>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          pt={{ base: "2rem", sm: "2rem", md: "1rem", lg: "0rem" }}
          pb={{ base: "4rem", sm: "2rem", md: "1rem", lg: "0rem" }}
        >
          <Image
            h={{ base: "auto", sm: "auto", md: "32rem", lg: "34rem" }}
            w={{ base: "100%", sm: "100%", md: "auto", lg: "auto" }}
            src={architectureDiagram}
            alt="dbom-architecture"
          ></Image>
        </Box>
        <Box
          display={"flex"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
        >
          <Tooltip label={"v2 architecture specifications are coming soon"}>
            <Button
              rightIcon={<ArrowForwardIcon />}
              color={"brand.500"}
              disabled={true}
              variant="link"
            >
              {`Know More`}
            </Button>
          </Tooltip>
        </Box>
      </Container>
    </Box>
  </>
)

export default ArchitectureElement
