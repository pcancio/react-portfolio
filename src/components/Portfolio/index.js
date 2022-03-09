import React from "react";
import { Card } from "react-bootstrap";
import LetsEat from "../../assets/LetsEat.png";
// import budgettracker from "../../assets/budgettracker.png";
// import DayPlanner from "../../assets/DayPlanner.png";
// import PasswordGenerator from "../../assets/PasswordGenerator.png";
// import PetProject from "../../assets/PetProject.png";
// import TechBlog from "../../assets/TechBlog.png";

function Portfolio() {
  return (
    <div className="content my-5">
      <div className="container my-3 p-3 border border border-primary bg-light">
        <div className="d-flex row">
          <div className="align-items-baseline col-lg-12 text-primary">
            <h1 className="display-4 text-center text-lg-left">My Portfolio</h1>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-4 py-2">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={LetsEat} alt="Let's Eat" />
              <Card.Body>
                <Card.Title>Let's Eat</Card.Title>
                <Card.Text>
                  This is an app created in response to the overwhelming choices
                  people face each day that returns an instant restaurant
                  suggestion result based on the user location. Its goal is to
                  streamline the restaurant decision-making process by
                  generating only one restaurant at random.
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
      </div>
    </div>
  );
}
export default Portfolio;
