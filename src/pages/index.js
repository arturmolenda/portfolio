import * as React from "react"

import Layout from "../components/Layout"
import About from "../components/sections/About"
import Home from "../components/sections/Home"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Artur Molenda" />
    <Home />
    <About />
  </Layout>
)

export default IndexPage
