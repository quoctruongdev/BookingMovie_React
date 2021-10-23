import React, { useState } from "react";
import { Redirect, Link, BrowserRouter, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./AdminTemplate.css";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  HomeOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Users from "./Users/Users";
import Film from "./Film/Film";
import Dashboard from "./Dashboard/Dashboard";

const { Header, Sider, Content } = Layout;
const logOutUserAdmintemplate = () => {
  // clear localStorage
  localStorage.removeItem("userHometemplate");
  window.location.reload();
};
export default function AdminTemplate(props) {
  const [state, setState] = useState(false);

  if (!localStorage.getItem("userHometemplate")) {
    return <Redirect to="/login" />;
  }
  let valueUser =
    localStorage.getItem("userHometemplate") !== null
      ? JSON.parse(localStorage.getItem("userHometemplate"))
      : [];
  if (valueUser.maLoaiNguoiDung === "KhachHang") {
    return <Redirect to="/" />;
  }

  if (valueUser.maLoaiNguoiDung === "QuanTri") {
    return (
      <BrowserRouter>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider trigger={null} collapsible collapsed={state}>
            <div className="p-5 flex justify-center ">
              <img
                className="w-34 h-10"
                src="../images/logo/logo.png"
                alt="logo"
              />
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={props.path}>
              <Menu.Item key="/admin" icon={<HomeOutlined />}>
                <Link to="/admin">Dashboard</Link>
              </Menu.Item>
              <Menu.Item key="/admin/users" icon={<UserOutlined />}>
                <Link to="/admin/users"> Users</Link>
              </Menu.Item>
              <Menu.Item key="/admin/films" icon={<VideoCameraOutlined />}>
                <Link to="/admin/films"> Film</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              <div className="flex justify-between">
                <div>
                  {React.createElement(
                    state ? MenuUnfoldOutlined : MenuFoldOutlined,
                    {
                      className: "trigger",
                      onClick: () => {
                        state ? setState(false) : setState(true);
                      },
                    }
                  )}
                </div>
                <div className="flex items-center">
                  <div className="text-gray-500 hover:text-blue-700 flex items-center">
                    <i className="fas fa-user-tie pr-2 text-xl"></i>
                    <button className="leading-9 pr-4">
                      {valueUser?.hoTen}
                    </button>
                  </div>

                  <div
                    onClick={() => {
                      logOutUserAdmintemplate();
                    }}
                    className="cursor-pointer text-red-500 hover:text-red-700 flex items-center"
                  >
                    <i className="fas fa-sign-out-alt text-xl pr-2 "></i>
                    <button className="mr-10">Đăng xuất</button>
                  </div>
                </div>
              </div>
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <Route exact path="/admin" component={Dashboard} />
              <Route path="/admin/users" component={Users} />
              <Route path="/admin/films" component={Film} />
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}
