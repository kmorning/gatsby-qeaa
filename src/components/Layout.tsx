/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Container from './Container'

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
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <header
        sx={{
          width: '100%'
        }}
      >
        <Container>
          <Link to="/">
            <h3>{data.site.siteMetadata.title}</h3>
          </Link>
        </Container>
      </header>
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto'
        }}
      >
        <Container>{children}</Container>
      </main>
      <footer
        sx={{
          width: '100%'
        }}
      >
        <Container>Footer</Container>
      </footer>
    </div>
  )
}

export default Layout
