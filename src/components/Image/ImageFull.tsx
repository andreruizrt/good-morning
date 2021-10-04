import React from "react";
import { Box , useColorModeValue} from '@chakra-ui/react'
import Image from 'next/image';


export const ImageFull = (prop: {src: string}) => {
  return (
    <Box
        maxW={'400px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'400px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
            <Image
              src={prop.src}
              layout={'fill'}
            />
        </Box>
    </Box>
  )
}

ImageFull.defaultProps = {
  src: "/src/data/imagens/404.jpeg"
}