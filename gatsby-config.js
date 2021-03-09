module.exports = {
  siteMetadata: {
    title: `Artur Molenda`,
    description: `I'm a front-end web developer specializing in creating web applications using React`,
    author: `Artur Molenda`,
    siteUrl: "http://www.arturmolenda.pl",
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-191516031-1",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Artur Molenda`,
        short_name: `Artur Molenda`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "26qa8uhz",
        dataset: "production",
        token:
          "skR5JrH2dZW4GuM1WeqSTZBOG8RBd2RsOrGYw63vi4djBhw4msgfYMj0BcCDsRVH5OIGzviSxEoSEjOdW047mEYvTGbLzk99BZVEDbygpiEMct80EfBy6Y3Smi1RyS6WelQyByHM5uBXb5HvjRK5NY8R6UwzSGYdtJt8ih2GE0JWfgxFw33P",
        watchMode: true,
        overlayDrafts: true,
      },
    },
  ],
}
