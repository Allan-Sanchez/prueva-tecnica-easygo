import React from "react";
import { Form, Select } from "antd";
const { Option } = Select;

function PoetryInput() {
  return (
    <Form.Item
      label="Genero de poesia"
      name="poetry"
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
        defaultValue="lirica"
        style={{ width: 120 }}
        // onChange={handleChange}
      >
        <Option value="lirica">lírica</Option>
        <Option value="epica">épica</Option>
        <Option value="dramatica">dramática</Option>
      </Select>
    </Form.Item>
  );
}

export default PoetryInput;
