import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table, Input } from "antd";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { SearchOutlined } from "@ant-design/icons";
import { actFetchListMovie } from "../../Home/ListMoviePage/modules/actions";

export default function Film(props) {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  const data = useSelector((state) => state.listMovieReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchListMovie(props.history));
  }, []);

  const columns = [
    {
      title: "Mã Phim",
      dataIndex: "maPhim",

      sorter: (a, b) => a.maPhim - b.maPhim,
      // sortDrections: ["descen"],
      width: "10%",
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      sorter: (a, b) => a.tenPhim.length - b.tenPhim.length,
      width: "15%",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",

      render: (index, item) => {
        return (
          <Fragment>
            <img
              className="ml-2"
              src={item.hinhAnh}
              style={{ width: 50, height: 50 }}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://picsum.photos/id/${index}/50/50 `;
              }}
            />
          </Fragment>
        );
      },
      sortDrections: ["descend", "ascend"],

      width: "10%",
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",

      render: (text, item) => {
        return (
          <Fragment>
            {item.moTa.length > 100
              ? item.moTa.substr(0, 100) + "..."
              : item.moTa}
          </Fragment>
        );
      },
      //   sorter: (a, b) => a.tenPhim.length - b.tenPhim.length,
      sortDrections: ["descen"],
      // width: "40%",
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
      //   color=" secondary "
      //   sorter: (a, b) => a.hanhDong.length - b.hanhDong.length,
      width: "10%",
    },
  ];
  //   const data2 = data;

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div className="container text text-4xl  ">
      <h3>Quản lý phim</h3>
      <Button
        className="mb-5"
        onClick={() => {
          props.history.push("/dashboard/addnewfilm");
        }}
      >
        Thêm phim
      </Button>
      <Search
        className="mb-5"
        placeholder="input search text"
        enterButton={<SearchOutlined />}
        size="large"
        // suffix={suffix}
        onSearch={onSearch}
      />

      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        // className=" align-middle text-center"
      />
    </div>
  );
}
