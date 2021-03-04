import React, { useState } from "react";
import Layout from "../pages/_layout";
import Post from "./post";
import postRepository from "../helpers/PostRepository";

import styles from '../styles/ListPosts.module.scss';
import Link from "next/link";
import PageDetails from "./post/details";
import Pagination from "../components/pagination";
import { withRouter } from "next/router";


class ListPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts: [], selectedPost: null, filters: null, page: props.router.query.page };
    }


    async componentDidMount() {
    //   let posts = await postRepository.get();
    //   let pagePosts = await postRepository.getWithFilters(2); 
        await this.loadPosts();
    }

    async loadPosts() {

        let filters = (await postRepository.getWithFilters(this.state.page));
        let posts = filters.posts;
        // console.log(pagePosts);
          this.setState({ posts: posts, filters: filters });
    }

    setSelectedPost = (post) => {
      console.log(post);
      this.setState({
          selectedPost: post,
      });
    }

    closeDetails = () => this.setState({selectedPost: null});


    setPage = (page) => {
        this.props.router.query.page = page;
        this.setState({page: page});
    }
    

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
                <div className="d-flex justify-content-center">
                    <Pagination initialPage={this.state.page} handleChange={(page) => setPage(page)} pagesCount={this.state.filters?.totalPages}/>
                </div>
            </div>
        </>
    );
  }
}

let Export =  withRouter(ListPosts);
Export.Layout = Layout;

export default Export;
