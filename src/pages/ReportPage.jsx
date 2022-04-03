import React, { useState, useEffect } from "react";
import { Button, Row, List, Avatar, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { getCalendar } from "../API/apiCalendar";
import MyTable from "../components/MyTable";
// import MyTable from "../components/MyTable";

function ReportPage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(async () => {
    const response = await getCalendar();
    setData(response);
    console.log(response);
  }, []);

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
        <Col span={24}>{data ? <MyTable  data={data}/> : null}</Col>
      </Row> 
    </div>
  );
}

export default ReportPage;
