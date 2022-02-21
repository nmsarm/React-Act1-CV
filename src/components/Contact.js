import React from "react";

class Contact extends React.Component{
    render(){
        return(
            <div className="pt-4">
                <h5>CONTACT DETAILS</h5>
                <hr style={{height: 4, width: "20%"}}></hr>
                <p>
                    <i class="fa-solid fa-location-dot"/> 
                    &nbsp; 220, Purok 3, Barangay San Vicente, Mexico, Pampanga
                </p>
                <p>
                    <i class="fa-solid fa-phone"></i> 
                    &nbsp;+639772396679
                </p>
                <p>
                    <i class="fa-solid fa-envelope"></i>
                    &nbsp; daneahsarmiento@gmail.com
                </p>
            </div>
        )
    }
}
export default Contact;