import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Select } from "antd";
import { actFetchEditUser } from "./_modules/actions";
import Loader from "./../../../../components/Loader/";
import { actFetchUpdateUser } from "./Update/actions";
import { Typography } from "antd";

export default function EditUser(props) {
  const { Title } = Typography;
  const loading = useSelector((state) => state.editUserReducer.loading);
  const data = useSelector((state) => state.editUserReducer.data);

  const data2 = useSelector((state) => state.updateUserReducer.data2);
  const error2 = useSelector((state) => state.updateUserReducer.error2);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    taiKhoan: data?.taiKhoan,
    matKhau: data?.matKhau,
    hoTen: data?.hoTen,
    email: data?.email,
    soDT: data?.soDT,
    maNhom: "GP11",
    maLoaiNguoiDung: data?.maLoaiNguoiDung,
  });
  useEffect(() => {
    const id = props.match.params.id;
    dispatch(actFetchEditUser(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [0]);

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    dispatch(actFetchUpdateUser(state, props.history));
  };

  const renderNotice = () => {
    if (loading) return <Loader />;
    if (!error2 && data2) {
      return (
        <div className="alert alert-success">
          Bạn đã thêm tài khoản thành công
        </div>
      );
    }
    return (
      error2 && (
        <div className="alert alert-danger">
          {error2?.response?.data2?.content}
        </div>
      )
    );
  };

  return (
    <>
      <Form
        onSubmitCapture={handleUpdateUser}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
        <Title className="text-center" level={3}>
          Cập nhật người dùng
        </Title>

        {renderNotice()}
        <Form.Item label="Tài khoản">
          <Input
            name="taiKhoan"
            onChange={handleOnchange}
            defaultValue={data?.taiKhoan}
            readOnly="true"
          />
        </Form.Item>
        <Form.Item label="Mật khẩu">
          <Input
            type="password"
            name="matKhau"
            onChange={handleOnchange}
            defaultValue={data?.matKhau}
            readOnly="true"
          />
        </Form.Item>
        <Form.Item label="Họ Tên">
          <Input
            name="hoTen"
            onChange={handleOnchange}
            defaultValue={data?.hoTen}
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input
            name="email"
            onChange={handleOnchange}
            defaultValue={data?.email}
          />
        </Form.Item>
        <Form.Item label="Số điện thoại">
          <Input
            name="soDt"
            onChange={handleOnchange}
            defaultValue={data?.soDT}
          />
        </Form.Item>
        <Form.Item label="Mã người dùng">
          <Select defaultValue={data?.maLoaiNguoiDung}>
            <Select.Option value="QuanTri">Quản trị</Select.Option>
            <Select.Option value="KhachHang">Khách hàng</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <button
            className=" bg-indigo-800 p-2 text-white ml-48  rounded  "
            type="submit"
          >
            Cập nhật
          </button>
        </Form.Item>
      </Form>
    </>
  );
}
