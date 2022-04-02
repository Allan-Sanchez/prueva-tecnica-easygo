import React from "react";
import { Form, Select } from "antd";

const { Option } = Select;

function GenderInput() {
  return (
    <Form.Item
      label="Genero"
      name="gender"
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
      <Select
        defaultValue="masculino"
        style={{ width: 120 }}
        // onChange={handleChange}
      >
        <Option value="masculino">Masculino</Option>
        <Option value="Femenino">Femenino</Option>
      </Select>
    </Form.Item>
  );
}

export default GenderInput;
