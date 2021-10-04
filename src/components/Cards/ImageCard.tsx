import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import ShareButton from '../Button/ShareButton';
import Bomdia from '../../data/imagens/bomdia.jpg'

interface cardProps {
  tipo: string,
  title: string,
  message: string,
  autor: string
  date: string,
}


const ImageCard = (prop: cardProps) => {
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
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
              src={Bomdia}
              layout={'fill'}
            />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            {prop.tipo}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {prop.title}
          </Heading>
          <Text color={'gray.500'}>
            {prop.message}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{prop.autor}</Text>
            <Text color={'gray.500'}>{prop.date} · 6 min read</Text>
          </Stack>
        </Stack>
        <Stack direction={'row'}>
          {/* <ShareButton 
            buttonColor={"green"} 
            placehorder={"Enviar Whatsapp"}

          />
          <ShareButton 
            buttonColor={"red"} 
            placehorder={"Copiar"}
          /> */}
        </Stack>
      </Box>
    </Center>
  );
}

ImageCard.defaultProps = {
  
}

export default ImageCard;