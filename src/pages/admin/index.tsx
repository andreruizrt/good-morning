import React from 'react';
import {
  Box,
  Text,
  Textarea
} from '@chakra-ui/react';
import { Center } from '@chakra-ui/layout';
import NavAdmin from '../../components/Nav/NavAdmin';

const Admin = () => {
  return (
    <Center py={20}>
      <NavAdmin />
      <Box>
        <Box p={8}>
          <Text >Dashboard</Text>
        </Box>
        <Textarea size="lg"></Textarea>
      </Box>
    </Center>
  )
}

export default Admin;