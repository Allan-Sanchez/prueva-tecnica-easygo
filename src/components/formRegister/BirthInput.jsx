import React from "react";
import { Form, DatePicker } from "antd";
import moment from "moment";

const dateFormat = "YYYY/MM/DD";

const isDateValidated = (value) => {
  // validate that you are of legal age
  const today = new Date();
  const birth = new Date(value._d);
  let d = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    d--;
  }
  if (d < 18) {
    return Promise.reject("Debes de ser mayor de edad");
  }

  return Promise.resolve();
};

function BirthInput() {
  return (
    <Form.Item
      label="Fecha de Nacimiento"
      name="dateBirth"
      rules={[
        {
          required: true,
          message: "Este campo es obligatorio!",
        },
        () => ({
          validator(_, value) {
            return isDateValidated(value);
          },
        }),
      ]}
    >
      <DatePicker format={dateFormat} />
    </Form.Item>
  );
}

export default BirthInput;
