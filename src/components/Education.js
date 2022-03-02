import React from "react";
import UST from './images/ust.png';
import iACADEMY from './images/iac.png';

class Education extends React.Component{
    render(){
        return(
            <div class="header-right pt-2">
                <h4>EDUCATIONAL BACKGROUND</h4>
                <hr className="hr-right" style={{height: 4}}></hr>
                <div className="row pt-2">
                    <div className="col-4">
                        <img className="educ-img" width="50%" src={UST} alt="UST"/>
                        <br/><br/><br/><br/><br/><br/>
                        <img className="educ-img" width="40%" src={iACADEMY} alt="iACADEMY"/>
                    </div>
                    <div className="col-8">
                        <ul>
                                <b>University of Santo Tomas</b> 
                                <br/>
                                <i>Bachelor of Science in Information Technology
                                <br/> Major in Web and Mobile App Development </i>
                                <br/>
                                <p>2018 - 2022</p>
                                    <ul className="pb-4">
                                        Dean's Lister
                                        <ul>
                                            <li>4th Year - 1st Semester, A.Y 2021-2022</li>
                                            <li>3rd Year - 1st Semester, 2nd Semester, A.Y 2020 - 2021</li>
                                            <li>2nd Year - 1st Semester, 2nd Semester, A.Y 2019 - 2020</li>
                                            <li>1st year - 1st Semester, A.Y 2018 - 2019</li>
                                        </ul>
                                    </ul>
                                <b>iACADEMY</b> 
                                <br/>
                                <i>Software Development 
                                <br/> Grade 11 - Grade 12</i>
                                <br/>
                                <p>2016 - 2018</p>
                                    <ul>
                                        Award: With High Honors
                                    </ul>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Education;

