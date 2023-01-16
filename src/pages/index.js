import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import HeroElement from "../components/HeroElement"
import AdoptingAttestationsElement from "../components/AdoptingAttestationsElement"
import NewParadigmElement from "../components/NewParadigmElement"
import DBOMFeaturesElement from "../components/DBOMFeaturesElement"
import ArchitectureElement from "../components/ArchitectureElement"
import NetworkBuilding from "../components/NetworkBuilding"
import SlantSeperator from "../components/SlantSeperator"

const IndexPage = () => (
  <Layout>
    <HeroElement></HeroElement>
    <SlantSeperator></SlantSeperator>
    <AdoptingAttestationsElement></AdoptingAttestationsElement>
    <NewParadigmElement></NewParadigmElement>
    <DBOMFeaturesElement></DBOMFeaturesElement>
    <ArchitectureElement></ArchitectureElement>
    <NetworkBuilding></NetworkBuilding>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
