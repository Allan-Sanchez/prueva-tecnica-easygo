import React from "react";
import { Form, DatePicker } from "antd";

function BirthInput() {
  return (
    <Form.Item
      label="Fecha de Nacimiento"
      name="birth"
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
      <DatePicker />
    </Form.Item>
  );
}

export default BirthInput;
