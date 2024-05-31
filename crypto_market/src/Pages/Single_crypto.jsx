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
        { isLoading?<SingleCryptoSkeleton/>:<Box bg="gray.50">
            <Box as="header" bg="blue.600" w={"100%"} margin={"auto"}>
                <Box p="10px" px={"50px"}>
                    <Flex as="nav" justify="space-between" align="center" color="white" >
                        <Link to="/">
                            <BsArrowLeftSquareFill size="2rem" />
                        </Link>
                        <Heading as="h2" size="md">
                            Crypto Details
                        </Heading>
                    </Flex>
                </Box>
            </Box>

            <Box as="section" py={8} w={"90%"} margin={"auto"}>
                <Flex justify={"space-between"} my={4} w={"100%"}>
                    <Flex direction="column" gap={4} align="center" w={"20%"} className="image-container">
                        <Image src={single_crypto?.image?.large} alt="company" borderRadius="md" boxSize="200px" />
                        <Box textAlign="center">
                            <Text fontWeight="bold" fontSize="xlg" mb={4}>
                                Website: <a href={single_crypto?.links?.homepage[0]} target="_blank" rel="noreferrer">{single_crypto?.links?.homepage[0]}</a>
                            </Text>
                            <Text fontWeight="bold">Symbol: {single_crypto?.symbol}</Text>
                        </Box>
                    </Flex>
                    <Flex direction="column" w={"75%"} className="company-details">
                        <Heading fontSize={"xx-large"} mb={4}>{single_crypto?.name}</Heading>
                        <Text mb={4} fontWeight={"bold"} fontSize={"md"}>{single_crypto?.description?.en}</Text>
                    </Flex>
                </Flex>
                <Box>
                    <Chart />
                </Box>
            </Box>
        </Box>}
    </Box>)
}

export default Single_crypto
