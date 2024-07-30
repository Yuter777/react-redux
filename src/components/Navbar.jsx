import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  HomeOutlined,
  InfoCircleOutlined,
  UserOutlined,
  LoginOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
  SettingOutlined,
} from "@ant-design/icons";

function Navbar({ isLoggedIn }) {
  const menuItems = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: "about",
      icon: <InfoCircleOutlined />,
      label: <Link to="/about">About</Link>,
    },
    ...(isLoggedIn
      ? [
          {
            key: "students",
            icon: <UsergroupAddOutlined />,
            label: <Link to="/students">Students</Link>,
          },
          {
            key: "teachers",
            icon: <TeamOutlined />,
            label: <Link to="/teachers">Teachers</Link>,
          },
          {
            key: "admin",
            icon: <SettingOutlined />,
            label: <Link to="/admin">Admin Panel</Link>,
          },
        ]
      : []),
    {
      key: "user",
      icon: <UserOutlined />,
      label: <Link to="/user">User</Link>,
    },
    ...(!isLoggedIn
      ? [
          {
            key: "login",
            icon: <LoginOutlined />,
            label: <Link to="/login">Login</Link>,
          },
        ]
      : []),
  ];

  return <Menu theme="dark" mode="inline" items={menuItems} />;
}

export default Navbar;
