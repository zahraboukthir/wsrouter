import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

const ProductDetails = ({ list }) => {
  let params = useParams();
  let navigate = useNavigate();
  console.log(params);
  // const produit = list.find((el) => Number(el.id) === Number(match.params.id));
  // console.log(produit);
  const produit = list.find((el) => Number(el.id) === Number(params.id));
  console.log(produit);
  return (
    <div>
      {/* <img src={produit.imgSrc} alt="" />
      {produit.name}
      {produit.price} */}
      {/* <Link to="/productlist">Go to list</Link> */}
      {/* v5 */}
      {/* <button onClick={()  */}
      {/* => history.push("/productlist")}>go back</button> */}
      {/* v6 */}
      {/* <button onClick={() => navigate("/productlist")}>go back</button>
       */}
      <Card onClick={() => navigate("/productlist")} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={produit.imgSrc} />
        <Card.Body>
          <Card.Title>{produit.name} </Card.Title>
          <Card.Text>{produit.price}</Card.Text>
        </Card.Body>
      </Card>
      <iframe
        width="560"
        height="315"
        src={produit.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default ProductDetails;
