import { Layout, Menu, Breadcrumb } from "antd";
import React from "react";
import "./style.css";
import { useState } from "react";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import MovieIcon from "@mui/icons-material/Movie";

import {
  DesktopOutlined,
  PieChartOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { NavLink, BrowserRouter, Route } from "react-router-dom";
import User from "../../User";
import Film from "../../Film";
import DashboardPage from "../../Dashboard";
import ShowTime from "../../Showtime";
import AdNewFilm from "../../Film/addNewFilm/adnewfilm";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function SideBar() {
  const [state, setState] = useState({
    collapsed: false,
  });

  const onCollapse = (collapsed) => {
    setState({ collapsed });
  };
  //   const { collapsed } = this.state;
  const { collapsed } = state;
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo p-2 ">
            <NavLink to="/">
              <img
                src="/asset/img/iconMovie.png"
                style={{ height: 40, width: 40 }}
              />
            </NavLink>
          </div>
          <Menu
            theme="dark"
            //   defaultSelectedKeys={["1"]}
            mode="inline"
          >
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <NavLink exact to="/dashboard">
                Dashboard
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<AccountCircleIcon />}>
              <NavLink exact to="/dashboard/user">
                User
              </NavLink>
            </Menu.Item>

            <SubMenu key="sub1" icon={<UserOutlined />} title="Film">
              <Menu.Item key="3" icon={<MovieIcon />}>
                <NavLink to="/dashboard/film">List Film</NavLink>
              </Menu.Item>
              <Menu.Item key="4" icon={<MovieFilterIcon />}>
                <NavLink to="/dashboard/addnewfilm">Add New Film</NavLink>
              </Menu.Item>
              {/* <Menu.Item key="3">Film</Menu.Item> */}
              {/* <Menu.Item key="4">Add New Film</Menu.Item> */}
            </SubMenu>
            <Menu.Item key="8" icon={<CalendarViewMonthIcon />}>
              <NavLink to="/dashboard/show">Showtime</NavLink>
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
                    {/* {valueUser?.hoTen} */}
                  </button>
                </div>

                <div
                  // onClick={() => {
                  //   logOutUserAdmintemplate();
                  // }}
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
            <Route exact path="/dashboard" component={DashboardPage} />
            <Route path="/dashboard/user" component={User} />
            <Route path="/dashboard/film" component={Film} />
            <Route path="/dashboard/addnewfilm" component={AdNewFilm} />
            <Route path="/dashboard/show" component={ShowTime} />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}
