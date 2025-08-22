import myphoto from "../../assets/IMG_0484.jpg"
import "./AboutMe.css"
 function AboutMe(){
    return(
        <>
          <div className="hero1">
            <div className="myimg">
       <img src={myphoto} alt="myphoto" />
            </div>
            <div className="about">
                <div className="head">
                    <h1>Software Engineer</h1>
                </div>
                <div className="about-me">
                    <p>Full-stack Engineer,dedicated about building systems that solve real problems,systems design.
                        Developed web applications, as well as integrating multiple third-party APIs.
                    </p>
                </div>
                <div className="resumes">
                 <div className="resume">
                <p>My Resume</p>
            </div>
            </div>
            </div>
          </div>
        </>
    )
 }

 export default AboutMe;