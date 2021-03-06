import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, BarChart, Tooltip, Bar } from 'recharts';

const Dashboard = () => {

    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];

    return (
        <div className='grid grid-cols-2 gap-4 mt-24 mx-24'>
            <div className='mx-3'>
                <h1 className='text-2xl'>Line Chart:</h1>
                <LineChart width={700} height={400} data={data}>
                    <Line type="monotone" dataKey={'sell'} stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="month" />
                    <YAxis />
                </LineChart>
            </div>

            <div>
                <h1 className='text-2xl'>Bar Chart:</h1>
                <BarChart width={700} height={400} data={data}>
                    <XAxis dataKey="month" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="revenue" fill="#8884d8" barSize={30} />
                </BarChart>
            </div>
        </div>
    );
};

export default Dashboard;