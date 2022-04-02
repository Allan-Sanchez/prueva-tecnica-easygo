import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import "../styles/Layout.css";
const { Footer, Content } = Layout;

import RegisterPage from "../pages/RegisterPage";
import ReportPage from "../pages/ReportPage";

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Content
            className="layout-container"
            style={{ margin: "24px 16px 0" }}
          >
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Routes>
                <Route path="/" element={<RegisterPage />} />
                <Route path="/report" element={<ReportPage />} />
              </Routes>
            </div>
          </Content>
          <Footer>Prueva tecnica EASYGO 2022</Footer>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
