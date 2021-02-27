import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import { Form, Button } from "react-bootstrap";
import Layout from "./_layout";

function AddPost() {
  return (
    <>
      <h2 className="text-center text-light m-4">Create a post</h2>
      <div className="d-flex justify-content-center m-4">
        <Form className="w-75 border p-3 bg-white rounded">
        <Form.Group controlId="name">
            <Form.Label>Create a post</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter name" />
          </Form.Group>
          
          <Button variant="secondary" type="submit">
            Add
          </Button>
        </Form>
      </div>
    </>
  );
}

AddPost.Layout = Layout;

export default AddPost;
