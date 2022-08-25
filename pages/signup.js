import React, { useState } from 'react';
import Head from "next/head";
import Link from "next/link";
import returnProps from "../_services/props";
import Layout from "../components/layout/Layout";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { createUser } from "../_services/gplQuery/user.service";

function Page(props) {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date_of_birth, setDate_of_birth] = useState("");
  const [gender, setGender] = useState(undefined);
  const [is_subscribed, setIs_subscribed] = useState(null);
  const [showRequired, setShowRequired] = useState(false);

console.log(showRequired);
  function createUserAction() {
    if(email && password && firstName) {
      setShowRequired(false);
      createUser(email, firstName, lastName, password,  middleName, date_of_birth, null, null, gender, false, is_subscribed);
    } else {
      setShowRequired(true);
    }
  }

  return (
    <Layout {...props}>
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <Form.Label>First Name</Form.Label>
            <Form.Control isInvalid={showRequired && !firstName ? true : false} isValid={showRequired && firstName ? true : false} type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value) } />
          </Col>
          <Col sm={12} md={4}>
            <Form.Label>Middle Name</Form.Label>
            <Form.Control isValid={showRequired && middleName ? true : true} type="text" placeholder="Middle Name" value={middleName} onChange={(e) => setMiddleName(e.target.value) }/>
          </Col>
          <Col sm={12} md={4}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control isValid={showRequired && lastName ? true : true} type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value) }/>
          </Col>
          <Col sm={12} md={6}>
            <Form.Label>Email</Form.Label>
            <Form.Control isInvalid={showRequired && !email ? true : false} isValid={showRequired && email ? true : false} type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value) }/>
          </Col>
          <Col sm={12} md={6}>
            <Form.Label>Password</Form.Label>
            <Form.Control isInvalid={showRequired && !password ? true : false} isValid={showRequired && password ? true : false} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value) }/>
          </Col>
          <Col sm={12} md={3}>
            <Form.Label>Date</Form.Label>
            <Form.Control isValid={showRequired && date_of_birth ? true : true} type="date" placeholder="Date" value={date_of_birth} onChange={(e) => setDate_of_birth(e.target.value) }/>
          </Col>
          <Col sm={12} md={3}>
            <Form.Label>Gender</Form.Label>
            <Form.Select isValid={showRequired && gender ? true : true} aria-label="Gender" value={gender} onChange={(e) => setGender(e.target.value) }>
              <option value="">Prefer Not To Say</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
            </Form.Select>
          </Col>
          <Col sm={12} md={3} className="d-flex justify-content-center align-items-center">
            <Form.Check
              isValid={showRequired && is_subscribed ? true : true}
              type="switch"
              id="custom-switch-subscribed"
              label="Subscribed To Newsletter"
              onChange={(e) => setIs_subscribed(is_subscribed => !is_subscribed)}
            />
          </Col>
          <Col sm={12} md={3} className="d-flex justify-content-center align-items-center">
            <Button variant="primary" onClick={() => createUserAction()}>Sign Up</Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  return returnProps("signup");
}

export default Page;
