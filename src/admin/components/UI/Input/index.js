import React from "react";
import { Form } from "react-bootstrap";

export const Input = (props) => {
  return (
    <Form.Group>
      {props.label && <Form.Label>{props.label}</Form.Label>}
      {props.children}
      <Form.Control
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        as={props.as}
        multiple
      />
      <Form.Text className="text-muted">{props.errorMessage}</Form.Text>
    </Form.Group>
  );
};

export default Input;
