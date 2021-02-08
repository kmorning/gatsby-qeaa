import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'

interface ILayoutProps {
  children: React.ReactNode
}

interface IStaticQueryProps {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const data = useStaticQuery<IStaticQueryProps>(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div>
      <header>
        <Link to="/">
          <h3>{data.site.siteMetadata.title}</h3>
        </Link>
      </header>
      {children}
    </div>
  )
}

export default Layout
