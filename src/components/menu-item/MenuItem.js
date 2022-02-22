import React from "react";
import "./menuItem.css";
import { Form, Button, Card, Badge } from "react-bootstrap";

import { useState } from "react";

const MenuItem = ({ title, price, description, cover }) => {
  const [showMore, setShowMore] = useState(false);
  const [food, setFood] = useState("");
  const [email, setEmial] = useState("");
  const [rate, setRate] = useState("");
  const [comment, setComment] = useState("");

  // ============

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      food,
      email,
      rate,
      comment,
    };
    try {
      const response = await fetch(`http://localhost:3003/feedbacks`, {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
      } else {
        console.error("POST failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  console.log(title);
  return (
    <div className="menu-item">
      <Card>
        <Card.Img className="img_res" variant="top" src={cover} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Badge bg="dark">{price}$</Badge>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>

      {/* <img src={cover} alt="" />
      <h1>
        {title} ${price}
      </h1>
      <p>{description}</p> */}
      {!showMore && (
        <p className=" text-center">
          {" "}
          <button
            className="outline btn btn-secondary button "
            type="button"
            onClick={() => setShowMore(true)}
          >
            Show More <i class="bi bi-caret-down "></i>
          </button>
        </p>
      )}
      {showMore && (
        // eslint-disable-next-line react/react-in-jsx-scope
        <div>
          {/*  */}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                value={food}
                onChange={(e) => setFood(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmial(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                as="select"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Button type="submit" size="lg" variant="primary">
                Order
              </Button>
            </Form.Group>
          </Form>

          {/*  */}
          <button
            className="outline button btn btn-secondary third2-btn-outline"
            type="button"
            onClick={() => setShowMore(false)}
          >
            Show Less <i class="bi bi-caret-up"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
