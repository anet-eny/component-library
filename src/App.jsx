import React from "react"
import Badge from "./components/Badge"
import Banner from "./components/Banner"
import Card from "./components/Card"
import Testimonial from "./components/Testimonial"
import { IoCloudUploadOutline } from "react-icons/io5"
import image from "./images/Image.png"

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
            <h2>Banners</h2>
            <div className="banners-container">
                <div className="banners-labels">
                    <h3></h3>
                    <h3>Success</h3>
                    <h3>Warning</h3>
                    <h3>Error</h3>
                    <h3>Neutral</h3>
                </div>
                <div className="banners">
                    <h3>Multi line</h3>
                    <Banner status="success" title="Congratulations!" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." />
                    <Banner status="warning" title="Attention" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum." />
                    <Banner status="error" title="There is a problem with your application" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum." />
                    <Banner status="neutral" title="Update available" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." /> 
                </div>
                <div className="banners single-line">
                    <h3>Single line</h3>
                    <Banner status="success" title="Congratulations!" text="" />
                    <Banner status="warning" title="Attention" text="" />
                    <Banner status="error" title="There is a problem with your application" text="" />
                    <Banner status="neutral" title="Update available" text="" /> 
                </div>
            </div>
            <h2>Cards</h2>
            <div className="cards-container">
                <Card icon={<IoCloudUploadOutline />} title="Easy Deployment" text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."/>
                <Card hover={true} icon={<IoCloudUploadOutline />} title="Easy Deployment" text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."/>
            </div>
            <h2>Testimonials</h2>
            <div className="testimonials-container">
                <Testimonial image={image} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit."} name={"May Andersons"} company={"Workcation, CTO"} />
                <Testimonial isMobile={true} image={image} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit."} name={"May Andersons"} company={"Workcation, CTO"} />
            </div>
        </div>
        
    )
}
