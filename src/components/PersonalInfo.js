import React from "react";

class PersonalInfo extends React.Component{
    render(){
        return(
            <div className="text-left pt-4">
                <h5>PERSONAL INFORMATION</h5>
                <hr style={{height: 4, width: "20%"}}></hr>
                <p>Full Name: Daneah Marelle M. Sarmiento</p>
                <p>Birthdate: November 7, 1999</p>
                <p>Gender: Female</p>
                <p>Religion: Born Again Christian</p>
            </div>
        )
    }
}
export default PersonalInfo;