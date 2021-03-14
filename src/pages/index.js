import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import About from "../components/sections/About"
import Home from "../components/sections/Home"
import Projects from "../components/sections/Projects"
import SEO from "../components/seo"
import Contact from "../components/sections/Contact"

const IndexPage = ({ data }) => (
  <Layout
    resumeUrl={data.sanityResume.resume.asset.url}
    logo={data.image.childImageSharp.fluid}
  >
    <SEO title="Artur Molenda" />
    <Home />
    <About />
    <Projects projects={data.allSanityProject.nodes} />
    <Contact />
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    image: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sanityResume {
      resume {
        asset {
          url
        }
      }
    }
    allSanityProject {
      nodes {
        title
        techStack
        id
        description
        demo
        code
        image {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
