import React from 'react';
import {
  Box,
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsArrowLeftSquareFill } from 'react-icons/bs';

const SingleCryptoSkeleton = () => {
  return (
    <Box bg="gray.50">
      <Box as="header" bg="blue.600" w={"100%"} margin={"auto"}>
        <Box p="10px" px={"50px"}>
          <Flex as="nav" justify="space-between" align="center" color="white">
            <Link>
              <BsArrowLeftSquareFill size="2rem" />
            </Link>
            <Skeleton height="24px" width="150px" />
          </Flex>
        </Box>
      </Box>

      <Box as="section" py={8} w={"90%"} margin={"auto"}>
        <Flex justify={"space-between"} my={4} w={"100%"}>
          <Flex direction="column" gap={4} align="center" w={"20%"} className="image-container">
            <SkeletonCircle size="200px" />
            <Box textAlign="center">
              <SkeletonText mt="4" noOfLines={2} spacing="4" />
              <Skeleton height="24px" width="50px" mt="4" />
            </Box>
          </Flex>
          <Flex direction="column" w={"75%"} className="company-details">
            <Skeleton height="32px" mb={4} width="300px" />
            <SkeletonText mt="4" noOfLines={6} spacing="4" />
          </Flex>
        </Flex>

        <Box>
          <Skeleton height="400px" />
        </Box>
      </Box>
    </Box>
  );
};

export default SingleCryptoSkeleton;
