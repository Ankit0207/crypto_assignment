import { Link } from 'react-router-dom';
import { Badge, Box, Flex, Image, Text } from '@chakra-ui/react';
import { BsGraphDownArrow, BsGraphUpArrow } from "react-icons/bs"

const Crypto = ({ cryptos }) => {

  return (
    <>
      {<Flex wrap="wrap" justify="center" gap={8} w={"90%"} margin={"auto"} pt={"55px"}>
        {cryptos?.map((crypto) => (
          <Link to={`/details/${crypto.id}`} key={crypto.id} style={{ width: "23%" }}>
            <Flex p={4} w="100%" h={"100%"} d="flex" flexDirection="column" gap={"8px"} borderRadius="lg" bg="gray.100" >
              <Flex justify="space-between" align="center">
                <Image src={crypto.image} alt={`${crypto.name} logo`} boxSize="20" />
                <Text fontSize="xlg" color="gray.500">{crypto.name}</Text>
                <Text fontSize="xlg" fontWeight="semibold">{crypto.symbol}</Text>
              </Flex>
              <Box>
                {crypto.price_change_percentage_24h > 0 ? (
                  <Flex justify="space-between" align="center">
                    <Badge borderRadius="full" px={2} py={1} colorScheme="green" fontSize="xl">
                      {crypto.price_change_percentage_24h.toFixed(2) + " %"}
                    </Badge>
                    <BsGraphUpArrow className="icon" color="green" size="24" />
                  </Flex>
                ) : (
                  <Flex justify="space-between" align="center">
                    <Badge borderRadius="full" px={2} py={1} colorScheme="red" fontSize="xl">
                      {crypto.price_change_percentage_24h.toFixed(2) + " %"}
                    </Badge>
                    <BsGraphDownArrow className="icon" color="red" size="24" />
                  </Flex>
                )}
              </Box>
              <Box>
                <Text fontSize="xlg" textAlign="center" fontWeight="bold" color={crypto.price_change_percentage_24h < 0 ? "red.500" : "green.500"}>
                  $ {crypto.current_price.toLocaleString()}
                </Text>
              </Box>
              <Box mt={2}>
                <Text fontSize="sm" >
                  <strong>Total Volume :</strong> $ {crypto.total_volume.toLocaleString()}
                </Text>
                <Text fontSize="sm" mt={1}>
                  <strong>Total Market Cap :</strong> $ {crypto.market_cap.toLocaleString()}
                </Text>
              </Box>
            </Flex>
          </Link>
        ))}
      </Flex>}

    </>
  );
};

export default Crypto;