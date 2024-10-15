import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchEnergyConsumption } from '../assets/api';

const EnergyConsumptionBarChart = () => {
    const [energyData, setEnergyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchEnergyConsumption();
                setEnergyData(response.data.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <p>Loading data...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className='barChart'>
            <h2>Energy Consumption Bar Chart in kwH</h2>
            <ResponsiveContainer className='bar' width="100%" height={325}>
                <BarChart
                    data={energyData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="consumptionMwh" fill="#8884d8" name="Consumption (MWh)" barSize={30} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default EnergyConsumptionBarChart;
