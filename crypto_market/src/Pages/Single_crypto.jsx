import React, { useEffect } from 'react'
import {
    Box,
    Container,
    Flex,
    Heading,
    Image,
    Text,
} from '@chakra-ui/react';
import { BsArrowLeftSquareFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleCrypto } from '../Redux/CryptoReducer/Action';
import { Link, useParams } from 'react-router-dom';
import Chart from '../Components/Chart';
import SingleCryptoSkeleton from "../Components/SingleCryptoSkeleton";


const Single_crypto = () => {
    const single_crypto = useSelector((state) => state.cryptoReducer.single_crypto);
    const isLoading = useSelector((state) => state.cryptoReducer.isLoading);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getSingleCrypto(id));
    }, []);

    return (<Box>
        {isLoading ? (
            <SingleCryptoSkeleton />
        ) : (
            <Box bg="gray.50">
                <Box as="header" bg="blue.600" w="100%" mx="auto" >
                    <Box p="10px" px="50px">
                        <Flex as="nav" justify="space-between" align="center" color="white">
                            <Link to="/">
                                <BsArrowLeftSquareFill size="2rem" />
                            </Link>
                            <Heading as="h2" size="md">
                                Crypto Details
                            </Heading>
                        </Flex>
                    </Box>
                </Box>

                <Box as="section" py={8} w={{ base: "90%", md: "80%", lg: "90%" }} mx="auto">
                    <Flex direction={{ base: "column", md: "row" }} justify="space-between" my={4}>
                        <Flex direction="column" gap={4} align="center" w={{ base: "100%", md: "30%" }} className="image-container" >
                            <Image src={single_crypto?.image?.large} alt="company" borderRadius="md" boxSize={{ base: "150px", md: "200px" }} />
                            <Box textAlign="center">
                                <Flex mb={2} wrap={"wrap"}>
                                    <Text fontWeight="bold" mr={2}>
                                        Website:
                                    </Text>
                                    <Text><a href={single_crypto?.links?.homepage[0]} target="_blank" rel="noreferrer">{single_crypto?.links?.homepage[0]}</a></Text>
                                </Flex>
                                <Flex wrap={"wrap"}>
                                    <Text fontWeight="bold" mr={2}>Symbol:</Text>
                                    <Text>{single_crypto?.symbol}</Text>
                                </Flex>
                            </Box>
                        </Flex>
                        <Flex direction="column" w={{ base: "100%", md: "65%" }} className="company-details">
                            <Heading fontSize={{ base: "2xl", md: "3xl" }} mb={4}>{single_crypto?.name}</Heading>
                            <Text mb={4} fontSize={"md"}>{single_crypto?.description?.en}</Text>
                        </Flex>
                    </Flex>
                    <Box>
                        <Chart />
                    </Box>
                </Box>
            </Box>
        )}
    </Box>
    )
}

export default Single_crypto
