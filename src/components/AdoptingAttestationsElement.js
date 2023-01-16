import * as React from "react"
import {
  Box,
  Container,
  Grid,
  GridItem,
  Highlight,
  Text,
  VStack,
} from "@chakra-ui/react"
import AdoptingAttestationsCard from "./AdoptingAttestationsCard"
import share from "../images/icons/share.svg"
import interop from "../images/icons/interop.svg"
import policy from "../images/icons/policy.svg"
import automation from "../images/icons/automation.svg"

const AdoptingAttestationsElement = () => (
  <Box background={"brand.100"} width={"100%"} pt={20} pb={40}>
    <Container maxW={"65em"} margin={"0 auto"}>
      <Text fontSize={"md"} color={"brand.500"} fontWeight={"bold"}>
        Adopting Attestations
      </Text>
      <Text fontSize={"2xl"}>Challenges with Attestation Sharing Today</Text>
      <VStack mt={6} spacing={8}>
        <Text>
          {" "}
          <Highlight
            query={[
              "Software Bills Of Materials",
              "Vulnerability Exploitability eXchange",
              "Carbon Footprint",
              "ESG",
            ]}
            styles={{ fontWeight: "bold" }}
          >
            Attestations are the cornerstone to building secure supply chains in
            any industry. Examples of attestations that we share daily include
            Software Bills Of Materials (SBOMs), Vulnerability Exploitability
            eXchange (VEXs), Carbon Footprint data and ESG Information. However,
            the following challenges come into play
          </Highlight>{" "}
        </Text>
        <Grid
          templateColumns={{ lg: "repeat(2, 1fr)", base: "repeat(1, 1fr)" }}
          gap={8}
          justifyContent={"space-between"}
          alignContent={"space-between"}
          width={"100%"}
        >
          <GridItem>
            <AdoptingAttestationsCard
              title={"Sharing"}
              text={
                "Sharing attestations across organizational boundaries in a manageable manner is hard"
              }
              imageSrc={share}
            />
          </GridItem>
          <GridItem>
            <AdoptingAttestationsCard
              title={"Automation"}
              text={
                "They must be published and updated constantly as the components they refer to change"
              }
              imageSrc={automation}
            />
          </GridItem>
          <GridItem>
            <AdoptingAttestationsCard
              title={"Interoperability"}
              text={
                "There are a variety of formats. The transport must support conversion on the fly for easy integration"
              }
              imageSrc={interop}
            />
          </GridItem>
          <GridItem>
            <AdoptingAttestationsCard
              title={"Policy Control"}
              text={
                "They have the potential to expose organizational IP, hence policy controlled distribution is essential"
              }
              imageSrc={policy}
            />
          </GridItem>
        </Grid>
      </VStack>
    </Container>
  </Box>
)

export default AdoptingAttestationsElement
