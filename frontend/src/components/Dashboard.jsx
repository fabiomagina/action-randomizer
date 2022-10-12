import React from "react";
import './Dashboard.css'
import Card from './templates/Card'

const Dashboard = props => {
    return (
    <div className="dashboard-row">
        <Card title="Actions" value="10 " color="#133677" />
        <Card title="Types" value="5" color="#133677" />
        <Card title="Created" value="300" color="#133677" />
    </div>
    )
}

export default Dashboard