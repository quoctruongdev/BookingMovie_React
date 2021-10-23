import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import moment from "moment";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";
import { actAddUser } from "./modules/actions";

export default function AddUser(props) {
  const [componentSize, setComponentSize] = useState("default");
  const dispatch = useDispatch();

  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    email: "",
    soDt: "",
    maNhom: "GP10",
    maLoaiNguoiDung: "KhachHang",
  });

  const handleAddUser = (e) => {
    e.preventDefault();
    dispatch(actAddUser(state));
  };
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  console.log("object", state);
  return (
    <>
      <Form
        onSubmitCapture={handleAddUser}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        // onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <h3>Thêm người dùng</h3>
        <Form.Item label="Tài khoản">
          <Input name="taiKhoan" onChange={handleOnchange} />
        </Form.Item>
        <Form.Item label="Mật khẩu">
          <Input name="matKhau" onChange={handleOnchange} />
        </Form.Item>
        <Form.Item label="Họ Tên">
          <Input name="hoTen" onChange={handleOnchange} />
        </Form.Item>
        <Form.Item label="Email">
          <Input name="email" onChange={handleOnchange} />
        </Form.Item>
        <Form.Item label="Số điện thoại">
          <Input name="soDt" onChange={handleOnchange} />
        </Form.Item>
        <Form.Item label="Mã người dùng">
          <Input name="maLoaiNguoiDung" onChange={handleOnchange} />
        </Form.Item>

        <Form.Item>
          <button
            className=" bg-indigo-800 p-2 text-white ml-48  "
            type="submit"
          >
            Thêm người dùng
          </button>
        </Form.Item>
      </Form>
    </>
  );
}
