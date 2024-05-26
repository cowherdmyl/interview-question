import React from 'react'
import './index.scss'
import { Menu, Progress } from 'antd'

function Menus(props) {
  const { handleToggle } = props
  const handleClick = () => {
    console.log('click')
    document.querySelector('.hamburger-menu').classList.toggle('animate')
    handleToggle()
  }
  const handleExpandIcon = (props) => {
    console.log('props')
    return <div>jkljlkjkljlk</div>
  }

  const menuItems = [
    {
      label: (
        <div>
          INTRODUCTION
          <Progress percent={30} size="small" />
        </div>
      ),
      key: '0',
      // 你还可以在这里添加子菜单（subMenu）或图标（icon）等
    },
    {
      label: 'NAVIGATION ONE',
      key: '1',
      // 更多配置
    },
  ]
  return (
    <div className="menu-content">
      <img
        className="icon-left"
        src="http://www.feedmusic.com/images/logo-white.svg"
      />
      <div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['0']}
          expandIcon={handleExpandIcon}
          items={menuItems}
        />
      </div>
      <div className="menu-wrapper" onClick={handleClick}>
        <div className="hamburger-menu"></div>
      </div>
    </div>
  )
}

export default Menus
