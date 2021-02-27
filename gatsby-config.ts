/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`
})

interface AuthResponse {
  jwt: string
  user: {
    id: number
    username: string
  }
}

interface AuthHeader {
  Authorization: string
}

export default {
  /* Your site config here */
  siteMetadata: {
    title: `Quinte East AA`
  },
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `STRAPI`,
        fieldName: `strapi`,
        url: `http://localhost:1337/graphql`,
        headers: async (): Promise<AuthHeader> => {
          const { data } = await axios.post<AuthResponse>('http://localhost:1337/auth/local', {
            identifier: `${process.env.STRAPI_API_USER}`,
            password: `${process.env.STRAPI_API_PW}`
          })
          return {
            Authorization: `Bearer ${data.jwt}`
          }
        }
      }
    },
    `gatsby-plugin-theme-ui`
  ]
}
