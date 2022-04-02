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
      ]}
    >
      <Select
        defaultValue="inital"
        style={{ width: 250 }}
        // onChange={handleChange}
      >
        <Option value="inital">-- Selecciona tu genero --</Option>
        <Option value="M">Masculino</Option>
        <Option value="F">Femenino</Option>
      </Select>
    </Form.Item>
  );
}

export default GenderInput;
