import React from "react";
import Img from './images/profilepic.jpg';

class About extends React.Component{
    render(){
        return(
            <div className="header-left text-center">
                <img className="profile-img img-thumbnail img-fluid rounded-circle mb-4" src={Img} alt="Profile Pic"/>
                <h3> DANEAH SARMIENTO</h3>
                <span className="text-light"> Developer </span>
            </div>
        )
    }
}
export default About;