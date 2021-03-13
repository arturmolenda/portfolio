import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({
  description = "",
  lang = "en",
  meta = [],
  title = "",
  image = null,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            author
            defaultImage: image
            siteUrl
            keywords
          }
        }
      }
    `
  )

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    author,
    keywords,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seo.title}
      meta={[
        {
          name: `description`,
          content: seo.description,
        },
        {
          name: "keywords",
          content: keywords.join(","),
        },
        {
          property: `og:title`,
          content: seo.title,
        },
        {
          property: `image`,
          content: seo.image,
        },
        {
          property: `og:image`,
          content: seo.image,
        },
        {
          property: `og:description`,
          content: seo.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `author`,
          content: author,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: seo.title,
        },
        {
          name: `twitter:description`,
          content: seo.description,
        },
        {
          name: `google-site-verification`,
          content: "SyEnj1JY0Om2FppXmsrMq6XRHDqYr8OtWf1nTbK8XwU",
        },
      ].concat(meta)}
    />
  )
}

export default SEO
