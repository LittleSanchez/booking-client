import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import { Form, Button } from "react-bootstrap";
import { render } from "react-dom";
import Layout from "./_layout";
import React, { useState } from "react";
import Post from "./post";

import styles from "../styles/AddPost.module.scss";
import postRepository from "../helpers/PostRepository";


class AddPost extends React.Component {
    constructor() {
      super();
      this.state = {
        name: "Title",
        price: 0,
        apartmentType: postRepository.apartmentTypes[0],
        imageUrl: "https://q-xx.bstatic.com/xdata/images/hotel/840x460/250999347.jpg?k=6d7d9a5176c36a193f5e20a5e3e72e8ae3868d582f507034df14bcc097cd403e&o=",
        bathrooms: 0,
        bedrooms: 0,
        description: "",
        user_id: 1
      };
    }

    onSubmit = async (e) => {
      e.preventDefault();
      console.log(this.state);
      let result = await postRepository.add(this.state);
      console.log("Creating post: " + result);
      
    }

    onNameChange = (e) => {
      console.log(e.target.value);
      this.setState({
        name: e.target.value === "" ? "Title" : e.target.value
      });
    }

    onPriceChange = (e) => {
      console.log(e.target.value);
      this.setState({
        price: e.target.value == "" ? "0" : e.target.value
      });
    }

    onApartmentTypeChange = (e) => {
      console.log(e.target.value);
      this.setState({
        apartmentType: e.target.value === "" ? postRepository.apartmentTypes[0] : e.target.value
      });
    }

    onImageUrlChange = (e) => {
      this.setState({
        imageUrl: e.target.value === "" ? "https://q-xx.bstatic.com/xdata/images/hotel/840x460/250999347.jpg?k=6d7d9a5176c36a193f5e20a5e3e72e8ae3868d582f507034df14bcc097cd403e&o=" : e.target.value
      });
    }

    onBathroomsChange = (e) => {
      console.log(e.target.value);
      this.setState({
        bathrooms: e.target.value == "" ? "0" : e.target.value
      });
    }

    onBedroomsChange = (e) => {
      this.setState({
        bedrooms: e.target.value == "" ? "0" : e.target.value
      });
    }

    onDescriptionChange = (e) => {
      this.setState({
        description: e.target.value === "" ? "none" : e.target.value
      });
    }

    render() {
        return (
            <>
                <div className="container">
                    <h2 className="text-center text-light my-4">Create a post</h2>
                    <div className="d-flex justify-content-center flex-wrap flex-lg-nowrap">
                        <Form
                            className="w-75 border p-3 bg-white rounded shadow"
                            onSubmit={this.onSubmit}
                        >
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Enter name"
                                    onChange={this.onNameChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="price">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="price"
                                    placeholder="Enter price"
                                    onChange={this.onPriceChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>Example multiple select</Form.Label>
                                <Form.Control as="select" onChange={this.onApartmentTypeChange}>
                                    {postRepository.apartmentTypes.map(x => 
                                      <option>{x}</option>
                                      )}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="imageUrl">
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="imageUrl"
                                    placeholder="https://..."
                                    onChange={this.onImageUrlChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="bathrooms">
                                <Form.Label>Bathrooms</Form.Label>
                                <Form.Control
                                    type="number"
                                    min="0"
                                    name="bathrooms"
                                    placeholder="Enter amount batrooms"
                                    onChange={this.onBathroomsChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="bedrooms">
                                <Form.Label>Bedrooms</Form.Label>
                                <Form.Control
                                    type="number"
                                    min="0"
                                    name="bedrooms"
                                    placeholder="Enter amount bedrooms"
                                    onChange={this.onBedroomsChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="description"
                                    placeholder="Enter description"
                                    onChange={this.onDescriptionChange}
                                />
                            </Form.Group>
                            <Button variant="secondary" type="submit">
                                Add
                            </Button>
                        </Form>
                        <div
                            className={
                                styles.preview__card +
                                " col-8 col-md-6 col-lg-4 col-xl-3 flex-wrap justify-content-center d-flex"
                            }
                        >
                          <div className="col-12 px-0">
                            
                            <Post data={this.state ?? {}}></Post>
                          </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

AddPost.Layout = Layout;

export default AddPost;