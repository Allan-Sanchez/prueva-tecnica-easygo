import React from "react";
import { Table, Space, Avatar, Button } from "antd";

const { Column } = Table;

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Carnet",
    dataIndex: "carnet",
    key: "carnet",
  },
  {
    title: "Nombre",
    dataIndex: "name",
    key: "name",
  },
];

function MyTable({ data }) {
  console.log(data);

  if (!data) {
    return;
  }
  return (
    <Table dataSource={dataSource} columns={columns} />
    // <Table dataSource={data} rowKey={(item) => item.id}>
    //   {/* <Column title="Nombre" dataIndex="name" key="name" />
    //   <Column
    //     responsive={["sm"]}
    //     title="imagen"
    //     dataIndex="urlImage"
    //     render={(info) => {
    //       return (
    //         <Space size="middle">
    //           <Avatar size={60} src={info} />
    //         </Space>
    //       );
    //     }}
    //   />
    //   <Column
    //     responsive={["md"]}
    //     title="Direccion"
    //     dataIndex="address"
    //     key="address"
    //   />
    //   <Column
    //     title="Acciones"
    //     render={(info, render) => {
    //       return (
    //         <Space>
    //           <Button type="primary">ver</Button>
    //           <Button danger>Eliminar</Button>
    //         </Space>
    //       );
    //     }} */}
    //   {/* /> */}
    // </Table>
  );
}

export default MyTable;
