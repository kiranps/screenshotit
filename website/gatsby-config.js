module.exports = {
  pathPrefix: `/screenshotit`,
  siteMetadata: {
    title: 'Gatsby Default Starter',
    siteUrl: `https://codeheroin.com/screenshotit`,
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
          trackingId: 'UA-97369059-1'
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {}
    }
  ]
}