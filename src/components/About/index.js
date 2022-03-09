import React from "react";
import headshot from "../../assets/headshot.png";

function About() {
  return (
    <div className="content my-5">
      <div className="container my-3 p-3 border border border-primary bg-light">
        <div className="d-flex row">
          <div className="align-items-baseline col-lg-12 text-primary">
            <h1 className="display-4 text-center text-lg-left">About Me</h1>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-3">
            <div className="text-center">
              <figure className="figure">
                <img
                  src={headshot}
                  className="img-fluid img-thumbnail figure-img rounded"
                  alt="Patricia Cancio Profile Photo"
                />
                <figcaption className="figure-caption">
                  Patricia Cancio
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="col-lg-9 text-secondary">
            <p className="lead">Hello World!</p>
            <p className="lead">
              I am a recent graduate from Columbia University's Coding
              Engineering Bootcamp. I enjoy puzzles, problem-solving,
              organization, and learning. I can't wait to start my career as a
              full stack developer!
            </p>
            <p className="lead">
              I have a Bachelor's Degree from Saint Louis University, where I
              majored in Communications and minored in Theatre, and graduated
              with Honors and Magna Cum Laude. I am also a professional actor
              and luxury travel advisor, occupations that have enriched my
              understanding of the world and appreciation for all its people.
            </p>
            <p className="lead">I live in Harlem, New York.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
