import React from "react";
import {
  Row,
  Card,
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  DatePicker,
} from "antd";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

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
            <Form.Item
              label="Carnet"
              name="carnet"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Nombre completo"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Direccion"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Genero"
              name="gender"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
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

            <Form.Item
              label="Telefono"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Escribir un numero de telefono!",
                  type: "integer",
                  message: "Escribir un numero de telefono valido",
                },
              ]}
            >
              <InputNumber />
            </Form.Item>

            <Form.Item
              label="Fecha de Nacimiento"
              name="birth"
              rules={[
                {
                  required: true,
                  message: "Escribir un numero de telefono!",
                },
              ]}
            >
              <DatePicker />
            </Form.Item>

            <Form.Item
              label="Carrera"
              name="career"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Genero de poesia"
              name="poetry"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
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
