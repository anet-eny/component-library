import React from "react"
import classNames from 'classnames'
import { FaCheckCircle } from "react-icons/fa"

export default function Banner(props) {
    return (
        <div className="banner">
            <FaCheckCircle />
            <div className="banner-text">
                <p><strong>{props.title}</strong></p>
                <p>{props.text}</p>
            </div>   
        </div>
    )
}