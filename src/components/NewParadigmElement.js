import * as React from "react"
import { Box, Container, Grid, GridItem, Text, VStack } from "@chakra-ui/react"
import Lottie from "lottie-react"
import attestationChannels from "../lottie/attestationChannels.json"
import emailSearching from "../lottie/emailSearching.json"

const NewParadigmElement = () => {
  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.2],
        type: "stop",
        frames: [0],
      },
      {
        visibility: [0.2, 0.45],
        type: "play",
        frames: [0, 43],
      },
      {
        visibility: [0.45, 1.0],
        type: "loop",
        frames: [43, 487],
      },
    ],
  }

  return (
    <Box width={"100%"} pt={20} pb={20}>
      <Container maxW={"65em"} margin={"0 auto"}>
        <Text fontSize={"md"} color={"brand.500"} fontWeight={"bold"}>
          What does DBoM do differently?
        </Text>
        <Text fontSize={"2xl"}>A New Paradigm for Attestation Sharing</Text>

        <Grid
          templateColumns={{ lg: "repeat(2, 1fr)", base: "repeat(1, 1fr)" }}
          gap={{ lg: 8, base: 16 }}
          mt={20}
          justifyContent={"space-between"}
          alignContent={"space-between"}
          width={"100%"}
        >
          <GridItem>
            <VStack spacing={6}>
              <Text
                textTransform={"uppercase"}
                fontWeight={"bold"}
                color={"brand.500"}
              >
                Attestation Sharing Today
              </Text>
              <Lottie
                style={{
                  height: "300px",
                }}
                animationData={emailSearching}
                // interactivity={interactivity}
              />
              <Text textAlign={"center"}>
                Attestations are shared between different people across
                organizations over emails, shared links and other communication
                media. Users often have to manually search and ingest this data
                into their tools, sometimes missing essential context
              </Text>
              <Text
                textAlign={"center"}
                fontWeight={"bold"}
                color={"brand.500"}
              >
                This is error prone, hard to trust and is difficult to audit
                from a policy standpoint
              </Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack spacing={6}>
              <Text
                textTransform={"uppercase"}
                fontWeight={"bold"}
                color={"brand.500"}
              >
                Attestation Sharing with DBoM
              </Text>

              <Lottie
                animationData={attestationChannels}
                style={{
                  height: "250px",
                  marginTop: "4.5em",
                }}
                interactivity={interactivity}
              />
              <Text textAlign={"center"}>
                Organizations set up policy controlled channels, on which
                attestations are automatically notarized and exported utilizing
                connectors. Consumers downstream subscribe to these channels and
                their tools utilize connectors for ingestion{" "}
              </Text>
              <Text
                textAlign={"center"}
                fontWeight={"bold"}
                color={"brand.500"}
              >
                This is automated, employs use of a well established trust
                framework and is auditable end-to end
              </Text>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

export default NewParadigmElement
