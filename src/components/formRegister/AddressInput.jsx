import React from "react";
import { Form, Input } from "antd";

function AddressInput() {
  return (
    <Form.Item
      label="Direccion"
      name="address"
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

export default AddressInput;
