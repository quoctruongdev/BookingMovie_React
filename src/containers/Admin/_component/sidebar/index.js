import { Layout, Menu, Button } from "antd";
import React from "react";
import "./style.css";
import { useState } from "react";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import MovieIcon from "@mui/icons-material/Movie";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PeopleIcon from "@mui/icons-material/People";

import {
  PoweroffOutlined,
  EditFilled,
  PieChartOutlined,
} from "@ant-design/icons";

import { NavLink, BrowserRouter, Route } from "react-router-dom";
import User from "../../User";
import Film from "../../Film/film";
import DashboardPage from "../../Dashboard";
import ShowTime from "../../Showtime";
import AdNewFilm from "../../Film/addNewFilm/adnewfilm";
import AddUser from "../../User/AddUser";
import EditUser from "../../User/EditUser/EditUser";
import EditFilm from "../../Film/EditFilm/EditFilm";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function SideBar(props) {
  const [state, setState] = useState({
    collapsed: false,
  });

  const onCollapse = (collapsed) => {
    setState({ collapsed });
  };
  const { collapsed } = state;

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo p-2 flex justify-center ">
            <a href="/#">
              <img
                src="/asset/img/logo1.png"
                style={{ height: 40, width: 40 }}
              />
            </a>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={props.path}>
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <NavLink exact to="/dashboard">
                Dashboard
              </NavLink>
            </Menu.Item>

            <SubMenu key="sub1" icon={<AccountCircleIcon />} title="User">
              <Menu.Item key="2" icon={<PeopleIcon />}>
                <NavLink to="/dashboard/user">List User</NavLink>
              </Menu.Item>
              <Menu.Item accessKey="3" key="3" icon={<PersonAddIcon />}>
                <NavLink activeClassName="active" to="/dashboard/adduser">
                  Add User
                </NavLink>
              </Menu.Item>
              <Menu.Item key="4" icon={<EditFilled />}>
                <NavLink to="/dashboard/edituser:id">Edit User</NavLink>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="sub2" icon={<LocalMoviesIcon />} title="Film">
              <Menu.Item key="5" icon={<MovieIcon />}>
                <NavLink to="/dashboard/film">List Film</NavLink>
              </Menu.Item>
              <Menu.Item key="6" icon={<MovieFilterIcon />}>
                <NavLink to="/dashboard/addnewfilm">Add New Film</NavLink>
              </Menu.Item>
              <Menu.Item key="7" icon={<EditFilled />}>
                <NavLink to="/dashboard/editfilm/:id">Edit Film</NavLink>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="8" icon={<CalendarViewMonthIcon />}>
              <NavLink to="/dashboard/show">Showtime</NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background pt-2  bg-pink-800  "
            style={{ padding: 0 }}
          >
            <div className="flex justify-between">
              <div></div>
              <div className="flex  mx-6 ">
                <div className="flex flex-col items-center pr-10 justify-center">
                  <div className="flex -space-x-4">
                    <img
                      alt
                      className="w-12 h-12 border rounded-full dark:bg-coolGray-500 dark:border-coolGray-700"
                      src="https://source.unsplash.com/41x41/?portrait"
                    />
                    <span className="flex items-center justify-center w-5 h-5 font-semibold border rounded-full bg-red-700  text-white  dark:border-coolGray-700">
                      +3
                    </span>
                  </div>
                </div>

                <div className="cursor-pointer text-red-500 hover:text-red-700 flex items-center">
                  <Button type="primary" icon={<PoweroffOutlined />}></Button>
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
            <Route path="/dashboard/adduser" component={AddUser} />
            <Route path="/dashboard/edituser:id" component={EditUser} />
            <Route path="/dashboard/film" component={Film} />
            <Route path="/dashboard/addnewfilm" component={AdNewFilm} />
            <Route path="/dashboard/editfilm/:id" component={EditFilm} />
            <Route path="/dashboard/show" component={ShowTime} />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Design ©2021 Created by Admin
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}
