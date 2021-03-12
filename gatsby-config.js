module.exports = {
  siteMetadata: {
    title: `Artur Molenda`,
    description: `I'm a front-end web developer specializing in creating web applications using React`,
    author: `Artur Molenda`,
    siteUrl: "http://www.arturmolenda.pl",
  },
  plugins: [
    `gatsby-plugin-sass`,
    "gatsby-plugin-postcss",
    `gatsby-plugin-react-helmet`,
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
          "skUacdi0kq1VJssPwAkLHexq8Nti5YxGCIawnXtf22R4DXgEsDGJW2gzYJAGZ0S6teauSxf4FCJoIeqtwMRGyLI0jrfqJSwsEKuxjQoz6iWkdB5n4vf2u5KYyaJjIJ5sJ7oUhkbdn6AxbSee6YXoUy0vwOetjgms5AsD83OYjdBh3UedcKJE",
        watchMode: true,
      },
    },
  ],
}
