import React, { useEffect, useState } from 'react';
import { fetchDepartments } from '../assets/api';

const Departments = () => {
    const [departmentsData, setDepartmentsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchDepartments();
                setDepartmentsData(response.data.data);
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
            <h2>Departments Data</h2>
            <ul>
                {departmentsData.map((item) => (
                    <li key={item._id}>
                        <h3>{item.name}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Departments;
