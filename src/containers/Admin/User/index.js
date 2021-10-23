import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer, Sider } = Layout;

export default function User() {
  return (
    <div>
      <Content style={{ margin: "0 16px" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          User
        </div>
      </Content>
    </div>
  );
}
