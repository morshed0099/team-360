import React from 'react';
import { Tooltip } from 'react-daisyui';
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const DasborardCart = () => {
    const data = [
        {
            name: 'Nov 1',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Nov 2',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Nov 3',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Nov 4',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Nov 5',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Nov 6',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Nov 7',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (    
            <AreaChart width={350} height={250} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>

                </defs>
                <XAxis dataKey="name" />


                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />

            </AreaChart>
     
    );
};

export default DasborardCart;