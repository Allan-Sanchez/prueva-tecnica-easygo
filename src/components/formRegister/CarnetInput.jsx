import React from "react";
import { Form, Input } from "antd";

const isCarnetValidate = (value) => {
  if (value.length < 6 || value.length > 6) {
    return Promise.reject("El carnet debe de ser de 6 digitos");
  }
  // validate the firt character
  const character = "a".toUpperCase();
  const validate = value.split("");

  if (validate[0].toUpperCase() !== character) {
    return Promise.reject(`El primer debe ser "A" o "a"`);
  }
  if (validate.includes("0")) {
    return Promise.reject("El codigo no debe tener ceros");
  }
  if (validate[2] != 5) {
    return Promise.reject("El tercer digito debe deser 5");
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
