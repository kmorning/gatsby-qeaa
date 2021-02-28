import { GatsbyNode } from 'gatsby'
import * as path from 'path'

interface IQueryResult {
  strapi: {
    locations: [
      {
        id: number
      }
    ]
  }
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Components
  const locationsComponent = path.resolve(`./src/templates/locations.tsx`)

  const result = await graphql<IQueryResult>(
    `
      query {
        strapi {
          locations {
            id
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  if (!result.data) {
    throw new Error('ERROR: Could not fetch data from backend')
  }

  //const locations = result.data.strapi.locations

  // Create locations page
  createPage({
    path: `/locations`,
    component: locationsComponent,
    context: {
      publicationState: process.env.NODE_ENV === `development` ? `PREVIEW` : `LIVE`
    }
  })
}
