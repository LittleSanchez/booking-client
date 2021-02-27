import Layout from "../../pages/_layout";
import Card from "react-bootstrap/Card";
import {Button, Col, Row} from "react-bootstrap";
import {useRouter, withRouter} from 'next/router';
import postRepository from "../../helpers/PostRepository";
import { motion } from "framer-motion";
import React from 'react';

class PageDetails extends React.Component{

  constructor(props) {
    super(props);
   
    this.state = { post: {} };
  }

  async componentDidMount() {
    
    console.log(this.props.router);
    let post = await postRepository.getById(this.props.router.query);

    this.setState(
      {post: post}
      );
  }

  render() {
    
    return (
      <>
        <Card className="m-4">
          <Row className="no-gutters">
            <Col md={5} lg={5}>
              <Card.Img
                variant="top"
                src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/76109618.jpg?k=ba537b048279407e0241cbd138c6dced32572a4f864bdaf5dbb60c314c3003b0&o="
              />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title tag="h5">2 bed flat for sale</Card.Title>
                <Card.Subtitle tag="h6" className="mb-2 text-muted">
                  775 000 $
                </Card.Subtitle>
                <Card.Text>
                  <div className="d-flex text-secondary justify-content-between">
                    <div>
                      <i className="fas fa-bed"></i> 2 bedrooms
                    </div>
                    <div>
                      <i className="fas fa-bath"></i> 2 bathrooms
                    </div>
                  </div>
                </Card.Text>
                <Card.Text>
                  Generous size two bedroom apartment in this former Jeager
                  headquarters Edwardian building moments from Old Street.
                </Card.Text>
  
                <Button variant="secondary" type="submit">
                  Add to cart
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </>
    );
    }
}

let pageDetails = withRouter(PageDetails);
pageDetails.Layout = Layout;

export default pageDetails;