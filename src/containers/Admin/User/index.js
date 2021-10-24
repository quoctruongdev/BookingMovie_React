import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table, Input } from "antd";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { SearchOutlined } from "@ant-design/icons";
import { actFetchListUser } from "./modules/actions";

export default function User(props) {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  const data = useSelector((state) => state.listUserReducer.data);

  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchListUser());
  }, []);

  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",

      sorter: (a, b) => a.taiKhoan.length - b.taiKhoan.length,
      width: "10%",
    },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      sorter: (a, b) => a.hoTen.length - b.hoTen.length,
      width: "15%",
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
      width: "15%",
    },

    {
      title: "Số điện thoại",
      dataIndex: "soDt",
      sorter: (a, b) => a.soDt - b.soDt,
      width: "15%",
    },
    {
      title: "Loại",
      dataIndex: "maLoaiNguoiDung",
      sorter: (a, b) => a.maLoaiNguoiDung.length - b.maLoaiNguoiDung.length,
      width: "15%",
    },
    {
      title: "Hành động",
      dataIndex: "hanhDong",
      render: (text, item) => {
        return (
          <Fragment>
            <a className=" p-2 " href="/">
              <EditIcon color="secondary" />
            </a>
            <a href="/">
              <DeleteIcon color="error" />
            </a>
          </Fragment>
        );
      },

      width: "10%",
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div className="container text text-4xl  ">
      <h3>Quản lý người dùng</h3>
      <Button
        className="mb-3"
        onClick={() => {
          props.history.push("/dashboard/adduser");
        }}
      >
        Thêm người dùng
      </Button>
      <Search
        className="mb-3"
        placeholder="input search text"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
      />

      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}
