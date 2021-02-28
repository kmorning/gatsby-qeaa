/** @jsx jsx */
import { Styled, Box, Container, Flex, jsx } from 'theme-ui'

import Card from '../components/Card'

const Themed: React.FC = () => {
  const cards = [1, 2, 3, 4, 5, 6]
  return (
    <Styled.div as={Container}>
      <Flex sx={{ flexWrap: 'wrap' }}>
        {cards.map((card) => (
          <Box key={card} sx={{ width: ['100%', '50%', '33.33%'] }}>
            <Card />
          </Box>
        ))}
      </Flex>
    </Styled.div>
  )
}

export default Themed
