import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import About from "../components/sections/About"
import Home from "../components/sections/Home"
import Projects from "../components/sections/Projects"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Artur Molenda" />
      <Home />
      <About />
      <Projects projects={data.allSanityProject.nodes} />
    </Layout>
  )
}
export default IndexPage

export const query = graphql`
  {
    allSanityProject {
      nodes {
        title
        description
        demo
        code
        techStack
        image {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
        id
      }
    }
  }
`
