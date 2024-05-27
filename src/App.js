import React, { useState, useRef } from "react";
import TextWrapper from "./components/TextWrapper";
import First from "./components/First";
import Second from "./components/Second";
import { animate } from "framer-motion";
import { debounce } from "lodash";
import "./App.scss";
import logoIcon from "./assets/images/logo-white.svg";
import { Layout, Menu, Col, Progress } from "antd";

const { Header, Content } = Layout;

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [percent, setPercent] = useState(0);
  const [menukey, setMenukey] = useState("0");
  const scrollRef = useRef(null);
  let lastScrollTop = 0; // 用于存储上一次滚动位置
  const menuItems = [
    {
      label: (
        <div className="label-style">
          <div>INTRODUCTION</div>
          <Progress
            className="progress0"
            showInfo={false}
            strokeColor="white"
            trailColor="#aaa"
            percent={percent}
            size="small"
            style={{
              position: "absolute",
              bottom: 0,
              display: menukey === "0" ? "block" : "none",
            }}
          />
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div className="label-style">
          <div>NAVIGATION ONE</div>
          <Progress
            className="progress1"
            showInfo={false}
            strokeColor="white"
            trailColor="#aaa"
            percent={menukey === "1" ? 100 : 0}
            size="small"
            style={{
              position: "absolute",
              bottom: 0,
              display: menukey === "1" ? "block" : "none",
            }}
          />
        </div>
      ),
      key: "1",
    },
  ];

  const handleScroll = debounce((e) => {
    // e.target 是滚动事件的目标元素
    // console.log(e.target.scrollTop); // 打印当前滚动位置
    // 获取当前滚动位置
    const container = scrollRef.current;
    if (!container) return;
    console.log("currentScrollTop:", container.scrollTop);
    console.log("container.scrollHeight:", container.scrollHeight);
    if (container.scrollTop > lastScrollTop) {
      // 向上滚动
      console.log("Scrolling UP");
      if (container.scrollTop > 10) {
        handleSetScrollSecond(container.scrollHeight - container.clientHeight);
      }
    } else {
      // 向下滚动
      console.log("Scrolling Down");
      if (
        container.scrollHeight - container.clientHeight - container.scrollTop >
        10
      ) {
        handleSetScrollSecond(0);
      }
    }
    lastScrollTop = container.scrollTop;

    if (container.scrollTop === 0) {
      setMenukey('0')
    }
  }, 50);

  const handleSetScrollSecond = debounce((num) => {
    if (num === 2070) {
      setMenukey("1");
    }
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
  }, 0);
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };
  const handleClick = () => {
    document.querySelector(".hamburger-menu").classList.toggle("animate");
    handleToggle();
  };

  const handleMenuClick = (e) => {
    console.log("click ", e);
    setMenukey(e.key);
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
        <img className="icon-left" src={logoIcon} alt="img" />
        <Col xs={0} sm={0} md={24} lg={22} xl={22}>
          {isVisible || (
            <Menu
              mode="horizontal"
              defaultSelectedKeys={[menukey]}
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
        <First
          handleSetScrollSecond={handleSetScrollSecond}
          setPercent={setPercent}
        />
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
