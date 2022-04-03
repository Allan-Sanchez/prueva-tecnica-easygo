import React from "react";
import { Table, Space, Avatar, Button } from "antd";
import { dias_semana, meses } from "../utils/utilDate";

const { Column } = Table;

function MyTable({ data }) {
  if (!data) {
    return;
  }
  return (
    // <Table dataSource={data} columns={columns} />
    <Table dataSource={data} rowKey={(item) => item.id}>
      <Column title="Nombre" dataIndex="name" key="name" />
      <Column
        responsive={["sm"]}
        title="Fecha de declamación  "
        dataIndex="competitionDate"
        key="competitionDate"
        render={(info) => {
          const responsNewDay = new Date(info);
          console.log(`info${responsNewDay}`);

          return (
            <Space size="middle">{` ${
              dias_semana[responsNewDay.getDay()]
            },${responsNewDay.getDate()} de ${
              meses[responsNewDay.getMonth()]
            },del ${responsNewDay.getUTCFullYear()}`}</Space>
          );
        }}
      />
      <Column
        responsive={["md"]}
        title="Categoria"
        dataIndex="poetry"
        key="poetry"
        filters={[
          {
            text: "epica",
            value: "epica",
          },
          {
            text: "lirica",
            value: "lirica",
          },
          {
            text: "dramatica",
            value: "dramatica",
          },
        ]}
        onFilter={(value, record) => record.poetry.indexOf(value) === 0}
      />
      <Column
        responsive={["md"]}
        title="Direccion"
        dataIndex="address"
        key="address"
      />
      <Column
        title="Acciones"
        render={(info, render) => {
          return (
            <Space>
              <Button type="primary">ver</Button>
              <Button danger>Eliminar</Button>
            </Space>
          );
        }}
      />
    </Table>
  );
}

export default MyTable;
