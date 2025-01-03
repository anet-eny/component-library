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
                    <Badge variant="square" color="gray">Badge</Badge> 
                    <Badge variant="square" color="red">Badge</Badge> 
                    <Badge variant="square" color="yellow">Badge</Badge>  
                    <Badge variant="square" color="green">Badge</Badge> 
                    <Badge variant="square" color="blue">Badge</Badge> 
                    <Badge variant="square" color="indigo">Badge</Badge>  
                    <Badge variant="square" color="purple">Badge</Badge>  
                    <Badge variant="square" color="pink">Badge</Badge> 
                </div>
                <div className="badges">
                    <h3>Pill</h3>
                    <Badge variant="pill" color="gray">Badge</Badge> 
                    <Badge variant="pill" color="red">Badge</Badge> 
                    <Badge variant="pill" color="yellow">Badge</Badge>  
                    <Badge variant="pill" color="green">Badge</Badge> 
                    <Badge variant="pill" color="blue">Badge</Badge> 
                    <Badge variant="pill" color="indigo">Badge</Badge>  
                    <Badge variant="pill" color="purple">Badge</Badge>  
                    <Badge variant="pill" color="pink">Badge</Badge>
                </div>
            </div>
        </div>
        
    )
}
