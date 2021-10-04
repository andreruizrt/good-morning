import { Flex, Heading } from '@chakra-ui/react'

// HOW TO MAKE A LINEAR GRADIENT
export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
    bgGradient="linear(to-l, #7928CA, #FF0080)"
    bgClip="text"
  >
    <Heading fontSize="1.2vw">{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'Mensagens de BOM DIA!',
}
