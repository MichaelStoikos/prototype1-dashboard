import React from 'react';

const InfoCards = () => {
    return (
        <div className="dashboard-cards">
            
            <div className="card budget-card">
                <h4 className="card-heading">Total Budget</h4>
                <h2 className="card-amount">€800,000</h2>
                <p className="card-change positive">↑ +12% from last year</p>
            </div>
            <div className="card energy-card">
                <h4 className="card-heading">Energy Consumption</h4>
                <h2 className="card-amount">60,000 MWh</h2>
                <p className="card-change negative">↓ -5% from last month</p>
            </div>
        </div>
    );
};

export default InfoCards;
