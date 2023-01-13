import * as React from "react"
import {
    Box,
    Button,
    Flex,
    HStack,
    Icon,
    IconButton,
    Image,
    Link,
    Show,
    Stack,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import {CloseIcon, HamburgerIcon} from '@chakra-ui/icons';
import dbomLogo from '../images/dbom-logo.png'
import {FaGithub} from "react-icons/all";

const Links = ['Docs', 'Slack', 'Community'];

const NavLink = ({children}) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        fontWeight={'700'}
        color={'brand.500'}
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
    // noinspection JSValidateTypes
    return <>
        <Box mt={{lg: '2em', md: '0'}}
             borderRadius={{
                 md: '0',
                 lg: 'lg'
             }
             }
             marginLeft={'auto'} marginRight={'auto'} width={{lg: '65em', md: 'auto'}}
             bg={useColorModeValue('white', 'gray.900')}
             boxShadow={`0px 0px 5px 2px rgba(0, 0, 0, 0.1)`}
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
                    <Box width={'7em'}><Image src={dbomLogo}></Image></Box>
                    <HStack
                        as={'nav'}

                        spacing={4}
                        display={{base: 'none', md: 'flex'}}>
                        {Links.map((link) => <NavLink key={link}>{link}</NavLink>)}
                    </HStack>
                    <Show above={'lg'}>
                        <Box width={'7em'} display={{}}>
                            <Button variant={'solid'}
                                    leftIcon={<Icon as={FaGithub}/>}

                                    colorScheme='brand'>GitHub</Button></Box>
                    </Show>
                </Flex>
            </Flex>

            {isOpen ? <Box pb={4} display={{md: 'none'}}>
                <Stack as={'nav'} spacing={4}>
                    {Links.map((link) => (
                        <NavLink key={link}>{link}</NavLink>
                    ))}
                    <NavLink key="gh">Github</NavLink>
                </Stack>
            </Box> : null}
        </Box>

    </>
}

export default HeaderElement
