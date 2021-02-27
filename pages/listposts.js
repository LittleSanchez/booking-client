import React, { useState } from "react";
import Layout from "../pages/_layout";
import { CardDeck } from "react-bootstrap";
import Post from "./post";
import postRepository from "../helpers/PostRepository";

class ListPosts extends React.Component {
    constructor(props) {
      super(props);
      this.state = { posts: [] };
    }

    async componentDidMount() {
      let posts = await postRepository.get();

      this.setState(
        {posts: posts}
        );
    }

  render() {
    return (
      <>
        <div className="container">
          <h2 className="text-center text-light m-4">
            Available apartments and flats:
          </h2>
          <div className="d-flex flex-wrap justify-content-center">
            {this.state.posts.map(x => <Post data={x}/>)}
          </div>
        </div>
      </>
    );
  }
}

ListPosts.Layout = Layout;

export default ListPosts;
