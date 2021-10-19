import { Tabs } from "antd";
import { useParams } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actFetchCineManagement } from "./../../CinemaMagement/modules/actions";
import { actFetchCineName } from "./modules/actions";
import "antd/dist/antd.css";

const { TabPane } = Tabs;
export default function HomeMenu(props) {
  const changeTabPosition = (e) => {
    this.setState({ tabPosition: e.target.value });
  };
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cineManagementReducer.data);
  const data2 = useSelector((state) => state.cineNameReducer.data2);

  useEffect(() => {
    dispatch(actFetchCineManagement());
  }, []);

  const { id } = useParams;
  console.log(data2)
  useEffect(() => {
    dispatch(actFetchCineName(id));
  }, []);

  const [state] = useState({
    tabPosition: "left",
  });

  function renderLogoMovie() {
    return data?.map((item, index) => {
      return (
        <TabPane
          key={index}
          tab={
            <img
              key="1"
              src={item.logo}
              style={{ width: 50, height: 50 }}
              alt=""
            />
          }
        >
          <Tabs tabPosition={tabPosition}></Tabs>
        </TabPane>
      );
    });
  }
  const { tabPosition } = state;
  return (
    <div className="container">
      <Tabs tabPosition={tabPosition}>Content of Tab 1{renderLogoMovie()}</Tabs>
    </div>
  );
}
