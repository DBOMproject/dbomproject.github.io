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
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react"
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import dbomLogo from "../images/dbom-logo.png"
import { FaGithub } from "react-icons/fa"

const Links = [
  {
    text: "Docs",
    href: "https://dbom-project.readthedocs.io/",
  },
  {
    text: "Slack",
    href: "https://communityinviter.com/apps/dbom-project/dbom",
  },
  {
    text: "Community",
    href: "https://github.com/DBOMproject/community",
  },
]

const NavLink = ({ children, href }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    fontWeight={"700"}
    color={"brand.500"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray00"),
    }}
    href={href ? href : "#"}
  >
    {children}
  </Link>
)

const HeaderElement = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // noinspection JSValidateTypes
  return (
    <>
      <Box
        mt={{ lg: "2em", md: "0" }}
        borderRadius={{
          md: "0",
          lg: "lg",
        }}
        marginLeft={"auto"}
        marginRight={"auto"}
        width={{ lg: "65em", md: "auto" }}
        transition={"all 0.5s ease-in-out"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={`0px 0px 5px 2px rgba(0, 0, 0, 0.1)`}
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"stretch"}>
          <IconButton
            size={"md"}
            mr={4}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Box width={"7em"}>
              <Image src={dbomLogo}></Image>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map(link => (
                <NavLink key={link.text} href={link.href}>
                  {link.text}
                </NavLink>
              ))}
            </HStack>
            <Box
              width={"7em"}
              display={{
                base: "none",
                md: "block",
              }}
            >
              <Link
                href={"https://github.com/dbomproject"}
                textDecoration={"none"}
                isExternal={true}
              >
                <Button
                  variant={"solid"}
                  leftIcon={<Icon as={FaGithub} />}
                  colorScheme="brand"
                >
                  GitHub
                </Button>
              </Link>
            </Box>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map(link => (
                <NavLink key={link.text} href={link.href}>
                  {link.text}
                </NavLink>
              ))}
              <NavLink key="gh" href={"https://github.com/dbomproject"}>
                Github
              </NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}

export default HeaderElement
