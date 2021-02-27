import Layout from "../pages/_layout";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import { motion } from "framer-motion";

function Post({data, href}) {
  let link = <img width="100%" src={data.imageUrl} alt="Card image cap" />;
  if (href){
    console.log("href");
    link = <Link href={href}>
      <a>
      <motion.img
          width="100%"
          src={data.imageUrl}
          alt="Card image cap"
          layoutId={`img${data.id}`}/>
      </a>
    </Link>
  }
  return (
    <>
      <Card className="m-2 border-0 shadow">
        <Card.Body>
          {/* <Card.Title tag="h4">{data.name}</Card.Title> */}
          <motion.h4 className="card-title" layoutId={`title${data.id}`}>{data.name}</motion.h4>
          {/* <Card.Subtitle tag="h5" className="mb-2 text-muted">
            ${data.price}
          </Card.Subtitle> */}
          <motion.h5 className="card-subtitle" layoutId={`price${data.id}`}>${data.price}</motion.h5>
        </Card.Body>
          {link}
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
        <Card.Footer>
          {/* <div className="text-muted text-right"><small>- posted by Alina Black</small></div> */}
          <div className="text-muted text-center"><small>{data.apartmentType}</small></div>
        </Card.Footer>
      </Card>
    </>
  );
}

Post.Layout = Layout;

export default Post;
