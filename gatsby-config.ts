/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
import dotenv from 'dotenv'

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`
})

export default {
  /* Your site config here */
  siteMetadata: {
    title: `Quinte East AA`
  },
  plugins: [`gatsby-plugin-theme-ui`]
}
