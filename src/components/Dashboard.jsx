import { getCounter } from "../funcs/axios";
import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import './Dashboard.css'
import Card from './templates/Card'


const url = 'http://localhost:3000/counter/'

function Dashboard({ counter }) {

    return (
        <div className="dashboard-row">
            <Card title="Actions" value={counter.actions} color="#133677" />
            <Card title="Types" value={counter.types} color="#133677" />
            <Card title="Created" value={counter.created} color="#133677" />
        </div>
    )
}
export default Dashboard
