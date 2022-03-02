import React from "react";

class Projects extends React.Component{
    render(){
        return(
            <div class="header-right pt-2">
                <h4>ACADEMIC PROJECTS</h4>
                <hr className="hr-right" style={{height: 4}}></hr>
                <table width="100%">
                    <tr>
                        <th width="50%">Project Title</th>
                        <th>Details</th>
                    </tr>
                    <tr>
                        <td>A Web Catalog with Inquiry Management Application for Sleepy PH</td>
                        <td>UST Information Technology Department
                            <br/>A.Y. 2021-2022
                            <br/>Front-End Developer
                        </td>
                    </tr>  
                    <tr>
                        <td>El Tomasino: A Web Application Dedicated in Promoting UST Athletes</td>
                        <td>UST Information Technology Department
                            <br/>A.Y. 2021-2022 - Capstone Project
                            <br/>Project Manager
                        </td>
                    </tr>  
                    <tr>
                        <td>
                            POS with Inventory Management for CHO Korean Mart: An offline standalone PC POS and Inventory
                            Management Application
                        </td>
                        <td>UST Information Technology Department
                            <br/>A.Y. 2020-2021
                            <br/>Project Manager
                        </td>
                    </tr>                  
                </table>
            </div>
        )
    }
}
export default Projects;



