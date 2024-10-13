import React, { useEffect, useState } from 'react';
import { fetchEnergyConsumption } from '../assets/api';

const EnergyConsumption = () => {
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
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <p>Loading data...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Energy Consumption Data</h2>
            <ul>
                {energyData.map((item) => (
                    <li key={item._id}>
                        <h3>Consumption (MWh): {item.consumptionMwh}</h3>
                        <p>Renewable Percentage: {item.renewablePercentage}%</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EnergyConsumption;
