import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.college}>
          <h3>{education.college}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
            <p>CGPA: {education.grades} </p>
          </p>
          <p className="description">{education.description}</p>
        </div>
      );
    });
    var certificates = data.certificates.map(function (certificates) {
      return (
        <div key={certificates.issuedBy}>
          <h3>{certificates.issuedBy}</h3>
          <p className="info">
            {certificates.courseName}
            <span>&bull;</span>
            <em className="date">{certificates.duration}</em>
            <p>Grade Achieved: {certificates.grades} </p>
            <div className="link_style">
              <a
                // style="background: linear-gradient(to right, #bcbcbc 25%,#ffcd02 25%, #ffcd02 50%, #e84f47 50%, #e84f47 75%, #65c1ac 75%);"
                href={certificates.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Verified certificate link
              </a>
            </div>
            <br />
          </p>
        </div>
      );
    });
    var skills = data.skills.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row certificates">
        <div className="three columns header-col">
          <h1>
            <span>Certificates</span>
          </h1>
        </div>
        <div className="nine columns main-col">{certificates}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div>
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
