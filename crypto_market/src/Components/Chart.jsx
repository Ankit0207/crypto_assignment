import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Chart() {
    const [cryptoPrices, setCryptoPrices] = useState([]);
    const [date, setDate] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=INR&days=10&interval=daily`).then((res) => {
            console.log(res)
            setCryptoPrices(res?.data?.prices?.map(item => item[1]));
            setDate(res?.data?.prices?.map(item => new Date(item[0]).toLocaleDateString()));
        }).catch((err) => {
            console.error(err);
        })

    }, []);

    const data = {
        labels: date,
        datasets: [{
            label: 'Price (INR)',
            data: cryptoPrices,
            fill: false,
            borderColor: 'green',
            // tension: 0.1
        }]
    };

    return (
        <div style={{ width: '90%', margin: 'auto' }}>
            <Line data={data}
                legendtoggle="true" />
        </div>
    )
}