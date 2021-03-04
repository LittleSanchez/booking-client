import Layout from "../pages/_layout";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import { motion } from "framer-motion";
import PageDetails from "./post/details";
import { useState } from "react";

function Post({data, href, handleLinkClick}) {

    if (!data) return null;
  let link = <img width="100%" src={data?.imageUrl} alt="Card image cap" />;

  const [hovered, setHovered] = useState(false);

  // if (href){
  //   console.log("href");
  //   link = <Link href={href}>
  //     <a>
  //     <motion.img
  //         width="100%"
  //         src={data.imageUrl}
  //         alt="Card image cap"
  //         layoutId={`img${data.id}`}/>
  //     </a>
  //   </Link>
  // }

  

  if (href){
    link = (
        <a className="position-relative" onClick={() => handleLinkClick(data)}>
            {hovered && (
                <motion.div className="d-flex align-items-center justify-content-center"
                initial={{opacity: 0, position: "absolute", left: 0, right: 0, bottom: 0, top: 0, zIndex: 10}}
                animate={{opacity: 1, backgroundColor: "rgba(0,0,0,0.222)", left: 0, right: 0, bottom: 0, top: 0, position: "absolute", zIndex: 11}}
                >
                    <p className="text-uppercase text-white"
                    style={{
                        fontWeight: 400,
                        fontSize: "1.2em"
                    }}>Click for details</p>
                </motion.div>
            )}
            <motion.img
                width="100%"
                src={data?.imageUrl}
                alt="Card image cap"
                layoutId={`img${data?.id}`}
            />
        </a>
    );
  }
  
  return (
      <>
          <motion.div
              className="card m-2 border-0 shadow"
              style={hovered ? {zIndex: 5, position: "absolute", boxShadow: "0px 3px 15px 20px black"} : null}
              layoutId={`card-body${data?.id}`}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
          >
              <Card.Body>
                  {/* <Card.Title tag="h4">{data.name}</Card.Title> */}
                  <motion.h4
                      className="card-title"
                      layoutId={`title${data?.id}`}
                  >
                      {data.name}
                  </motion.h4>
                  {/* <Card.Subtitle tag="h5" className="mb-2 text-muted">
            ${data.price}
          </Card.Subtitle> */}
                  <motion.h5
                      className="card-subtitle"
                      layoutId={`price${data?.id}`}
                  >
                      ${data.price}
                  </motion.h5>
              </Card.Body>
              {link}
              <Card.Body>
                  <Card.Text>
                      <div className="d-flex text-secondary justify-content-between">
                          <motion.div layoutId={`bedrooms${data?.id}`}>
                              <i className="fas fa-bed"></i> {data.bedrooms}{" "}
                              bedrooms
                          </motion.div>
                          <motion.div layoutId={`bathrooms${data?.id}`}>
                              <i className="fas fa-bath"></i> {data.bathrooms}{" "}
                              bathrooms
                          </motion.div>
                      </div>
                  </Card.Text>
                  {hovered && (
                      <p
                          className="card-text"
                          layoutId={`description${data?.id}`}
                      >
                          {data.description}
                      </p>
                  )}
              </Card.Body>
              <Card.Footer>
                  {/* <div className="text-muted text-right"><small>- posted by Alina Black</small></div> */}
                  <div className="text-muted text-center">
                      <small>{data.apartmentType}</small>
                  </div>
              </Card.Footer>
          </motion.div>
      </>
  );
}

Post.Layout = Layout;

export default Post;
