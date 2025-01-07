import React from "react"
import classNames from 'classnames'
import { FaCheckCircle } from "react-icons/fa"
import { FaExclamationTriangle } from "react-icons/fa"
import { FaCircleXmark } from "react-icons/fa6"
import { FaInfoCircle } from "react-icons/fa"
import { TbFileNeutral } from "react-icons/tb"


export default function Banner(props) {
    const bannerType = props.text ? "multiline" : "singleline"
    const allClasses = classNames(props.status, bannerType, "banner")
    const icon = 
        props.status === "success" ? <FaCheckCircle /> : 
        props.status === "warning" ? <FaExclamationTriangle /> : 
        props.status === "error" ? <FaCircleXmark /> : 
        props.status === "neutral" ? <FaInfoCircle /> : 
        <TbFileNeutral />

    return (
        <div>
            <p>{`${props.status}-${bannerType}`}</p>
            <div className={allClasses}>
                {icon}
                <div className="banner-text">
                    <p><strong>{props.title}</strong></p>
                    <p>{props.text}</p>
                </div>   
            </div>
        </div>
        
    )
}