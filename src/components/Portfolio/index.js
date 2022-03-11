import React from "react";
import { Card } from "react-bootstrap";
import LetsEat from "../../assets/LetsEat.png";
import PetProject from "../../assets/PetProject.png";
import budgettracker from "../../assets/budgettracker.png";
import DayPlanner from "../../assets/DayPlanner.png";
import PasswordGenerator from "../../assets/PasswordGenerator.png";
import TechBlog from "../../assets/TechBlog.png";

function Portfolio() {
  return (
    <div id="my-portfolio" className="content my-5">
      <div className="container my-3 p-3 border border border-primary bg-light">
        <div className="d-flex row justify-items-center">
          <div className="align-items-baseline col-lg-12 text-primary">
            <h1 className="display-4 text-center text-lg-left">My Portfolio</h1>
          </div>
        </div>
        <hr />
        <div className="container d-flex row justify-items-center">
          <div className="row justify-content-center portfolio">
            <div className="col-12 col-md-6 col-lg-4 m-2">
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={LetsEat} alt="Let's Eat" />
                <Card.Body>
                  <Card.Title>Let's Eat</Card.Title>
                  <Card.Text>
                    This is an app created in response to the overwhelming
                    choices people face each day that returns an instant
                    restaurant suggestion result based on the user location. Its
                    goal is to streamline the restaurant decision-making process
                    by generating only one restaurant at random.
                  </Card.Text>
                  <Card.Link
                    href="https://a-breezy.github.io/LetsEat/"
                    target="_blank"
                  >
                    Deployed App
                  </Card.Link>
                  <Card.Link
                    href="https://github.com/a-breezy/LetsEat"
                    target="_blank"
                  >
                    Github
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="row justify-content-center portfolio">
            <div className="col-12 col-md-6 col-lg-4 m-2">
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={PetProject} alt="Pet Project" />
                <Card.Body>
                  <Card.Title>Pet Project</Card.Title>
                  <Card.Text>
                    Pet Project is an online community for pet owners to post
                    about their pets, allergies, diets and more. Users can
                    comment on other posts and will receive notifications when
                    other users comment on their posts.
                  </Card.Text>
                  <Card.Link
                    href="https://github.com/mkohn4/pet-project"
                    target="_blank"
                  >
                    Deployed App
                  </Card.Link>
                  <Card.Link
                    href="https://warm-springs-61498.herokuapp.com/"
                    target="_blank"
                  >
                    Github
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="row justify-content-center portfolio">
            <div className="col-12 col-md-6 col-lg-4 m-2">
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={budgettracker}
                  alt="Budget Tracker"
                />
                <Card.Body>
                  <Card.Title>Budget Tracker</Card.Title>
                  <Card.Text>
                    This is a PWA made with MongoDB that allows users to be able
                    to log and track their withdrawals and deposits and keep
                    their balance accurate with or without a data or internet
                    connection.
                  </Card.Text>
                  <Card.Link
                    href="https://secure-sea-09970.herokuapp.com/"
                    target="_blank"
                  >
                    Deployed App
                  </Card.Link>
                  <Card.Link
                    href="https://github.com/pcancio/PWA-Budget-Tracker"
                    target="_blank"
                  >
                    Github
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="row justify-content-center portfolio">
            <div className="col-12 col-md-6 col-lg-4 m-2">
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={DayPlanner}
                  alt="Work Day Scheduler"
                />
                <Card.Body>
                  <Card.Title>Work Day Scheduler</Card.Title>
                  <Card.Text>
                    This is a simple daily calendar app that allows users to
                    schedule their day. Each time block is color-coded to
                    indicate whether the event or meeting is in the past,
                    present, or future. The data is saved in local storage and
                    persists even after reloading the page.
                  </Card.Text>
                  <Card.Link
                    href="https://pcancio.github.io/daily-planner/"
                    target="_blank"
                  >
                    Deployed App
                  </Card.Link>
                  <Card.Link
                    href="https://github.com/pcancio/daily-planner"
                    target="_blank"
                  >
                    Github
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="row justify-content-center portfolio">
            <div className="col-12 col-md-6 col-lg-4 m-2">
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={PasswordGenerator}
                  alt="Password Generator"
                />
                <Card.Body>
                  <Card.Title>Password Generator</Card.Title>
                  <Card.Text>
                    This is an app that generates a random password. The app
                    runs in the browser and features dynamically updated HTML
                    and CSS powered by JavaScript code. It has a clean and
                    polished user interface and is responsive, which ensures
                    that it adapts to multiple screen sizes.
                  </Card.Text>
                  <Card.Link
                    href="https://pcancio.github.io/Password-Generator/"
                    target="_blank"
                  >
                    Deployed App
                  </Card.Link>
                  <Card.Link
                    href="https://github.com/pcancio/Password-Generator"
                    target="_blank"
                  >
                    Github
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="row justify-content-center portfolio">
            <div className="col-12 col-md-6 col-lg-4 m-2">
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={TechBlog} alt="Tech Blog" />
                <Card.Body>
                  <Card.Title>Tech Blog</Card.Title>
                  <Card.Text>
                    This is an app for techies. Login and authetication is
                    required to join the blog. Once signed up and logged in,
                    users can post, comment, and interace with other techies!
                  </Card.Text>
                  <Card.Link
                    href="https://nameless-headland-84483.herokuapp.com/"
                    target="_blank"
                  >
                    Deployed App
                  </Card.Link>
                  <Card.Link
                    href="https://github.com/pcancio/my-awesome-techie-blog"
                    target="_blank"
                  >
                    Github
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
