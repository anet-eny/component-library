import React from "react"
import classNames from 'classnames'

export default function Badge({children, variant, color}) {
    const allClasses = classNames(color, variant, "badge")

    return (
        <div className="badge-container">
            <p className="badge-label">{`${color.charAt(0).toUpperCase() + color.slice(1)} - Square`}</p>
            <div className={allClasses}>
                {children}
            </div>
        </div>
    )
}