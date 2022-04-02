import React from "react";
import { Button, Row, Card } from "antd";
import { useNavigate } from "react-router-dom";

function ReportPage() {
  const navigate = useNavigate();

  const handleRedirectReport = () => {
    navigate("/");
  };
  return (
    <div>
      <div>
        <Button type="primary" onClick={handleRedirectReport}>
          Registar un nuevo
        </Button>
      </div>
      <Row justify="center">
        <Card
          title="Crear Restaurante"
          style={{ width: 900 }}
          headStyle={{ textAlign: "center" }}
        ></Card>
      </Row>
    </div>
  );
}

export default ReportPage;
