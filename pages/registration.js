import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import { Form, Button } from "react-bootstrap";
import Layout from "./_layout";

function Registration() {
  return (
    <>
      <h2 className="text-center text-light m-4">Registration Form</h2>
      <div className="d-flex justify-content-center m-4">
        <Form className="w-75 border p-3 bg-white rounded">
        <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter name" />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email"  name="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" />
          </Form.Group>
          <Button variant="secondary" type="submit">
          Register
          </Button>
        </Form>
      </div>
    </>
  );
}

Registration.Layout = Layout;

export default Registration;
