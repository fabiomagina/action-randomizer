import React, { Component } from "react";
import "./Generate.css"


const initialState = {
    loops: null
}

class Generate extends Component {

    constructor(props) {
        super(props)

        this.state = { ...initialState }
    }

    updateLoopsNumber(e) {
        const loops = +e.target.value
        this.setState({ loops })
    }


    render() {

        return (
                <div className="generate">
                    
                        <div className="row">
                            <label>Loops: </label>
                            <input className="n-input" name="number" type="number" value={this.state.number} 
                                onChange={e => this.updateLoopsNumber(e)}/>
                        </div>
                        <button className="run-btn" onClick={() => console.log(this.state.number)}>Run Generator</button>
                    
                </div>
          
        )
    }
}

export default Generate