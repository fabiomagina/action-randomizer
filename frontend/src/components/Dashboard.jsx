import axios from "axios";
import React, { Component } from "react";
import './Dashboard.css'
import Card from './templates/Card'

const initialState = {actions: 0, types: 0, created: 0}
const url = 'http://localhost:3000/counter/'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = { ...initialState }
  
   
    }

    componentDidMount() {
        this.getCounter()
    }

    getCounter() {
        axios.get(url)
            .then(res => res.data)
            .then(counter => this.setState({...counter}))
    }

    render() {
        return (
            <div className="dashboard-row">
                <Card title="Actions" value={this.state.actions} color="#133677" />
                <Card title="Types" value={this.state.types} color="#133677" />
                <Card title="Created" value={this.state.created} color="#133677" />
            </div>
        )
    }
}

export default Dashboard