// import React from "react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
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
import { actAddMovie } from "./modules/actions";

export default function AdNewFilm() {
  const [componentSize, setComponentSize] = useState("default");
  const dispatch = useDispatch();

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const [imgstate, setimgState] = useState("");

  const [state, setState] = useState(
    {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: "",
      hinhAnh: {},
      maNhom: "GP10",
    }
    // {
    //   onSubmit: (value) => {
    //     console.log("value", value);
    //   },
    // }
  );

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    console.log("Value", value);
    setState({
      ...state,
      [name]: value,
    });
  };
  const handlechangeDatePicker = (value) => {
    let ngayKhoiChieu = moment(value).format("DD/MM/YY");
    setState({
      ...state,
      ngayKhoiChieu,
    });
  };

  const handleChangeReview = (value) => {
    setState({
      ...state,
      danhGia: value,
    });
  };
  const handleChangeDangChieu = () => {
    setState({
      ...state,
      dangChieu: true,
    });
  };
  const handleChangeSapChieu = () => {
    setState({
      ...state,
      sapChieu: true,
    });
  };
  const handleChangeHot = () => {
    setState({
      ...state,
      hot: true,
    });
  };

  const handleOnchangeFile = (e) => {
    let file = e.target.files[0];

    if (
      file.type === "image/png" ||
      file.type === "image/jpeg" ||
      file.type === "image/gif"
    ) {
      // console.log("object", file);
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setimgState(e.target.result);
      };
    }
    setState({
      ...state,
      hinhAnh: file,
    });
  };

  const handleMovie = (e) => {
    // e.preventDefault();
    dispatch(actAddMovie(state));
  };

  console.log("object", state);

  return (
    <>
      <Form
        onSubmitCapture={handleMovie}
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
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <h3>Thêm phim mới</h3>
        <Form.Item label="Kích thước" name="size">
          <Radio.Group>
            <Radio.Button value="small">Nhỏ</Radio.Button>
            <Radio.Button value="default">Vừa</Radio.Button>
            <Radio.Button value="large">Lớn</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tên phim">
          <Input name="tenPhim" onChange={handleOnchange} />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input name="trailer" onChange={handleOnchange} />
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input name="moTa" onChange={handleOnchange} />
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
          <DatePicker format="DD/MM/YY" onChange={handlechangeDatePicker} />
        </Form.Item>
        <Form.Item label="Đang chiếu" valuePropName="checked">
          <Switch onChange={handleChangeDangChieu} />
        </Form.Item>
        <Form.Item label="Sắp chiếu" valuePropName="checked">
          <Switch onChange={handleChangeSapChieu} />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch onChange={handleChangeHot} />
        </Form.Item>
        <Form.Item label="Đánh giá (sao)">
          <InputNumber min={1} max={10} onChange={handleChangeReview} />
        </Form.Item>
        <Form.Item label="Hình ảnh">
          <input type="file" onChange={handleOnchangeFile} />
          <br />
          <img
            src={imgstate}
            style={{ width: 150, height: 150 }}
            alt="..."
            accept={" image/png, image/jpeg, image/jpg, image/gif "}
          />
        </Form.Item>

        <Form.Item>
          <button
            className=" bg-indigo-800 p-2 text-white ml-48  "
            type="submit"
          >
            Thêm phim
          </button>
        </Form.Item>
      </Form>
    </>
  );
}
