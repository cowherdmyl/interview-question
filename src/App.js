import React, { useState, useRef } from "react";
import TextWrapper from "./components/TextWrapper";
import First from "./components/First";
import Second from "./components/Second";
import { animate } from "framer-motion";
import { debounce } from "lodash";
import "./App.scss";
import logoIcon from "./assets/images/logo-white.svg";
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
  const scrollRef = useRef(null);

  const handleScroll =(e) => {
      // e.target 是滚动事件的目标元素
      console.log(e.target.scrollTop); // 打印当前滚动位置
    }

  const handleSetScrollSecond = debounce((num) => {
    const container = scrollRef.current;
    if (!container) return;
    // scrollRef.current.scrollTop = num; // 滚动到顶部
    animate(scrollRef.current.scrollTop, num, {
      duration: 2.5,
      ease: [0.33, 1, 0.68, 1], // 先快后慢的贝塞尔曲线
      onUpdate: (value) => {
        container.scrollTop = value;
      },
    });
  },200);
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };
  const handleClick = () => {
    document.querySelector(".hamburger-menu").classList.toggle("animate");
    handleToggle();
  };

  const handleMenuClick = (e) => {
    console.log("click ", e);
    // 你可以在这里根据 e.key 来区分不同的菜单项并执行相应的逻辑
    if (e.key === "0") {
      handleSetScrollSecond(0);
    }
    if (e.key === "1") {
      handleSetScrollSecond(2070);
    }
  };
  return (
    <Layout className="layout-style">
      <Header className="header-style">
        <img
          className="icon-left"
          src={logoIcon}
          alt="img"
        />
        <Col xs={0} sm={0} md={24} lg={22} xl={22}>
          {isVisible || (
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["0"]}
              items={menuItems}
              className="menu-style"
              onClick={handleMenuClick}
            />
          )}
        </Col>
        <div className="menu-wrapper" onClick={handleClick}>
          <div className="hamburger-menu"></div>
        </div>
      </Header>
      <Content
        ref={scrollRef}
        className="content-style"
        onScroll={handleScroll}
      >
        <First handleSetScrollSecond={handleSetScrollSecond} />
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
