import React from "react";
import { Form, Input } from "antd";

const isCarnetValidate = (value) => {
  console.log(`Validate ${value}`);
  if (value < 5) {
    return Promise.reject("Age needs to be 5 or older.");
  }
  return Promise.resolve();
};
function CarnetInput() {
  return (
    <Form.Item
      label="Carnet"
      name="carnet"
      rules={[
        {
          required: true,
          message: "Este campo es obligatorio!",
        },
        () => ({
          validator(_, value) {
            return isCarnetValidate(value);
          },
        }),
        { validateTrigger: "onBlur" },
      ]}
    >
      <Input />
    </Form.Item>
  );
}

export default CarnetInput;
