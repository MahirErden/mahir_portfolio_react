import React from "react";
import Typed from 'react-typed';
import resume from "../../img/resume.pdf";

function About() {
  return (
    <>
    <div className="d-flex justify-content-center">
      <section className="about px-4 my-5">
        <div className="me py-5">
          <h5 className="text-uppercase font-os font-size-16 text-muted">information</h5>
          <h1 className="text-uppercase font-staat font-size-34">About Me</h1>
        </div>
        <div className="row m-0">
          <div className="col-sm-11">
            <h5 className="font-ram font-size-34 py-2">I'm Mahir Erden & <span><Typed strings={["Full Stack Developer", "Management Engineer"]} typeSpeed={60} backSpeed={40} loop/></span></h5>
            <p className="font-ram text-black-50 py-2">
                Hi, My name is Mahir Erden. I am a Management Engineer and Full Stack Web Developer, During my 25-year
              work experience, I conducted and participated in many projects. Now as a Full Stack Web Developer, I
              intend to share my coding skills and engineering experience with my new employer and co-workers.
            </p>
            <p className="font-ram text-black-50 py-2">
                I have graduated from University of Toronto Coding Bootcamp.
              During the course, I completed 21 mini projects and 3 main projects. Main projects were carried out as
              team work, consisting of 2 or 3 students.
              </p>
              <p className="font-ram text-black-50 py-2">
                I improved my skills in the following subjects during the 6-month course. Html, Css, Bootstrap,
              Javascript, Jquery, Node.js, Express, Sequelize, Passport, Mysql, MongoDB, React.
              </p>
            <div className="d-flex flex-row flex-wrap justify-content-start py-4">
              <div className="d-flex flex-column">
                <p className="font-ram"><b>Mail: </b><span className="text-black-50">mahirerden@gmail.com</span></p>
                <p className="font-ram"><b>Phone: </b><span className="text-black-50">+1 437-999-7635</span></p>
              </div>
              <div className="d-flex flex-column ml-4">
                <p className="font-ram"><b>Github : </b><a className="text-black-50"
                  href="https://github.com/MahirErden" target="_blank" rel="noopener noreferrer">https://github.com</a></p>
                <p className="font-ram"><b>Linkedin : </b><a className="text-black-50"
                  href="https://www.linkedin.com/in/mahirerden" target="_blank" rel="noopener noreferrer">www.linkedin.com</a></p>
              </div>
            </div>
            <a className="btn btn-dark text-uppercase mr-3" href={resume} download>View Resume<span> </span> <i
              className="fa fa-download" aria-hidden="true"></i></a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default About;
