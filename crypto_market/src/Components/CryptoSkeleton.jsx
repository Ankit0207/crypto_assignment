import React from 'react';
import {
  Box,
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';

const CryptoSkeleton = ({ count = 40 }) => {
  return (
    <Flex wrap="wrap" justify="center" gap={8} w={"90%"} margin={"auto"} pt={"55px"}>
      {Array.from({ length: count }).map((_, index) => (
        <Box key={index} w={{ base: "90%", md: "46%",lg:"30.6%" }}>
          <Flex p={4} w="100%" h={"100%"} d="flex" flexDirection="column" gap={"8px"} borderRadius="lg" bg="gray.100">
            <Flex justify="space-between" align="center">
              <SkeletonCircle size="20" />
              <Skeleton height="20px" width="40%" />
              <Skeleton height="20px" width="20%" />
            </Flex>
            <Box>
              <Flex justify="space-between" align="center">
                <Skeleton height="20px" width="50px" />
                <Skeleton height="20px" width="20px" />
              </Flex>
            </Box>
            <Box>
              <Skeleton height="20px" width="50%" />
            </Box>
            <Box mt={2}>
              <SkeletonText noOfLines={2} spacing="4" />
            </Box>
          </Flex>
        </Box>
      ))}
    </Flex>
  );
};

export default CryptoSkeleton;
