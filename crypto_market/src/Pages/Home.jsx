import React, { useEffect } from 'react'
import Crypto from '../Components/Crytpo'
import { Box } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { getCrypto } from '../Redux/CryptoReducer/Action';
import Header from '../Components/Header';

const Home = () => {
    const cryptos = useSelector((state) => state.cryptoReducer.cryptos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCrypto());
    }, []);

    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                < Box bg="gray.50" >
                    <Crypto cryptos={cryptos} />
                </Box>

            </main>
        </div>
    )
}

export default Home
