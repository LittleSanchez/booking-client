import Layout from "../pages/_layout";
import Card from "react-bootstrap/Card";

function Post({data}) {
  return (
    <>
      <Card className="m-2 border-0 shadow col-8 col-md-4 col-lg-3 px-0">
        <Card.Body>
          <Card.Title tag="h5">{data.name}</Card.Title>
          <Card.Subtitle tag="h6" className="mb-2 text-muted">
            {data.price}
          </Card.Subtitle>
        </Card.Body>
        <img
          width="100%"
          src={data.imageUrl}
          alt="Card image cap"
          />
        <Card.Body>
          <Card.Text>
            <div className="d-flex text-secondary justify-content-between">
              <div>
                <i className="fas fa-bed"></i> {data.bedrooms} bedrooms
              </div>
              <div>
                <i className="fas fa-bath"></i> {data.bathrooms} bathrooms
              </div>
            </div>
          </Card.Text>
          <Card.Text>
            {data.description}
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <div className="text-muted text-right"><small>- posted by Alina Black</small></div>
        </Card.Footer> */}
      </Card>
    </>
  );
}

Post.Layout = Layout;

export default Post;
