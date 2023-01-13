import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import HeroElement from "../components/HeroElement";

const IndexPage = () => (

    <Layout>
        <HeroElement></HeroElement>
    </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home"/>

export default IndexPage
