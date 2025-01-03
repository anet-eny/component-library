import React from "react"
import Badge from "./components/Badge"

export default function App() {
    return (
        <div>
            <h1>Component Library</h1>
            <h2>Badges</h2>
            <div className="badges-container">
                <div className="badges">
                    <h3>Square</h3>
                    <Badge></Badge>
                    <Badge></Badge>
                    <Badge></Badge>
                    <Badge></Badge>
                    <Badge></Badge>
                    <Badge></Badge>
                    <Badge></Badge>
                    <Badge></Badge>
                </div>
                <div className="badges">
                    <h3>Pill</h3>
                    <Badge></Badge>
                    <Badge></Badge>
                    <Badge></Badge>
                    <Badge></Badge>
                    <Badge></Badge>
                    <Badge></Badge>
                    <Badge></Badge>
                    <Badge></Badge>
                </div>
            </div>
        </div>
        
    )
}
