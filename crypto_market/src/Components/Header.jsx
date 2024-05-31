import React from 'react';
import { Flex, Heading, Box, Link, Icon, InputGroup, InputLeftElement, Input, IconButton } from '@chakra-ui/react';
import { FaSearch, FaMicrophone } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';

const Header = () => {
  return (
    <Box as="header" bg="blue.600" p={15}>
        <Flex align="center" justify="space-between">
          <Heading as="h2" size="lg" color="white">
            <Link href="#" color="white" _hover={{ textDecoration: 'none' }}>
              Stock Metric
            </Link>
          </Heading>
          <Flex align="center" color="white">
            <InputGroup>
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
            <Flex mx={4}>
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

export default Header;
