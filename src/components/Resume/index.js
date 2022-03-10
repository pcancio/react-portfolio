import React from "react";
import pdf from "../../assets/Resume-Patricia-Cancio.pdf";

// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
const Resume = () => {
  return (
    <div id="my-resume" className="content my-5">
      <div className="container my-3 p-3 border border border-primary bg-light">
        <div className="d-flex row">
          <div className="align-items-baseline col-lg-12 text-primary">
            <h1 className="display-4 text-center text-lg-left">My Resume</h1>
          </div>
        </div>
        <hr />
        <div>
          <p>
            <strong>Education</strong>
          </p>
          <p>
            Columbia University &#8226; Certificate in Full Stack Coding
            Engineering
          </p>
          <p>
            Saint Louis University &#8226; Bachelor of Arts, Major in
            Communications
          </p>
          <p>
            <strong>Technical Skills</strong>
          </p>
          <ul>
            <li>HTML5, CSS, JavaScript, jQuery, Bootstrap, React.js</li>
            <li> MySQL, NoSQL, MongoDB</li>
            <li>MERN Stack, Progressive Web Applications</li>
            <li>Heroku, Git, Insomnia</li>
            <li>RESTful APIs, JSON, AJAX, GraphQL</li>
          </ul>
        </div>
        <a href={pdf} target="_blank">
          Download PDF for full resume
        </a>
      </div>
    </div>
  );
};
export default Resume;
