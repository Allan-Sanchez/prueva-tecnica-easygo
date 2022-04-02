import React from "react";
import { Form, Input } from "antd";

function NameInput() {
  return (
    <Form.Item
      label="Nombre completo"
      name="name"
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

export default NameInput;
