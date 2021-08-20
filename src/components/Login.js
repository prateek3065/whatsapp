import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
export default function Login({ onIdSubmit }) {
  const idRef = useRef();
  function hadnleSubmit(e) {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  }
  function createNewId() {
    onIdSubmit(uuidv4());
  }
  return (
    <>
      <Container
        className="align-item-center justify-content-center d-flex"
        style={{ height: "100vh" }}
      >
        <Form
          className="w-100"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          onSubmit={hadnleSubmit}
        >
          <Form.Group>
            <Form.Label>Enter Your Id</Form.Label>
            <Form.Control type="text" ref={idRef} required />
          </Form.Group>
          <Button
            style={{
              marginLeft: "40%",
              marginRight: "40%",
              marginTop: "8px",
              marginBottom: "8px",
            }}
            type="submit"
          >
            Login
          </Button>
          <Button
            onClick={createNewId}
            variant="secondary"
            style={{
              marginLeft: "40%",
              marginRight: "40%",
              marginBottom: "8px",
            }}
          >
            Create A New Id
          </Button>
        </Form>
      </Container>
    </>
  );
}
// /style={{ marginTop: "8px", width: "20%" }}
/*
className="w-100"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
 */
