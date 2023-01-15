import "./Card.css";
import React from "react";

const card = (props) => {

    const cardStyle = {
        backgroundColor: props.color || '#F00',
        color: props.fontColor || '#FFF',
        
    }
    
    return (
        <div className="card" style={cardStyle}>
            <div className="title">{props.title}</div>
            <div className="content">
                {props.value}
            </div>
        </div>
    );
};

export default card