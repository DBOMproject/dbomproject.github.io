import * as React from "react"
import { Box, Button, Container, Text, Card } from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import attestationChannelCard from "../images/cards/attestation-channels.svg"
import attestationChannelCardLight from "../images/cards/attestation-channel-light.svg"
import notaryCard from "../images/cards/notary.svg"
import connectorsCard from "../images/cards/connectors.svg"
import pubSubCard from "../images/cards/pub-sub.svg"
import auditabilityCard from "../images/cards/auditability.svg"

const DBOMFeaturesElement = () => (
  <>
    <Box
      w={"100%"}
      h={{ base: "auto", sm: "auto", md: "auto", lg: "58.75rem" }}
      bgGradient="linear(180deg, #0B3E5F 0%, #1A6DA0 100%)"
      display={"flex"}
    >
      <Container maxW="65em">
        <Box
          display={"flex"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          flexDirection={"column"}
          mt={"5rem"}
        >
          <Text as="b" fontSize="md" color={"white"}>
            {`Key Features`}
          </Text>
          <Text fontSize="2xl" color={"white"}>
            {`DBoM Gives You`}
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexFlow={{
            base: "column",
            sm: "column",
            md: "row",
            lg: "column",
          }}
          flexWrap={{
            base: "no-wrap",
            sm: "no-wrap",
            md: "wrap",
            lg: "wrap",
          }}
          h={{ base: "auto", sm: "auto", md: "auto", lg: "40rem" }}
          mt={"2rem"}
          alignContent={{
            base: "center",
            sm: "center",
            md: "space-between",
            lg: "space-between",
          }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Card
            h={{ base: "17rem", sm: "17rem", md: "17rem", lg: "36rem" }}
            w={"20rem"}
            m={{ base: "1rem", sm: "1rem", md: "2rem", lg: "0rem" }}
            mb={{ base: "0rem", sm: "0rem", md: "0rem", lg: "2rem" }}
            borderRadius={"1.5rem"}
            bgImage={{
              base: attestationChannelCardLight,
              sm: attestationChannelCardLight,
              md: attestationChannelCardLight,
              lg: attestationChannelCard,
            }}
            bgSize={"22rem"}
            bgRepeat={"no-repeat"}
            transition={"all 0.7s"}
            _hover={{
              transform: "scale(1.02)",
              bgSize: "20rem",
            }}
          >
            <Text
              fontSize="2xl"
              pl={{ base: "0rem", sm: "0rem", md: "0rem", lg: "3rem" }}
              pr={{ base: "0rem", sm: "0rem", md: "0rem", lg: "3rem" }}
              pt={{ base: "2rem", sm: "2rem", md: "2rem", lg: "18rem" }}
              textAlign={"center"}
            >
              {`Attestation Channels`}
            </Text>
            <Text fontSize="lg" p="2rem" textAlign={"center"}>
              {`Create broadcast, public and private channels to securely transmit, organize and store attestation data in a policy controlled manner`}
            </Text>
          </Card>
          <Card
            h={"17rem"}
            w={"20rem"}
            m={{ base: "1rem", sm: "1rem", md: "2rem", lg: "0rem" }}
            mb={{ base: "0rem", sm: "0rem", md: "0rem", lg: "2rem" }}
            borderRadius={"1.5rem"}
            bgImage={notaryCard}
            bgPosition={"center top"}
            bgSize={"21.5rem"}
            bgRepeat={"no-repeat"}
            transition={"all 0.7s"}
            _hover={{
              transform: "scale(1.02)",
              bgSize: "20rem",
            }}
          >
            <Text fontSize="2xl" pt="2rem" textAlign={"center"}>
              {`Notary`}
            </Text>
            <Text fontSize="lg" p="2rem" textAlign={"center"}>
              {`Seamlessly notarize your attestations and verify upstream attestations using pluggable notaries, including SigStore and Ethereum`}
            </Text>
          </Card>
          <Card
            h={"17rem"}
            w={"20rem"}
            m={{ base: "1rem", sm: "1rem", md: "2rem", lg: "0rem" }}
            mb={{ base: "0rem", sm: "0rem", md: "0rem", lg: "2rem" }}
            borderRadius={"1.5rem"}
            bgImage={connectorsCard}
            bgPosition={"center top"}
            bgSize={"24rem"}
            bgRepeat={"no-repeat"}
            transition={"all 0.7s"}
            _hover={{
              transform: "scale(1.02)",
              bgSize: "22rem",
            }}
          >
            <Text fontSize="2xl" pt="2rem" textAlign={"center"}>
              {`Connectors`}
            </Text>
            <Text fontSize="lg" p="2rem" textAlign={"center"}>
              {`Use a plethora of pre-built connectors that work with your tooling for publishing and digesting attestations from channels.`}
            </Text>
          </Card>
          <Card
            h={"17rem"}
            w={"20rem"}
            m={{ base: "1rem", sm: "1rem", md: "2rem", lg: "0rem" }}
            mb={{ base: "0rem", sm: "0rem", md: "0rem", lg: "2rem" }}
            borderRadius={"1.5rem"}
            bgImage={pubSubCard}
            bgPosition={"center top"}
            bgSize={"23rem"}
            bgRepeat={"no-repeat"}
            transition={"all 0.7s"}
            _hover={{
              transform: "scale(1.02)",
              bgSize: "21rem",
            }}
          >
            <Text fontSize="2xl" pt="2rem" textAlign={"center"}>
              {`Pub Sub`}
            </Text>
            <Text fontSize="lg" p="2rem" textAlign={"center"}>
              {`Get streaming updates to your attestations as changes are published from upstream sources`}
            </Text>
          </Card>
          <Card
            h={"17rem"}
            w={"20rem"}
            m={{ base: "1rem", sm: "1rem", md: "2rem", lg: "0rem" }}
            mb={{ base: "2rem", sm: "2rem", md: "2rem", lg: "2rem" }}
            borderRadius={"1.5rem"}
            bgImage={auditabilityCard}
            bgPosition={"center top"}
            bgSize={"22rem"}
            bgRepeat={"no-repeat"}
            transition={"all 0.7s"}
            _hover={{
              transform: "scale(1.02)",
              bgSize: "20rem",
            }}
          >
            <Text fontSize="2xl" pt="2rem" textAlign={"center"}>
              {`Auditability`}
            </Text>
            <Text fontSize="lg" p="2rem" textAlign={"center"}>
              {`Get a chronological history of every creation, update and deletion on your attestation channels`}
            </Text>
          </Card>
        </Box>
        <Box
          display={"flex"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          mb={{ base: "2rem", sm: "2rem", md: "2rem", lg: "-2rem" }}
        >
          <Button
            rightIcon={<ArrowForwardIcon />}
            color={"white"}
            variant="link"
          >
            {`See All Features`}
          </Button>
        </Box>
      </Container>
    </Box>
  </>
)

export default DBOMFeaturesElement
