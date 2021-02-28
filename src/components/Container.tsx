/** @jsx jsx */
import { jsx } from 'theme-ui'

interface IContainerProps {
  children: React.ReactNode
}

const Container: React.FC<IContainerProps> = ({ children }) => (
  <div
    sx={{
      maxWidth: 'container',
      mx: 'auto',
      px: 3
    }}
  >
    {children}
  </div>
)

export default Container
