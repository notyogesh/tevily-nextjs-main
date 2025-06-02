import contactPage from "@/data/contactPage";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const { tagline, title, socials } = contactPage;

const inputs = ["name", "email", "phone", "message"];

const ContactPage = () => {
  const [snackbar, setSnackbar] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formUrl =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfEgpHgNqVscJ2JjjuBS2qDGZDiHeTda2PYxl9ThPAP59RCmA/formResponse";

    const formData = new FormData(e.target);
    const data = {};
    inputs.forEach((input) => (data[input] = formData.get(input)));
    console.log("Collected form data:", data);

    // Map your form fields to Google Form entry IDs
    const formDataEncoded = new URLSearchParams();
    formDataEncoded.append("entry.739053371", data.name); // Name
    formDataEncoded.append("entry.1403158423", data.email); // Email
    formDataEncoded.append("entry.1052380778", data.phone); // Phone

    formDataEncoded.append("entry.53985524", data.message); // Message

    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataEncoded.toString(),
      });
      setSnackbar(true);

      e.target.reset();
      setTimeout(() => setSnackbar(false), 3000); // Hide after 3s
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <section className="contact-page">
      {" "}
      {snackbar && (
        <div
          style={{
            position: "fixed",
            bottom: 30,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#4caf50",
            color: "#fff",
            padding: "16px 32px",
            borderRadius: 8,
            zIndex: 9999,
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          Form submitted successfully! We will contact you soon.
        </div>
      )}
      <Container>
        <Row>
          <Col xl={4} lg={5}>
            <div className="contact-page__left">
              <div className="section-title text-left">
                <span className="section-title__tagline">{tagline}</span>
                <h2 className="section-title__title">{title}</h2>
              </div>
              <div className="contact-page__social">
                {socials.map(({ id, icon, href }) => (
                  <a href={href} key={id}>
                    <i className={icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </Col>
          <Col xl={8} lg={7}>
            <div className="contact-page__right">
              <div className="comment-form">
                <form
                  onSubmit={handleSubmit}
                  className="comment-one__form contact-form-validated"
                >
                  <Row>
                    <Col xl={6}>
                      <div className="comment-form__input-box">
                        <input
                          type="text"
                          placeholder="Your name"
                          name="name"
                          required
                        />
                      </div>
                    </Col>{" "}
                    <Col xl={6}>
                      <div className="comment-form__input-box">
                        <input
                          type="tel"
                          placeholder="Phone number"
                          name="phone"
                          required
                        />
                      </div>
                    </Col>
                    <Col xl={12}>
                      <div className="comment-form__input-box">
                        <input
                          type="email"
                          placeholder="Email address"
                          name="email"
                          required
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={12}>
                      <div className="comment-form__input-box">
                        <textarea
                          name="message"
                          placeholder="Write Comment"
                          required
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="thm-btn comment-form__btn"
                      >
                        Send a message
                      </button>
                    </Col>
                  </Row>
                </form>
                <div className="result"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactPage;
