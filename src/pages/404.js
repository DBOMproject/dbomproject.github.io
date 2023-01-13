import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
    <Layout>
        <h1>404: Not Found</h1>
    </Layout>
)

export const Head = () => <Seo title="404: Not Found"/>

export default NotFoundPage
