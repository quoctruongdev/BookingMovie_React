import React, { useState } from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

export default function HomeMenu() {
  const [state] = useState({
    tabPosition: "left",
  });
  const { tabPosition } = state;

  return (

    
    <div className="container">
      <Tabs tabPosition={tabPosition}>
        <TabPane
          tab={
            <img
              src="./asset/img/iconMovie.png"
              style={{ width: 50, height: 50 }}
              alt=""
            />
          }
          key="1"
        >
          Content of Tab 1
        </TabPane>
        <TabPane
          tab={
            <img
              alt=""
              src="./asset/img/iconMovie.png"
              style={{ width: 50, height: 50 }}
            />
          }
          key="2"
        >
          Content of Tab 2
        </TabPane>
        <TabPane
          tab={
            <img
              alt=""
              src="./asset/img/iconMovie.png"
              style={{ width: 50, height: 50 }}
            />
          }
          key="3"
        >
          Content of Tab 3
        </TabPane>
      </Tabs>
    </div>
  );
}
