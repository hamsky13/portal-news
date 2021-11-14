import React from "react";
import { Card } from "react-bootstrap";
import "../assets/card.css";

function ArticleCard(prop) {
  return (
    <div className="card-article">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={prop.image} />
        <Card.Body>
          <Card.Title>{prop.title}</Card.Title>
          <Card.Text>{`${prop.desc}`}</Card.Text>

          <a href={prop.url}>Read More</a>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ArticleCard;
