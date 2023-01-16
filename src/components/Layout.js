/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

import HeaderElement from "./HeaderElement"
import "./layout.css"
import "@fontsource/open-sans"
import FooterElement from "./FooterElement" // Defaults to weight 400 with normal variant.

const Layout = ({ children }) => {
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
    </>
  )
}

export default Layout
