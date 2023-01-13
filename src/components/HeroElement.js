import * as React from "react"
import {Box, Button, Flex, Heading, Text, VStack} from "@chakra-ui/react";
import {useLottie} from "lottie-react";
import dbomLayers from "../lottie/dbomLayers.json"

const HeroElement = () => {
    const {View} = useLottie({
        animationData: dbomLayers,
        autoplay: true,
        loop: true,
        rendererSettings: {
            filterSize: {
                width: '200%',
                height: '200%',
                x: '-50%',
                y: '-50%',
            }
        }
    })
    return <>
        <Flex alignItems={"center"} justifyContent={"center"} width={'100%'} mt={'10em'}>
            <Flex width={'65em'} margin={"auto 0"} justifyContent={'space-between'}>
                <VStack spacing='2em' maxWidth={"25em"} alignItems={'start'}>
                    <VStack spacing='2px' alignItems={'start'}>
                        <Heading variant={'h1'} color={'brand.500'}> Standardizing</Heading>
                        <Heading variant={'h1'}> Attestation Sharing </Heading>
                    </VStack>
                    <Text>The Digital Bill of Materials (DBoM) provides the missing layer for policy controlled
                        attestation
                        sharing between organizations </Text>
                    <Button variant={'solid'} colorScheme={'brand'}>Get Started</Button>
                </VStack>
                <Box width={'30em'} height={'20em'}>
                    {View}
                </Box>
            </Flex>
        </Flex>
    </>
}


export default HeroElement