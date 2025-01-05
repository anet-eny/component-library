import React from "react"
import classNames from 'classnames'

export default function Badge({children, variant, color}) {
    const allClasses = classNames(color, variant, "badge")

    return (
        <div>
            <p className="badge-label">{`${color.charAt(0).toUpperCase() + color.slice(1)} - ${variant.charAt(0).toUpperCase() + variant.slice(1)}`}</p>
            <div className={allClasses}>
                {children}
            </div>
        </div>
    )
}