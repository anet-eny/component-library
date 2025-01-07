import React from "react"
import { RiDoubleQuotesL } from "react-icons/ri";

export default function Testimonial({isMobile, image, text, name, company}) {
    const versionClass = isMobile ? "mobile" : "desktop"

    return (
        <div>
            <p className={`${versionClass}-label`}>{`${versionClass.charAt(0).toUpperCase() + versionClass.slice(1)} version`}</p>
            <div className={`testimonial-${versionClass}`}>
                <img className="testimonial-image" src={image} alt="testimonial-image" />
                <div className="testimonial-content">
                    <div className="testimonial-icon">
                        <RiDoubleQuotesL />
                    </div>
                    <p className="text">{text}</p>
                    <strong><p className="name">{name}</p></strong>
                    <p className="company">{company}</p>
                </div>
            </div>
        </div>
    )
}