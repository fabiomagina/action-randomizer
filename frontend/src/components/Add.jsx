import React, { Component } from "react";
import "./Add.css"
import {axios_post_action} from "../funcs/axios";


const initialState = {
    number: 0,
    action: ''
}

class Add extends Component {

    constructor(props) {
        super(props)

        this.state = { ...initialState }
    }

    updateNumber(e) {
        const number = +e.target.value
        this.setState({ number })
    }
    updateAction(e) {
        const action = e.target.value
        this.setState({ action })
    }

    render() {

        return (
                <div className="add">
                    
                        <div className="row">
                            <label>Action Number:</label>
                            <input className="n-input" name="number" type="number" value={this.state.number} 
                                onChange={e => this.updateNumber(e)}/>
                        </div>
                        <div className="row ">
                            <label>Script: </label>
                            <input className="array" id="n-input" name="action" type="text" value={this.state.action}
                                onChange={e => this.updateAction(e)} />
                        </div>
                        <button className="run-btn" onClick={() => axios_post_action(this.state.number, this.state.action)}>Add</button>
                    
                </div>

        )
    }
}

export default Add