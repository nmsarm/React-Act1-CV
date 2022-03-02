import React from "react";

class OJT extends React.Component{
    render(){
        return(
            <div class="header-right pt-2">
                <h4>ON-THE-JOB TRAINING</h4>
                <hr className="hr-right" style={{height: 4}}></hr>
                <ul>
                    <li>
                        <b>Application Development and Support Intern</b> 
                        <br/>
                        <i>TELUS International Philippines, Inc.</i>
                        <br/>
                        <span>February 2022 - May 2022 - 500 hours - Ongoing</span>
                    </li>
                    <li className="pt-2">
                        <b>Software Developer Intern (Work Immersion)</b> 
                        <br/>
                        <i>Fireclay Corporation</i>
                        <br/>
                        <p>April 16 - 27, 2018 - 80 Hours</p>
                        <ul>
                            <li>Researched on White Box vs Black Box Testing</li>
                            <li>Tested the company’s Asset Management System using Black Box testing</li>
                            <li>Accomplished Test Cases</li>
                            <li>Used Jira for bug reports and project tracking</li>
                            <li>Explored Vaadin for Java Web Application Development</li>
                            <li>Learned and implemented Firebase Database/Cloud Storage through Android Studio</li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}
export default OJT;

