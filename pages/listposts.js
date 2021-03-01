import React, { useState } from "react";
import Layout from "../pages/_layout";
import Post from "./post";
import postRepository from "../helpers/PostRepository";

import styles from '../styles/ListPosts.module.scss';
import Link from "next/link";
import PageDetails from "./post/details";

class ListPosts extends React.Component {
    constructor(props) {
      super(props);
      this.state = { posts: [], selectedPost: null };
    }

    async componentDidMount() {
      let posts = await postRepository.get();

      this.setState(
        {posts: posts,}
        );
    }

    setSelectedPost = (post) => {
      console.log(post);
      this.setState({
          selectedPost: post,
      });
    }

    closeDetails = () => this.setState({selectedPost: null});

    

  render() {
    return (
        <>
            <div className="container ">
                <h2 className="text-center text-light m-4">
                    Available apartments and flats:
                </h2>
                {/* <div className="d-flex flex-wrap justify-content-center"> */}
                <div className={styles.card__columns + " row position-relative"}>
                    {this.state.posts.map(
                        (x) => (
                            // <div className=" col-8 col-md-4 col-lg-3 px-0">
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 px-1 my-2">
                                <Post
                                    data={x}
                                    href={`/post/details?id=${x.id}`}
                                    handleLinkClick={this.setSelectedPost}
                                />
                            </div>
                        )
                        // </div>
                    )}
                </div>
                {/* </div> */}
                {this.state.selectedPost && (
                    <PageDetails
                        post={this.state.selectedPost}
                        handleClose={this.closeDetails}
                    />
                )}
            </div>
        </>
    );
  }
}

ListPosts.Layout = Layout;

export default ListPosts;
