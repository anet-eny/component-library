import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-icon">
                {props.icon}
            </div>
            <div className="card-content">
                <h4>{props.title}</h4>
                <p>{props.text}</p>
             </div>
        </div>
    )
}