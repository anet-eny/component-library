import React from "react"

export default function Card(props) {
    const hoverClass = props.hover? "hover" : ""

    return (
        <div>
            <p>{`Card ${hoverClass}`}</p>
            <div className="card">
                <div className="card-icon">
                    {props.icon}
                </div>
                <div className={`card-content ${hoverClass}`}>
                    <h4>{props.title}</h4>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}