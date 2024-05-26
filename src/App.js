import React, { useState } from "react";
import TextWrapper from "./components/TextWrapper";
import First from "./components/First";
import Second from "./components/Second";
import "./App.scss";

import { Layout, Menu, Col } from "antd";
const { Header, Content } = Layout;
const menuItems = [
  {
    label: (
      <div className="label-style">
        INTRODUCTION
        {/* <Progress percent={30} size="small" /> */}
      </div>
    ),
    key: "0",
  },
  {
    label: (
      <div className="label-style">
        NAVIGATION ONE
        {/* <Progress percent={30} size="small" /> */}
      </div>
    ),
    key: "1",
  },
];

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };
  const handleClick = () => {
    document.querySelector(".hamburger-menu").classList.toggle("animate");
    handleToggle();
  };
  return (
    <Layout className="layout-style">
      <Header className="header-style">
        <img
          className="icon-left"
          src="http://www.feedmusic.com/images/logo-white.svg"
        />
        <Col xs={0} sm={0} md={24} lg={22} xl={22}>
          {isVisible || (
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["0"]}
              items={menuItems}
              className="menu-style"
            />
          )}
        </Col>
        <div className="menu-wrapper" onClick={handleClick}>
          <div className="hamburger-menu"></div>
        </div>
      </Header>
      <Content className="content-style">
        <First />
        <div style={{ width: "100%", height: "30%" }}></div>
        <div
          style={{
            width: "100%",
            height: "30%",
            background: "rgb(50, 13, 127)",
          }}
        ></div>
        <Second />
      </Content>
      <TextWrapper isVisible={isVisible} handleToggle={handleToggle} />
    </Layout>
  );
}

export default App;
