import { graphql } from 'gatsby'
import React from 'react'

interface LocationsProps {
  data: {
    strapi: {
      locations: [
        {
          id: number
          name: string
          address: string
          city: string
        }
      ]
    }
  }
}

const Locations: React.FC<LocationsProps> = ({ data }) => (
  <div>
    <h1>My Locations</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {data.strapi.locations.map((location) => (
          <tr key={`locations_` + location.id}>
            <td>{location.name}</td>
            <td>{location.address}</td>
            <td>{location.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

//query Locations($publicationState: STRAPI_PublicationState!)
//    locations(publicationState: $publicationState) {
export const query = graphql`
  query Locations($publicationState: STRAPI_PublicationState!) {
    strapi {
      locations(publicationState: $publicationState) {
        id
        name
        address
        city
      }
    }
  }
`

export default Locations
