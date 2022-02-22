import React from "react";

class Seminars extends React.Component{
    render(){
        return(
            <div class="header-right pt-4">
                <h4>EVENTS & SEMINARS ATTENDED</h4>
                <hr className="hr-right" style={{height: 4}}></hr>
                <ul>
                    <li>
                        <b>2022 Solution Challenge: Info Session and Solution Design Day</b> 
                        <br/>
                        <i>Google Developer Student Clubs - PUP Sto. Tomas Branch</i>
                        <br/>
                        <span>February 1 and 4, 2022</span>
                    </li>
                    <li className="pt-2">
                        <b>JavaScript Workshop</b> 
                        <br/>
                        <i>Computer Science Society - University of Santo Tomas</i>
                        <br/>
                        <span>April 14, 2021</span>
                    </li>
                    <li className="pt-2">
                        <b>DLSU Technology Summit 2020</b> 
                        <br/>
                        <i>La Salle Computer Society - De La Salle University - Manila</i>
                        <br/>
                        <span>November 7, 28, and December 5, 2020</span>
                    </li>
                    <li className="pt-2">
                        <b>DICT-YouthHack Manila Startup Challenge 2018: High School Edition</b> 
                        <br/>
                        <i>YouthHack Manila</i>
                        <br/>
                        <span>January 27 and 28, 2018</span>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Seminars;