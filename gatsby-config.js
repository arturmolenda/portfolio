module.exports = {
  siteMetadata: {
    title: `Artur Molenda`,
    description: `I'm a front-end web developer specializing in building websites as well ass more challenging web applications.`,
    author: `Artur Molenda`,
    siteUrl: "https://www.arturmolenda.pl",
    image: "/home-screen.jpg",
    keywords: ["arturmolenda", "artur molenda", "website", "portfolio"],
  },
  plugins: [
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 500,
      },
    },
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
        name: `ArturMolenda`,
        short_name: `ArturMolenda`,
        start_url: `/`,
        background_color: `#303339`,
        theme_color: `#58e3e6`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
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
