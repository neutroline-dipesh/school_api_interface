import emailjs from "emailjs-com";
import React, { useState, useEffect } from "react";
import Contact from "../contactForm/contactForm";
import axios from "axios";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "gmail_template",
        e.target,
        "user_oM2QDYougMk5DoQ3dsLTo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  //for post in database
  const [post, setPost] = useState([
    {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  ]);
  const { name, email, subject, message } = post;

  const changeHandler = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  console.log(post);
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      // .header({ "Content-Type": "application/json" })
      .post("http://localhost:4000/contact/", post)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <Contact.Wrapper>
          <Contact.Column>
            <div class="row">
              <div class="col-12">
                <Contact.Header>
                  <Contact.Title>CONTACT US</Contact.Title>
                  <Contact.Link>
                    Nepal Academy premises has Guidance and Counseling services
                    under Nepal Academy Counselling Cell. We support
                    intellectual and healthy growth of our students.
                  </Contact.Link>
                </Contact.Header>
              </div>
            </div>
          </Contact.Column>
        </Contact.Wrapper>
      </div>
      <div></div>

      <div className="ApplyForm ">
        <div className="container border">
          <div className="bg-light ApplyForm-header m-5">
            <h2 className="text-dark  p-2 text-center">Contact Us</h2>
          </div>

          {/* <form onSubmit={sendEmail}> */}
          <form onSubmit={submitHandler}>
            <div className="row pt-3 mx-auto">
              <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={changeHandler}
                  required
                  // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  // pattern="(?=.*\s)(?=.*[a-z])(?=.*[A-Z]).{5,}"
                  minlength="5"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={changeHandler}
                  // pattern=".{13,}"
                  required
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  value={subject}
                  onChange={changeHandler}
                  // pattern="(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  required
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <textarea
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Your message"
                  name="message"
                  value={message}
                  onChange={changeHandler}
                  // pattern="(?=.*[a-z])(?=.*[A-Z]).{25,}"
                  minlength="25"
                  required
                ></textarea>
              </div>
              <div className="col-8 pt-3 mx-auto align-center">
                <input
                  type="submit"
                  className="btn btn-info"
                  value="Send Message"
                ></input>
              </div>
            </div>
            <br></br>
          </form>
        </div>
      </div>
      <div class="container">
        <br />
        <br />
        <div class="row">
          <div class="col-6">
            <h4 className="text-secondary font-weight-bold  text-left">
              Our Location
            </h4>
            <p className="text-secondary text-margin">Shitalnagar - 08,</p>
            <p className="text-secondary text-margin">
              Devdaha, Rupandehi, Nepal.
            </p>
            <h6 className="text-secondary text-margin">+977-071555555</h6>
          </div>
          <div class="col-6">
            <h3 className="text-secondary font-weight-bold  p-2 text-center">
              Find Us at Google Maps
            </h3>
            <iframe
              class="embed-responsive-item"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14136.726492820946!2d83.5714745790661!3d27.649851925050264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996826fb7c251fb%3A0x82a2ef09f7cb7e8d!2sShitalnagar%2C%20Devdaha%20Municipality%2032900!5e0!3m2!1sen!2snp!4v1605190504153!5m2!1sen!2snp"
              width="100%"
              height="350"
              frameborder="0"
              // aria-hidden="false"
              // tabindex="0"
              allowfullscreen="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
