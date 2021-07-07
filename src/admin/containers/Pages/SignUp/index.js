import React, { useState } from "react";
import { Form, Button, Row, Col, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signup } from "../../../../store/actions";
import Layout from "../../../components/Layout/index";
import Input from "../../../components/UI/Input/index";

const SignUp = () => {
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);

  const initialState = "";
  const [firstName, setfirstName] = useState(initialState);
  const [lastName, setlastName] = useState(initialState);
  const [email, setEmail] = useState(initialState);
  const [password, setPassword] = useState(initialState);
  const [error, setError] = useState(initialState);
  const dispatch = useDispatch();

  const userSignup = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    dispatch(signup(user));
  };
  if (auth.authenticate) {
    return <Redirect to={"/"} />;
  }

  if (user.loading) {
    return (
      <div>
        <>
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
        </>
      </div>
    );
  }

  if (user.succes) {
    return <Redirect to={"/signin"} />;
  }

  return (
    <Layout>
      <Row style={{ marginTop: 50 }}>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={userSignup}>
            <Row>
              <Col md={6}>
                <Input
                  label="First Name"
                  type="text"
                  placeholder="Enter First Name"
                  value={firstName}
                  onChange={(e) => {
                    setfirstName(e.target.value);
                  }}
                />
              </Col>
              <Col md={6}>
                <Input
                  label="Last Name"
                  type="text"
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChange={(e) => {
                    setlastName(e.target.value);
                  }}
                />
              </Col>
            </Row>
            <Input
              label="Email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <Button variant="primary center-btn" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default SignUp;
