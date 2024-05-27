import React, { useRef, useEffect, useCallback, useState } from "react";
// import { motion, useAnimation } from "framer-motion";
import "./index.scss";

const ScrollList = ({ items, handleSetScrollSecond, setPercent }) => {
  const containerRef = useRef();
  const [cout, setCout] = useState(0);

  const handleScroll = useCallback(() => {
    // setScrollY(containerRef.current.scrollTop);

    const container = containerRef.current;

    console.log("scrollHeight:", container.scrollHeight);
    console.log("scrollTop:", container.scrollTop);
    console.log("clientHeight:", container.clientHeight);
    const percent =
      (container.scrollTop /
        (container.scrollHeight - container.clientHeight)) *
      100;
    setPercent(Math.round(percent));
    // 检查是否滚动到底部
    const isBottom =
      container.scrollHeight - container.scrollTop - container.clientHeight <=
      1;
    if (isBottom) {
      console.log("滚动到底部了");
      handleSetScrollSecond(2070);
      // 触发动画
      // controls.start({
      //   scale: 1.5,
      //   transition: { duration: 0.5 },
      // });
    } else {
      // 重置动画
      // controls.start({
      //   scale: 1,
      //   transition: { duration: 0.5 },
      // });
    }

    const containerTop = container.scrollTop;
    const containerHeight = container.offsetHeight;

    document.querySelectorAll(".textLine").forEach(function (line) {
      const lineTop = line.offsetTop - containerTop; // 计算行顶部相对于容器顶部的位置
      let fontSize = 26; // 基础字体大小

      if (lineTop < containerHeight / 2) {
        // 如果行位于容器上半部，根据距离顶部的远近动态增加字体大小
        fontSize += (containerHeight / 2 - lineTop) / 14; // 这里的25是调整因子，可以根据需要调整
      }

      // const opacity = Math.abs(containerTop - containerHeight / 2);

      line.style.fontSize = `${fontSize}px`;
      // line.style.opacity = opacity;
    });
  }, [handleSetScrollSecond, setPercent]);

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    if (cout === 0) {
      container.scrollTop = 1;
      setCout(cout + 1);
    }
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, cout]);

  return (
    <div
      className="scroll-wrapper"
      ref={containerRef}
      style={{ overflowY: "auto", height: "100%", position: "relative" }}
    >
      {/* {items.map((item, index) => (
        <ScrollListItem
          key={index}
          last={index === items.length - 1}
          index={index}
          scrollY={scrollY}
          containerRef={containerRef}
        >
          {item}
        </ScrollListItem>
      ))} */}

      {items.map((item, index) => {
        return (
          <div
            style={{
              width: "100%",
              height: 200,
              textAlign: "center",
              color: "#fff",
              fontWeight: "bold",
            }}
            key={index}
            className="textLine"
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default ScrollList;
