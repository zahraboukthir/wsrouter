import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ produit }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={produit.imgSrc} />
        <Card.Body>
          <Card.Title>{produit.name} </Card.Title>
          <Card.Text>{produit.price}</Card.Text>
          <Link to={`/details/${produit.id}`}>
            <Button variant="primary">See details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
