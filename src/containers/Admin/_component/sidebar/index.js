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

import { PoweroffOutlined } from "@ant-design/icons";
import { NavLink, BrowserRouter, Route } from "react-router-dom";
import User from "../../User";
import Film from "../../Film/film";
import DashboardPage from "../../Dashboard";
import ShowTime from "../../Showtime";
import AdNewFilm from "../../Film/addNewFilm/adnewfilm";
import AddUser from "../../User/AddUser";
import EditUser from "../../User/EditUser/EditUser";
import EditFilm from "../../Film/EditFilm/EditFilm";
import { actLogout } from "../../AuthPage/modules/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Redirect } from "react-router";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function SideBar(props) {
  const history = useHistory();
  const dispatch = useDispatch();
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
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
          xs={{ span: 6 }}
        >
          <div className="logo p-2 flex justify-center ">
            <a href="/#">
              <img
                src="/asset/img/logo1.png"
                style={{ height: 40, width: 40 }}
                alt=""
              />
            </a>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={props.path}>
            <SubMenu key="sub1" icon={<AccountCircleIcon />} title="User">
              <Menu.Item key="2" icon={<PeopleIcon />}>
                <NavLink to="/dashboard/user">List User</NavLink>
              </Menu.Item>
              <Menu.Item key="3" icon={<PersonAddIcon />}>
                <NavLink activeClassName="active" to="/dashboard/adduser">
                  Add User
                </NavLink>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="sub2" icon={<LocalMoviesIcon />} title="Film">
              <Menu.Item key="5" icon={<MovieIcon />}>
                <NavLink to="/dashboard/film">List Film</NavLink>
              </Menu.Item>
              <Menu.Item key="6" icon={<MovieFilterIcon />}>
                <NavLink to="/dashboard/addnewfilm">Add New Film</NavLink>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="8" icon={<CalendarViewMonthIcon />}>
              <NavLink to="/dashboard/show">Showtime</NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background pt-2   "
            style={{ padding: 0, backgroundColor: "rgb(51, 53, 69)" }}
          >
            <div className="flex justify-between">
              <div></div>
              <div className="flex  mx-6 ">
                <div className="flex flex-col items-center mr-2 justify-center">
                  <div className="flex -space-x-4">
                    <img
                      style={{ borderColor: "rgb(51, 53, 69" }}
                      className="w-12 h-12  rounded-full "
                      src="https://source.unsplash.com/41x41/?portrait"
                      alt=""
                    />
                    <span className="flex items-center justify-center w-5 h-5 font-semibold   text-xs  rounded-full bg-red-500  text-white     ">
                      {Math.floor(Math.random() * (100 - 0) - 0)}
                    </span>
                  </div>
                </div>

                <div className="cursor-pointer text-red-500 hover:text-red-700 flex items-center">
                  <Button
                    type="primary"
                    onClick={() => {
                      dispatch(actLogout(history));
                    }}
                    icon={<PoweroffOutlined />}
                  ></Button>
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
            <Route path="/dashboard/edituser/:id" component={EditUser} />
            <Route path="/dashboard/film" component={Film} />
            <Route path="/dashboard/addnewfilm" component={AdNewFilm} />
            <Route path="/dashboard/editfilm/:id" component={EditFilm} />
            <Route path="/dashboard/show" component={ShowTime} />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Design ??2021 Created by Admin
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}
