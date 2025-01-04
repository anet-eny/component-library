import React from "react"
import classNames from 'classnames'

export default function Banner({children, status}) {
    return (
        <div className="banner">
            {children}
        </div>
    )
}