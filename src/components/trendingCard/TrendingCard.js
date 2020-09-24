import React from "react";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import { ListItem } from "./styles";

export function TrendingCard({ title, items }) {
  const listItems = items?.map((item) => (
    <ListGroup.Item>
      <ListItem>
        <a href={`/${item}`}>{item}</a>
      </ListItem>
    </ListGroup.Item>
  ));

  return (
    <Card style={{ width: "18rem", marginBottom: "0.5rem" }}>
      <Card.Header>{title}</Card.Header>
      <ListGroup variant="flush">{listItems}</ListGroup>
    </Card>
  );
}
