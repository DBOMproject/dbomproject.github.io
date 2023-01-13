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
        <Flex alignItems={"center"} justifyContent={"center"} width={'100%'} mt={{lg: '10em', base: '3em'}}>
            <Flex width={{lg: '67em', md: '40em'}} margin={"auto 0"} p={"2em"}
                  justifyContent={{lg: 'space-between', md: 'center', sm: 'center'}} alignItems={{
                lg: 'start',
                base: 'center',
            }} flexWrap={'wrap-reverse'}>
                <VStack p={'sm'} spacing='2em' maxWidth={"25em"} alignItems={{
                    lg: 'start',
                    base: 'center'
                }}>
                    <VStack spacing='2px' alignItems={{
                        lg: 'start',
                        base: 'center',
                    }}>
                        <Heading variant={'h1'} color={'brand.500'}> Standardizing</Heading>
                        <Heading variant={'h1'} textAlign={{
                            lg: 'start',
                            base: 'center',
                        }}> Attestation Sharing </Heading>
                    </VStack>
                    <Text textAlign={{
                        lg: 'start',
                        base: 'center',
                    }}>The Digital Bill of Materials (DBoM) provides the missing layer for policy controlled
                        attestation
                        sharing between organizations </Text>
                    <Button variant={'solid'} colorScheme={'brand'}>Get Started</Button>
                </VStack>
                <Box maxWidth={'30em'} maxHeight={'20em'} mb={{base: "2em", lg: "0"}}>
                    {View}
                </Box>
            </Flex>
        </Flex>
    </>
}


export default HeroElement