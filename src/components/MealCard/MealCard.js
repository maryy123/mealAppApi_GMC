import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MealCard.css";

const MealCard = ({ el }) => {
  return (
    <Link to={`/meals/meal/${el.idMeal}`} className="item">
      <Card
        style={{
          background: "none",
          width: "18rem",
          borderStyle: "none",
        }}
      >
        <Card.Img variant="top" src={el.strMealThumb} />
        <Card.Body>
          <Card.Title>{el.strMeal}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default MealCard;
