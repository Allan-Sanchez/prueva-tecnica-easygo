import React from "react";
import { Row, Card, Form, Button } from "antd";
import { useNavigate } from "react-router-dom";

// components
import CarnetInput from "../components/formRegister/CarnetInput";
import NameInput from "../components/formRegister/NameInput";
import AddressInput from "../components/formRegister/AddressInput";
import GenderInput from "../components/formRegister/GenderInput";
import PhoneInput from "../components/formRegister/PhoneInput";
import BirthInput from "../components/formRegister/BirthInput";
import CareerInput from "../components/formRegister/CareerInput";
import PoetryInput from "../components/formRegister/PoetryInput";

function RegisterPage() {
  const navigate = useNavigate();

  const handleRedirectReport = () => {
    navigate("/report");
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <div>
        <Button type="primary" onClick={handleRedirectReport}>
          Ver informe
        </Button>
      </div>
      <Row justify="center">
        <Card
          title="Crear un nuevo registro"
          style={{ width: 900 }}
          headStyle={{ textAlign: "center" }}
        >
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <CarnetInput />

            <NameInput />

            <AddressInput />

            <GenderInput />

            <PhoneInput />

            <BirthInput />

            <CareerInput />

            <PoetryInput />

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Row>
    </div>
  );
}

export default RegisterPage;
