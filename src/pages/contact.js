import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Alert, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createContact } from "../store/actions";
import Input from "../admin/components/UI/Input/index";
import Layout from "../components/Layout";

const Contact = () => {
  const initialState = "";

  const [fullName, setfullName] = useState(initialState);
  const [message, setMessage] = useState(initialState);
  const [email, setEmail] = useState(initialState);
  const [businessLink, setBusinessLink] = useState(initialState);
  const [businessName, setBusinessName] = useState(initialState);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

  const feedBack = useSelector((state) => state.contact.message);

  let errorMessage = [];
  if (error && typeof error === "object") {
    errorMessage = Object.keys(error).map((key) => {
      return error[key].message.substring(5);
    });
  } else {
    errorMessage = [error];
  }

  useEffect(() => {
    setError(feedBack);
  }, [feedBack]);

  const dispatch = useDispatch();

  const contactSignup = (e) => {
    e.preventDefault();
    const contact = {
      fullName,
      email,
      message,
      businessName,
      businessLink,
    };
    setShow(true);

    dispatch(createContact(contact));
    setTimeout(() => {
      setShow(false);
    }, 4000);
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Layout>
        <Row
          style={{
            marginTop: 50,
            flex: 1,
            flexGrow: 1,
            flexFlow: "column",
            flexBasis: "auto",
          }}
        >
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={contactSignup}>
              <Input
                label="Full Name"
                type="text"
                placeholder="Enter Full Name"
                value={fullName}
                onChange={(e) => {
                  setfullName(e.target.value);
                }}
              />
              <Input
                label="Email/Phone"
                type="text"
                placeholder="Enter Email/Phone"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <Row>
                <Col md={6}>
                  <Input
                    label="Business Name"
                    type="text"
                    placeholder="Enter Business Name"
                    value={businessName}
                    onChange={(e) => {
                      setBusinessName(e.target.value);
                    }}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Business Link"
                    type="text"
                    placeholder="Enter Business Link"
                    value={businessLink}
                    onChange={(e) => {
                      setBusinessLink(e.target.value);
                    }}
                  />
                </Col>
              </Row>

              <Input
                label="Message"
                as="textarea"
                rows={6}
                placeholder="Enter Message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              {show &&
                error &&
                errorMessage.map((message) => (
                  <div className="form-group">
                    <Alert variant="info">{message}</Alert>
                  </div>
                ))}
              <Button
                className="mb-5"
                variant="primary center-btn"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default Contact;
