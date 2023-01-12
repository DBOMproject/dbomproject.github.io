import * as React from "react"
import {
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Image,
    Link,
    Stack,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import {CloseIcon, HamburgerIcon} from '@chakra-ui/icons';
import dbomLogo from '../images/dbom-logo.png'

const Links = ['Docs', 'Slack', 'Community'];

const NavLink = ({children}) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);


const HeaderElement = () => {


    const {isOpen, onOpen, onClose} = useDisclosure();
    return (<>
        <Box mt={{lg: '2em', md: '0'}}
             borderRadius={'10px'}
             marginLeft={'auto'} marginRight={'auto'} width={'65em'}
             bg={useColorModeValue('gray.50', 'gray.900')}
             boxShadow={'lg'}
             px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'stretch'}>
                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
                    aria-label={'Open Menu'}
                    display={{md: 'none'}}
                    onClick={isOpen ? onClose : onOpen}
                />
                <Flex alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
                    <Box width={'5em'}><Image src={dbomLogo}></Image></Box>
                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={{base: 'none', md: 'flex'}}>
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                    </HStack>
                    <Box width={'5em'}> <Button variant='solid' colorScheme='brand'>Github</Button></Box>
                </Flex>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{md: 'none'}}>
                    <Stack as={'nav'} spacing={4}>
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                    </Stack>
                </Box>
            ) : null}
        </Box>

    </>)
}

export default HeaderElement
