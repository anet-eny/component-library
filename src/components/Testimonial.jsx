import React from "react"
import { RiDoubleQuotesL } from "react-icons/ri";

export default function Testimonial({isMobile, image, text, name, company}) {
    return (
        <div className={`${isMobile ? "testimonial-mobile" : "testimonial-desktop"}`}>
            <div className="testimonial-image-container">
                <img className="testimonial-image" src={image} alt="testimonial-image" />
            </div>
            <div className="testimonial-content">
                <div className="testimonial-icon">
                    <RiDoubleQuotesL />
                </div>
                <p className="text">{text}</p>
                <strong><p className="name">{name}</p></strong>
                <p className="company">{company}</p>
            </div>
        </div>
    )
}