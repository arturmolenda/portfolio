import * as React from "react"

import Layout from "../components/Layout"
import Home from "../components/sections/Home"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Artur Molenda" />
    <Home />
  </Layout>
)

export default IndexPage
