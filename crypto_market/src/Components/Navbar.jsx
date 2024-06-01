import React from 'react';
import { Flex, Heading, Box, Link, Icon, InputGroup, InputLeftElement, Input, IconButton } from '@chakra-ui/react';
import { FaSearch, FaMicrophone } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';

const Navbar = () => {
  return (
    <Box as="header" bg="blue.600" p={{ base: 4, sm: 4, md: 6 }}>
    <Flex align="center" justify="space-between" flexDirection={{ base: 'column', sm: 'row' }}>
      <Heading as="h2" size="lg" color="white" mb={{ base: 4, sm: 0 }}>
        <Link href="#" color="white" _hover={{ textDecoration: 'none' }}>
          Crypto Metric
        </Link>
      </Heading>
      <Flex align="center" color="white" flexDirection={{ base: 'column', sm: 'row' }} w={{ base: '100%', sm: 'auto' }}>
        <InputGroup mb={{ base: 4, sm: 0 }} w={{ base: '100%', sm: 'auto' }}>
          <InputLeftElement pointerEvents="none">
            <Icon as={FaSearch} color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search"
            color="white"
            _placeholder={{ color: 'gray.400' }}
            borderColor="gray.300"
          />
        </InputGroup>
        <Flex mx={{ base: 0, sm: 4 }} justify={{ base: 'center', sm: 'flex-start' }}>
          <IconButton
            aria-label="Microphone"
            icon={<FaMicrophone />}
            colorScheme="whiteAlpha"
            mx={1}
          />
          <IconButton
            aria-label="Settings"
            icon={<IoMdSettings />}
            colorScheme="whiteAlpha"
            mx={1}
          />
        </Flex>
      </Flex>
    </Flex>
  </Box>
  );
};

export default Navbar;
