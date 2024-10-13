import React, { useEffect, useState } from 'react';
import { fetchServiceRequests } from '../assets/api';

const ServiceRequests = () => {
    const [requestsData, setRequestsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchServiceRequests();
                setRequestsData(response.data.data);
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
            <h2>Service Requests Data</h2>
            <ul>
                {requestsData.map((item) => (
                    <li key={item._id}>
                        <h3>Status {item.status}</h3>
                        <h3>Location {item.location}</h3>
                        <h3>Date {item.requestDate}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceRequests;
