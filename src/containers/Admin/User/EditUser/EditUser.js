import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Select } from "antd";
// import { actAddUser } from "./modules/actions";
// import Loader from "./../../../../components/Loader/";

export default function EditUser() {
  // const data = useSelector((state) => state.addUserReducer.data);
  // const loading = useSelector((state) => state.addUserReducer.loading);
  // const error = useSelector((state) => state.addUserReducer.error);
  // const dispatch = useDispatch();

  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    email: "",
    soDt: "",
    maNhom: "GP11",
    maLoaiNguoiDung: "",
  });

  console.log("object", state);
  return (
    <>
      <Form
        // onSubmitCapture={handleAddUser}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
        <h3 className=" text-center">Cập nhật người dùng</h3>
        <Form.Item label="Tài khoản">
          <Input name="taiKhoan" />
        </Form.Item>
        <Form.Item label="Mật khẩu">
          <Input name="matKhau" />
        </Form.Item>
        <Form.Item label="Họ Tên">
          <Input name="hoTen" />
        </Form.Item>
        <Form.Item label="Email">
          <Input name="email" />
        </Form.Item>
        <Form.Item label="Số điện thoại">
          <Input name="soDt" />
        </Form.Item>
        <Form.Item label="Mã người dùng">
          <Select placeholder="Chọn loại người dùng">
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
