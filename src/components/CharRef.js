import React from "react";

class CharRef extends React.Component{
    render(){
        return(
            <div class="header-right pt-2">
                <h4>CHARACTER REFERENCES</h4>
                <hr className="hr-right" style={{height: 4}}></hr>
                <ul>
                    <li>
                        <b>Mr. Dickenson Culala</b> 
                        <br/>
                        <i>OJT Supervisor at TELUS International Philippines, Inc.</i>
                        <br/>
                        <span>dickenson.culala@telusinternational.com</span>
                    </li>
                    <li className="pt-2">
                        <b>Asst. Prof. Rochelle Lynn L. Lopez</b> 
                        <br/>
                        <i>Department Chair, Information Technology Department</i>
                        <br/>
                        <i>College of Information and Computing Sciences - University of Santo Tomas</i>
                        <br/>
                        <span>rllopez@ust.edu.ph</span>
                    </li>
                </ul>
            </div>
        )
    }
}
export default CharRef;