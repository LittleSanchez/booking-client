import React, { useState } from "react";
import Layout from "../pages/_layout";
import { CardColumns, CardDeck } from "react-bootstrap";
import Post from "./post";
import postRepository from "../helpers/PostRepository";

import styles from '../styles/ListPosts.module.scss';
import Link from "next/link";

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
                {/* <div className="d-flex flex-wrap justify-content-center"> */}
                <div class={styles.card__columns + " row"}>
                    {this.state.posts.map(
                        (x) => (
                            // <div className=" col-8 col-md-4 col-lg-3 px-0">
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 px-1 my-2">
                                <Post
                                    data={x}
                                    href={`/post/details?id=${x.id}`}
                                />
                            </div>
                        )
                        // </div>
                    )}
                </div>
                {/* </div> */}
            </div>
        </>
    );
  }
}

ListPosts.Layout = Layout;

export default ListPosts;
