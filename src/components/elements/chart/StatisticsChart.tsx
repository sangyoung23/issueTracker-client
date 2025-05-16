import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'

const data = [{ 진행중: 5, 완료: 8, 대기: 3 }]

const StatisticsChart = () => (
    <ResponsiveContainer width="100%" height={250}>
        <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 30, bottom: 5 }}
            barGap={50}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
                dataKey="name"
                interval={0}
                tickLine={false}
                axisLine={false}
            />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="진행중" fill="#8884d8" barSize={30} />
            <Bar dataKey="완료" fill="#82ca9d" barSize={30} />
            <Bar dataKey="대기" fill="#ffc658" barSize={30} />
        </BarChart>
    </ResponsiveContainer>
)

export default StatisticsChart
