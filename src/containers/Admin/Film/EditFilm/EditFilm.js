import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useFormik } from "formik";
import { Form, Input, DatePicker, InputNumber, Switch } from "antd";
import { actFetchEditMovie } from "./modules/actions";
import Loader from "./../../../../components/Loader/";
import { actFetchUpdateMovie } from "./update/modules/actions";
import { Typography } from "antd";

const { Title } = Typography;

export default function EditFilm(props) {
  const error2 = useSelector((state) => state.updateMovieReducer.error2);
  const data2 = useSelector((state) => state.updateMovieReducer.data2);

  const data = useSelector((state) => state.editMovieReducer.data);
  const loading = useSelector((state) => state.editMovieReducer.loading);
  const [imgstate, setimgState] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const id = props.match.params.id;
    dispatch(actFetchEditMovie(id));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: data?.maPhim,
      tenPhim: data?.tenPhim,
      trailer: data?.trailer,
      moTa: data?.moTa,
      ngayKhoiChieu: data?.ngayKhoiChieu,
      dangChieu: data?.dangChieu,
      sapChieu: data?.sapChieu,
      hot: data?.hot,
      danhGia: data?.danhGia,
      hinhAnh: null,
      maNhom: "GP11",
    },
    onSubmit: (values) => {
      let formData = new FormData();
      console.log(formData);

      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
          console.log(formData);
        } else {
          if (values.hinhAnh !== null) {
            formData.append("File", values.hinhAnh, values.hinhAnh.name);
            console.log(formData);
          }
        }
      }
      dispatch(actFetchUpdateMovie(formData, props.history));
    },
  });

  const handlechangeDatePicker = (value) => {
    let ngayKhoiChieu = moment(value);
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };

  const handleChangSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };
  const handleChangReview = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };
  const handleOnchangeFile = async (e) => {
    let file = e.target.files[0];

    if (
      file.type === "image/png" ||
      file.type === "image/jpeg" ||
      file.type === "image/gif" ||
      file.type === "image/ipg"
    ) {
      await formik.setFieldValue("hinhAnh", file);
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setimgState(e.target.result);
      };
    }
  };

  if (loading) return <Loader />;
  const renderNotice = () => {
    if (error2 && data2) {
      return (
        <div className="alert alert-danger">
          {error2?.response?.data2?.content}
        </div>
      );
    }
  };

  return (
    <>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
        <Title level={3}>Th??m phim m???i</Title>
        {renderNotice()}
        <Form.Item label="T??n phim">
          <Input
            name="tenPhim"
            onChange={formik.handleChange}
            value={formik.values.tenPhim}
          />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input
            name="trailer"
            onChange={formik.handleChange}
            value={formik.values.trailer}
          />
        </Form.Item>
        <Form.Item label="M?? t???">
          <Input
            name="moTa"
            onChange={formik.handleChange}
            value={formik.values.moTa}
          />
        </Form.Item>
        <Form.Item label="Ng??y kh???i chi???u">
          <DatePicker
            onChange={handlechangeDatePicker}
            format="DD/MM/YYYY"
            value={moment(formik.values.ngayKhoiChieu)}
          />
        </Form.Item>
        <Form.Item label="??ang chi???u" valuePropName="checked">
          <Switch
            onChange={handleChangSwitch}
            defaultChecked={formik.values.dangChieu}
          />
        </Form.Item>
        <Form.Item label="S???p chi???u" valuePropName="checked">
          <Switch
            onChange={handleChangSwitch}
            defaultChecked={formik.values.sapChieu}
          />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch
            onChange={handleChangSwitch}
            defaultChecked={formik.values.hot}
          />
        </Form.Item>
        <Form.Item label="????nh gi?? (sao)">
          <InputNumber
            onChange={handleChangReview("danhGia")}
            value={formik.values.danhGia}
            min={1}
            max={10}
          />
        </Form.Item>
        <Form.Item label="H??nh ???nh">
          <input
            onChange={handleOnchangeFile}
            type="file"
            accept=" image/png, image/jpeg, image/jpg, image/gif "
          />
          <br />
          <img
            src={imgstate === "" ? data?.hinhAnh : imgstate}
            style={{ width: 150, height: 150 }}
            alt="..."
          />
        </Form.Item>

        <Form.Item>
          <button
            className=" bg-indigo-800 p-2 rounded text-white ml-48  "
            type="submit"
          >
            C???p nh???t
          </button>
        </Form.Item>
      </Form>
    </>
  );
}
