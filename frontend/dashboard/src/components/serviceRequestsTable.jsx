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
        <div className="service-requests-container">
            <h2>Service Requests and their Status</h2>
            <table className="service-requests-table">
                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Date</th>
                        <th>ID</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {requestsData.map((item) => (
                        <tr key={item._id}>
                            <td>{item.serviceId}</td>
                            <td>{new Date(item.requestDate).toLocaleDateString()}</td>
                            <td>{item.location}</td>
                            <td>
                                <span
                                    className={
                                        item.status === 'Completed'
                                            ? 'status-completed'
                                            : 'status-pending'
                                    }
                                >
                                    {item.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ServiceRequests;
