import React from "react";
import { Form, InputNumber } from "antd";

function PhoneInput() {
  return (
    <Form.Item
      label="Telefono"
      name="phone"
      rules={[
        {
          required: true,
          message: "Escribir un numero de telefono!",
        },
        {
          type: "integer",
          message: "Este campo debe ser numerico",
        },
      ]}
    >
      <InputNumber style={{ width: 200 }} />
    </Form.Item>
  );
}

export default PhoneInput;
