import Link from 'next/link'
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import ShareButton from '../Button/ShareButton';
import ClipboardButton from '../Button/ClipboardButton';


interface CardProps {
  tipo: string,
  titulo: string,
  message: string;
}

const Card = (prop: CardProps) =>
  <Center py={6}>
    <Box
      maxW={'800px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'md'}
      p={6}
      overflow={'hidden'}>
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
          {prop.titulo}
        </Heading>
        <Text color={'gray.500'}>
          {prop.message}
        </Text>
      </Stack>
      <Stack direction={'row'}>
        <ClipboardButton 
          color={"red"}
          placehorder={"Copiar"}
          mensagem={prop.message}
        /> 

        <ShareButton
          color={"green"}
          placehorder={"Enviar Whatsapp"}
          mensagem={prop.message}
        />

      </Stack>
    </Box>
  </Center>

export default Card;