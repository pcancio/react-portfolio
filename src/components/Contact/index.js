import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import SocialFollow from "../SocialFollow";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, subject, message } = formState;

  const submit = (e) => {
    e.preventDefault();
    if (
      validateEmail(e.target.email.value) &&
      e.target.name.value &&
      e.target.subject.value &&
      e.target.message.value
    ) {
      console.log(
        e.target.name.value,
        e.target.email.value,
        e.target.subject.value,
        e.target.message.value
      );
      setFormState({ name: "", email: "", subject: "", message: "" });
      console.log("Form", formState);
      document.querySelector(".contact-form").reset();
    }
  };

  const handleCharge = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Please enter a valid email!");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage("Please enter your name!");
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <div id="contact-me" className="content my-5">
      <div className="container my-3 p-3 border border border-primary bg-light">
        <div className="d-flex row">
          <div className="align-items-baseline col-lg-12 text-primary">
            <h1 className="display-4 text-center text-lg-left">Contact Me</h1>
            <p>
              <SocialFollow />
            </p>
          </div>
        </div>
        <hr />
        <section className="mb-4">
          <p className="text-center text-md-left w-responsive mx-auto mb-5">
            Leave me a note!{" "}
          </p>
          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
                onSubmit={submit}
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        onChange={handleCharge}
                        defaultValue={name}
                      />
                      <label for="name" className="">
                        name
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                        onChange={handleCharge}
                        defaultValue={email}
                      />
                      <label for="email" className="">
                        email
                      </label>
                    </div>
                  </div>
                </div>
                <span className="text-danger">
                  {" "}
                  {errorMessage && (
                    <div>
                      <p className="error-text">{errorMessage}</p>
                    </div>
                  )}
                </span>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                        onChange={handleCharge}
                        defaultValue={subject}
                      />
                      <label for="subject" className="">
                        subject
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                        id="message"
                        name="message"
                        rows="2"
                        className="form-control md-textarea"
                        onChange={handleCharge}
                        defaultValue={message}
                      ></textarea>
                      <label for="message">message</label>
                    </div>
                  </div>
                </div>

                <button className="btn btn-primary" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
