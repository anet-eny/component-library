import React from "react"
import { RiDoubleQuotesL } from "react-icons/ri";

export default function Testimonial(props) {
    return (
        <div className="testimonial">
            <img src={props.image} alt="testimonial-image" />
            <div className="testimonial-content">
                <div className="testimonial-icon">
                    <RiDoubleQuotesL />
                </div>
                <p className="text">{props.text}</p>
                <strong><p className="name">{props.name}</p></strong>
                <p className="company">{props.company}</p>
            </div>
        </div>
    )
}