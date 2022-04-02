import React from "react";
import { Form, Input } from "antd";

function CareerInput() {
  return (
    <Form.Item
      label="Carrera"
      name="career"
      rules={[
        {
          required: true,
          message: "Este campo es obligatorio!",
        },
        {
          validateTrigger: "onBlur",
        },
      ]}
    >
      <Input />
    </Form.Item>
  );
}

export default CareerInput;
