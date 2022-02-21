import React from "react";

class Skills extends React.Component{
    render(){
        return(
            <div class="header-right pt-4">
                <h4>SKILLS & ABILITIES</h4>
                <hr className="hr-right" style={{height: 4}}></hr>
                <div className="row">
                    <div className="col-6">
                        <ul>
                            <li> 
                            <p><b>Programming Languages & Frameworks</b></p>
                                <ul>
                                    <li>HTML, CSS, JavaScript, Java, Visual Basic, PHP</li>
                                    <li>Bootstrap. ReactJS</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li> 
                            <p><b>Technologies & Other Skills</b></p>
                                <ul>
                                    <li>Android Studio, Firebase, Microsoft Office</li>
                                    <li>Manual Testing, Project Management, Document Management, Organization</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Skills;