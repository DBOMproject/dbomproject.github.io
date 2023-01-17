/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React, { useEffect, useState } from "react"

import HeaderElement from "./HeaderElement"
import "../styles/layout.css"
import "@fontsource/open-sans"
import FooterElement from "./FooterElement" // Defaults to weight 400 with normal variant.
import { ArrowUpIcon } from "@chakra-ui/icons"
import { Box, IconButton } from "@chakra-ui/react"

const Layout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <>
      <HeaderElement />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
      </div>
      <FooterElement />
      {isVisible && (
        <Box
          onClick={scrollToTop}
          position="fixed"
          bottom={["1rem", "1.25rem", "1.25rem", "1.25rem"]}
          right={["1rem", "1.25rem", "2rem", "2.25rem"]}
          zIndex={3}
        >
          <IconButton
            icon={<ArrowUpIcon color={"white"} />}
            bgColor="dbomGreen.500"
            variant="solid"
            aria-label="Scroll To Top"
            borderRadius={"20rem"}
            _hover={{
              bgColor: "dbomGrey.500",
            }}
          />
        </Box>
      )}
    </>
  )
}

export default Layout
