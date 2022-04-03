import React from "react";
import { Row, Card, Form, Button, notification } from "antd";
import { useNavigate } from "react-router-dom";

import { addOneDate } from "../API/apiCalendar";
import { meses, dias_semana } from "../utils/utilDate";

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
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleRedirectReport = () => {
    navigate("/report");
  };

  const onFinish = async (values) => {
    const handleDate = new Date(values.dateBirth._d);
    const year = handleDate.getFullYear();
    const month = handleDate.getMonth() + 1;
    const day = handleDate.getDate();
    const birth = `${year}-${month}-${day}`;

    // remove element
    delete values.dateBirth;
    const data = { ...values, birth };

    try {
      const response = await addOneDate(data);
      form.resetFields();

      const responsNewDay = new Date(response.competitionDate);

      notification.open({
        duration: 30,
        message: "Registro exitoso",
        description: `Felicidades fecha es: ${
          dias_semana[responsNewDay.getDay()]
        },${responsNewDay.getDate()} de ${
          meses[responsNewDay.getMonth()]
        },del ${responsNewDay.getUTCFullYear()}`,
        onClick: () => {
          console.log("Notification Clicked!");
        },
      });
      navigate("/report");
    } catch (error) {
      return error;
    }
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
            form={form}
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
